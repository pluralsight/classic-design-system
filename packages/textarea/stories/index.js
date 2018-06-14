import { action } from '@storybook/addon-actions'
import addons from '@storybook/addons'
import core from '@pluralsight/ps-design-system-core'
import Icon from '@pluralsight/ps-design-system-icon/react'
import React from 'react'
import { storiesOf } from '@storybook/react'
import themeDecorator from '@pluralsight/ps-design-system-storybook-addon-theme'

import TextInput from '../react'

const PaddingDecorator = storyFn => (
  <div style={{ padding: core.layout.spacingLarge }}>{storyFn()}</div>
)

const labelStory = storiesOf('labels', module)
  .addDecorator(PaddingDecorator)
  .addDecorator(themeDecorator(addons))
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

const errorStory = storiesOf('error', module)
  .addDecorator(PaddingDecorator)
  .addDecorator(themeDecorator(addons))
  .add('compare', _ => (
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

const disabledStory = storiesOf('disabled', module)
  .addDecorator(PaddingDecorator)
  .addDecorator(themeDecorator(addons))
  .add('compare', _ => (
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

const rowsStory = storiesOf('rows', module)
  .addDecorator(PaddingDecorator)
  .addDecorator(themeDecorator(addons))
  .add('more than 4', _ => <TextInput label="6 Rows of Text" rows={6} />)
  .add('less than 4', _ => <TextInput label="Min Height Engages" rows={1} />)

const whitelistStory = storiesOf('whitelist', module)
  .addDecorator(PaddingDecorator)
  .addDecorator(themeDecorator(addons))
  .add('name', _ => (
    <TextInput placeholder="I have a form name" name="myFieldNameOfPower" />
  ))
  .add('onChange', _ => (
    <TextInput placeholder="Change me" onChange={action('I changed')} />
  ))

const layoutsStory = storiesOf('layouts', module)
  .addDecorator(PaddingDecorator)
  .addDecorator(themeDecorator(addons))
  .add('full width', _ => (
    <div style={{ border: '1px solid blue', width: '500px' }}>
      <TextInput label="First" style={{ display: 'block', width: '100%' }} />
      <TextInput
        error
        label="Second"
        style={{ display: 'block', width: '100%' }}
      />
    </div>
  ))
