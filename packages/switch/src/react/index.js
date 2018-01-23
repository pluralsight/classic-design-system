import core from '@pluralsight/ps-design-system-core'
import * as glamor from 'glamor'
import PropTypes from 'prop-types'
import React from 'react'
import { names as themeNames } from '@pluralsight/ps-design-system-theme/react'
import { transparentize } from 'polished'

export const sizes = {
  small: 'small',
  large: 'large'
}

export const labelAligns = {
  left: 'left',
  right: 'right'
}

export const colors = {
  orange: 'orange',
  green: 'green'
}

const css = {
  switch: ({ disabled, labelAlign, themeName }) =>
    glamor.css({
      display: 'inline-flex',
      flexDirection: labelAlign === labelAligns.left ? 'row-reverse' : 'row',
      alignItems: 'center',
      cursor: 'pointer',
      opacity: disabled ? '0.4' : '1'
    }),
  track: ({ checked, color, size }) =>
    glamor.css({
      backgroundColor: checked
        ? color === colors.green ? core.colors.green : core.colors.orange
        : core.colors.gray03,
      transition: `background-color ${core.motion.speedFast} ease-in-out`,
      ...{
        [sizes.small]: {
          height: '12px',
          width: '24px',
          borderRadius: '6px'
        },
        [sizes.large]: {
          height: '24px',
          width: '48px',
          borderRadius: '12px',
          padding: '1px'
        }
      }[size]
    }),
  thumb: ({ checked, size }) =>
    glamor.css({
      backgroundColor: core.colors.white,
      borderRadius: '50%',
      boxShadow: `0 0 2px ${transparentize(0.5, core.colors.black)}`,
      transition: `transform ${core.motion.speedFast} ease-in-out`,
      ...{
        [sizes.small]: {
          height: '12px',
          width: '12px'
        },
        [sizes.large]: {
          height: '22px',
          width: '22px',
          transform: checked ? 'translateX(24px)' : null
        }
      }[size]
    }),
  label: ({ labelAlign, size, themeName, value }) =>
    glamor.css({
      fontSize:
        size === sizes.small
          ? core.type.fontSizeXSmall
          : core.type.fontSizeSmall,
      fontWeight: core.type.fontWeightMedium,
      color:
        themeName === themeNames.light ? core.colors.gray05 : core.colors.bone,
      [labelAlign === labelAligns.left ? 'marginRight' : 'marginLeft']:
        size === sizes.small
          ? core.layout.spacingXSmall
          : core.layout.spacingMedium,
      lineHeight: '1em'
    }),
  checkbox: ({ value }) => glamor.css(core.accessibility.screenReaderOnly)
}

const Switch = (props, context) => {
  const allProps = { ...props, themeName: context.themeName }
  const switchProps = {
    ...css.switch(allProps),
    ...(props.onClick && !props.disabled
      ? { onClick: _ => props.onClick(!allProps.checked) }
      : null),
    ...(props.style ? { style: props.style } : null),
    ...(props.className ? { className: props.className } : null)
  }

  return (
    <div {...switchProps}>
      <div {...css.track(allProps)}>
        <div {...css.thumb(allProps)} />
      </div>
      <input
        type="checkbox"
        checked={allProps.checked}
        {...css.checkbox(allProps)}
      />
      <label {...css.label(allProps)}>{allProps.children}</label>
    </div>
  )
}

Switch.propTypes = {
  checked: PropTypes.bool,
  color: PropTypes.oneOf(Object.keys(colors)),
  disabled: PropTypes.bool,
  labelAlign: PropTypes.oneOf(Object.keys(labelAligns)),
  onClick: PropTypes.func,
  size: PropTypes.oneOf(Object.keys(sizes))
}
Switch.defaultProps = {
  checked: false,
  color: colors.orange,
  disabled: false,
  labelAlign: labelAligns.right,
  size: sizes.large
}
Switch.contextTypes = {
  themeName: PropTypes.string
}

Switch.colors = colors
Switch.sizes = sizes
Switch.labelAligns = labelAligns

export default Switch
