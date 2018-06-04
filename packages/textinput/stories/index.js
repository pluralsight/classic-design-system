import addons from '@storybook/addons'
import core from '@pluralsight/ps-design-system-core'
import Icon from '@pluralsight/ps-design-system-icon/react'
import React from 'react'
import { storiesOf } from '@storybook/react'
import themeDecorator from '@pluralsight/ps-design-system-storybook-addon-theme'

import Input from '../react'

const PaddingDecorator = storyFn => (
  <div style={{ padding: core.layout.spacingLarge }}>{storyFn()}</div>
)

const inputStory = storiesOf('Input', module)
  .addDecorator(PaddingDecorator)
  .addDecorator(themeDecorator(addons))
  .add('default', _ => <Input />)
  .add('placeholder', _ => <Input placeholder="some placeholder" />)
  .add('label', _ => <Input label="Some label" />)
  .add('subLabel', _ => <Input subLabel="Some sublabel" />)
  .add('label and subLabel', _ => (
    <Input label="Some label" subLabel="Some sublabel" />
  ))
Object.keys(Input.appearances).forEach(appearance =>
  Object.keys(Input.iconAligns).forEach(iconAlign =>
    inputStory.add(
      `appearance - ${appearance}; iconAlign - ${iconAlign}`,
      _ => (
        <Input
          appearance={appearance}
          iconAlign={iconAlign}
          icon={<Icon id={Icon.ids.info} />}
          placeholder="The placeholder "
        />
      )
    )
  )
)
Object.keys(Input.appearances).forEach(appearance =>
  inputStory.add(`error - appearance - ${appearance}`, _ => (
    <Input appearance={appearance} error label="Problem field" />
  ))
)
inputStory.add('full width', _ => (
  <div style={{ outline: '1px solid blue', width: '500px' }}>
    <Input label="First" style={{ display: 'block', width: '100%' }} />
    <Input error label="Second" style={{ display: 'block', width: '100%' }} />
    <Input
      appearance={Input.appearances.subtle}
      label="Third"
      style={{ display: 'block', width: '100%' }}
    />
    <Input
      appearance={Input.appearances.subtle}
      error
      label="Fourth"
      style={{ display: 'block', width: '100%' }}
    />
  </div>
))
inputStory
  .add('disabled', _ => (
    <Input
      label="I'm not usable"
      subLabel="Neither am I"
      disabled
      placeholder="I'm untouchable"
    />
  ))
  .add('right-aligned', _ => (
    <div style={{ outline: '1px solid blue' }}>
      <div style={{ display: 'flex', justifyContent: 'flex-end' }}>
        <Input
          placeholder="Search"
          icon={<Icon id={Icon.ids.search} />}
          appearance={Input.appearances.subtle}
        />
      </div>
      <div style={{ border: '3px solid green', height: '50px' }} />
    </div>
  ))
