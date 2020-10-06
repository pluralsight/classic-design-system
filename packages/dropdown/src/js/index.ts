import {
  Children,
  createContext,
  createRef,
  useRef,
  useEffect,
  useLayoutEffect,
  useMemo,
  useState
} from 'react'
import { canUseDOM } from 'exenv'
import { useCombinedRefs, useMenuRef } from '@pluralsight/ps-design-system-util'

export const DropdownContext = createContext()

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
}) => ({
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

export const useDropdown = (props, forwardedRef) => {
  const { hook, ...rest } = sortDropdownProps(props)
  const [isOpen, setOpen] = useState(false)

  const itemMatchingValue = useMemo(
    _ => {
      return findMatchingActionMenuItem(hook.menu, hook.value)
    },
    [hook.menu, hook.value]
  )

  const [selectedLabel, setSelectedLabel] = useState(
    itemMatchingValue ? itemMatchingValue.props.children : null
  )
  const [selectedValue, setSelectedValue] = useState(hook.value)

  useEffect(
    _ => {
      setSelectedLabel(
        itemMatchingValue ? itemMatchingValue.props.children : null
      )
      setSelectedValue(hook.value)
    },
    [itemMatchingValue, hook.value]
  )

  function handleToggleOpen(evt) {
    evt.preventDefault()
    evt.stopPropagation()
    setOpen(!isOpen)
    if (typeof hook.onClick === 'function') hook.onClick(evt)
  }

  function handleKeyDown(evt) {
    if (evt.key === 'ArrowDown') {
      setOpen(true)
    }
  }

  function handleMenuChange(evt, value) {
    const innerText = evt.currentTarget.innerText
    setSelectedValue(value)
    setSelectedLabel(value === innerText ? value : innerText)
    setOpen(false)
    if (typeof hook.onChange === 'function') hook.onChange(evt, value)
  }

  const menuRef = useMenuRef(!selectedValue)

  function getLongestMenuLabelState() {
    const getMenuItems = menu =>
      Array.isArray(menu)
        ? menu
        : menu
        ? Children.toArray(menu.props.children)
        : []
    const getNestedMenu = item => item && item.props.nested
    const hasIcon = item => item && !!item.props.icon
    const getLabel = item =>
      // NOTE: only works if it's a string -- are there valid cases where actionMenuItem child is not a string
      Children.toArray(item.props.children)[0] || ''
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
  const [width, setWidth] = useState('auto')
  const innerRef = createRef(null)
  const combinedRef = useCombinedRefs(forwardedRef, innerRef)
  useLayoutEffect(() => {
    setWidth(combinedRef.current.getBoundingClientRect().width)
  }, [combinedRef, forwardedRef])
  const inNode = canUseDOM ? document.body : null
  const [menuPosition, setMenuPosition] = useState({ left: 0, top: 0 })

  return {
    button: {
      ...rest.button,
      ref: combinedRef,
      isOpen,
      onClick: handleToggleOpen,
      setMenuPosition
    },
    label: rest.label,
    layout: {
      ...rest.layout,
      onKeyDown: handleKeyDown
    },
    menu: {
      ...rest.menu,
      inNode,
      isOpen,
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
      value: selectedValue
    }
  }
}

export function findMatchingActionMenuItem(menu, value) {
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
