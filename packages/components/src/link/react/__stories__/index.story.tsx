import { storiesOf } from '@storybook/react'
import { ValueOf } from '../../../util'
import React from 'react'

import { Link } from '../index'

const appearanceStory = storiesOf('appearance', module)

Object.keys(Link.appearances).forEach(appearance =>
  appearanceStory.add(appearance, () => (
    <p style={{ color: 'white' }}>
      <Link appearance={appearance as ValueOf<typeof Link.appearances>}>
        <a href="http://duckduckgo.com">Click me</a>
      </Link>
    </p>
  ))
)

storiesOf('tagNames', module).add('button', () => (
  <p style={{ color: 'white' }}>
    <Link>
      <button>Click me</button>
    </Link>
  </p>
))

storiesOf('css only', module).add('hover', () => (
  <p style={{ color: 'white' }}>
    This is a css-styled anchor tag{' '}
    <a
      href="#"
      className="psds-link psds-button--2020-colors psds-link--appearance-default psds-theme--light"
    >
      anchor
    </a>
    .
  </p>
))
