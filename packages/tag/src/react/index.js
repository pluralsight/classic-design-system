import * as glamor from 'glamor'
import Halo from '@pluralsight/ps-design-system-halo/react'
import { sizes as iconSizes } from '@pluralsight/ps-design-system-icon'
import * as propsUtil from '@pluralsight/ps-design-system-util/props'
import PropTypes from 'prop-types'
import React from 'react'
import { withTheme } from '@pluralsight/ps-design-system-theme'

import css from '../css/index.js'
import * as vars from '../vars/index.js'

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
  tag: ({ href, icon, isPressed, onClick, size, themeName }) =>
    glamor.css(
      css['.psds-tag'],
      css[`.psds-tag.psds-theme--${themeName}`],
      (href || onClick) && css['.psds-tag--clickable'],
      (href || onClick) && css[`.psds-tag--clickable.psds-theme--${themeName}`],
      css[`.psds-tag--size-${size}`],
      icon && css['.psds-tag--icon'],
      isPressed && css['.psds-tag--isPressed']
    ),
  label: ({ icon, themeName }) =>
    glamor.css(
      css['.psds-tag__label'],
      css[`.psds-tag__label.psds-theme--${themeName}`],
      icon && css['.psds-tag__label--icon']
    )
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

const Tag = withTheme((props, context) => {
  const tagName = props.href ? 'a' : 'div'
  return (
    <Halo error={props.error} shape={Halo.shapes.pill} inline>
      {React.createElement(
        tagName,
        {
          ...styles.tag(props),
          ...propsUtil.whitelistProps(props, tagHtmlPropsWhitelist),
          ...(props.target ? { target: props.target } : null),
          ...(props.isPressed ? { 'aria-pressed': true } : null),
          ...(props.onClick ? { role: 'button', tabIndex: 0 } : null)
        },
        <span {...styles.label(props)}>{props.children}</span>,
        renderIcon(props)
      )}
    </Halo>
  )
})

Tag.displayName = 'Tag'
Tag.sizes = vars.sizes

Tag.propTypes = {
  children: PropTypes.node.isRequired,
  error: PropTypes.bool,
  href: PropTypes.string,
  icon: PropTypes.element,
  isPressed: PropTypes.bool,
  onClick: PropTypes.func,
  size: PropTypes.oneOf(Object.keys(vars.sizes))
}
Tag.defaultProps = {
  isPressed: false,
  size: vars.sizes.medium
}

export const sizes = vars.sizes

export default Tag
