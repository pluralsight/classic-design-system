import core from '@pluralsight/ps-design-system-core'
import * as glamor from 'glamor'
import PropTypes from 'prop-types'
import React from 'react'
import { names as themeNames } from '@pluralsight/ps-design-system-theme/react'
import { transparentize } from 'polished'

import css from '../css'
import * as vars from '../vars'

const styles = {
  switch: ({ disabled, labelAlign }) =>
    glamor.css({
      ...css['.psds-switch'],
      ...css[`.psds-switch--labelAlign-${labelAlign}`],
      ...(disabled ? css['.psds-switch--disabled'] : null)
    }),
  track: ({ checked, color, size }) =>
    glamor.css({
      ...css['.psds-switch__track'],
      ...(checked
        ? css[`.psds-switch__track--checked.psds-switch__track--color-${color}`]
        : null),
      ...css[`.psds-switch__track.psds-switch__track--size-${size}`]
    }),
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

const Switch = (props, context) => {
  const allProps = { ...props, themeName: context.themeName }
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

Switch.propTypes = {
  checked: PropTypes.bool,
  color: PropTypes.oneOf(Object.keys(vars.colors)),
  disabled: PropTypes.bool,
  labelAlign: PropTypes.oneOf(Object.keys(vars.labelAligns)),
  onClick: PropTypes.func,
  size: PropTypes.oneOf(Object.keys(vars.sizes))
}
Switch.defaultProps = {
  checked: false,
  color: vars.colors.orange,
  disabled: false,
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
