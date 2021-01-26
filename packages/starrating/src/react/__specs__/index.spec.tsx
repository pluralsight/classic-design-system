import { render } from '@testing-library/react'
import React from 'react'

import StarRating from '..'

describe('StarRating', () => {
  function collectStarNodes(container: Element) {
    const nodeList = container.querySelectorAll('span, button')

    return [...((nodeList as unknown) as Element[])].filter(node => {
      const label = node.getAttribute('title')
      return label && label.includes('Rate')
    })
  }

  it('forwards refs', () => {
    const ref = React.createRef<HTMLDivElement>()
    render(<StarRating ref={ref} />)

    expect(ref.current).not.toBeNull()
  })

  describe('with default props', () => {
    it('renders stars as NOT interactive(span NOT button)', () => {
      const { container } = render(<StarRating />)
      const stars = collectStarNodes(container)
      expect.assertions(5)

      stars.forEach(node => {
        expect(node.tagName.toLowerCase()).toBe('span')
      })
    })

    it('hides the individual stars from screen readers', () => {
      const { container } = render(<StarRating />)
      const stars = collectStarNodes(container)

      stars.forEach(node => {
        expect(node.getAttribute('aria-hidden')).toBe('true')
      })
    })
  })

  describe('with onChange prop', () => {
    it('renders stars as interactive(button NOT span)', () => {
      const handleChange = jest.fn()
      const { container } = render(<StarRating onChange={handleChange} />)
      const stars = collectStarNodes(container)
      expect.assertions(5)

      stars.forEach(node => {
        expect(node.tagName.toLowerCase()).toBe('button')
      })
    })
  })
})
