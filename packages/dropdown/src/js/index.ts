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
import {
  useUniqueId,
  useMenuRef,
  ValueOf
} from '@pluralsight/ps-design-system-util'

import * as vars from '../vars'

interface DropdownContextValue {
  selectedItemId?: string
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

export const useDropdown = (
  props: UseDropdownProps,
  forwardedRef: Ref<HTMLButtonElement>
) => {
  const { hook, ...rest } = sortDropdownProps(props)
  const [isOpen, setOpen] = useState(false)

  const itemMatchingValue = useMemo(() => {
    return findMatchingActionMenuItem(hook.menu, hook.value)
  }, [hook.menu, hook.value])

  const [selectedLabel, setSelectedLabel] = useState(
    itemMatchingValue ? itemMatchingValue.props.children : null
  )
  const [selectedValue, setSelectedValue] = useState(hook.value)

  const labelId = useUniqueId('dropdown-label-')
  const menuId = useUniqueId('dropdown-menu-')
  const [selectedItemId, setSelectedItemId] = useState(
    selectedValue || selectedLabel
      ? `${menuId}${selectedValue || selectedLabel}`
      : undefined
  )

  useEffect(() => {
    const newLabel = itemMatchingValue ? itemMatchingValue.props.children : null
    const newValue = hook.value
    setSelectedLabel(newLabel)
    setSelectedValue(newValue)
    setSelectedItemId(newValue || newLabel)
  }, [itemMatchingValue, hook.value])

  function handleToggleOpen(evt) {
    evt.preventDefault()
    evt.stopPropagation()
    const newOpen = !isOpen
    setOpen(newOpen)
    if (typeof hook.onClick === 'function') hook.onClick(evt)
    if (newOpen && inputRef.current) {
      inputRef.current.focus()
    }
  }

  function handleKeyDown(evt: React.KeyboardEvent) {
    if (evt.key === 'ArrowDown') {
      setOpen(true)
    }
  }

  function handleMenuChange(evt: React.MouseEvent, value?: React.ReactText) {
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

  const menuRef = useMenuRef(!selectedValue)

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
      onClick: handleToggleOpen,
      setMenuPosition
    },
    input: {
      ...rest.input,
      isOpen,
      labelId,
      menuId,
      ref: inputRef,
      selectedItemId,
      selectedLabel,
      selectedValue
    },
    label: {
      ...rest.label,
      labelId
    },
    layout: {
      ...rest.layout,
      onKeyDown: handleKeyDown
    },
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
      ref: menuRef,
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
        selectedItemId,
        selectedValue
      }
    }
  }
}

export function findMatchingActionMenuItem(menu?, value?) {
  if (!menu || !value) return

  const items = Array.isArray(menu)
    ? menu
    : Children.toArray(menu.props.children)
  let matchingItem = items.find(it => it.props.value === value)

  const nestedMenus = items.map(item => item.props.nested)
  if (!matchingItem && nestedMenus.length > 0) {
    matchingItem = nestedMenus.reduce((found, nested) => {
      if (found) return found

      return findMatchingActionMenuItem(nested, value)
    }, undefined)
  }

  return matchingItem
}
