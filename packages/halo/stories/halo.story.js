import React from 'react'
import { storiesOf } from '@storybook/react'

import Halo from '../react'
import Focusable from './focusable'

const appearanceStories = storiesOf('Halo/appearances', module)

for (const appearance in Halo.appearances) {
  appearanceStories.add(appearance, _ => (
    <Halo appearance={appearance}>
      <Focusable>{appearance}</Focusable>
    </Halo>
  ))
}

const gapSizeStories = storiesOf('Halo/gapSizes', module)

for (const size in Halo.gapSizes) {
  gapSizeStories.add(size, _ => (
    <Halo gapSize={size}>
      <Focusable>{size}</Focusable>
    </Halo>
  ))
}

const shapeStories = storiesOf('Halo/shapes', module)

for (const shape in Halo.shapes) {
  shapeStories.add(shape, _ => (
    <Halo shape={shape}>
      <Focusable shape={shape}>{shape}</Focusable>
    </Halo>
  ))
}

storiesOf('Halo/visible', module)
  .add('true', _ => (
    <Halo visible>
      <Focusable>visible</Focusable>
    </Halo>
  ))
  .add('false', _ => (
    <Halo visible={false}>
      <Focusable>not visible</Focusable>
    </Halo>
  ))

storiesOf('Halo/visibleOnFocus', module).add('enabled', _ => (
  <Halo visible={false} visibleOnFocus>
    <Focusable>visible when focused</Focusable>
  </Halo>
))
