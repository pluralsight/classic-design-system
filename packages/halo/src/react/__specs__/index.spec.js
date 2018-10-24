import React from 'react'
import { shallow } from 'enzyme'

import * as vars from '../../vars'

import Halo from '../index'

describe('Halo', () => {
  describe('.appearances', () => {
    it('exists', () => expect(Halo.appearances).toEqual(vars.appearances))
  })

  describe('.gapSizes', () => {
    it('exists', () => {
      expect(Halo.gapSizes).toEqual(vars.gapSizes)
    })
  })

  describe('.shapes', () => {
    it('exists', () => {
      expect(Halo.shapes).toEqual(vars.shapes)
    })
  })

  it('renders', () => {
    expect(() => shallow(<Halo />)).not.toThrow()
  })

  it('renders children', () => {
    const Child = jest.fn(() => 'child')
    const wrapper = shallow(
      <Halo>
        <Child />
      </Halo>
    )

    expect(wrapper.find(Child)).toHaveLength(1)
  })
})
