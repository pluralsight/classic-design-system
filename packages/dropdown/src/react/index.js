import { compose, css } from 'glamor'
import PropTypes from 'prop-types'
import React, { useRef, createContext } from 'react'
import { canUseDOM } from 'exenv'

import filterReactProps from '@pluralsight/ps-design-system-filter-react-props'
import Halo from '@pluralsight/ps-design-system-halo'
import Icon, { WarningIcon } from '@pluralsight/ps-design-system-icon'
import { useTheme } from '@pluralsight/ps-design-system-theme'
import {
  useCombinedRefs,
  createUniversalPortal
} from '@pluralsight/ps-design-system-util'

import stylesheet from '../css/index.js'
import { findMatchingActionMenuItem } from './utils.js'
import * as vars from '../vars/index.js'
import { Item } from './item.js'
import ActionMenu from '@pluralsight/ps-design-system-actionmenu'
const styles = {
  buttonSizer: _ => css(stylesheet['.psds-dropdown__button-sizer']),
  error: _ => css(stylesheet['.psds-dropdown__error']),
  field: ({ appearance, error, themeName, size }) => {
    const label = 'psds-dropdown__field'
    const isSmall = size === vars.sizes.small

    return compose(
      css(stylesheet[`.${label}`]),
      isSmall && css(stylesheet[`.${label}.psds-dropdown--small`]),
      css(stylesheet[`.${label}--appearance-${appearance}`]),
      css(stylesheet[`.${label}.psds-theme--${themeName}`]),
      error && css(stylesheet[`.${label}-error.psds-theme--${themeName}`])
    )
  },
  fieldAligner: _ => css(stylesheet['.psds-dropdown__field-aligner']),
  fieldContainer: _ => css(stylesheet['.psds-dropdown__field-container']),
  icon: ({ appearance, icon, themeName }) => {
    const label = 'psds-dropdown__icon'

    return compose(
      css(stylesheet[`.${label}`]),
      css(stylesheet[`.${label}--appearance-${appearance}`]),
      css(stylesheet[`.${label}.psds-theme--${themeName}`])
    )
  },
  dropdown: ({ disabled }) => {
    const label = 'psds-dropdown'

    return compose(
      css(stylesheet[`.${label}`]),
      disabled && css(stylesheet[`.${label}--disabled`])
    )
  },
  label: ({ themeName }) => {
    const label = 'psds-dropdown__label'

    return compose(
      css(stylesheet[`.${label}`]),
      css(stylesheet[`.${label}.psds-theme--${themeName}`])
    )
  },
  menu: _ => css(stylesheet['.psds-dropdown__menu']),
  placeholder: ({ appearance, selectedLabel, size }) => {
    const label = 'psds-dropdown__placeholder'
    const isSmall = size === vars.sizes.small
    const placeholderColor =
      appearance === vars.appearances.subtle
        ? css(
            stylesheet[
              `.psds-dropdown__field--appearance-${vars.appearances.subtle}.psds-dropdown__placeholder--color`
            ]
          )
        : css(stylesheet['.psds-dropdown__placeholder--color'])
    return compose(
      css(stylesheet[`.${label}`]),
      isSmall && css(stylesheet[`.${label}.psds-dropdown--small`]),
      !selectedLabel && placeholderColor
    )
  },
  subLabel: ({ themeName }) => {
    const label = 'psds-dropdown__sub-label'

    return compose(
      css(stylesheet[`.${label}`]),
      css(stylesheet[`.${label}.psds-theme--${themeName}`])
    )
  },
  halo: _ => css(stylesheet['.psds-dropdown__field-halo'])
}

const CaretDown = _ => (
  <svg
    role="img"
    aria-label="caret down icon"
    viewBox="0 0 24 24"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path d="M11.6464 15.0565L7.35354 10.7636C7.15828 10.5683 7.15828 10.2518 7.35354 10.0565L8.05692 9.35311C8.25199 9.15804 8.5682 9.15782 8.76354 9.35262L12 12.5801L15.2364 9.35262C15.4318 9.15782 15.748 9.15804 15.943 9.35311L16.6464 10.0565C16.8417 10.2518 16.8417 10.5683 16.6464 10.7636L12.3535 15.0565C12.1583 15.2518 11.8417 15.2518 11.6464 15.0565Z" />
  </svg>
)

export const DropdownContext = createContext()

