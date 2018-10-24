import React from 'react'
import { storiesOf } from '@storybook/react'

import Halo from '../react'
import Focused from './focused'

const appearanceStories = storiesOf('Halo/appearances', module)

for (const appearance in Halo.appearances) {
  appearanceStories.add(appearance, _ => (
    <Halo appearance={appearance}>
      <Focused>{appearance}</Focused>
    </Halo>
  ))
}

storiesOf('Halo/visible', module)
  .add('true', _ => (
    <Halo visible>
      <Focused>visible</Focused>
    </Halo>
  ))
  .add('false', _ => (
    <Halo visible={false}>
      <Focused>not visible</Focused>
    </Halo>
  ))

storiesOf('Halo/visibleOnFocus', module).add('enabled', _ => (
  <Halo visible={false} visibleOnFocus>
    <Focused>visible when focused</Focused>
  </Halo>
))
