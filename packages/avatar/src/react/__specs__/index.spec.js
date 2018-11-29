import React from 'react'
import { mount } from 'enzyme'

import * as vars from '../../vars'

import Avatar from '..'

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

  it('renders', () => {
    expect(() => mount(<Avatar />)).not.toThrow()
  })

  describe('prop forwarding', () => {
    const propsToCheck = ['className', 'style']

    it.each(propsToCheck)(`should forward "%s"`, propName => {
      const wrapper = mount(<Avatar {...{ [propName]: null }} />)
      expect(wrapper.prop(propName)).toBeDefined()
    })
  })
})
