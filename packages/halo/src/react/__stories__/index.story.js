import React from 'react'
import { storiesOf } from '@storybook/react'

import Halo from '../index.js'
import Focusable from './focusable.js'

const gapSizeStories = storiesOf('Halo/gapSizes', module)

Object.keys(Halo.gapSizes).forEach(size => {
  gapSizeStories.add(size, _ => (
    <Halo gapSize={size} visible>
      <Focusable>{size}</Focusable>
    </Halo>
  ))
})

const shapeStories = storiesOf('Halo/shapes', module)

Object.keys(Halo.shapes).forEach(shape => {
  shapeStories.add(shape, _ => (
    <Halo shape={shape} visible>
      <Focusable shape={shape}>{shape}</Focusable>
    </Halo>
  ))
})

storiesOf('Halo/visible', module)
  .add('true', _ => (
    <Halo visible>
      <Focusable>visible</Focusable>
    </Halo>
  ))
  .add('false', _ => (
    <Halo visible={false}>
      <Focusable>not visible (until focused)</Focusable>
    </Halo>
  ))
  .add('false & not visibleOnFocus', _ => (
    <Halo visible={false} visibleOnFocus={false}>
      <Focusable>really not visible (even on focus)</Focusable>
    </Halo>
  ))
  .add('true & error', _ => (
    <Halo visible error>
      <Focusable>visible & error</Focusable>
    </Halo>
  ))
  .add('false & error', _ => (
    <Halo visible={false} error>
      <Focusable>not visible (always visible if error) & error</Focusable>
    </Halo>
  ))

storiesOf('Halo/visibleOnFocus', module)
  .add('enabled', _ => (
    <Halo visible={false} visibleOnFocus>
      <Focusable>visible when focused</Focusable>
    </Halo>
  ))
  .add('enabled & error', _ => (
    <Halo visible={false} visibleOnFocus error>
      <Focusable>visible when focused with error</Focusable>
    </Halo>
  ))

storiesOf('Halo/error', module)
  .add('true', _ => (
    <Halo error>
      <Focusable>error</Focusable>
    </Halo>
  ))
  .add('false', _ => (
    <Halo>
      <Focusable>not error</Focusable>
    </Halo>
  ))
