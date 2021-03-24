import { colorsTextIcon, layout } from '@pluralsight/ps-design-system-core'
import { Meta, Story } from '@storybook/react/types-6-0'
import { DecoratorFn } from '@storybook/react'
import { css } from 'glamor'
import React, {
  KeyboardEvent,
  MouseEvent,
  ReactText,
  useEffect,
  useRef,
  useState
} from 'react'

import Dropdown from '../'

const PaddingDecorator: DecoratorFn = storyFn => (
  <div {...css({ height: '100vh', padding: layout.spacingLarge })}>
    {storyFn()}
  </div>
)

const defaultArgs = {
  label: 'The label',
  placeholder: 'Some placeholder',
  subLabel: 'The sub label'
}

export default {
  title: 'Components/Dropdown/examples',
  component: Dropdown,
  decorators: [PaddingDecorator]
} as Meta

export const Controlled: Story = args => {
  const [items] = useState<ReactText[]>(['one', 'two', 'three'])
  const [value, setValue] = useState<ReactText | undefined>('two')

  const handleChange = (
    _evt: KeyboardEvent | MouseEvent,
    nextValue?: ReactText
  ) => {
    setValue(nextValue)
  }
  const handleClear = () => {
    setValue(undefined)
  }

  return (
    <div>
      <Dropdown
        {...args}
        menu={
          <>
            {items.map(item => (
              <Dropdown.Item key={item} value={item.toString()}>
                {`Item: ${item}`}
              </Dropdown.Item>
            ))}
          </>
        }
        onChange={handleChange}
        value={value}
      />

      <br />
      <br />

      <div {...css({ color: colorsTextIcon.lowOnDark })}>
        <span>Current value: {value}</span>
        <br />

        <button onClick={handleClear}>Clear value</button>
      </div>
    </div>
  )
}
Controlled.args = { ...defaultArgs }

export const Autofocused: Story = args => {
  const ref = useRef<HTMLButtonElement>(null)

  useEffect(() => {
    if (ref.current) ref.current?.focus()
  })

  return <Dropdown ref={ref} {...args} />
}
Autofocused.args = { ...defaultArgs }

export const StyleFullWidth: Story = () => (
  <div style={{ border: '1px solid blue', width: '500px' }}>
    <Dropdown label="First" style={{ display: 'block', width: '100%' }} />

    <Dropdown
      error
      label="Second"
      style={{ display: 'block', width: '100%' }}
    />

    <Dropdown
      appearance={Dropdown.appearances.subtle}
      label="Third"
      style={{ display: 'block', width: '100%' }}
    />

    <Dropdown
      appearance={Dropdown.appearances.subtle}
      error
      label="Fourth"
      style={{ display: 'block', width: '100%' }}
    />
  </div>
)

export const StyleRightAligned: Story = () => (
  <div style={{ border: '1px solid blue' }}>
    <div style={{ display: 'flex', justifyContent: 'flex-end' }}>
      <Dropdown placeholder="Filter" />
    </div>

    <div style={{ border: '2px dashed green', height: '50px' }} />
  </div>
)

export const StyleViewportBottom: Story = () => (
  <div
    style={{
      alignItems: 'flex-end',
      display: 'flex',
      height: '100%'
    }}
  >
    <Dropdown
      placeholder="Menu appears above"
      menu={
        <>
          <Dropdown.Item value="one">One item</Dropdown.Item>
          <Dropdown.Item value="two">Two item</Dropdown.Item>
          <Dropdown.Item value="three">Three item</Dropdown.Item>
        </>
      }
    />
  </div>
)

export const StyleFixedWidth: Story = () => {
  return (
    <div>
      <Dropdown
        placeholder="Change me"
        label="Fixed Width"
        style={{ width: 150 }}
        menu={
          <>
            <Dropdown.Item value="one">
              One item One item One item One item One item One item
            </Dropdown.Item>
            <Dropdown.Item value="two">Two item</Dropdown.Item>
            <Dropdown.Item value="three">Three item</Dropdown.Item>
          </>
        }
      />

      <br />
      <br />

      <Dropdown
        placeholder="Change me"
        label="Width determined by longest item"
        menu={
          <>
            <Dropdown.Item value="one">
              One item One item One item One item One item One item
            </Dropdown.Item>
            <Dropdown.Item value="two">Two item</Dropdown.Item>
            <Dropdown.Item value="three">Three item</Dropdown.Item>
          </>
        }
      />
    </div>
  )
}
