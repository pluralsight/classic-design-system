import { layout } from '@pluralsight/ps-design-system-core'
import React from 'react'

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
