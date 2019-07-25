import React from 'react'
import { storiesOf } from '@storybook/react'

import Link from '../index.js'

const appearanceStory = storiesOf('appearance', module)

Object.keys(Link.appearances).forEach(appearance =>
  appearanceStory.add(appearance, _ => (
    <p style={{ color: 'white' }}>
      <Link appearance={appearance}>
        <a href="http://duckduckgo.com">Click me</a>
      </Link>
    </p>
  ))
)
