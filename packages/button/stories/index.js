import backgrounds from '@storybook/addon-backgrounds'
import core from '@pluralsight/ps-design-system-core'
import Icon from '@pluralsight/ps-design-system-icon/react'
import React from 'react'
import { storiesOf } from '@storybook/react'

import Button from '../react'

const bg = backgrounds([
  { name: 'product', value: core.colors.gray06, default: true }
])

const appearanceStory = storiesOf('appearance', module).addDecorator(bg)
appearanceStory.add('default', _ => <Button>Click me</Button>)
Object.keys(Button.appearances).forEach(app =>
  appearanceStory.add(app, _ => <Button appearance={app}>Click me</Button>)
)

const sizeStory = storiesOf('size', module).addDecorator(bg)
Object.keys(Button.sizes).forEach(size =>
  sizeStory.add(size, _ => <Button size={size}>Click me</Button>)
)

const iconStory = storiesOf('icon', module)
  .addDecorator(bg)
  .add('default', _ => (
    <Button icon={<Icon id={Icon.ids.check} />}>With Icon</Button>
  ))
Object.keys(Button.appearances).forEach(app =>
  iconStory.add(app, _ => (
    <Button appearance={app} icon={<Icon id={Icon.ids.check} />}>
      With Icon
    </Button>
  ))
)
Object.keys(Button.iconAligns).forEach(iconAlign =>
  iconStory.add(iconAlign, _ => (
    <Button iconAlign={iconAlign} icon={<Icon id={Icon.ids.check} />}>
      With Icon
    </Button>
  ))
)
Object.keys(Button.sizes).forEach(size =>
  iconStory.add(size, _ => (
    <Button size={size} icon={<Icon id={Icon.ids.check} />}>
      With Icon
    </Button>
  ))
)
iconStory.add('lone default', _ => (
  <Button icon={<Icon id={Icon.ids.check} />} />
))
Object.keys(Button.appearances).forEach(app =>
  Object.keys(Button.sizes).forEach(size =>
    iconStory.add(`lone ${app} ${size}`, _ => (
      <Button
        appearance={app}
        size={size}
        icon={<Icon id={Icon.ids.check} />}
      />
    ))
  )
)

const disabledStory = storiesOf('disabled', module)
  .addDecorator(bg)
  .add('default', _ => <Button disabled>Disabled</Button>)
Object.keys(Button.appearances).forEach(app =>
  disabledStory.add(app, _ => (
    <Button disabled appearance={app}>
      Disabled
    </Button>
  ))
)
disabledStory.add('with icon', _ => (
  <Button disabled icon={<Icon id={Icon.ids.pencil} />}>
    Disabled
  </Button>
))

const asLink = storiesOf('as link', module)
  .addDecorator(bg)
  .add('default', _ => (
    <Button href="https://duckduckgo.com">Click as link</Button>
  ))
  .add('with icon', _ => (
    <Button href="https://duckduckgo.com" icon={<Icon id={Icon.ids.pencil} />}>
      Click as link
    </Button>
  ))
