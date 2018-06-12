import * as glamor from 'glamor'
import PropTypes from 'prop-types'
import React from 'react'
import { defaultName as themeDefaultName } from '@pluralsight/ps-design-system-theme/react'
import * as propsUtil from '@pluralsight/ps-design-system-util/props'

import css from '../css'
import * as vars from '../vars'

const checkboxHtmlPropsWhitelist = [
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
  checkbox: ({ disabled }) =>
    glamor.css(
      css['.psds-checkbox'],
      disabled && css['.psds-checkbox--disabled']
    ),
  square: ({ checked, disabled, error, themeName }) =>
    glamor.css(
      css['.psds-checkbox__square'],
      css[`.psds-checkbox__square.psds-theme--${themeName}`],
      checked && css['.psds-checkbox__square--checked'],
      {
        ':focus': css['.psds-checkbox__square:focus'],
        ...(!disabled && {
          ':focus:before': {
            ...css[
              '.psds-checkbox__square:focus:before .psds-checkbox__square--error:before'
            ],
            ...css['.psds-checkbox__square:focus:before'],
            ...(checked &&
              css[
                '.psds-checkbox__square--checked:focus:before, .psds-checkbox__square--checked--error:before'
              ]),
            ...css[
              `.psds-checkbox__square.psds-theme--${themeName}:focus:before`
            ]
          },
          ':focus:after': {
            ...css[
              '.psds-checkbox__square:focus:after .psds-checkbox__square--error:after'
            ],
            ...css['.psds-checkbox__square:focus:after'],
            ...(checked &&
              css[
                '.psds-checkbox__square--checked:focus:after, .psds-checkbox__square--checked--error:after'
              ])
          }
        })
      },
      error
        ? {
            ':before': {
              ...css[
                '.psds-checkbox__square:focus:before .psds-checkbox__square--error:before'
              ],
              ...css['.psds-checkbox__square--error:before'],
              ...css[
                `.psds-checkbox__square--error.psds-theme--${themeName}:before`
              ],
              ...(checked &&
                css[
                  '.psds-checkbox__square--checked:focus:before, .psds-checkbox__square--checked--error:before'
                ])
            },
            ':after': {
              ...css[
                '.psds-checkbox__square:focus:after .psds-checkbox__square--error:after'
              ],
              ...css['.psds-checkbox__square--error:after'],
              ...(checked &&
                css[
                  '.psds-checkbox__square--checked:focus:after, .psds-checkbox__square--checked--error:after'
                ])
            }
          }
        : null
    ),
  checkmark: _ => glamor.css(css['.psds-checkbox__checkmark']),
  input: () => glamor.css(css['.psds-checkbox__input']),
  label: ({ themeName }) =>
    glamor.css(
      css['.psds-checkbox__label'],
      css[`.psds-checkbox__label.psds-theme--${themeName}`]
    )
}

const Checkmark = _ => (
  <svg
    role="img"
    aria-label="Checkmark"
    {...styles.checkmark()}
    viewBox="0 0 16 16"
    version="1.1"
    xmlns="http://www.w3.org/2000/svg"
  >
    <polygon points="6.89667458 13 2.62114014 8.72446556 4.12826603 7.21733967 6.89667458 9.97505938 12.871734 4 14.3788599 5.51781473" />
  </svg>
)

class Checkbox extends React.Component {
  constructor(props) {
    super(props)
    this.handleClick = this.handleClick.bind(this)
    this.handleKeyDown = this.handleKeyDown.bind(this)
  }
  handleKeyDown(evt) {
    if (evt.key === 'Enter' || evt.key === ' ') {
      this.handleClick(evt)
    }
  }
  handleClick(evt) {
    evt.preventDefault()
    evt.stopPropagation()
    this.props.onCheck(
      evt,
      !this.props.checked,
      this.props.value,
      this.props.name
    )
    this.square.focus()
  }
  render() {
    const { context, props } = this
    const allProps = {
      ...props,
      themeName: context.themeName || themeDefaultName
    }
    return (
      <label
        onClick={allProps.disabled ? null : this.handleClick}
        onKeyDown={allProps.disabled ? null : this.handleKeyDown}
        {...styles.checkbox(allProps)}
      >
        <div
          role="checkbox"
          aria-checked={allProps.checked}
          tabIndex={allProps.disabled ? '-1' : '0'}
          ref={el => (this.square = el)}
          {...styles.square(allProps)}
        >
          {allProps.checked && <Checkmark />}
        </div>
        <input
          {...propsUtil.whitelistProps(allProps, checkboxHtmlPropsWhitelist)}
          tabIndex="-1"
          type="checkbox"
          readOnly
          name={props.name}
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

Checkbox.propTypes = {
  checked: PropTypes.bool,
  disabled: PropTypes.bool,
  error: PropTypes.bool,
  innerRef: PropTypes.func,
  name: PropTypes.string,
  label: PropTypes.node.isRequired,
  onCheck: PropTypes.func,
  value: PropTypes.oneOfType([PropTypes.string, PropTypes.number]).isRequired
}
Checkbox.defaultProps = {
  checked: false,
  disabled: false,
  error: false
}
Checkbox.contextTypes = {
  themeName: PropTypes.string
}

export default Checkbox
