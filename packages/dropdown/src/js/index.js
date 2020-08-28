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
import { useCombinedRefs } from '@pluralsight/ps-design-system-util'

export const DropdownContext = createContext()

export const useDropdown = ({
  forwardedRef,
  menu,
  onClick,
  onChange,
  placeholder,
  value
}) => {
  const [isOpen, setOpen] = useState(false)

  const itemMatchingValue = useMemo(
    _ => {
      return findMatchingActionMenuItem(menu, value)
    },
    [menu, value]
  )

  const [selectedLabel, setSelectedLabel] = useState(
    itemMatchingValue ? itemMatchingValue.props.children : null
  )
  const [selectedValue, setSelectedValue] = useState(value)

  useEffect(
    _ => {
      setSelectedLabel(
        itemMatchingValue ? itemMatchingValue.props.children : null
      )
      setSelectedValue(value)
    },
    [itemMatchingValue, value]
  )

  function handleToggleOpen(evt) {
    evt.preventDefault()
    evt.stopPropagation()
    setOpen(!isOpen)
    if (typeof onClick === 'function') onClick(evt)
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
    if (typeof onChange === 'function') onChange(evt, value)
  }

  const menuRef = useRef(null)

  function getLongestMenuLabelState() {
    const getMenuItems = menu =>
      menu ? Children.toArray(menu.props.children) : []
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

    return getLongestState({ hasIcon: false, label: placeholder || '' }, menu)
  }

  const longestMenuItemState = getLongestMenuLabelState()
  console.log(longestMenuItemState)
  const [width, setWidth] = useState('auto')
  const innerRef = createRef(null)
  const combinedRef = useCombinedRefs(forwardedRef, innerRef)
  useLayoutEffect(() => {
    setWidth(combinedRef.current.getBoundingClientRect().width)
  }, [combinedRef, forwardedRef])
  const inNode = canUseDOM ? document.body : null
  const [menuPosition, setMenuPosition] = useState({ left: 0, top: 0 })

  return {
    combinedRef,
    handleKeyDown,
    handleMenuChange,
    handleToggleOpen,
    inNode,
    isOpen,
    longestMenuItemState,
    menuPosition,
    menuRef,
    selectedLabel,
    selectedValue,
    setMenuPosition,
    setOpen,
    width
  }
}

export function findMatchingActionMenuItem(menu, value) {
  if (!menu || !value) return

  const items = Children.toArray(menu.props.children)
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
