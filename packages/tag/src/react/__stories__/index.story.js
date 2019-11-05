import { action } from '@storybook/addon-actions'
import Icon from '@pluralsight/ps-design-system-icon'
import React from 'react'
import { storiesOf } from '@storybook/react'

import Tag from '../index.js'

const sizeStory = storiesOf('size', module)
Object.keys(Tag.sizes).forEach(size =>
  sizeStory.add(size, _ => <Tag size={size}>{size}</Tag>)
)

const iconStory = storiesOf('icon', module)
Object.keys(Tag.sizes).forEach(size =>
  iconStory.add(size, _ => (
    <Tag size={size} icon={<Icon id={Icon.ids.close} />}>
      With Icon
    </Tag>
  ))
)

storiesOf('actions', module)
  .add('link', _ => <Tag href="https://duckduckgo.com/">As a link</Tag>)
  .add('link with target', _ => (
    <Tag target="_blank" href="https://duckduckgo.com/">
      Opens in new window
    </Tag>
  ))
  .add('button', _ => <Tag onClick={action('button clicked')}>As a button</Tag>)
  .add('small button', _ => (
    <Tag size={Tag.sizes.small} onClick={action('button clicked')}>
      As a button
    </Tag>
  ))
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

storiesOf('isPressed', module)
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

storiesOf('long', module)
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

storiesOf('error', module).add('focusable', _ => (
  <Tag onClick={action('button click')} error>
    I have a problem
  </Tag>
))
