import * as glamor from 'glamor'
import Halo from '@pluralsight/ps-design-system-halo/react'
import PropTypes from 'prop-types'
import React from 'react'
import { withTheme } from '@pluralsight/ps-design-system-theme/react'
import * as propsUtil from '@pluralsight/ps-design-system-util/props'

import css from '../css/index.js'

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
  circle: ({ checked, themeName }) =>
    glamor.css(
      css['.psds-radio-button__circle'],
      css[`.psds-radio-button__circle.psds-theme--${themeName}`],
      checked && css['.psds-radio-button__circle--checked'],
      { ':focus': css['.psds-radio-button__circle:focus'] }
    ),
  circleOuter: () => glamor.css(css['.psds-radio-button__circle-outer']),
  circleInner: ({ checked }) =>
    glamor.css(css['.psds-radio-button__circle-inner']),
  halo: () => glamor.css(css['.psds-radio-button__halo']),
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
    const { props } = this

    return (
      <label
        onClick={props._disabled ? null : this.handleClick}
        {...styles.button(props)}
      >
        <div {...styles.circleOuter()}>
          <Halo
            error={props._error}
            inline
            shape={Halo.shapes.pill}
            visibleOnFocus={!props._disabled}
            visible={props._isFocused}
            {...styles.halo()}
          >
            <div
              role="radio"
              aria-checked={props.checked}
              tabIndex="-1"
              onFocus={
                props._disabled ? null : _ => props._onFocus(props.value)
              }
              ref={el => (this.circle = el)}
              {...styles.circle(props)}
            >
              {props.checked && <div {...styles.circleInner(props)} />}
            </div>
          </Halo>
        </div>
        <input
          {...propsUtil.whitelistProps(props, radioButtonHtmlPropsWhitelist)}
          tabIndex="-1"
          type="radio"
          readOnly
          name={props._name}
          checked={props.checked}
          value={props.value}
          ref={props.innerRef}
          {...styles.input(props)}
        />
        <div {...styles.label(props)}>{props.label}</div>
      </label>
    )
  }
}

Button.propTypes = {
  checked: PropTypes.bool,
  innerRef: PropTypes.func,
  label: PropTypes.node.isRequired,
  onClick: PropTypes.func,
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

export default withTheme(Button)
