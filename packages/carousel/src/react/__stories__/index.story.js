import { storiesOf } from '@storybook/react'

import * as glamor from 'glamor'
import React from 'react'

import Carousel from '../index.js'

const MockItem = props => (
  <div
    {...glamor.css({
      alignItems: 'center',
      background: 'pink',
      display: 'flex',
      height: '150px',
      justifyContent: 'center'
    })}
    {...props}
  />
)

storiesOf('Carousel', module).add('working example', _ => (
  <div style={{ margin: 20, maxWidth: 1200 }}>
    <Carousel>
      {new Array(13).fill(null).map((_, index) => (
        <MockItem key={index}>item: {index + 1}</MockItem>
      ))}
    </Carousel>
  </div>
))
