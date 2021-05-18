import { Meta, Story } from '@storybook/react/types-6-0'
import React from 'react'

import { ScreenReaderOnly } from '../index'

const defaultArgs = {}

export default {
  title: 'Components/ScreenReaderOnly',
  component: ScreenReaderOnly,
  decorators: [
    storyFn => (
      <>
        <p>
          There is some hidden text on this page. Try to find it with a screen
          reader
        </p>

        {storyFn()}
      </>
    )
  ]
} as Meta

const Template: Story<React.ComponentProps<typeof ScreenReaderOnly>> = args => (
  // @ts-ignore: story
  <ScreenReaderOnly {...args} />
)

export const Basic = Template.bind({})
Basic.args = { ...defaultArgs }
