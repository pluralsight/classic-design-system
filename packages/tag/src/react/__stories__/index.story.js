import { action } from '@storybook/addon-actions'
import * as Icon from '@pluralsight/ps-design-system-icon'
import React, { useState } from 'react'
import { storiesOf } from '@storybook/react'

import Tag from '../index.js'

const sizeStory = storiesOf('size', module)
Object.keys(Tag.sizes).forEach(size =>
  sizeStory.add(size, _ => <Tag size={size}>{size}</Tag>)
)

const iconStory = storiesOf('icon', module)
Object.keys(Tag.sizes).forEach(size =>
  iconStory.add(size, _ => (
    <Tag size={size} icon={<Icon.CloseIcon />}>
      With Icon
    </Tag>
  ))
)

const PressedTag = props => {
  const [pressed, setPressed] = useState(true)
  return (
    <Tag isPressed={pressed} {...props} onClick={() => setPressed(!pressed)} />
  )
}

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
    <Tag icon={<Icon.CloseIcon onClick={action('icon clicked')} />}>
      As a button
    </Tag>
  ))
  .add('button w/ icon button', _ => (
    <Tag
      onClick={action('button clicked')}
      icon={<Icon.CloseIcon onClick={action('icon clicked')} />}
    >
      As a button
    </Tag>
  ))

storiesOf('isPressed', module)
  .add('link', _ => (
    <PressedTag href="https://duckduckgo.com/">As a link</PressedTag>
  ))
  .add('button', _ => <PressedTag>As a button</PressedTag>)
  .add('button w/ icon button', _ => (
    <PressedTag icon={<Icon.CloseIcon onClick={action('icon clicked')} />}>
      As a button
    </PressedTag>
  ))
  .add('without click/href', _ => <Tag isPressed>no click/href</Tag>)

storiesOf('long', module)
  .add('string', _ => (
    <Tag>
      This is the string that goes on forever and always. There really isn't an
      end. Wow.
    </Tag>
  ))
  .add('with icon', _ => (
    <Tag icon={<Icon.CheckIcon />}>
      This is the string that goes on forever and always. There really isn't an
      end. Wow.
    </Tag>
  ))

storiesOf('error', module).add('focusable', _ => (
  <Tag onClick={action('button click')} error>
    I have a problem
  </Tag>
))
