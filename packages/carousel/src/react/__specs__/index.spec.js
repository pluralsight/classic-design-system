import React from 'react'
import { render } from 'react-testing-library'

import Carousel from '../index.js'

describe('Carousel', () => {
  it('exports sizes', () => {
    expect(Carousel.sizes).toMatchInlineSnapshot(`
Object {
  "narrow": "narrow",
  "wide": "wide",
}
`)
  })

  it('exports a Control component', () => {
    expect(Carousel.Control).toBeDefined()
  })

  describe('with multiple pages', () => {
    let pages

    beforeEach(() => {
      const { container } = render(
        <div style={{ width: '1600px' }}>
          <Carousel data-testid="carousel">
            <div />
            <div />
            <div />
            <div />
            <div />
            <div />
          </Carousel>
        </div>
      )

      pages = container.querySelectorAll('[data-testid="carousel__page"]')
    })

    it('should split items into pages', () => {
      expect(pages).toHaveLength(6)
    })

    it('should move the first page into view', () => {
      const firstPage = pages[0]
      expect(firstPage).toHaveStyle('transform: translate3d(0px, 0, 0);')
    })
  })
})
