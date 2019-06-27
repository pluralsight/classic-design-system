import React from 'react'
import { render } from 'react-testing-library'

import Carousel from '../index.js'

describe('Carousel', () => {
  it('renders', () => {
    render(
      <Carousel>
        <div />
        <div />
        <div />
        <div />
      </Carousel>
    )
  })
})
