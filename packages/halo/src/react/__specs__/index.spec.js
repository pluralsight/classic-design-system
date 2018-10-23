import React from 'react'
import { shallow } from 'enzyme'

import * as vars from '../../vars'

import Halo from '../index'

describe('Halo', () => {
  it('exposes appearances as a static', () => {
    expect(Halo.appearances).toEqual(vars.appearances)
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
