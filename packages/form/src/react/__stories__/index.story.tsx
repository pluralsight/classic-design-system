import Button from '@pluralsight/ps-design-system-button'
import Checkbox from '@pluralsight/ps-design-system-checkbox'
import * as core from '@pluralsight/ps-design-system-core'
import { DatePicker } from '@pluralsight/ps-design-system-datepicker'
import Dropdown from '@pluralsight/ps-design-system-dropdown'
import Radio from '@pluralsight/ps-design-system-radio'
import Switch from '@pluralsight/ps-design-system-switch'
import Tag from '@pluralsight/ps-design-system-tag'
import * as Text from '@pluralsight/ps-design-system-text'
import TextArea from '@pluralsight/ps-design-system-textarea'
import TextInput from '@pluralsight/ps-design-system-textinput'
import { RefFor, ValueOf } from '@pluralsight/ps-design-system-util'
import { storiesOf } from '@storybook/react'
import { Meta, Story } from '@storybook/react/types-6-0'
import { useDayzed, DateObj } from 'dayzed'
import React from 'react'

import Form from '../index'

const PaddingDecorator = (storyFn: () => React.ReactNode) => (
  <div style={{ padding: core.layout.spacingLarge, width: '50%' }}>
    {storyFn()}
  </div>
)
const FormContainer = (storyFn: () => React.ReactNode) => (
  <div style={{ border: '1px solid blue' }}>{storyFn()}</div>
)

export default {
  title: 'Components/Form',
  decorators: [PaddingDecorator, FormContainer]
} as Meta

const useInputClientRect = (
  inputRef: React.MutableRefObject<HTMLInputElement | undefined>
) => {
  const [menuPosition, setMenuPosition] = React.useState({
    left: 0,
    top: 0
  })
  React.useEffect(() => {
    if (inputRef.current) {
      const { left, bottom } = inputRef.current.getBoundingClientRect()
      setMenuPosition({ left: left - 18, top: bottom + 10 })
    }
  }, [inputRef])
  return menuPosition
}

export const Sample: Story = () => (
  <Form.VerticalLayout>
    <Text.Heading>
      <h2>Sample form</h2>
    </Text.Heading>

    <TextInput label="Name" placeholder="What's your name?" />

    <TextInput
      label="Alias"
      placeholder="Do you have a nick name?"
      subLabel="*Optional"
    />

    <TextInput
      error
      label="Email address"
      value="steve@example.com"
      subLabel="Not a valid email address"
    />

    <Dropdown
      label="Occupation"
      placeholder="Select your occupation..."
      menu={
        <>
          <Dropdown.Item>Engineer</Dropdown.Item>
          <Dropdown.Item>Craftsperson</Dropdown.Item>
          <Dropdown.Item>Artisan</Dropdown.Item>
          <Dropdown.Item>Creator</Dropdown.Item>
        </>
      }
    />

    <div style={{ display: 'flex' }}>
      <Tag href="http://google.com">Foo</Tag>
      <span style={{ marginRight: core.layout.spacingXSmall }} />
      <Tag href="http://google.com">Bar</Tag>
      <span style={{ marginRight: core.layout.spacingXSmall }} />
      <Tag href="http://google.com">Baz</Tag>
    </div>

    <DatePicker label="String label" />

    <Checkbox checked label="Checkbox selected" value="someVal" />

    <Form.Divider />

    <Radio.Group name="sample">
      <Radio.Button value="full" label="Full-time employement" />
      <Radio.Button value="part" label="Part-time employement" />
    </Radio.Group>

    <Form.Divider />

    <Switch>toggle</Switch>

    <Form.Divider />

    <TextArea label="Comment" placeholder="Anything else to report?" />

    <Form.ButtonRow>
      <Button>Save</Button>
      <Button appearance={Button.appearances.flat}>Cancel</Button>
    </Form.ButtonRow>
  </Form.VerticalLayout>
)

export const NullChildren: Story = () => (
  <Form.VerticalLayout>
    <Text.Heading>
      <h2>With null children</h2>
    </Text.Heading>
    {null}
    <TextInput label="Name" placeholder="What's your name?" />
    {null}
  </Form.VerticalLayout>
)

export const ButtonRowAligns: Story = () => (
  <>
    {Object.values(Form.ButtonRow.aligns).map(align => (
      <Form.VerticalLayout key={align}>
        <div>{align}</div>
        <Form.ButtonRow align={align}>
          <Button>Save</Button>
          <Button appearance={Button.appearances.flat}>Cancel</Button>
        </Form.ButtonRow>
      </Form.VerticalLayout>
    ))}
  </>
)

export const ButtonRowSingleButton: Story = () => (
  <Form.VerticalLayout>
    <Form.ButtonRow>
      <Button>Only One</Button>
    </Form.ButtonRow>
  </Form.VerticalLayout>
)
