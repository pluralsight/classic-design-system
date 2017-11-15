import core from '@pluralsight/ps-design-system-core'
import * as glamor from 'glamor'
import { sizes as iconSizes } from '@pluralsight/ps-design-system-icon/react'
import PropTypes from 'prop-types'
import React from 'react'

export const appearances = {
  accent: 'accent',
  basic: 'basic',
  bright: 'bright'
}
export const sizes = {
  small: 'small',
  medium: 'medium'
}

const hoverStyles = {
  backgroundColor: core.colors.gray02,
  color: core.colors.black,
  cursor: 'pointer'
}
const accentStyles = {
  color: core.colors.white,
  backgroundColor: core.colors.blue
}

const TagContainer = props => {
  const tagName = props.href ? 'a' : 'div'
  return React.createElement(
    tagName,
    {
      href: props.href,
      ...(props.isPressed ? { 'aria-pressed': true } : null),
      ...(props.onClick ? { role: 'button', tabIndex: 0 } : null),
      onClick: props.onClick,
      ...glamor.css({
        display: 'inline-flex',
        justifyContent: 'center',
        alignItems: 'center',
        textAlign: 'center',
        borderRadius: '16px',
        fontWeight: core.type.fontWeightMedium,
        textDecoration: 'none',
        border: 'none',
        overflow: 'hidden',
        ...(({ href, onClick }) =>
          href || onClick
            ? {
                ':hover': hoverStyles,
                ':focus': hoverStyles
              }
            : null)(props),
        ...(({ appearance }) =>
          ({
            [appearances.accent]: accentStyles,
            [appearances.basic]: {
              color: core.colors.bone,
              backgroundColor: core.colors.gray03
            },
            [appearances.bright]: {
              color: core.colors.gray06,
              backgroundColor: core.colors.white,
              border: `1px solid ${core.colors.gray02}`
            }
          }[appearance]))(props),
        ...(({ size }) =>
          ({
            [sizes.small]: {
              height: '24px',
              padding: `0 ${core.layout.spacingSmall}`,
              fontSize: core.type.fontSizeXSmall,
              lineHeight: core.type.lineHeightStandard
            },
            [sizes.medium]: {
              height: '32px',
              padding: `0 ${core.layout.spacingMedium}`,
              fontSize: core.type.fontSizeSmall,
              lineHeight: core.type.lineHeightExtra
            }
          }[size]))(props),
        ...(({ icon }) =>
          icon ? { paddingRight: core.layout.spacingXXSmall } : null)(props),
        ...(({ isPressed }) => (isPressed ? accentStyles : null))(props)
      })
    },
    props.children
  )
}

const Label = props => {
  const css = glamor.css({
    display: 'inline-block',
    maxWidth: '160px',
    whiteSpace: 'nowrap',
    overflow: 'hidden',
    textOverflow: 'ellipsis',
    ...(({ icon }) =>
      icon ? { marginRight: core.layout.spacingXXSmall } : null)(props)
  })
  return <span {...css}>{props.children}</span>
}

const renderIcon = props =>
  props.icon
    ? React.cloneElement(props.icon, {
        onClick: evt => {
          evt.stopPropagation()
          if (props.icon.props.onClick) props.icon.props.onClick(evt)
        },
        size: props.size === sizes.small ? iconSizes.small : iconSizes.medium
      })
    : null

const Tag = props => (
  <TagContainer
    appearance={props.appearance}
    href={props.href}
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

Tag.appearances = appearances
Tag.sizes = sizes

Tag.propTypes = {
  appearance: PropTypes.oneOf(Object.keys(appearances)),
  children: PropTypes.string.isRequired,
  href: PropTypes.string,
  icon: PropTypes.element,
  isPressed: PropTypes.bool,
  onClick: PropTypes.func,
  size: PropTypes.oneOf(Object.keys(sizes))
}
Tag.defaultProps = {
  appearance: appearances.basic,
  isPressed: false,
  size: sizes.medium
}

export default Tag
