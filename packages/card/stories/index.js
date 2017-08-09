import React from 'react'

import { storiesOf } from '@storybook/react'
import backgrounds from '@storybook/addon-backgrounds'
import { action } from '@storybook/addon-actions'
import core from '@pluralsight/ps-design-system-core'
import { linkTo } from '@storybook/addon-links'

import Card from '../react'

const bg = backgrounds([
  { name: 'product', value: core.colors.gray06, default: true }
])

const sizeStory = storiesOf('size', module).addDecorator(bg)

Object.keys(Card.sizes).forEach(size =>
  sizeStory.add(size, _ =>
    <Card
      size={size}
      title={`${size} Card`}
      metadata1={['Jim Cooper']}
      image={
        <img src="http://lorempixel.com/output/technics-q-c-680-320-6.jpg" />
      }
    />
  )
)
