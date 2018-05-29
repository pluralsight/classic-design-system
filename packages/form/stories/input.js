import addons from '@storybook/addons'
import core from '@pluralsight/ps-design-system-core'
import React from 'react'
import { storiesOf } from '@storybook/react'
import themeDecorator from '@pluralsight/ps-design-system-storybook-addon-theme'

import { Input } from '../react'

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
  inputStory.add(`appearance - ${appearance}`, _ => (
    <Input appearance={appearance} placeholder="The placeholder " />
  ))
)
