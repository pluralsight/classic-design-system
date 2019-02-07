import React from 'react'
import { mount, shallow } from 'enzyme'

import * as vars from '../../vars'

import Icon from '..'

describe('Icon', () => {
  describe('.colors', () => {
    it('should be exposed', () => expect(Icon.colors).toEqual(vars.colors))
  })

  describe('.sizes', () => {
    it('should be exposed', () => expect(Icon.sizes).toEqual(vars.sizes))
  })

  describe('.ids', () => {
    it('should be exposed', () => expect(Icon.ids).toEqual(vars.ids))
  })

  describe.each(Object.values(Icon.ids))('with id "%s"', id => {
    it('should render', () => {
      expect(() => shallow(<Icon id={id} />)).not.toThrow()
    })
  })

  it('should allow overriding the aria-label of the svg', () => {
    const wrapper = mount(<Icon aria-label="test label" id={Icon.ids.check} />)
    expect(wrapper.find('svg').prop('aria-label')).toEqual('test label')
  })
})
