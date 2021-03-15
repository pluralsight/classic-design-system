import { render } from '@testing-library/react'
import React from 'react'

import * as vars from '../../vars/index.js'

import Avatar from '../index.js'

describe('Avatar', () => {
  describe('.sizes', () => {
    it('exists', () => {
      expect(Avatar.sizes).toEqual(vars.sizes)
    })
  })

  describe('.widths', () => {
    it('exists', () => {
      expect(Avatar.widths).toEqual(vars.widths)
    })
  })

  it('should forward className', () => {
    const { getByTestId } = render(
      <Avatar data-testid="under-test" className="testclass" />
    )

    const el = getByTestId('under-test')
    expect(el).toHaveClass('testclass')
  })

  it('should forward ref', () => {
    const ref = React.createRef<HTMLDivElement>()

    render(<Avatar ref={ref} />)

    expect(ref).not.toBeNull()
  })

  describe('with an image src and an alt attr', () => {
    let container
    let el: HTMLDivElement
    let image: HTMLImageElement

    beforeEach(() => {
      ;({ container } = render(<Avatar alt="alt text" src="//something.png" />))

      el = container.querySelector('div')!
      image = container.querySelector('img')!
    })

    it('should passes the alt attr to the image', () => {
      expect(image).toHaveAttribute('alt', 'alt text')
    })

    it('should be visible to screen readers', () => {
      expect(el).not.toHaveAttribute('aria-hidden')
    })
  })

  describe('with an image src and NO alt attr', () => {
    it('should be hidden from screen readers', () => {
      const { container } = render(<Avatar src="//something.png" />)
      const el = container.querySelector('div')

      expect(el).toHaveAttribute('aria-hidden')
    })
  })

  describe('WITHOUT an image src', () => {
    const name = 'Benedict Cumberbatch'
    let container
    let el: HTMLDivElement
    let initials: HTMLDivElement

    beforeEach(() => {
      ;({ container } = render(<Avatar name={name} />))

      el = container.querySelector('div')!
      initials = el.querySelector<HTMLDivElement>('div:last-child')!
    })

    it('displays initial', () => {
      expect(initials).toHaveTextContent('B')
    })

    it('add the name as an aria-label', () => {
      expect(initials).toHaveAttribute('aria-label', name)
    })

    it('should NOT be hidden from screen readers', () => {
      expect(el).not.toHaveAttribute('aria-hidden')
    })
  })
})
