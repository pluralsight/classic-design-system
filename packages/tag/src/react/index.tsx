import { compose, css } from 'glamor'
import React, { HTMLAttributes, Props } from 'react'

import Halo from '@pluralsight/ps-design-system-halo'
import { sizes as iconSizes } from '@pluralsight/ps-design-system-icon'
import {
  useTheme,
  names as themeNames
} from '@pluralsight/ps-design-system-theme'

import stylesheet from '../css'
import * as vars from '../vars'
import { ValueOf, PropsOf } from '@pluralsight/ps-design-system-util'

const styles = {
  tag: ({
    themeName,
    clickable,
    icon,
    isPressed,
    size
  }: {
    themeName: ValueOf<typeof themeNames>
    clickable: boolean
    icon: boolean
    isPressed: boolean
    size: ValueOf<typeof vars.sizes>
  }) => {
    const label = 'psds-tag'

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
  label: (themeName: ValueOf<typeof themeNames>, icon: boolean) => {
    const label = 'psds-tag__label'

    return compose(
      css(stylesheet[`.${label}`]),
      css(stylesheet[`.${label}.psds-theme--${themeName}`]),
      icon && stylesheet[`.${label}--icon`]
    )
  }
}

export interface TagStatics {
  sizes: typeof vars.sizes
}
export interface BaseProps {
  error?: boolean
  icon?: React.ReactElement
  isPressed?: boolean
  size?: ValueOf<typeof vars.sizes>
}

interface AnchorProps extends BaseProps, PropsOf<"a"> {
  href: string;
}
interface DivProps extends BaseProps, PropsOf<"div"> {
  href?: undefined;
}
type TagProps = AnchorProps | DivProps


const Tag: React.FC<TagProps> & TagStatics= ({
  children,
  error = false,
  icon,
  isPressed = false,
  href,
  size = vars.sizes.medium,
  ...props
}) => {
  const TagName = href ? 'a' : 'div'
  const themeName = useTheme()

  return (
    <Halo error={error} shape={Halo.shapes.pill} inline>
      {/* 
  // @ts-ignore: 🤷🏿‍♂️ */}
      <TagName
        {...(isPressed && { 'aria-pressed': true })}
        {...(Boolean(props.onClick) && { role: 'button', tabIndex: 0 })}
        {...styles.tag({
          themeName,
          clickable: Boolean(props.onClick || href),
          icon: Boolean(icon),
          isPressed,
          size
        })}
        {...props}
        href={href}
      >
        <Label icon={Boolean(icon)}>{children}</Label>
        {renderIcon(icon, size)}
      </TagName>
    </Halo>
  )
}

Tag.displayName = 'Tag'
Tag.sizes = vars.sizes

interface LabelProps extends HTMLAttributes<HTMLSpanElement> {
  icon: boolean
}

const Label: React.FC<LabelProps> = ({ icon, ...props }) => {
  const themeName = useTheme()

  return <span {...styles.label(themeName, icon)} {...props} />
}

const renderIcon = (
  icon?: React.ReactElement,
  size?: ValueOf<typeof sizes>
) => {
  if (!icon) return null

  const style = {
    cursor: icon.props.onClick ? 'pointer' : 'default'
  }
  const onClick = (evt: React.MouseEvent) => {
    evt.stopPropagation()
    if (icon.props.onClick) icon.props.onClick(evt)
  }

  return React.cloneElement(icon, {
    style,
    onClick,
    size: size === vars.sizes.small ? iconSizes.small : iconSizes.medium
  })
}

export const sizes = vars.sizes

export default Tag
