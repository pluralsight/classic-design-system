import React from 'react'
import { shallow } from 'enzyme'

import * as vars from '../../vars'

import DatePicker from '..'

describe('DatePicker', () => {
  describe('.appearances', () => {
    it('exists', () => expect(DatePicker.appearances).toEqual(vars.appearances))
  })

  it('renders', () => {
    expect(() => shallow(<DatePicker />)).not.toThrow()
  })

  it('should derive initial state from value prop', () => {
    const wrapper = shallow(<DatePicker value="1/20/1993" />)
    const { mm, dd, yyyy } = wrapper.state()

    expect(mm).toEqual(1)
    expect(dd).toEqual(20)
    expect(yyyy).toEqual(1993)
  })

  it('should update state when the value prop changes', () => {
    const wrapper = shallow(<DatePicker value="1/20/1993" />)

    wrapper.setProps({ value: '2/10/2000' })
    const { mm, dd, yyyy } = wrapper.state()

    expect(mm).toEqual(2)
    expect(dd).toEqual(10)
    expect(yyyy).toEqual(2000)
  })
})
