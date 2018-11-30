import React from 'react'
import { mount } from 'enzyme'

import StarRating from '..'

jest.mock('../star', () => {
  const Star = () => null

  Star.appearances = {
    empty: 'empty',
    half: 'half',
    full: 'full'
  }

  return Star
})

describe('StarRating', () => {
  describe('prop forwarding', () => {
    const propsToCheck = ['className', 'style']

    it.each(propsToCheck)(`should forward "%s"`, propName => {
      const wrapper = mount(<StarRating {...{ [propName]: null }} />)
      expect(wrapper.prop(propName)).toBeDefined()
    })
  })

  describe('with default props', () => {
    let stars, wrapper

    beforeEach(() => {
      wrapper = mount(<StarRating />)
      stars = wrapper.find('Star')

      expect(stars).toHaveLength(5)
    })

    it('renders stars as NOT interactive', () => {
      stars.forEach(star => expect(star.prop('interactive')).toBe(false))
    })
  })

  describe('when onChange is defined (interactive mode)', () => {
    let stars, wrapper

    beforeEach(() => {
      wrapper = mount(<StarRating onChange={jest.fn()} />)
      stars = wrapper.find('Star')

      expect(stars).toHaveLength(5)
    })

    it('renders stars as interactive', () => {
      stars.forEach(star => expect(star.prop('interactive')).toBe(true))
    })
  })

  describe('when interactive but WITHOUT a value', () => {
    let stars, wrapper

    beforeEach(() => {
      wrapper = mount(<StarRating onChange={jest.fn()} />)
      stars = wrapper.find('Star')

      expect(stars).toHaveLength(5)
    })

    it('renders stars with empty appearance', () => {
      stars.forEach(star => expect(star.prop('appearance')).toBe('empty'))
    })

    it('renders stars as NOT active', () => {
      stars.forEach(star => expect(star.prop('active')).toBe(false))
    })

    it('renders stars as bright', () => {
      stars.forEach(star => expect(star.prop('bright')).toBe(true))
    })
  })
})
