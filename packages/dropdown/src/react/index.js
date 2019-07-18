import * as glamor from 'glamor'
import Halo from '@pluralsight/ps-design-system-halo/react.js'
import Icon from '@pluralsight/ps-design-system-icon/react.js'
import PropTypes from 'prop-types'
import * as propsUtil from '@pluralsight/ps-design-system-util/props.js'
import React from 'react'
import { withTheme } from '@pluralsight/ps-design-system-theme/react.js'

import css from '../css/index.js'
import * as vars from '../vars/index.js'

const dropdownHtmlPropsWhitelist = [
  'name',
  'autocomplete',
  'autofocus',
  'role',
  'tabIndex',
  'value',
  'defaultValue',
  'title',
  /^on/,
  /^aria-/,
  /^data-/,
  /^form/
]

const styles = {
  buttonSizer: _ => glamor.css(css['.psds-dropdown__button-sizer']),
  error: _ => glamor.css(css['.psds-dropdown__error']),
  field: ({ appearance, error, icon, themeName }) =>
    glamor.css(
      css['.psds-dropdown__field'],
      css[`.psds-dropdown__field--appearance-${appearance}`],
      css[`.psds-dropdown__field.psds-theme--${themeName}`],
      error && css[`.psds-dropdown__field--error.psds-theme--${themeName}`],
      {
        ':focus': {
          ...css['.psds-dropdown__field:focus'],
          ...css[`.psds-dropdown__field.psds-theme--${themeName}:focus`]
        }
      }
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
  placeholder: _ => glamor.css(css['.psds-dropdown__placeholder']),
  subLabel: ({ themeName }) =>
    glamor.css(
      css['.psds-dropdown__sub-label'],
      css[`.psds-dropdown__sub-label.psds-theme--${themeName}`]
    ),
  pageOverlay: _ => glamor.css(css['.psds-dropdown__page-overlay'])
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

class Dropdown extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      isFocused: false,
      isKeyboarding: false,
      isOpen: false,
      selectedLabel: null
    }
    this.handleFocus = this.handleFocus.bind(this)
    this.handleToggleOpen = this.handleToggleOpen.bind(this)
    this.handleBlur = this.handleBlur.bind(this)
    this.handleKeyDown = this.handleKeyDown.bind(this)
    this.handleMenuClick = this.handleMenuClick.bind(this)
    this.handleOverlayClick = this.handleOverlayClick.bind(this)
  }
  handleToggleOpen(evt) {
    evt.preventDefault()
    evt.stopPropagation()
    this.setState({ isOpen: !this.state.isOpen })
    if (typeof this.props.onClick === 'function') this.props.onClick(evt)
  }
  handleFocus(evt) {
    this.setState(_ => ({ isFocused: true }))
    if (typeof this.props.onFocus === 'function') this.props.onFocus(evt)
  }
  handleBlur(evt) {
    this.setState(_ => ({ isFocused: false }))
    if (typeof this.props.onBlur === 'function') this.props.onBlur(evt)
  }
  handleKeyDown(evt) {
    if (evt.key === 'ArrowDown' || evt.key === ' ' || evt.key === 'Enter') {
      this.setState({ isKeyboarding: true })
    }
    if (evt.key === 'ArrowDown') {
      this.setState(_ => ({ isOpen: true }))
    }
  }
  handleMenuClick(evt) {
    evt.preventDefault()
    evt.stopPropagation()

    const target = evt.target
    const isItem = target.getAttribute('role') === 'menuitem'
    if (isItem) {
      this.setState({ selectedLabel: target.innerText, isOpen: false })
    }
    if (this.props.menu && typeof this.props.menu.props.onClick === 'function')
      this.props.menu.props.onClick(evt)
  }
  handleOverlayClick() {
    this.setState({ isOpen: false, isKeyboarding: false })
  }
  getLongestMenuLabelState() {
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
      { hasIcon: false, label: this.props.placeholder || '' },
      this.props.menu
    )
  }
  render() {
    const { props, state } = this
    const longestMenuItemState = this.getLongestMenuLabelState()
    return (
      <React.Fragment>
        {state.isOpen && (
          <div
            {...styles.pageOverlay(props)}
            onClick={this.handleOverlayClick}
          />
        )}
        <label
          {...styles.dropdown(props)}
          {...(props.style ? { style: props.style } : null)}
          {...(props.className ? { className: props.className } : null)}
          onKeyDown={this.handleKeyDown}
        >
          {props.label && <div {...styles.label(props)}>{props.label}</div>}
          <div {...styles.fieldContainer(props)}>
            <Halo error={props.error} gapSize={Halo.gapSizes.small}>
              <div {...styles.fieldAligner(props)}>
                <button
                  {...propsUtil.whitelistProps(
                    props,
                    dropdownHtmlPropsWhitelist
                  )}
                  {...styles.field(props)}
                  disabled={props.disabled}
                  onClick={props.disabled ? null : this.handleToggleOpen}
                  onBlur={props.disabled ? null : this.handleBlur}
                  onFocus={props.disabled ? null : this.handleFocus}
                  ref={el => {
                    this.field = el
                    if (typeof props.innerRef === 'function') props.innerRef(el)
                  }}
                >
                  <span aria-hidden {...styles.buttonSizer(props)}>
                    {longestMenuItemState.label || props.placeholder}
                  </span>
                  <span {...styles.placeholder(props)}>
                    {state.selectedLabel || props.placeholder}
                  </span>
                </button>
                <div {...styles.icon(props)}>
                  <Icon>
                    <CaretDown />
                  </Icon>
                </div>
              </div>
            </Halo>
            {props.error && (
              <div {...styles.error(props)}>
                <Icon id={Icon.ids.warning} />
              </div>
            )}
          </div>
          {props.menu && state.isOpen && (
            <div {...styles.menu(props)}>
              {React.cloneElement(props.menu, {
                isKeyboarding: state.isKeyboarding,
                onClick: props.disabled ? null : this.handleMenuClick,
                onClose: _ => {
                  this.setState(_ => ({ isOpen: false }))
                  if (typeof props.menu.props.onClose === 'function')
                    props.menu.props.onClose()
                },
                style: {
                  ...props.menu.props.style,
                  minWidth: '0',
                  maxWidth: 'none',
                  width: this.field
                    ? this.field.getBoundingClientRect().width
                    : 'auto'
                }
              })}
            </div>
          )}
          {props.subLabel && (
            <div {...styles.subLabel(props)}>{props.subLabel}</div>
          )}
        </label>
      </React.Fragment>
    )
  }
}

Dropdown.propTypes = {
  appearance: PropTypes.oneOf(Object.keys(vars.appearances)),
  disabled: PropTypes.bool,
  error: PropTypes.bool,
  innerRef: PropTypes.func,
  label: PropTypes.node,
  menu: PropTypes.element.isRequired,
  onBlur: PropTypes.func,
  onClick: PropTypes.func,
  onFocus: PropTypes.func,
  placeholder: PropTypes.string,
  subLabel: PropTypes.node
}
Dropdown.defaultProps = {
  appearance: vars.appearances.default,
  disabled: false,
  error: false
}

Dropdown.appearances = vars.appearances

export const appearances = vars.appearances
export default withTheme(Dropdown)
