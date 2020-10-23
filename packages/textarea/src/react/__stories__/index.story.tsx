import { action } from '@storybook/addon-actions'
// @ts-ignore: waiting on conversion
import Form from '@pluralsight/ps-design-system-form'
import { storiesOf } from '@storybook/react'

import React from 'react'

import TextArea from '..'

storiesOf('labels', module)
  .add('none', () => <TextArea />)
  .add('placeholder', () => <TextArea placeholder="some placeholder" />)
  .add('label', () => <TextArea label="Some label" />)
  .add('subLabel', () => <TextArea subLabel="Some sublabel" />)
  .add('label and subLabel', () => (
    <TextArea label="Some label" subLabel="Some sublabel" />
  ))
  .add('all', () => (
    <TextArea
      label="Some label"
      subLabel="Some sublabel"
      placeholder="Some placeholder"
    />
  ))

storiesOf('error', module).add('compare', () => (
  <div>
    <TextArea
      label="Normal"
      subLabel="Still normal"
      placeholder="I'm normal, see"
    />
    <TextArea
      label="I'm in an error state"
      subLabel="Here"
      error
      value="Wow, here is all the content wrapped up inside.Wow, here is all the content wrapped up inside.Wow, here is all the content wrapped up inside.   "
    />
  </div>
))

storiesOf('disabled', module).add('compare', () => (
  <div>
    <TextArea
      label="Normal"
      subLabel="Still normal"
      placeholder="I'm normal, see"
    />
    <TextArea
      label="I'm not usable"
      subLabel="Neither am I"
      disabled
      placeholder="I'm untouchable"
    />
  </div>
))

storiesOf('rows', module)
  .add('more than 4', () => <TextArea label="6 Rows of Text" rows={6} />)
  .add('less than 4', () => <TextArea label="Min Height Engages" rows={1} />)

storiesOf('whitelist', module)
  .add('name', () => (
    <TextArea placeholder="I have a form name" name="myFieldNameOfPower" />
  ))
  .add('onChange', () => (
    <TextArea placeholder="Change me" onChange={action('I changed')} />
  ))

storiesOf('layouts', module)
  .add('full width', () => (
    <div style={{ border: '1px solid blue', width: '800px' }}>
      <TextArea
        label="max-width still applies"
        style={{ display: 'block', width: '100%' }}
      />
      <TextArea
        error
        label="remove max-width"
        style={{ display: 'block', width: '100%', maxWidth: 'none' }}
      />
    </div>
  ))
  .add('Form.VerticalLayout', () => (
    <Form.VerticalLayout>
      {[<TextArea key="a" label="Inside Form.VerticalLayout" />]}
    </Form.VerticalLayout>
  ))

storiesOf('focus', module).add('onFocus/onBlur', () => (
  <TextArea
    placeholder="Focus on me!"
    onFocus={action('Focused')}
    onBlur={action('Blurred')}
  />
))
