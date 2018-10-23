import React from 'react'
import { storiesOf } from '@storybook/react'

import Halo from '../react'
import Focused from './focused'

const appearanceStories = storiesOf('Halo/appearances', module)
const errorStories = storiesOf('Halo/appearances-w-error', module)

for (const appearance in Halo.appearances) {
  appearanceStories.add(appearance, _ => (
    <Halo appearance={appearance}>
      <Focused>{appearance}</Focused>
    </Halo>
  ))

  errorStories.add(appearance, _ => (
    <Halo appearance={appearance} error>
      <Focused>{appearance} error</Focused>
    </Halo>
  ))
}
