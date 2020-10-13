import React from 'react'
import { storiesOf } from '@storybook/react'

import Halo from '..'
import Focusable from './focusable'

const gapSizeStories = storiesOf('Halo/gapSizes', module)

Object.values(Halo.gapSizes).forEach(size => {
  gapSizeStories.add(size, () => (
    <Halo gapSize={size} visible>
      <Focusable>{size}</Focusable>
    </Halo>
  ))
})

const shapeStories = storiesOf('Halo/shapes', module)

Object.values(Halo.shapes).forEach(shape => {
  shapeStories.add(shape, () => (
    <Halo shape={shape} visible>
      <Focusable shape={shape}>{shape}</Focusable>
    </Halo>
  ))
})

storiesOf('Halo/visible', module)
  .add('true', () => (
    <Halo visible>
      <Focusable>visible</Focusable>
    </Halo>
  ))
  .add('false', () => (
    <Halo visible={false}>
      <Focusable>not visible (until focused)</Focusable>
    </Halo>
  ))
  .add('false & not visibleOnFocus', () => (
    <Halo visible={false} visibleOnFocus={false}>
      <Focusable>really not visible (even on focus)</Focusable>
    </Halo>
  ))
  .add('true & error', () => (
    <Halo visible error>
      <Focusable>visible & error</Focusable>
    </Halo>
  ))
  .add('false & error', () => (
    <Halo visible={false} error>
      <Focusable>not visible (always visible if error) & error</Focusable>
    </Halo>
  ))

storiesOf('Halo/visibleOnFocus', module)
  .add('enabled', () => (
    <Halo visible={false} visibleOnFocus>
      <Focusable>visible when focused</Focusable>
    </Halo>
  ))
  .add('enabled & error', () => (
    <Halo visible={false} visibleOnFocus error>
      <Focusable>visible when focused with error</Focusable>
    </Halo>
  ))

storiesOf('Halo/error', module)
  .add('true', () => (
    <Halo error>
      <Focusable>error</Focusable>
    </Halo>
  ))
  .add('false', () => (
    <Halo>
      <Focusable>not error</Focusable>
    </Halo>
  ))
