import { action } from '@storybook/addon-actions'
import Form from '@pluralsight/ps-design-system-form'
import { storiesOf } from '@storybook/react'

import React from 'react'

import TextInput from '../index.js'

storiesOf('labels', module)
  .add('none', _ => <TextInput />)
  .add('placeholder', _ => <TextInput placeholder="some placeholder" />)
  .add('label', _ => <TextInput label="Some label" />)
  .add('subLabel', _ => <TextInput subLabel="Some sublabel" />)
  .add('label and subLabel', _ => (
    <TextInput label="Some label" subLabel="Some sublabel" />
  ))
  .add('all', _ => (
    <TextInput
      label="Some label"
      subLabel="Some sublabel"
      placeholder="Some placeholder"
    />
  ))

storiesOf('error', module).add('compare', _ => (
  <div>
    <TextInput
      label="Normal"
      subLabel="Still normal"
      placeholder="I'm normal, see"
    />
    <TextInput
      label="I'm in an error state"
      subLabel="Here"
      error
      value="Wow, here is all the content wrapped up inside.Wow, here is all the content wrapped up inside.Wow, here is all the content wrapped up inside.   "
    />
  </div>
))

storiesOf('disabled', module).add('compare', _ => (
  <div>
    <TextInput
      label="Normal"
      subLabel="Still normal"
      placeholder="I'm normal, see"
    />
    <TextInput
      label="I'm not usable"
      subLabel="Neither am I"
      disabled
      placeholder="I'm untouchable"
    />
  </div>
))

storiesOf('rows', module)
  .add('more than 4', _ => <TextInput label="6 Rows of Text" rows={6} />)
  .add('less than 4', _ => <TextInput label="Min Height Engages" rows={1} />)

storiesOf('whitelist', module)
  .add('name', _ => (
    <TextInput placeholder="I have a form name" name="myFieldNameOfPower" />
  ))
  .add('onChange', _ => (
    <TextInput placeholder="Change me" onChange={action('I changed')} />
  ))

storiesOf('layouts', module)
  .add('full width', _ => (
    <div style={{ border: '1px solid blue', width: '800px' }}>
      <TextInput
        label="max-width still applies"
        style={{ display: 'block', width: '100%' }}
      />
      <TextInput
        error
        label="remove max-width"
        style={{ display: 'block', width: '100%', maxWidth: 'none' }}
      />
    </div>
  ))
  .add('Form.VerticalLayout', () => (
    <Form.VerticalLayout>
      {[<TextInput key="a" label="Inside Form.VerticalLayout" />]}
    </Form.VerticalLayout>
  ))

storiesOf('focus', module).add('onFocus/onBlur', _ => (
  <TextInput
    placeholder="Focus on me!"
    onFocus={action('Focused')}
    onBlur={action('Blurred')}
  />
))
