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

const gapSizeStories = storiesOf('Halo/gapSizes', module)

for (const size in Halo.gapSizes) {
  gapSizeStories.add(size, _ => (
    <Halo gapSize={size}>
      <Focused>{size}</Focused>
    </Halo>
  ))
}

const shapeStories = storiesOf('Halo/shapes', module)

for (const shape in Halo.shapes) {
  shapeStories.add(shape, _ => (
    <Halo shape={shape}>
      <Focused shape={shape}>{shape}</Focused>
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
