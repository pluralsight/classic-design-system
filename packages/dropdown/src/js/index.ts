import {
  Children,
  Ref,
  HTMLAttributes,
  createContext,
  useEffect,
  useImperativeHandle,
  useLayoutEffect,
  useMemo,
  useRef,
  useState
} from 'react'
import { canUseDOM } from 'exenv'
import { uniqueId, ValueOf } from '@pluralsight/ps-design-system-util'

import * as vars from '../vars'

interface DropdownContextValue {
  activeValue?: number | string
  menuId?: string
  selectedValue?: number | string
}
export const DropdownContext = createContext<DropdownContextValue>({
  selectedValue: ''
})

interface UseDropdownProps
  extends Omit<HTMLAttributes<HTMLButtonElement>, 'onChange'> {
  appearance?: ValueOf<typeof vars.appearances>
  disabled?: boolean
  className?: string
  error?: boolean
  label?: React.ReactNode
  menu?: React.ReactNode
  onChange?: (e: React.MouseEvent, v: React.ReactText) => void
  onClick?: (e: React.MouseEvent) => void
  placeholder?: string
  size?: ValueOf<typeof vars.sizes>
  style?: React.CSSProperties
  subLabel?: React.ReactNode
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
  const labelId = useMemo(() => uniqueId('dropdown-label-'), [])
  const menuId = useMemo(() => uniqueId('dropdown-menu-'), [])

  const items = useMemo(() => parseMenuChildren(menuId, hook.menu), [hook.menu])
  const itemMatchingValueIndex = items.findIndex(
    item => item.value === hook.value
  )
  const itemMatchingValue = items[itemMatchingValueIndex]
  const [activeIndex, setActiveIndex] = useState(
    itemMatchingValueIndex > -1 ? itemMatchingValueIndex : 0
  )

  // TODO: derive?
  const [selectedLabel, setSelectedLabel] = useState(
    itemMatchingValue ? itemMatchingValue.label : null
  )
  const [selectedValue, setSelectedValue] = useState(hook.value)

  // TODO: ensure that when value changes, all the new index stuff updates too
  useEffect(() => {
    const newLabel = itemMatchingValue?.label
    const newValue = hook.value
    console.log('useEffect', { newLabel, newValue })
    setSelectedLabel(newLabel)
    setSelectedValue(newValue)
    // TODO: verify don't have to refind/setActiveItemId because itemMatchingValue was regen'ed
    /* setSelectedItemId(newValue || newLabel) */
  }, [itemMatchingValue, hook.value])

  function handleButtonEvent(evt: React.MouseEvent | React.KeyboardEvent) {
    if (
      evt.type === 'click' ||
      (evt.type === 'keydown' && (evt.key === ' ' || evt.key === 'Enter'))
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

    console.log('input key', { isOpen, target: evt.target, key: evt.key })
    if (isOpen) {
      if (evt.key === 'ArrowDown') {
        setActiveIndex(activeIndex < items.length - 1 ? activeIndex + 1 : 0)
      } else if (evt.key === 'ArrowUp') {
        setActiveIndex(activeIndex > 0 ? activeIndex - 1 : 0)
      } else if (evt.key === 'Enter' || evt.key === ' ') {
        setSelectedValue(items[activeIndex]?.value)
        setSelectedLabel(items[activeIndex]?.label)
        setOpen(false)
        buttonRef.current?.focus()
      }
    } else {
      if (evt.key === 'ArrowDown' || evt.key === ' ') {
        setOpen(true)
      }
    }
  }

  function handleMenuChange(evt: React.MouseEvent, value?: React.ReactText) {
    console.log('menu change', { value, target: evt.target })
    const innerText = (evt.currentTarget as HTMLElement).innerText
    const newLabel = value === innerText ? value : innerText
    setSelectedValue(value)
    setSelectedLabel(newLabel)
    setOpen(false)
    if (typeof hook.onChange === 'function') hook.onChange(evt, value)
    if (buttonRef.current) {
      buttonRef.current.focus()
    }
  }

  // TODO: move to top-level function
  function getLongestMenuLabelState() {
    const getMenuItems = (menu: React.ReactElement) =>
      Array.isArray(menu)
        ? menu
        : menu
        ? Children.toArray(menu.props.children)
        : []
    const getNestedMenu = item => item && item.props.nested
    const hasIcon = item => item && !!item.props.icon
    const getLabel = (item): string =>
      // NOTE: only works if it's a string -- are there valid cases where actionMenuItem child is not a string
      (Children.toArray(item.props.children)[0] as string) || ''
    const getState = item => ({
      hasIcon: hasIcon(item),
      label: getLabel(item)
    })
    const itemIsLonger = (state, item) =>
      getLabel(item).length > state.label.length
    const newStateIsLonger = (oldState, newState) =>
      newState.label.length > oldState.label.length

    const getLongestState = (startLongest, menu) => {
      return getMenuItems(menu).reduce((currentLongest, item) => {
        const nested = getNestedMenu(item)
        if (nested) {
          const nestedLongest = getLongestState(currentLongest, nested)
          const newLongest = itemIsLonger(nestedLongest, item)
            ? getState(item)
            : nestedLongest
          return newStateIsLonger(currentLongest, newLongest)
            ? newLongest
            : currentLongest
        } else {
          return itemIsLonger(currentLongest, item)
            ? getState(item)
            : currentLongest
        }
      }, startLongest)
    }

    return getLongestState(
      { hasIcon: false, label: hook.placeholder || '' },
      hook.menu
    )
  }

  const longestMenuItemState = getLongestMenuLabelState()
  const [width, setWidth] = useState<React.ReactText>('auto')

  const buttonRef = useRef<HTMLButtonElement>()
  useImperativeHandle(forwardedRef, () => buttonRef.current)

  useLayoutEffect(() => {
    if (!buttonRef.current) return

    setWidth(buttonRef.current.getBoundingClientRect().width)
  }, [])

  const inputRef = useRef<HTMLInputElement>()

  const inNode = canUseDOM ? document.body : null
  const [menuPosition, setMenuPosition] = useState({ left: 0, top: 0 })

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
      activeItemId: items[activeIndex]?.id,
      isOpen,
      labelId,
      onKeyDown: handleInputKeyDown,
      menuId,
      ref: inputRef,
      selectedLabel,
      selectedValue
    },
    label: {
      ...rest.label,
      labelId
    },
    layout: rest.layout,
    menu: {
      ...rest.menu,
      inNode,
      isOpen,
      menuId,
      menuPosition,
      onClick: handleMenuChange,
      onClose: () => {
        setOpen(false)
      },
      width
    },
    selected: {
      ...rest.selected,
      label: longestMenuItemState.label,
      selectedLabel
    },
    subLabel: rest.subLabel,
    value: {
      value: {
        activeValue: items[activeIndex]?.value,
        menuId,
        selectedValue
      }
    }
  }
}

interface ItemData {
  id: string
  label: string
  value?: string | number
}

const parseMenuChildren = (menuId: string, menu?): ItemData[] => {
  if (!menu) return []

  const items = Array.isArray(menu)
    ? menu
    : Children.toArray(menu.props.children)

  return items.map(item => ({
    id: formatItemId(menuId, item.props.value, item.props.children),
    label: item.props.children,
    value: item.props.value
  }))
}

export function formatItemId(
  menuId: string,
  value?: string | number,
  label?: string
) {
  if (!value && !label) return

  const formattedLabel =
    typeof label === 'string'
      ? label.toString().replace(' ', '')
      : 'unknownItemLabel'
  return `${menuId}-${value || formattedLabel}`
}
