import { action } from '@storybook/addon-actions'
import addons from '@storybook/addons'
import core from '@pluralsight/ps-design-system-core'
import React from 'react'
import { storiesOf } from '@storybook/react'
import themeDecorator from '@pluralsight/ps-design-system-storybook-addon-theme'

// Form controls:
import ActionMenu from '@pluralsight/ps-design-system-actionmenu/react'
import Button from '@pluralsight/ps-design-system-button/react'
import Text from '@pluralsight/ps-design-system-text/react'
import TextInput from '@pluralsight/ps-design-system-textinput/react'
import TextArea from '@pluralsight/ps-design-system-textarea/react'
import Radio from '@pluralsight/ps-design-system-radio/react'
import Checkbox from '@pluralsight/ps-design-system-checkbox/react'
import Dropdown from '@pluralsight/ps-design-system-dropdown/react'

import Form from '../react'

const PaddingDecorator = storyFn => (
  <div style={{ padding: core.layout.spacingLarge, width: '50%' }}>
    {storyFn()}
  </div>
)
const FormContainer = storyFn => (
  <div style={{ border: '1px solid blue' }}>{storyFn()}</div>
)

const sampleFormStory = storiesOf('Sample Form', module)
  .addDecorator(FormContainer)
  .addDecorator(PaddingDecorator)
  .addDecorator(themeDecorator(addons))
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
      <Checkbox checked label="Checkbox selected" value="someVal" />
      <Form.Divider />
      <Radio.Group>
        <Radio.Button value="full" label="Full-time employement" />
        <Radio.Button value="part" label="Part-time employement" />
      </Radio.Group>
      <Form.Divider />
      <TextArea label="Comment" placeholder="Anything else to report?" />
      <Form.ButtonRow>
        <Button>Save</Button>
        <Button appearance={Button.appearances.flat}>Cancel</Button>
      </Form.ButtonRow>
    </Form.VerticalLayout>
  ))
