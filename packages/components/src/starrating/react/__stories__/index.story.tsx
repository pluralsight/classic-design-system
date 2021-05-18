import { action } from '@storybook/addon-actions'
import { Meta, Story } from '@storybook/react/types-6-0'
import glamorDefault, * as glamorExports from 'glamor'
import React from 'react'

import { StarRating } from '../index'

const glamor = glamorDefault || glamorExports

const StoryGrid: React.FC<{ cols?: number }> = props => {
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

export default {
  title: 'Components/StarRating',
  component: StarRating
} as Meta

const defaultArgs = {
  onClick: action('on click'),
  onChange: action('on change'),
  value: 2.5
}

const VALUES = [0, 0.5, 1, 1.5, 2, 2.5, 3, 3.5, 4, 4.5, 5, null, undefined]
const ROUNDING_VALUES = [1.7, 2.0, 2.2, 2.4, 2.6, 2.78]

const Template: Story<React.ComponentProps<typeof StarRating>> = args => (
  <StarRating {...args} />
)

export const Basic = Template.bind({})
Basic.args = { ...defaultArgs }

export const Interactive: Story<
  React.ComponentProps<typeof StarRating>
> = args => (
  <StoryGrid>
    {VALUES.map((value, i) => (
      <StarRating {...args} key={i} value={value} />
    ))}
  </StoryGrid>
)
Interactive.args = { ...defaultArgs }

export const NonInteractive: Story<
  React.ComponentProps<typeof StarRating>
> = args => (
  <StoryGrid>
    {VALUES.map((value, i) => (
      <StarRating {...args} key={i} value={value} />
    ))}
  </StoryGrid>
)
NonInteractive.args = { ...defaultArgs, onChange: undefined }

export const RoundToHalfInteger: Story<
  React.ComponentProps<typeof StarRating>
> = args => (
  <StoryGrid>
    {ROUNDING_VALUES.map((value, i) => (
      <StarRating {...args} key={i} value={value} />
    ))}
  </StoryGrid>
)
RoundToHalfInteger.args = { ...defaultArgs }
