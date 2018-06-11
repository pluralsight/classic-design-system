import * as glamor from 'glamor'
import PropTypes from 'prop-types'
import React from 'react'
import { defaultName as themeDefaultName } from '@pluralsight/ps-design-system-theme/react'
import * as propsUtil from '@pluralsight/ps-design-system-util/props'

import css from '../css'
import * as vars from '../vars'

const radioButtonHtmlPropsWhitelist = [
  'type',
  'name',
  'autocomplete',
  'autofocus',
  'role',
  'tabIndex',
  'value',
  'defaultValue',
  /^on/,
  /^aria-/,
  /^data-/,
  /^form/
]

const styles = {
  button: () => glamor.css(css['.psds-radio-button']),
  circle: ({ checked, themeName, _error, _isFocused }) =>
    glamor.css(
      css['.psds-radio-button__circle'],
      css[`.psds-radio-button__circle.psds-theme--${themeName}`],
      checked && css['.psds-radio-button__circle--checked'],
      { ':focus': css['.psds-radio-button__circle:focus'] },
      _error
        ? {
            ':before': {
              ...css['.psds-radio-button__circle--error:before'],
              ...css[
                `.psds-radio-button__circle--error.psds-theme--${themeName}:before`
              ]
            },
            ':after': css['.psds-radio-button__circle--error:after']
          }
        : null,
      _isFocused
        ? {
            ':before': {
              ...css['.psds-radio-button__circle:focus:before'],
              ...css[
                `.psds-radio-button__circle.psds-theme--${themeName}:focus:before`
              ]
            },
            ':after': css['.psds-radio-button__circle:focus:after']
          }
        : null
    ),
  circleInner: ({ checked }) =>
    glamor.css(css['.psds-radio-button__circle-inner']),
  input: () => glamor.css(css['.psds-radio-button__input']),
  label: ({ themeName }) =>
    glamor.css(
      css['.psds-radio-button__label'],
      css[`.psds-radio-button__label.psds-theme--${themeName}`]
    )
}

class Button extends React.Component {
  constructor(props) {
    super(props)
    this.handleClick = this.handleClick.bind(this)
    this.selectButton = this.selectButton.bind(this)
  }
  selectButton(evt) {
    const value = evt.target.value
    this.props._onClick(evt, value)
    if (typeof this.props.onClick === 'function') this.props.onClick(evt, value)
    this.props._onFocus(evt, value)
    this.circle.focus()
  }
  handleClick(evt) {
    this.selectButton(evt)
  }
  render() {
    const { context, props } = this
    const allProps = {
      ...props,
      themeName: context.themeName || themeDefaultName
    }
    return (
      <label
        onClick={props._disabled ? null : this.handleClick}
        {...styles.button(allProps)}
      >
        <div
          role="radio"
          aria-checked={allProps.checked}
          tabIndex="-1"
          onFocus={props._disabled ? null : _ => props._onFocus(props.value)}
          ref={el => (this.circle = el)}
          {...styles.circle(allProps)}
        >
          {allProps.checked && <div {...styles.circleInner(allProps)} />}
        </div>
        <input
          {...propsUtil.whitelistProps(allProps, radioButtonHtmlPropsWhitelist)}
          tabIndex="-1"
          type="radio"
          readOnly
          name={props._name}
          checked={allProps.checked}
          value={allProps.value}
          ref={allProps.innerRef}
          {...styles.input(allProps)}
        />
        <div {...styles.label(allProps)}>{allProps.label}</div>
      </label>
    )
  }
}

Button.propTypes = {
  checked: PropTypes.bool,
  innerRef: PropTypes.func,
  label: PropTypes.node.isRequired,
  value: PropTypes.oneOfType([PropTypes.string, PropTypes.number]).isRequired,
  _disabled: PropTypes.bool,
  _error: PropTypes.bool,
  _isFocused: PropTypes.bool,
  _name: PropTypes.string,
  _onClick: PropTypes.func,
  _onFocus: PropTypes.func
}
Button.defaultProps = {
  checked: false
}
Button.contextTypes = {
  themeName: PropTypes.string
}

export default Button
