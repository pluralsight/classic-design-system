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
  <React.Fragment>
    <Carousel style={{ width: 1200 }}>
      {new Array(11).fill(null).map((_, index) => (
        <MockItem key={index}>item: {index}</MockItem>
      ))}
    </Carousel>

    <br />

    <Carousel style={{ width: 1200 }}>
      {new Array(15).fill(null).map((_, index) => (
        <MockItem key={index}>item: {index}</MockItem>
      ))}
    </Carousel>
  </React.Fragment>
))
