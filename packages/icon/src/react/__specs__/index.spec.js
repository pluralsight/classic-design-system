import React from 'react'
import { shallow } from 'enzyme'

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

  it('should allow overriding the aria-label', () => {
    const wrapper = shallow(<Icon aria-label="test label" />)
    expect(wrapper.prop('aria-label')).toEqual('test label')
  })
})
