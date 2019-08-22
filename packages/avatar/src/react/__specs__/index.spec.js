import React from 'react'
import { mount } from 'enzyme'

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

  describe('with an image src and an alt attr', () => {
    let image, wrapper

    beforeEach(() => {
      wrapper = mount(<Avatar alt="alt text" src="//something.png" />)
      image = wrapper.find('img')
    })

    it('should passes the alt attr to the image', () => {
      expect(image.prop('alt')).toBeDefined()
    })

    it('should be visible to screen readers', () => {
      expect(wrapper.childAt(0).prop('aria-hidden')).toBeFalsy()
    })
  })

  describe('with an image src and NO alt attr', () => {
    it('should be hidden from screen readers', () => {
      const wrapper = mount(<Avatar src="//something.png" />)
      expect(wrapper.childAt(0).prop('aria-hidden')).toBeTruthy()
    })
  })

  describe('WITHOUT an image src', () => {
    const name = 'Benedict Cumberbatch'

    let div, wrapper

    beforeEach(() => {
      wrapper = mount(<Avatar name={name} />)
      div = wrapper.find('div > div')
    })

    it('displays initial', () => {
      expect(div.text()).toEqual('BC')
    })

    it('add the name as an aria-label', () => {
      expect(div.prop('aria-label')).toEqual(name)
    })

    it('should NOT be hidden from screen readers', () => {
      expect(wrapper.childAt(0).prop('aria-hidden')).toBeFalsy()
    })
  })
})
