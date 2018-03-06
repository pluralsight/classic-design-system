import * as glamor from 'glamor'
import { sizes as iconSizes } from '@pluralsight/ps-design-system-icon/react'
import PropTypes from 'prop-types'
import React from 'react'

import css from '../css'
import * as vars from '../vars'

const TagContainer = props => {
  const tagName = props.href ? 'a' : 'div'
  return React.createElement(
    tagName,
    {
      href: props.href,
      ...(props.target ? { target: props.target } : null),
      ...(props.isPressed ? { 'aria-pressed': true } : null),
      ...(props.onClick ? { role: 'button', tabIndex: 0 } : null),
      onClick: props.onClick,
      ...glamor.css({
        ...css['.psds-tag'],
        ...(({ href, onClick }) =>
          href || onClick
            ? {
                ':hover': css['.psds-tag--clickable:hover'],
                ':focus': css['.psds-tag--clickable:focus']
              }
            : null)(props),
        ...css[`.psds-tag--appearance-${props.appearance}`],
        ...css[`.psds-tag--size-${props.size}`],
        ...(props.icon ? css['.psds-tag--icon'] : null),
        ...(props.isPressed ? css['.psds-tag--isPressed'] : null)
      })
    },
    props.children
  )
}

const Label = props => {
  const styles = glamor.css({
    ...css['.psds-tag__label'],
    ...(props.icon ? css['.psds-tag__label--icon'] : null)
  })
  return <span {...styles}>{props.children}</span>
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

const Tag = props => (
  <TagContainer
    appearance={props.appearance}
    href={props.href}
    target={props.target}
    isPressed={props.isPressed}
    onClick={props.onClick}
    icon={props.icon}
    size={props.size}
  >
    <Label icon={props.icon}>{props.children}</Label>
    {renderIcon(props)}
  </TagContainer>
)

Tag.displayName = 'Tag'

Tag.appearances = vars.appearances
Tag.sizes = vars.sizes

Tag.propTypes = {
  appearance: PropTypes.oneOf(Object.keys(vars.appearances)),
  children: PropTypes.node.isRequired,
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

export const appearances = vars.appearances
export const sizes = vars.sizes

export default Tag
