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
    data-testid="mock-item"
    {...props}
  />
)

storiesOf('Carousel/items', module)
  .add('one item', _ => (
    <Carousel>
      <MockItem>just one item</MockItem>
    </Carousel>
  ))
  .add('two items', _ => (
    <Carousel>
      <MockItem>first item</MockItem>
      <MockItem>second item</MockItem>
    </Carousel>
  ))
  .add('many items', _ => (
    <Carousel>
      {new Array(21).fill(null).map((_, index) => (
        <MockItem key={index}>item: {index + 1}</MockItem>
      ))}
    </Carousel>
  ))

const sizeStories = storiesOf('Carousel/size', module)

Object.values(Carousel.sizes).forEach(size => {
  sizeStories.add(size, _ => (
    <Carousel size={size}>
      {new Array(13).fill(null).map((_, index) => (
        <MockItem key={index}>item: {index + 1}</MockItem>
      ))}
    </Carousel>
  ))
})
