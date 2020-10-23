import React from 'react'

import { storiesOf } from '@storybook/react'

import * as core from '@pluralsight/ps-design-system-core'

// Form controls:
import ActionMenu from '@pluralsight/ps-design-system-actionmenu'
import Button from '@pluralsight/ps-design-system-button'
import Checkbox from '@pluralsight/ps-design-system-checkbox'
import DatePicker from '@pluralsight/ps-design-system-datepicker'
import Dropdown from '@pluralsight/ps-design-system-dropdown'
import Radio from '@pluralsight/ps-design-system-radio'
import Switch from '@pluralsight/ps-design-system-switch'
import Tag from '@pluralsight/ps-design-system-tag'
import * as Text from '@pluralsight/ps-design-system-text'
import TextArea from '@pluralsight/ps-design-system-textarea'
import TextInput from '@pluralsight/ps-design-system-textinput'

import Form from '..'

const PaddingDecorator = storyFn => (
  <div style={{ padding: core.layout.spacingLarge, width: '50%' }}>
    {storyFn()}
  </div>
)
const FormContainer = storyFn => (
  <div style={{ border: '1px solid blue' }}>{storyFn()}</div>
)

storiesOf('Sample Form', module)
  .addDecorator(FormContainer)
  .addDecorator(PaddingDecorator)
  .add('sample', _ => (
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
          <ActionMenu>
            <ActionMenu.Item>Engineer</ActionMenu.Item>
            <ActionMenu.Item>Craftsperson</ActionMenu.Item>
            <ActionMenu.Item>Artisan</ActionMenu.Item>
            <ActionMenu.Item>Creator</ActionMenu.Item>
          </ActionMenu>
        }
      />

      <div style={{ display: 'flex' }}>
        <Tag href="http://google.com">Foo</Tag>
        <span style={{ marginRight: core.layout.spacingXSmall }} />
        <Tag href="http://google.com">Bar</Tag>
        <span style={{ marginRight: core.layout.spacingXSmall }} />
        <Tag href="http://google.com">Baz</Tag>
      </div>

      <DatePicker label="Choose a Date" />

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
  ))
  .add('null children', _ => (
    <Form.VerticalLayout>
      <Text.Heading>
        <h2>Sample form</h2>
      </Text.Heading>

      <TextInput label="Name" placeholder="What's your name?" />

      {null}

      <TextInput
        label="Alias"
        placeholder="Do you have a nick name?"
        subLabel="*Optional"
      />

      {null}

      <Form.Divider />

      <TextArea label="Comment" placeholder="Anything else to report?" />

      <Form.ButtonRow>
        <Button>Save</Button>
        <Button appearance={Button.appearances.flat}>Cancel</Button>
      </Form.ButtonRow>
    </Form.VerticalLayout>
  ))

const alignsStories = storiesOf('Form.ButtonRow | aligns', module)
  .addDecorator(FormContainer)
  .addDecorator(PaddingDecorator)

Object.keys(Form.ButtonRow.aligns).forEach(a =>
  alignsStories.add(a, _ => (
    <Form.VerticalLayout>
      <div>form stuff</div>
      <Form.ButtonRow align={a}>
        <Button>Save</Button>
        <Button appearance={Button.appearances.flat}>Cancel</Button>
      </Form.ButtonRow>
    </Form.VerticalLayout>
  ))
)

storiesOf('Form.ButtonRow', module)
  .addDecorator(FormContainer)
  .addDecorator(PaddingDecorator)
  .add('single form element with single button', _ => (
    <Form.VerticalLayout>
      <Form.ButtonRow>
        <Button>Only One</Button>
      </Form.ButtonRow>
    </Form.VerticalLayout>
  ))
