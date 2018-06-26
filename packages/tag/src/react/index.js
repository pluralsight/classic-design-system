import * as glamor from 'glamor'
import { sizes as iconSizes } from '@pluralsight/ps-design-system-icon/react'
import PropTypes from 'prop-types'
import React from 'react'
import {
  defaultName as themeDefaultName,
  names as themeNames
} from '@pluralsight/ps-design-system-theme/react'

import css from '../css'
import * as vars from '../vars'

const styleFocusRingGap = ({ themeName }) => ({
  ...css[
    '.psds-tag--clickable:focus:before, .psds-tag--clickable.psds-tag--error:before'
  ],
  ...css[
    `.psds-tag--clickable.psds-theme--${themeName}:focus:before, .psds-tag--clickable.psds-tag--error.psds-theme--${themeName}:before`
  ]
})

const styleFocusRingBorder = ({ themeName }) => ({
  ...css[
    '.psds-tag--clickable:focus:after, .psds-tag--clickable.psds-tag--error:after'
  ],
  ...css[
    `.psds-tag--clickable.psds-theme--${themeName}:focus:after, .psds-tag--clickable.psds-tag--error.psds-theme--${themeName}:after`
  ]
})

const styles = {
  tag: ({
    appearance,
    error,
    href,
    icon,
    isPressed,
    onClick,
    size,
    themeName
  }) =>
    glamor.css(
      css['.psds-tag'],
      (href || onClick) && {
        ':hover': css['.psds-tag--clickable:hover'],
        ':focus': {
          ...css['.psds-tag--clickable:focus'],
          // TODO: pickup: add focus styles; then do error styles
          ':before': styleFocusRingGap({ themeName }),
          ':after': {
            ...styleFocusRingBorder({ themeName }),
            ...css['.psds-tag--clickable:focus:after']
          }
        }
      },
      error && {
        ':before': styleFocusRingGap({ themeName }),
        ':after': {
          ...styleFocusRingBorder({ themeName }),
          ...css['.psds-tag--clickable.psds-tag--error:after']
        }
      },
      css[`.psds-tag--appearance-${appearance}`],
      css[`.psds-tag--size-${size}`],
      icon && css['.psds-tag--icon'],
      isPressed && css['.psds-tag--isPressed']
    ),
  label: ({ icon }) =>
    glamor.css(css['.psds-tag__label'], icon && css['.psds-tag__label--icon'])
}

const renderIcon = props =>
  props.icon
    ? React.cloneElement(props.icon, {
        onClick: evt => {
          evt.stopPropagation()
          if (props.icon.props.onClick) props.icon.props.onClick(evt)
        },
        size:
          props.size === vars.sizes.small ? iconSizes.small : iconSizes.medium
      })
    : null

const Tag = (props, context) => {
  const allProps = {
    ...props,
    themeName: context.themeName || themeDefaultName
  }
  const tagName = allProps.href ? 'a' : 'div'
  return React.createElement(
    tagName,
    {
      href: allProps.href,
      ...(allProps.target ? { target: allProps.target } : null),
      ...(allProps.isPressed ? { 'aria-pressed': true } : null),
      ...(allProps.onClick ? { role: 'button', tabIndex: 0 } : null),
      onClick: allProps.onClick,
      ...styles.tag(allProps)
    },
    <span {...styles.label(allProps)}>{props.children}</span>,
    renderIcon(props)
  )
}

Tag.displayName = 'Tag'
Tag.appearances = vars.appearances
Tag.sizes = vars.sizes

Tag.propTypes = {
  appearance: PropTypes.oneOf(Object.keys(vars.appearances)),
  children: PropTypes.node.isRequired,
  error: PropTypes.boolean,
  href: PropTypes.string,
  icon: PropTypes.element,
  isPressed: PropTypes.bool,
  onClick: PropTypes.func,
  size: PropTypes.oneOf(Object.keys(vars.sizes))
}
Tag.defaultProps = {
  appearance: vars.appearances.basic,
  isPressed: false,
  size: vars.sizes.medium
}
Tag.contextTypes = {
  themeName: PropTypes.string
}
export const appearances = vars.appearances
export const sizes = vars.sizes

export default Tag