const Dropdown = React.forwardRef((props, forwardedRef) => {
  const themeName = useTheme()
  const allProps = { ...props, themeName }
  const [isOpen, setOpen] = React.useState(false)

  const itemMatchingValue = React.useMemo(
    _ => {
      return findMatchingActionMenuItem(props.menu, props.value)
    },
    [props.menu, props.value]
  )

  const [selectedLabel, setSelectedLabel] = React.useState(
    itemMatchingValue ? itemMatchingValue.props.children : null
  )
  const [selectedValue, setSelectedValue] = React.useState(props.value)

  React.useEffect(
    _ => {
      setSelectedLabel(
        itemMatchingValue ? itemMatchingValue.props.children : null
      )
      setSelectedValue(props.value)
    },
    [itemMatchingValue, props.value]
  )

  function handleToggleOpen(evt) {
    evt.preventDefault()
    evt.stopPropagation()
    setOpen(!isOpen)
    if (typeof allProps.onClick === 'function') allProps.onClick(evt)
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
    if (typeof allProps.onChange === 'function') allProps.onChange(evt, value)
  }

  const menu = useRef(null)

  function getLongestMenuLabelState() {
    const getMenuItems = menu =>
      menu ? React.Children.toArray(menu.props.children) : []
    const getNestedMenu = item => item && item.props.nested
    const hasIcon = item => item && !!item.props.icon
    const getLabel = item =>
      // NOTE: only works if it's a string -- are there valid cases where actionMenuItem child is not a string
      React.Children.toArray(item.props.children)[0] || ''
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
      { hasIcon: false, label: allProps.placeholder || '' },
      allProps.menu
    )
  }

  const { style, className, ...buttonProps } = allProps
  const longestMenuItemState = getLongestMenuLabelState()
  const [width, setWidth] = React.useState('auto')
  const innerRef = React.createRef(null)
  const combinedRef = useCombinedRefs(forwardedRef, innerRef)
  React.useLayoutEffect(() => {
    setWidth(combinedRef.current.getBoundingClientRect().width)
  }, [combinedRef, forwardedRef])
  const inNode = canUseDOM ? document.body : null
  const [menuPosition, setMenuPosition] = React.useState({ left: 0, top: 0 })
  const fieldContainerRef = useRef()
  React.useLayoutEffect(() => {
    if (!isOpen) return
    const { left, bottom } = fieldContainerRef.current.getBoundingClientRect()
    requestAnimationFrame(() => setMenuPosition({ left, top: bottom }))
  }, [fieldContainerRef, isOpen])

  return (
    <label
      {...styles.dropdown(allProps)}
      {...(style ? { style: style } : null)}
      {...(className ? { className: className } : null)}
      onKeyDown={handleKeyDown}
    >
      {allProps.label && (
        <div {...styles.label(allProps)}>{allProps.label}</div>
      )}
      <div {...styles.fieldContainer(allProps)} ref={fieldContainerRef}>
        <Halo
          error={allProps.error}
          gapSize={Halo.gapSizes.small}
          {...styles.halo()}
        >
          <div {...styles.fieldAligner(allProps)}>
            <button
              {...filterReactProps(buttonProps, { tagName: 'button' })}
              {...styles.field(allProps)}
              disabled={allProps.disabled}
              onClick={allProps.disabled ? null : handleToggleOpen}
              ref={combinedRef}
            >
              <span aria-hidden {...styles.buttonSizer(allProps)}>
                {longestMenuItemState.label || allProps.placeholder}
              </span>
              <span {...styles.placeholder({ ...allProps, selectedLabel })}>
                {selectedLabel || allProps.placeholder}
              </span>
            </button>
            <div {...styles.icon(allProps)}>
              <Icon>
                <CaretDown />
              </Icon>
            </div>
          </div>
        </Halo>
        {allProps.error && (
          <div {...styles.error(allProps)}>
            <WarningIcon />
          </div>
        )}
      </div>
      {allProps.menu &&
        isOpen &&
        createUniversalPortal(
          <div {...styles.menu(allProps)} style={menuPosition}>
            <DropdownContext.Provider value={selectedValue}>
              <ActionMenu
                onClick={handleMenuChange}
                ref={menu}
                onClose={_ => {
                  setOpen(false)
                  if (typeof allProps.menu.props.onClose === 'function')
                    allProps.menu.props.onClose()
                }}
                style={{
                  ...allProps.menu.props.style,
                  minWidth: '0',
                  maxWidth: 'none',
                  width
                }}
              >
                {allProps.menu}
              </ActionMenu>
            </DropdownContext.Provider>
          </div>,
          inNode
        )}
      {allProps.subLabel && (
        <div {...styles.subLabel(allProps)}>{allProps.subLabel}</div>
      )}
    </label>
  )
})

Dropdown.propTypes = {
  appearance: PropTypes.oneOf(
    Object.keys(vars.appearances).map(k => vars.appearances[k])
  ),
  disabled: PropTypes.bool,
  className: PropTypes.string,
  error: PropTypes.bool,
  label: PropTypes.node,
  menu: PropTypes.oneOfType([PropTypes.node, PropTypes.arrayOf(PropTypes.node)])
    .isRequired,
  onBlur: PropTypes.func,
  onChange: PropTypes.func,
  onClick: PropTypes.func,
  onFocus: PropTypes.func,
  placeholder: PropTypes.string,
  size: PropTypes.oneOf(Object.values(vars.sizes)),
  subLabel: PropTypes.node,
  style: PropTypes.object,
  value: PropTypes.oneOfType([PropTypes.number, PropTypes.string])
}
Dropdown.defaultProps = {
  appearance: vars.appearances.default,
  disabled: false,
  error: false,
  size: vars.sizes.medium,
  menu: <span />
}

Dropdown.appearances = vars.appearances
Dropdown.sizes = vars.sizes
Dropdown.Item = Item
Dropdown.Divider = ActionMenu.Divider
export const appearances = vars.appearances
export const sizes = vars.sizes

export default Dropdown
