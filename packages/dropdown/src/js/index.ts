import {
  Children,
  ReactElement,
  ReactNode,
  ReactText,
  Ref,
  createContext,
  useEffect,
  useImperativeHandle,
  useMemo,
  useRef,
  useState
} from 'react'
import {
  canUseDOM,
  uniqueId as defaultUniqueId,
  ValueOf,
  HTMLPropsFor
} from '@pluralsight/ps-design-system-util'
import innerText from 'react-innertext'

import * as vars from '../vars'

interface DropdownContextValue {
  activeItem?: ItemData
  onDocumentEvents: (evt: Event) => void
  onMenuClick: (evt: React.MouseEvent, value?: number | string) => void
  menuId: string
  selectedItem?: ItemData
}
export const DropdownContext = createContext<DropdownContextValue>({
  menuId: 'placeholder',
  onDocumentEvents: _evt => {},
  onMenuClick: (_evt, _value) => {}
})

interface UseDropdownProps extends Omit<HTMLPropsFor<'button'>, 'onChange'> {
  appearance?: ValueOf<typeof vars.appearances>
  disabled?: boolean
  className?: string
  error?: boolean
  label?: ReactNode
  menu?: ReactElement | ReactElement[]
  onChange?: (
    evt: React.MouseEvent | React.KeyboardEvent,
    value?: React.ReactText
  ) => void
  onClick?: (e: React.MouseEvent | React.KeyboardEvent) => void
  placeholder?: string
  size?: ValueOf<typeof vars.sizes>
  style?: React.CSSProperties
  subLabel?: ReactNode
  uniqueId?: (prefix: string) => string
  value?: number | string
}

const sortDropdownProps = ({
  appearance,
  disabled,
  className,
  error,
  label,
  menu,
  onChange,
  onClick,
  placeholder,
  size,
  subLabel,
  style,
  uniqueId,
  value,
  ...rest
}: UseDropdownProps) => ({
  button: {
    appearance,
    disabled,
    error,
    size,
    ...rest
  },
  hook: {
    menu,
    value,
    onChange,
    onClick,
    placeholder
  },
  input: {
    disabled
  },
  label: {
    label
  },
  layout: {
    className,
    disabled,
    style
  },
  menu: {
    menu
  },
  selected: {
    appearance,
    placeholder,
    size
  },
  subLabel: {
    subLabel
  }
})

