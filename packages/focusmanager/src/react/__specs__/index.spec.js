import React from 'react'
import { mount } from 'enzyme'

import FocusManager from '../index'

const children = (
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
      <a href="#">forth</a>
    </li>
  </ul>
)

describe('FocusManager', () => {
  beforeEach(() => {
    document.activeElement.blur()
  })

  it('has defaultProps', () => {
    expect(FocusManager.defaultProps).toMatchInlineSnapshot(`
Object {
  "autofocus": true,
  "returnFocus": true,
  "trapped": true,
}
`)
  })

  describe('WITH focusable children', () => {
    it('renders successfully', () => {
      expect(() => mount(<FocusManager>{children}</FocusManager>)).not.toThrow()
    })
  })

  describe('WITHOUT focusable children', () => {
    it('renders successfully', () => {
      expect(() =>
        mount(<FocusManager>unfocusable</FocusManager>)
      ).not.toThrow()
    })
  })

  describe('autofocus', () => {
    describe('when enabled', () => {
      it('focuses the first focusable child', () => {
        const wrapper = mount(<FocusManager autofocus>{children}</FocusManager>)

        const el = wrapper.find('a[href]').first()

        expect(document.activeElement).toEqual(el.getDOMNode())
      })
    })

    describe('when disabled', () => {
      it('does NOT focus any children', () => {
        mount(<FocusManager autofocus={false}>{children}</FocusManager>)

        expect(document.activeElement).toEqual(document.body)
      })
    })
  })

  describe('on keydown', () => {
    describe('when first child tabs backward', () => {
      it('focuses the last child', () => {
        const wrapper = mount(<FocusManager>{children}</FocusManager>)

        const firstEl = wrapper.find('a[href]').first()
        const lastEl = wrapper.find('a[href]').last()

        firstEl.getDOMNode().focus()
        firstEl.simulate('keydown', { key: 'Tab', shiftKey: true })

        expect(document.activeElement).toEqual(lastEl.getDOMNode())
      })
    })

    describe('when last child tabs forward', () => {
      it('focuses the first child', () => {
        const wrapper = mount(<FocusManager>{children}</FocusManager>)

        const firstEl = wrapper.find('a[href]').first()
        const lastEl = wrapper.find('a[href]').last()

        lastEl.getDOMNode().focus()
        lastEl.simulate('keydown', { key: 'Tab' })

        expect(document.activeElement).toEqual(firstEl.getDOMNode())
      })
    })
  })

  describe('on unmount', () => {
    it('returns focus to the prev active element', () => {
      const button = document.createElement('button')
      document.body.appendChild(button)
      button.focus()

      const wrapper = mount(<FocusManager>{children}</FocusManager>)
      const lastEl = wrapper.find('a[href]').last()

      lastEl.getDOMNode().focus()
      wrapper.unmount()

      expect(document.activeElement).toEqual(button)
    })
  })
})
