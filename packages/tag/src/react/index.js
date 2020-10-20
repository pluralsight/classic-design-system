import { compose, css } from 'glamor'
import PropTypes from 'prop-types'
import React from 'react'

import filterReactProps from '@pluralsight/ps-design-system-filter-react-props'
import Halo from '@pluralsight/ps-design-system-halo'
import { sizes as iconSizes } from '@pluralsight/ps-design-system-icon'
import { useTheme } from '@pluralsight/ps-design-system-theme'

import stylesheet from '../css/index.js'
import * as vars from '../vars/index.js'

const styles = {
  tag: (themeName, { href, icon, isPressed, onClick, size }) => {
    const label = 'psds-tag'
    const clickable = href || onClick

    return compose(
      css(stylesheet[`.${label}`]),
      css(stylesheet[`.${label}.psds-theme--${themeName}`]),
      clickable && css(stylesheet[`.${label}--clickable`]),
      clickable &&
        css(stylesheet[`.${label}--clickable.psds-theme--${themeName}`]),
      css(stylesheet[`.${label}--size-${size}`]),
      icon && css(stylesheet[`.${label}--icon`]),
      isPressed && css(stylesheet[`.${label}--isPressed`]),
      isPressed &&
        clickable &&
        css(stylesheet[`.${label}--isPressed.${label}--clickable`])
    )
  },
  label: (themeName, { icon }) => {
    const label = 'psds-tag__label'

    return compose(
      css(stylesheet[`.${label}`]),
      css(stylesheet[`.${label}.psds-theme--${themeName}`]),
      icon && stylesheet[`.${label}--icon`]
    )
  }
}

const Tag = props => {
  const TagName = props.href ? 'a' : 'div'
  const themeName = useTheme()

  return (
    <Halo error={props.error} shape={Halo.shapes.pill} inline>
      <TagName
        {...(props.isPressed && { 'aria-pressed': true })}
        {...(props.onClick && { role: 'button', tabIndex: 0 })}
        {...styles.tag(themeName, props)}
        {...filterReactProps(props, { tagName: TagName })}
        icon={undefined} // NOTE: prevent icon prop from passing through
      >
        <Label>{props.children}</Label>
        {renderIcon(props)}
      </TagName>
    </Halo>
  )
}

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

const Label = props => {
  const themeName = useTheme()

  return <span {...styles.label(themeName, props)} {...props} />
}

const renderIcon = props => {
  if (!props.icon) return null

  const style = {
    cursor: props.icon.props.onClick ? 'pointer' : 'default'
  }
  const onClick = evt => {
    evt.stopPropagation()
    if (props.icon.props.onClick) props.icon.props.onClick(evt)
  }
  const size =
    props.size === vars.sizes.small ? iconSizes.small : iconSizes.medium

  return React.cloneElement(props.icon, { style, onClick, size })
}

export const sizes = vars.sizes

export default Tag
