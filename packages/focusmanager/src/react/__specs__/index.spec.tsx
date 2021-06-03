/* eslint-disable @typescript-eslint/no-unnecessary-type-assertion */
import React from 'react'
import { fireEvent, render } from '@testing-library/react'

import { FocusManager } from '../index'

describe('FocusManager', () => {
  beforeEach(() => (document.activeElement as HTMLElement).blur())

  it('has defaultProps', () => {
    expect(FocusManager.defaultProps).toMatchInlineSnapshot(`undefined`)
  })

  it('renders', () => {
    const { getByTestId } = render(
      <FocusManager data-testid="mock-component" />
    )

    expect(getByTestId('mock-component')).toBeInTheDocument()
  })

  it('forwards refs', () => {
    const ref = React.createRef<HTMLDivElement>()

    render(<FocusManager ref={ref} />)

    expect(ref.current).not.toBeNull()
  })

  describe('when returnFocus is enabled', () => {
    it('returns focus to the prev active element', () => {
      const button = document.createElement('button')
      document.body.appendChild(button)
      button.focus()
      const { container, unmount } = render(
        <FocusManager>
          <ul>
            <li>
              <a href="#">first</a>
            </li>
          </ul>
        </FocusManager>
      )
      const link = container.querySelectorAll('li>a')[0]
      expect(link).toEqual(document.activeElement)

      unmount()

      expect(button).toEqual(document.activeElement)
    })
  })

  describe('when autofocus is enabled', () => {
    it('focuses the first focusable child', () => {
      const { container } = render(
        <FocusManager>
          <ul>
            <li>
              <a href="#">first</a>
            </li>
            <li>
              <a href="#">second</a>
            </li>
          </ul>
        </FocusManager>
      )

      const links = container.querySelectorAll('li>a')
      expect(links[0]).toBe(document.activeElement)
    })

    it('focuses parent if children are not focusable', () => {
      const { container } = render(
        <FocusManager>
          <ul>
            <li>first</li>
            <li>second</li>
          </ul>
        </FocusManager>
      )

      expect(container.childNodes[0]).toBe(document.activeElement)
    })
  })

  describe('when autofocus is NOT enabled', () => {
    it('does not autofocus', () => {
      const { container } = render(
        <FocusManager autofocus={false}>
          <ul>
            <li>
              <a href="#">first</a>
            </li>
            <li>
              <a href="#">second</a>
            </li>
          </ul>
        </FocusManager>
      )

      const links = container.querySelectorAll('li>a')
      expect(links).not.toContain(document.activeElement)

      expect(container.childNodes[0]).not.toBe(document.activeElement)
    })
  })

  describe('when trapped is enabled', () => {
    let links: NodeListOf<HTMLAnchorElement> | [] = []

    beforeEach(() => {
      const { container } = render(
        <FocusManager>
          <ul>
            <li>
              <a href="#">first</a>
            </li>
            <li>
              <a href="#">second</a>
            </li>
            <li>
              <a href="#">third</a>
            </li>
            <li>
              <a href="#">fourth</a>
            </li>
          </ul>
        </FocusManager>
      )

      links = container.querySelectorAll('li>a')
    })

    describe('with backward tab on first child', () => {
      it('moves focus to last child', () => {
        links[0].focus()

        fireEvent.keyDown(document.activeElement as Element, {
          key: 'Tab',
          shiftKey: true
        })

        expect(links[links.length - 1]).toEqual(document.activeElement)
      })
    })

    describe('with forward tab on last child', () => {
      it('moves focus to first child', () => {
        links[links.length - 1].focus()

        fireEvent.keyDown(document.activeElement as Element, {
          key: 'Tab',
          shiftKey: false
        })

        expect(links[0]).toEqual(document.activeElement)
      })
    })
  })
})
