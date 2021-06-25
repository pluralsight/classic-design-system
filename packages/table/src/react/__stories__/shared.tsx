import Button, { ButtonProps } from '@pluralsight/ps-design-system-button'
import { layout } from '@pluralsight/ps-design-system-core'
import {
  CaretDownIcon,
  CaretRightIcon
} from '@pluralsight/ps-design-system-icon'
import React from 'react'

interface ExpandButtonProps extends ButtonProps {
  expanded: boolean
}
export const ExpandButton = (props: ExpandButtonProps) => {
  const {
    appearance = 'flat',
    expanded,
    size = 'xSmall',
    title = 'Expand/Collapse additional content',
    ...rest
  } = props

  const icon = expanded ? <CaretDownIcon /> : <CaretRightIcon />

  return (
    <Button
      appearance={appearance}
      icon={icon}
      size={size}
      title={title}
      {...rest}
    />
  )
}

export const FlexContainer: React.FC = props => (
  <div style={{ display: 'flex', alignItems: 'center' }} {...props} />
)

export const HorzSpacer: React.FC = props => (
  <div
    style={{
      display: 'inline-block',
      width: layout.spacingSmall
    }}
    {...props}
  />
)

export const OutlineBox: React.FC<{ style?: React.CSSProperties }> = props => (
  <div
    {...props}
    style={{
      alignItems: 'center',
      display: 'flex',
      justifyContent: 'center',
      outline: '2px dashed pink',
      padding: 20,
      ...props.style
    }}
  />
)
