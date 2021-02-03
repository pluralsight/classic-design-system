import { Meta, Story } from '@storybook/react/types-6-0'
import React, { ComponentProps } from 'react'

import { periodicElements } from '../__fixtures__/options'
import MultiSelectField from '..'

export default {
  title: 'Components/MultiSelectField',
  component: MultiSelectField,
  args: {
    placeholder: 'Do something',
    options: periodicElements
    // size: MultiSelectField.sizes.medium
  }
} as Meta

const Template: Story<ComponentProps<typeof MultiSelectField>> = args => {
  // const [value, setValue] = React.useState('')

  // const handleChange = (_evt: unknown, nextValue: string) => {
  //   const nextState = US_STATES.find(state => state.abbreviation === nextValue)

  //   if (nextState) {
  //     setValue(nextState.name)
  //   } else {
  //     setValue(nextValue)
  //   }
  // }

  return <MultiSelectField {...args} />
}

export const Basic = Template.bind({})
