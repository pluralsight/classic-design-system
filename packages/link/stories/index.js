import backgrounds from '@storybook/addon-backgrounds'
import core from '@pluralsight/ps-design-system-core'
import React from 'react'
import ReactDOM from 'react-dom'
import { storiesOf } from '@storybook/react'

import Link from '../react'

const bg = backgrounds([
  { name: 'product', value: core.colors.gray06, default: true }
])

const appearanceStory = storiesOf('appearance', module).addDecorator(bg)

Object.keys(Link.appearances).forEach(appearance =>
  appearanceStory.add(appearance, _ => (
    <p style={{ color: 'white' }}>
      <Link appearance={appearance}>
        <a href="http://duckduckgo.com">Click me</a>
      </Link>
    </p>
  ))
)
