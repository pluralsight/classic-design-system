import { layout } from '../../../core'
import { DecoratorFn } from '@storybook/react'
import glamorDefault, * as glamorExports from 'glamor'
import React from 'react'

const glamor = glamorDefault || glamorExports

export const PaddingDecorator: DecoratorFn = storyFn => (
  <div {...glamor.css({ padding: layout.spacingLarge })}>{storyFn()}</div>
)

export const StoryGrid: React.FC<{ cols?: number }> = props => {
  const { cols = 2, ...rest } = props

  return (
    <div
      {...glamor.css({
        display: 'grid',
        gap: '20px',
        gridTemplateColumns: Array(cols).fill('1fr').join(' ')
      })}
      {...rest}
    />
  )
}
