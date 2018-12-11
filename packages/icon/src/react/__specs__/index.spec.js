import React from 'react'
import { shallow } from 'enzyme'

import * as vars from '../../vars'

import Icon from '../index'

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
})
