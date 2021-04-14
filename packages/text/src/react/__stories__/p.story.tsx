import {
  colorsPink,
  layout,
  colorsBlue
} from '@pluralsight/ps-design-system-core'
import { storiesOf } from '@storybook/react'
import glamorDefault, * as glamorExports from 'glamor'
import React from 'react'

import P from '../p'

const glamor = glamorDefault || glamorExports

const className = glamor
  .css({ color: `${colorsBlue[6]} !important` })
  .toString()

const PaddingDecorator = (storyFn: () => React.ReactNode) => (
  <div style={{ padding: layout.spacingXLarge }}>{storyFn()}</div>
)

const stories = storiesOf('P', module).addDecorator(PaddingDecorator)

Object.keys(P.sizes).forEach(size =>
  stories.add(`size: ${size}`, () => (
    <P size={size as keyof typeof P.sizes}>
      Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur aliquam
      pharetra arcu in commodo. Cras faucibus ex id ligula aliquam, eget porta
      tortor efficitur. Duis eget ultrices ligula. Pellentesque laoreet massa
      interdum, venenatis sem pretium, efficitur enim. Vestibulum id nisi a
      massa tincidunt malesuada vitae non risus. Sed eget convallis libero. Nam
      ac libero luctus, euismod lectus eget, cursus nibh.
    </P>
  ))
)
stories.add('em', () => (
  <P color="secondary">
    Cras faucibus ex id ligula aliquam, eget porta
    <em>this is em</em> tortor efficitur. Duis eget ultrices ligula.
    Pellentesque laoreet massa interdum. Vestibulum id nisi a massa{' '}
    <em>THIS IS EM</em> tincidunt malesuada vitae non risus. cursus nibh.
  </P>
))

stories.add('color: primary', () => (
  <P color="primary">
    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur aliquam
    pharetra arcu in commodo. Cras faucibus ex id ligula aliquam, eget porta
    tortor efficitur. Duis eget ultrices ligula. Pellentesque laoreet massa
    interdum, venenatis sem pretium, efficitur enim. Vestibulum id nisi a massa
    tincidunt malesuada vitae non risus. Sed eget convallis libero. Nam ac
    libero luctus, euismod lectus eget, cursus nibh.
  </P>
))
stories.add('color: secondary', () => (
  <P color="secondary">
    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur aliquam
    pharetra arcu in commodo. Cras faucibus ex id ligula aliquam, eget porta
    tortor efficitur. Duis eget ultrices ligula. Pellentesque laoreet massa
    interdum, venenatis sem pretium, efficitur enim. Vestibulum id nisi a massa
    tincidunt malesuada vitae non risus. Sed eget convallis libero. Nam ac
    libero luctus, euismod lectus eget, cursus nibh.
  </P>
))

stories.add('style override', () => (
  <P style={{ color: colorsPink[6] }}>
    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur aliquam
    pharetra arcu in commodo. Cras faucibus ex id ligula aliquam, eget porta
    tortor efficitur. Duis eget ultrices ligula. Pellentesque laoreet massa
    interdum, venenatis sem pretium, efficitur enim. Vestibulum id nisi a massa
    tincidunt malesuada vitae non risus. Sed eget convallis libero. Nam ac
    libero luctus, euismod lectus eget, cursus nibh.
  </P>
))

stories.add('className override', () => (
  <P className={className}>
    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur aliquam
    pharetra arcu in commodo. Cras faucibus ex id ligula aliquam, eget porta
    tortor efficitur. Duis eget ultrices ligula. Pellentesque laoreet massa
    interdum, venenatis sem pretium, efficitur enim. Vestibulum id nisi a massa
    tincidunt malesuada vitae non risus. Sed eget convallis libero. Nam ac
    libero luctus, euismod lectus eget, cursus nibh.
  </P>
))
