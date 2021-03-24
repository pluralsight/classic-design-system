import { colorsTextIcon, layout } from '@pluralsight/ps-design-system-core'
import { Meta, Story } from '@storybook/react/types-6-0'
import { DecoratorFn } from '@storybook/react'
import { css } from 'glamor'
import React, {
  ComponentProps,
  KeyboardEvent,
  MouseEvent,
  ReactText,
  useState
} from 'react'

import Checkbox from '..'

const PaddingDecorator: DecoratorFn = storyFn => (
  <div {...css({ padding: layout.spacingLarge })}>{storyFn()}</div>
)

const defaultArgs = {
  label: 'Red',
  name: 'colorRed',
  value: 'red'
}

export default {
  title: 'Components/Checkbox',
  component: Checkbox,
  decorators: [PaddingDecorator]
} as Meta

const Template: Story<ComponentProps<typeof Checkbox>> = args => (
  <Checkbox {...args} />
)

export const Basic = Template.bind({})
Basic.args = { ...defaultArgs }

export const Checked = Template.bind({})
Checked.args = { ...defaultArgs, checked: true }

export const Indeterminate = Template.bind({})
Indeterminate.args = { ...defaultArgs, indeterminate: true }

export const Disabled = Template.bind({})
Disabled.args = { ...defaultArgs, disabled: true }

export const Error = Template.bind({})
Error.args = { ...defaultArgs, error: true }

export const CheckedError = Template.bind({})
CheckedError.args = { ...defaultArgs, checked: true, error: true }

export const CheckedIndeterminate = Template.bind({})
CheckedIndeterminate.args = {
  ...defaultArgs,
  checked: true,
  indeterminate: true
}

export const ExampleStateDemo: Story = () => {
  const [values, updateValues] = useState<{ [name: string]: ReactText }>({})

  const colorNames = Object.keys(values)
  const checked = (name: string) => colorNames.indexOf(name) > -1

  const handleCheck = (
    _evt: KeyboardEvent | MouseEvent,
    checked: boolean,
    value: ReactText,
    name?: string
  ) => {
    if (typeof name !== 'string') return

    const nextValues = { ...values }

    if (checked) nextValues[name] = value
    else delete nextValues[name]

    updateValues(nextValues)
  }

  return (
    <div>
      <div {...css({ color: colorsTextIcon.highOnDark })}>
        Checked: {colorNames.map(name => `${name}: ${values[name]}`).join('; ')}
      </div>

      <Checkbox
        checked={checked('colorRed')}
        label="Red"
        name="colorRed"
        onCheck={handleCheck}
        value="red"
      />

      <Checkbox
        checked={checked('colorGreen')}
        label="Green"
        name="colorGreen"
        onCheck={handleCheck}
        value="green"
      />

      <Checkbox
        checked={checked('colorBlue')}
        label="Blue"
        name="colorBlue"
        onCheck={handleCheck}
        value="blue"
      />
    </div>
  )
}
