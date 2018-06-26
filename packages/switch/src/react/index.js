import core from '@pluralsight/ps-design-system-core'
import * as glamor from 'glamor'
import PropTypes from 'prop-types'
import React from 'react'
import { names as themeNames } from '@pluralsight/ps-design-system-theme/react'
import { transparentize } from 'polished'

import css from '../css'
import * as vars from '../vars'

const styleFocusRingGap = ({ size, themeName }) => ({
  ...css['.psds-switch__track:focus:before, .psds-switch__track--error:before'],
  ...css[
    `.psds-switch__track--size-${size}:focus:before, .psds-switch__track--error.psds-switch__track--size-${size}:before`
  ],
  ...css[
    `.psds-switch__track.psds-theme--${themeName}:focus:before, .psds-switch__track--error.psds-theme--${themeName}:before`
  ]
})

const styleFocusRingBorder = ({ size, themeName }) => ({
  ...css['.psds-switch__track:focus:after, .psds-switch__track--error:after'],
  ...css[
    `.psds-switch__track--size-${size}:focus:after, .psds-switch__track--error.psds-switch__track--size-${size}:after`
  ],
  ...css[
    `.psds-switch__track.psds-theme--${themeName}:focus:after, .psds-switch__track--error.psds-theme--${themeName}:after`
  ]
})

const styles = {
  switch: ({ disabled, labelAlign }) =>
    glamor.css(
      css['.psds-switch'],
      css[`.psds-switch--labelAlign-${labelAlign}`],
      disabled && css['.psds-switch--disabled'],
      {
        ':focus': css['.psds-switch:focus']
      }
    ),
  track: ({ checked, color, disabled, error, isFocused, size, themeName }) =>
    glamor.css(
      css['.psds-switch__track'],
      checked &&
        css[`.psds-switch__track--checked.psds-switch__track--color-${color}`],
      css[`.psds-switch__track.psds-switch__track--size-${size}`],
      error && {
        ':before': styleFocusRingGap({ size, themeName }),
        ':after': {
          ...styleFocusRingBorder({ size, themeName }),
          ...css['.psds-switch__track--error:after']
        }
      },
      isFocused &&
        !disabled && {
          ':before': styleFocusRingGap({ size, themeName }),
          ':after': {
            ...styleFocusRingBorder({ size, themeName }),
            ...css['.psds-switch__track:focus:after']
          }
        }
    ),
  thumb: ({ checked, size }) =>
    glamor.css({
      ...css[`.psds-switch__thumb`],
      ...css[`.psds-switch__thumb--size-${size}`],
      ...(checked
        ? css[`.psds-switch__thumb--checked.psds-switch__thumb--size-${size}`]
        : null)
    }),
  label: ({ labelAlign, size, themeName }) =>
    glamor.css({
      ...css['.psds-switch__label'],
      ...css[`.psds-switch__label--size-${size}`],
      ...css[
        `.psds-switch__label--size-${size}.psds-switch__label--labelAlign-${labelAlign}`
      ],
      ...css[`.psds-switch__label.psds-theme--${themeName}`]
    }),
  checkbox: _ => glamor.css(css['.psds-switch__checkbox'])
}

class Switch extends React.Component {
  constructor() {
    super()
    this.state = { isFocused: false }
    this.handleFocus = this.handleFocus.bind(this)
    this.handleBlur = this.handleBlur.bind(this)
  }
  handleFocus() {
    this.setState({ isFocused: true })
  }
  handleBlur() {
    this.setState({ isFocused: false })
  }
  render() {
    const { context, props, state } = this
    const allProps = {
      ...props,
      isFocused: state.isFocused,
      themeName: context.themeName || themeDefaultName
    }
    const switchProps = {
      ...styles.switch(allProps),
      ...(props.onClick && !props.disabled
        ? { onClick: _ => props.onClick(!allProps.checked) }
        : null),
      ...(props.style ? { style: props.style } : null),
      ...(props.className ? { className: props.className } : null)
    }

    return (
      <div
        {...switchProps}
        tabIndex={allProps.tabIndex || '0'}
        role="checkbox"
        aria-checked={allProps.checked}
        onFocus={this.handleFocus}
        onBlur={this.handleBlur}
      >
        <div {...styles.track(allProps)}>
          <div {...styles.thumb(allProps)} />
        </div>
        <input
          tabIndex="-1"
          type="checkbox"
          readOnly
          checked={allProps.checked}
          {...styles.checkbox(allProps)}
        />
        {allProps.children && (
          <label {...styles.label(allProps)}>{allProps.children}</label>
        )}
      </div>
    )
  }
}

Switch.propTypes = {
  checked: PropTypes.bool,
  color: PropTypes.oneOf(Object.keys(vars.colors)),
  disabled: PropTypes.bool,
  error: PropTypes.bool,
  labelAlign: PropTypes.oneOf(Object.keys(vars.labelAligns)),
  onClick: PropTypes.func,
  size: PropTypes.oneOf(Object.keys(vars.sizes))
}
Switch.defaultProps = {
  checked: false,
  color: vars.colors.orange,
  disabled: false,
  error: false,
  labelAlign: vars.labelAligns.right,
  size: vars.sizes.large
}
Switch.contextTypes = {
  themeName: PropTypes.string
}

Switch.colors = vars.colors
Switch.sizes = vars.sizes
Switch.labelAligns = vars.labelAligns

export const colors = vars.colors
export const sizes = vars.sizes
export const labelAligns = vars.labelAligns

export default Switch
