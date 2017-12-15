import addons from '@storybook/addons'
import React from 'react'
import { storiesOf } from '@storybook/react'
import themeDecorator from '@pluralsight/ps-design-system-storybook-addon-theme'

import Link from '../react'

const appearanceStory = storiesOf('appearance', module).addDecorator(
  themeDecorator(addons)
)

Object.keys(Link.appearances).forEach(appearance =>
  appearanceStory.add(appearance, _ => (
    <p style={{ color: 'white' }}>
      <Link appearance={appearance}>
        <a href="http://duckduckgo.com">Click me</a>
      </Link>
    </p>
  ))
)
