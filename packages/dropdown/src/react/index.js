import * as glamor from 'glamor'
import filterReactProps from '@pluralsight/ps-design-system-filter-react-props'
import Halo from '@pluralsight/ps-design-system-halo'
import Icon, { WarningIcon } from '@pluralsight/ps-design-system-icon'
import PropTypes from 'prop-types'
import React from 'react'
import { useTheme } from '@pluralsight/ps-design-system-theme'
import { useCombinedRefs } from '@pluralsight/ps-design-system-util'

import css from '../css/index.js'
import { findMatchingActionMenuItem } from './utils.js'
import * as vars from '../vars/index.js'

const styles = {
  buttonSizer: _ => glamor.css(css['.psds-dropdown__button-sizer']),
  error: _ => glamor.css(css['.psds-dropdown__error']),
  field: ({ appearance, error, icon, themeName, size }) =>
    glamor.css(
      css['.psds-dropdown__field'],
      size === vars.sizes.small &&
        css['.psds-dropdown__field.psds-dropdown--small'],
      css[`.psds-dropdown__field--appearance-${appearance}`],
      css[`.psds-dropdown__field.psds-theme--${themeName}`],
      error && css[`.psds-dropdown__field--error.psds-theme--${themeName}`]
    ),
  fieldAligner: _ => glamor.css(css['.psds-dropdown__field-aligner']),
  fieldContainer: _ => glamor.css(css['.psds-dropdown__field-container']),
  icon: ({ appearance, icon, themeName }) =>
    glamor.css(
      css['.psds-dropdown__icon'],
      css[`.psds-dropdown__icon--appearance-${appearance}`],
      css[`.psds-dropdown__icon.psds-theme--${themeName}`]
    ),
  dropdown: ({ disabled }) =>
    glamor.css(
      css['.psds-dropdown'],
      disabled && css['.psds-dropdown--disabled']
    ),
  label: ({ themeName }) =>
    glamor.css(
      css['.psds-dropdown__label'],
      css[`.psds-dropdown__label.psds-theme--${themeName}`]
    ),
  menu: _ => glamor.css(css['.psds-dropdown__menu']),
  placeholder: ({ size }) =>
    glamor.css(
      css['.psds-dropdown__placeholder'],
      size === vars.sizes.small &&
        css['.psds-dropdown__placeholder.psds-dropdown--small']
    ),
  subLabel: ({ themeName }) =>
    glamor.css(
      css['.psds-dropdown__sub-label'],
      css[`.psds-dropdown__sub-label.psds-theme--${themeName}`]
    ),
  pageOverlay: _ => glamor.css(css['.psds-dropdown__page-overlay']),
  halo: _ => glamor.css(css['.psds-dropdown__field-halo'])
}

const CaretDown = _ => (
  <svg
    role="img"
    aria-label="caret down icon"
    viewBox="0 0 24 24"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path d="M12.5 14L8 10h9z" />
  </svg>
)

const Dropdown = React.forwardRef((props, forwardedRef) => {
  const themeName = useTheme()
  const allProps = { ...props, themeName }
  const [isKeyboarding, setKeyboarding] = React.useState(false)
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

  React.useEffect(
    _ => {
      setSelectedLabel(
        itemMatchingValue ? itemMatchingValue.props.children : null
      )
    },
    [itemMatchingValue]
  )

  function handleToggleOpen(evt) {
    evt.preventDefault()
    evt.stopPropagation()
    setOpen(!isOpen)
    if (typeof allProps.onClick === 'function') allProps.onClick(evt)
  }

  function handleKeyDown(evt) {
    if (evt.key === 'ArrowDown' || evt.key === ' ' || evt.key === 'Enter') {
      setKeyboarding(true)
    }
    if (evt.key === 'ArrowDown') {
      setOpen(true)
    }
  }

  function handleMenuClick(evt) {
    evt.preventDefault()
    evt.stopPropagation()

    if (allProps.menu && typeof allProps.menu.props.onClick === 'function')
      allProps.menu.props.onClick(evt)
  }

  function handleMenuChange(evt, value, label) {
    setSelectedLabel(label)
    setOpen(false)
    if (typeof allProps.onChange === 'function')
      allProps.onChange(evt, value, label)
  }

  function handleOverlayClick() {
    setOpen(false)
    setKeyboarding(false)
  }

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
  return (
    <>
      {isOpen && (
        <div {...styles.pageOverlay(allProps)} onClick={handleOverlayClick} />
      )}
      <label
        {...styles.dropdown(allProps)}
        {...(style ? { style: style } : null)}
        {...(className ? { className: className } : null)}
        onKeyDown={handleKeyDown}
      >
        {allProps.label && (
          <div {...styles.label(allProps)}>{allProps.label}</div>
        )}
        <div {...styles.fieldContainer(allProps)}>
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
                <span {...styles.placeholder(allProps)}>
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
        {allProps.menu && isOpen && (
          <div {...styles.menu(allProps)}>
            {React.cloneElement(allProps.menu, {
              isKeyboarding: isKeyboarding,
              onChange: handleMenuChange,
              onClick: handleMenuClick,
              onClose: _ => {
                setOpen(false)
                if (typeof allProps.menu.props.onClose === 'function')
                  allProps.menu.props.onClose()
              },
              style: {
                ...allProps.menu.props.style,
                minWidth: '0',
                maxWidth: 'none',
                width
              }
            })}
          </div>
        )}
        {allProps.subLabel && (
          <div {...styles.subLabel(allProps)}>{allProps.subLabel}</div>
        )}
      </label>
    </>
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
  menu: PropTypes.element.isRequired,
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
  size: vars.sizes.medium
}

Dropdown.appearances = vars.appearances
Dropdown.sizes = vars.sizes

export const appearances = vars.appearances
export const sizes = vars.sizes

export default Dropdown