// TODO: move to react folder? Uses React APIs.
export const useDropdown = (
  props: UseDropdownProps,
  forwardedRef: Ref<HTMLButtonElement>
) => {
  const { hook, ...rest } = sortDropdownProps(props)
  const [isOpen, setOpen] = useState(false)
  const uniqueId = props.uniqueId || defaultUniqueId
  const inputId = useMemo(() => uniqueId('dropdown-input-'), [])
  const menuId = useMemo(() => uniqueId('dropdown-menu-'), [])

  const items = useMemo(() => parseMenuChildren(menuId, hook.menu), [
    menuId,
    hook.menu
  ])

  const itemMatchingValueIndex = findIndexMatchingValueOrLabel(
    items,
    hook.value,
    hook.value
  )
  const itemMatchingValue = items[itemMatchingValueIndex]
  const [activeIndex, setActiveIndex] = useState(
    itemMatchingValueIndex > -1 ? itemMatchingValueIndex : 0
  )

  const [selectedItem, setSelectedItem] = useState(itemMatchingValue)

  useEffect(() => {
    setSelectedItem(itemMatchingValue)
  }, [itemMatchingValue])

  useEffect(() => {
    function handleEscape(evt: KeyboardEvent) {
      if (evt.key === 'Escape') {
        setOpen(false)
        setActiveIndex(itemMatchingValueIndex > -1 ? itemMatchingValueIndex : 0)
        buttonRef.current?.focus()
      }
    }

    if (canUseDOM() && isOpen) {
      document.addEventListener('keydown', handleEscape, false)

      return () => {
        document.removeEventListener('keydown', handleEscape, false)
      }
    }
  }, [itemMatchingValueIndex, isOpen])

  function handleButtonEvent(evt: React.MouseEvent | React.KeyboardEvent) {
    if (
      evt.type === 'click' ||
      (evt.type === 'keydown' &&
        'key' in evt &&
        (evt.key === ' ' || evt.key === 'Enter' || evt.key === 'ArrowDown'))
    ) {
      evt.preventDefault()
      evt.stopPropagation()

      const newOpen = !isOpen
      setOpen(newOpen)
      if (newOpen && inputRef.current) {
        inputRef.current.focus()
      }
      if (typeof hook.onClick === 'function') hook.onClick(evt)
    }
  }

  function handleInputKeyDown(evt: React.KeyboardEvent) {
    evt.preventDefault()
    evt.stopPropagation()

    if (isOpen) {
      if (evt.key === 'ArrowDown') {
        const newActiveIndex =
          activeIndex < items.length - 1 ? activeIndex + 1 : 0
        setActiveIndex(newActiveIndex)
      } else if (evt.key === 'ArrowUp') {
        setActiveIndex(activeIndex > 0 ? activeIndex - 1 : 0)
      } else if (evt.key === 'Enter' || evt.key === ' ') {
        setSelectedItem(items[activeIndex])
        setOpen(false)
        if (typeof hook.onChange === 'function') {
          hook.onChange(evt, items[activeIndex].value)
        }
        buttonRef.current?.focus()
      }
    } else {
      if (evt.key === 'ArrowDown' || evt.key === ' ') {
        setOpen(true)
      }
    }
  }

  function handleMenuItemClick(
    evt: React.MouseEvent,
    itemValue?: React.ReactText
  ) {
    setSelectedItem(findItemMatchingValueOrLabel(items, itemValue, itemValue))
    setOpen(false)
    if (typeof hook.onChange === 'function') hook.onChange(evt, itemValue)
    if (buttonRef.current) {
      buttonRef.current.focus()
    }
  }

  const longestLabel = getLongestMenuLabel(items, hook.placeholder)

  const buttonRef = useRef<HTMLButtonElement>(null)
  useImperativeHandle(
    forwardedRef,
    () => (buttonRef.current as unknown) as HTMLButtonElement
  )

  const inputRef = useRef<HTMLInputElement>(null)

  const inNode = canUseDOM() ? document.body : undefined
  const [menuPosition, setMenuPosition] = useState({
    left: 0,
    top: 0,
    width: 0
  })

  return {
    button: {
      ...rest.button,
      ref: buttonRef,
      isOpen,
      onClick: handleButtonEvent,
      onKeyDown: handleButtonEvent,
      setMenuPosition
    },
    input: {
      ...rest.input,
      // TODO: replace with activeItem
      activeItemId: items[activeIndex]?.id,
      isOpen,
      inputId,
      onKeyDown: handleInputKeyDown,
      menuId,
      ref: inputRef,
      selectedItem
    },
    label: {
      ...rest.label,
      inputId
    },
    layout: rest.layout,
    menu: {
      ...rest.menu,
      inNode,
      isOpen,
      menuId,
      menuPosition,
      buttonRef
    },
    selected: {
      ...rest.selected,
      label: longestLabel,
      selectedItem
    },
    subLabel: rest.subLabel,
    value: {
      value: {
        activeItem: items[activeIndex],
        onDocumentEvents: (_evt: Event) => {
          setOpen(false)
        },
        onMenuClick: handleMenuItemClick,
        menuId,
        selectedItem
      }
    }
  }
}

function findIndexMatchingValueOrLabel(
  items: ItemData[],
  label?: ReactText,
  value?: ReactText
): number {
  return items.findIndex(
    item =>
      (typeof item.value !== 'undefined' && item.value === value) ||
      item.label === label
  )
}

function findItemMatchingValueOrLabel(
  items: ItemData[],
  label?: ReactText,
  value?: ReactText
) {
  const index = findIndexMatchingValueOrLabel(items, label, value)
  return items[index]
}

export interface ItemData {
  id: string
  label: string
  value?: string | number
}

export const parseMenuChildren = (
  menuId: string,
  menu?: ReactElement | ReactElement[]
): ItemData[] => {
  if (!menu) return []

  function parseItem(item: ReactElement) {
    return innerText(item) !== ''
      ? {
          id: formatItemId(menuId, item.props.children, item.props.value),
          label: item.props.children,
          value: item.props.value
        }
      : undefined
  }

  if (Array.isArray(menu)) {
    return menu.map(parseItem).filter(Boolean) as ItemData[]
  } else {
    if (Children.count(menu.props.children) <= 0) return []
    else return Children.map(menu.props.children, parseItem)
  }
}

export const formatItemId = (
  menuId: string,
  label: string,
  value?: ReactText
): string => {
  return `${menuId}-${value || label.toString().replace(/ /g, '')}`
}

export const getLongestMenuLabel = (
  items: Pick<ItemData, 'label'>[],
  placeholder?: string
) => {
  return items.reduce((currentLongest, item) => {
    return item.label?.length > currentLongest.length
      ? item.label
      : currentLongest
  }, placeholder || '')
}
