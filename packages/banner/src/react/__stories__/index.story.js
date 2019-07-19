import { action } from '@storybook/addon-actions'
import { storiesOf } from '@storybook/react'

import React from 'react'

import Link from '@pluralsight/ps-design-system-link/react.js'
import Banner from '../index.js'

const colorStory = storiesOf('color', module)
Object.keys(Banner.colors).forEach(color =>
  colorStory.add(color, _ => <Banner color={color}>{color}</Banner>)
)

storiesOf('onClick', module)
  .add('displays X', () => (
    <Banner onClick={action('click X')}>this is the text</Banner>
  ))
  .add('w/ long text', () => (
    <Banner onClick={action('click X')}>
      this is the long text. this is the long text. this is the long text. this
      is the long text. this is the long text. this is the long text. this is
      the long text. this is the long text. this is the long text. this is the
      long text. this is the long text. this is the long text.{' '}
    </Banner>
  ))

storiesOf('styling', module)
  .add('style prop ', () => (
    <Banner style={{ outline: '3px solid red' }} onClick={action('click X')}>
      this is the text
    </Banner>
  ))
  .add('className prop ', () => (
    <Banner className="someClass" onClick={action('click X')}>
      this is the text
    </Banner>
  ))
  .add('child anchor tag auto-styled', () => (
    <Banner>
      this is the text with an <a href="https://duckduckgo.com">anchor tag</a>.
    </Banner>
  ))
  .add('child anchor tag auto-styled in yellow', () => (
    <Banner color={Banner.colors.yellow}>
      this is the text with an <a href="https://duckduckgo.com">anchor tag</a>.
    </Banner>
  ))
  .add('child Link component auto-styled', () => (
    <Banner>
      this is the text with an{' '}
      <Link>
        <a href="https://duckduckgo.com">Link component</a>
      </Link>
      .
    </Banner>
  ))
