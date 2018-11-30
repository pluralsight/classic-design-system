import * as glamor from 'glamor'
import Halo from '@pluralsight/ps-design-system-halo/react'
import { sizes as iconSizes } from '@pluralsight/ps-design-system-icon/vars'
import * as propsUtil from '@pluralsight/ps-design-system-util/props'
import PropTypes from 'prop-types'
import React from 'react'
import { defaultName as themeDefaultName } from '@pluralsight/ps-design-system-theme/react'

import css from '../css'
import * as vars from '../vars'

const tagHtmlPropsWhitelist = [
  'href',
  'className',
  'style',
  'title',
  'tabIndex',
  'target',
  /^on/,
  /^aria-/,
  /^data-/
]

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
          ...css['.psds-tag--clickable:focus']
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
        css: {
          cursor: props.icon.props.onClick ? 'pointer' : 'default'
        },
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
  return (
    <Halo error={allProps.error} shape={Halo.shapes.pill} inline>
      {React.createElement(
        tagName,
        {
          ...styles.tag(allProps),
          ...propsUtil.whitelistProps(allProps, tagHtmlPropsWhitelist),
          ...(allProps.target ? { target: allProps.target } : null),
          ...(allProps.isPressed ? { 'aria-pressed': true } : null),
          ...(allProps.onClick ? { role: 'button', tabIndex: 0 } : null)
        },
        <span {...styles.label(allProps)}>{props.children}</span>,
        renderIcon(props)
      )}
    </Halo>
  )
}

Tag.displayName = 'Tag'
Tag.appearances = vars.appearances
Tag.sizes = vars.sizes

Tag.propTypes = {
  appearance: PropTypes.oneOf(Object.keys(vars.appearances)),
  children: PropTypes.node.isRequired,
  error: PropTypes.bool,
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
