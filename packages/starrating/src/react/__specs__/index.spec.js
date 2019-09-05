import { render } from '@testing-library/react'
import React from 'react'

import StarRating from '../index.js'

describe('StarRating', () => {
  function collectStarNodes(container) {
    const nodeList = container.querySelectorAll('span, button')

    return [...nodeList].filter(node => {
      const label = node.getAttribute('aria-label')
      return label && label.includes('Rate')
    })
  }

  it('forwards refs', () => {
    const ref = React.createRef()
    render(<StarRating ref={ref} />)

    expect(ref.current).not.toBeNull()
  })

  describe('with default props', () => {
    let container, stars

    beforeEach(() => {
      ;({ container } = render(<StarRating />))
      stars = collectStarNodes(container)
    })

    it('renders stars as NOT interactive(span NOT button)', () => {
      expect.assertions(5)

      stars.forEach(node => {
        expect(node.tagName.toLowerCase()).toBe('span')
      })
    })
  })

  describe('with onChange prop', () => {
    let container, stars

    beforeEach(() => {
      const handleChange = jest.fn()
      ;({ container } = render(<StarRating onChange={handleChange} />))
      stars = collectStarNodes(container)
    })

    it('renders stars as interactive(button NOT span)', () => {
      expect.assertions(5)

      stars.forEach(node => {
        expect(node.tagName.toLowerCase()).toBe('button')
      })
    })
  })
})
