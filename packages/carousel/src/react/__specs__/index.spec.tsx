import { convertStoriesToJestCases } from '@pluralsight/ps-design-system-util'
import { render } from '@testing-library/react'
import { axe } from 'jest-axe'
import React from 'react'

import Carousel from '../index'
import * as stories from '../__stories__/index.story'
import * as vars from '../../vars/index'

describe('Carousel', () => {
  const cases = convertStoriesToJestCases(stories)

  it('exports sizes', () => {
    expect(Carousel.sizes).toEqual(vars.sizes)
  })

  it('exports a Control component', () => {
    expect(Carousel.Control).toBeDefined()
  })

  describe('with a single item', () => {
    let container: Element
    let pages: NodeList

    beforeEach(() => {
      const { container: _container } = render(
        <Carousel>
          <div />
        </Carousel>
      )

      container = _container

      pages = container.querySelectorAll('[aria-label="carousel"] > ul')
    })

    it('should hide the prev control', () => {
      const page = container.querySelector(
        '[aria-label="get previous carousel page"]'
      )
      expect(page).toBeDefined()
      // eslint-disable-next-line @typescript-eslint/no-unnecessary-type-assertion
      const control = page!.closest('[data-testid="carousel control"]')
      expect(control).toHaveAttribute('hidden')
    })

    it('should hide the next control', () => {
      const page = container.querySelector(
        '[aria-label="get next carousel page"]'
      )
      expect(page).toBeDefined()
      // eslint-disable-next-line @typescript-eslint/no-unnecessary-type-assertion
      const control = page!.closest('[data-testid="carousel control"]')
      expect(control).toHaveAttribute('hidden')
    })

    it('should NOT hide the active page from screen readers', () => {
      expect(pages[0]).not.toHaveAttribute('aria-hidden')
    })
  })

  describe('with multiple items', () => {
    let pages: NodeList

    beforeEach(() => {
      const { container } = render(
        <Carousel>
          <div />
          <div />
          <div />
          <div />
          <div />
          <div />
        </Carousel>
      )

      pages = container.querySelectorAll('[aria-label="carousel"] > ul')
    })

    it('should split items into pages', () => {
      expect(pages).toHaveLength(6)
    })

    it('should move the first page into view', () => {
      const firstPage = pages[0]
      expect(firstPage).toHaveStyle('transform: translate3d(0px, 0, 0);')
    })

    it('should NOT hide the active page from screen readers', () => {
      expect(pages[0]).not.toHaveAttribute('aria-hidden')
    })

    it('should hide inactive pages', () => {
      const inactive = Array.from(pages || []).slice(1)

      for (const page of inactive) {
        expect(page).toHaveAttribute('hidden')
      }
    })
  })

  describe('when on the first page', () => {
    let container: Element

    beforeEach(() => {
      const { container: _container } = render(
        <Carousel data-testid="carousel">
          <div />
          <div />
          <div />
          <div />
          <div />
          <div />
        </Carousel>
      )
      container = _container
    })

    it('should show the next control', () => {
      const btn = container.querySelector(
        '[aria-label="get next carousel page"]'
      )
      expect(btn).toBeDefined()

      const control = btn?.closest('[data-testid="carousel control"]')
      expect(control).not.toHaveAttribute('hidden')
    })

    it('should hide the prev button', () => {
      const btn = container.querySelector(
        '[aria-label="get previous carousel page"]'
      )
      expect(btn).toBeDefined()

      const control = btn?.closest('[data-testid="carousel control"]')
      expect(control).toHaveAttribute('hidden')
    })
  })

  // TODO: enable and fix
  // describe.each(cases)('%s story', (_name, Story) => {
  //   it('has no axe-core violations', async () => {
  //     const { container } = render(<Story {...Story.args} />)
  //     const results = await axe(container)
  //     expect(results).toHaveNoViolations()
  //   })
  // })
})
