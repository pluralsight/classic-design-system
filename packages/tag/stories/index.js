import { action } from '@storybook/addon-actions'
import addons from '@storybook/addons'
import core from '@pluralsight/ps-design-system-core'
import Icon from '@pluralsight/ps-design-system-icon/react'
import React from 'react'
import { storiesOf } from '@storybook/react'
import themeDecorator from '@pluralsight/ps-design-system-storybook-addon-theme'

import Tag from '../react'

const appearanceStory = storiesOf('appearance', module).addDecorator(
  themeDecorator(addons)
)
Object.keys(Tag.appearances).forEach(app =>
  appearanceStory.add(app, _ => <Tag appearance={app}>{app}</Tag>)
)

const sizeStory = storiesOf('size', module).addDecorator(themeDecorator(addons))
Object.keys(Tag.sizes).forEach(size =>
  sizeStory.add(size, _ => <Tag size={size}>{size}</Tag>)
)

const iconStory = storiesOf('icon', module).addDecorator(themeDecorator(addons))
Object.keys(Tag.appearances).forEach(app =>
  Object.keys(Tag.sizes).forEach(size =>
    iconStory.add(`${app} ${size}`, _ => (
      <Tag appearance={app} size={size} icon={<Icon id={Icon.ids.close} />}>
        With Icon
      </Tag>
    ))
  )
)

const actionsStory = storiesOf('actions', module)
  .addDecorator(themeDecorator(addons))
  .add('link', _ => <Tag href="https://duckduckgo.com/">As a link</Tag>)
  .add('link with target', _ => (
    <Tag target="_blank" href="https://duckduckgo.com/">
      Opens in new window
    </Tag>
  ))
  .add('button', _ => <Tag onClick={action('button clicked')}>As a button</Tag>)
  .add('just icon button', _ => (
    <Tag icon={<Icon id={Icon.ids.close} onClick={action('icon clicked')} />}>
      As a button
    </Tag>
  ))
  .add('button w/ icon button', _ => (
    <Tag
      onClick={action('button clicked')}
      icon={<Icon id={Icon.ids.close} onClick={action('icon clicked')} />}
    >
      As a button
    </Tag>
  ))

const pressedStory = storiesOf('isPressed', module)
  .addDecorator(themeDecorator(addons))
  .add('link', _ => (
    <Tag isPressed href="https://duckduckgo.com/">
      As a link
    </Tag>
  ))
  .add('button', _ => (
    <Tag isPressed onClick={action('button clicked')}>
      As a button
    </Tag>
  ))
  .add('button w/ icon button', _ => (
    <Tag
      isPressed
      onClick={action('button clicked')}
      icon={<Icon id={Icon.ids.close} onClick={action('icon clicked')} />}
    >
      As a button
    </Tag>
  ))

const longStory = storiesOf('long', module)
  .addDecorator(themeDecorator(addons))
  .add('string', _ => (
    <Tag>
      This is the string that goes on forever and always. There really isn't an
      end. Wow.
    </Tag>
  ))
  .add('with icon', _ => (
    <Tag icon={<Icon id={Icon.ids.check} />}>
      This is the string that goes on forever and always. There really isn't an
      end. Wow.
    </Tag>
  ))

const errorStory = storiesOf('error', module)
  .addDecorator(themeDecorator(addons))
  .add('default', _ => <Tag error>I have a problem</Tag>)
  .add('focusable', _ => (
    <Tag onClick={action('button click')} error>
      I have a problem
    </Tag>
  ))
