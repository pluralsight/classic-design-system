import { colorsTextIcon, layout } from '@pluralsight/ps-design-system-core'
import { Meta, Story } from '@storybook/react/types-6-0'
import { DecoratorFn } from '@storybook/react'
import { css } from 'glamor'
import { action } from '@storybook/addon-actions'

import React, {
  ChangeEventHandler,
  ReactText,
  useEffect,
  useRef,
  useState
} from 'react'

import TextInput from '..'

const PaddingDecorator: DecoratorFn = storyFn => (
  <div {...css({ height: '100vh', padding: layout.spacingLarge })}>
    {storyFn()}
  </div>
)

const defaultArgs = {
  onFocus: action('on focus'),
  onBlur: action('on blur'),
  label: 'The label',
  placeholder: 'Some placeholder',
  subLabel: 'The sub label'
}

export default {
  title: 'Components/TextInput/examples',
  component: TextInput,
  decorators: [PaddingDecorator],
  parameters: { layout: 'fullscreen', center: { disabled: true } }
} as Meta

export const Controlled: Story = args => {
  const [value, setValue] = useState<ReactText | undefined>('a value')

  const handleChange: ChangeEventHandler<HTMLInputElement> = evt => {
    setValue(evt.target.value)
  }

  return (
    <div>
      <TextInput {...args} onChange={handleChange} value={value} />

      <br />
      <br />

      <div {...css({ color: colorsTextIcon.lowOnDark })}>
        <span>Current value: {value}</span>
      </div>
    </div>
  )
}
Controlled.args = { ...defaultArgs }

export const Autofocused: Story = args => {
  const ref = useRef<HTMLInputElement>(null)

  useEffect(() => {
    if (ref.current) ref.current?.focus()
  })

  return <TextInput ref={ref} {...args} />
}
Autofocused.args = { ...defaultArgs }

export const StyleFullWidth: Story = () => (
  <div style={{ border: '1px solid blue', width: '500px' }}>
    <TextInput label="First" style={{ display: 'block', width: '100%' }} />

    <TextInput
      error
      label="Second"
      style={{ display: 'block', width: '100%' }}
    />

    <TextInput
      appearance={TextInput.appearances.subtle}
      label="Third"
      style={{ display: 'block', width: '100%' }}
    />

    <TextInput
      appearance={TextInput.appearances.subtle}
      error
      label="Fourth"
      style={{ display: 'block', width: '100%' }}
    />
  </div>
)

export const StyleRightAligned: Story = () => (
  <div style={{ border: '1px solid blue' }}>
    <div style={{ display: 'flex', justifyContent: 'flex-end' }}>
      <TextInput placeholder="Filter" />
    </div>

    <div style={{ border: '2px dashed green', height: '50px' }} />
  </div>
)
