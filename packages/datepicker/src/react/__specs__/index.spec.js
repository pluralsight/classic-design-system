import React from 'react'
import { mount } from 'enzyme'

import * as vars from '../../vars'

import DatePicker from '..'

describe('DatePicker', () => {
  describe('.appearances', () => {
    it('exists', () => expect(DatePicker.appearances).toEqual(vars.appearances))
  })

  it('renders', () => {
    expect(() => mount(<DatePicker />)).not.toThrow()
  })

  // TODO: because we're using a function component to inject theme, enzyme
  //       can't be used to check state. we should refactor to use react-test-library
  it('should derive initial state from value prop', () => {
    const wrapper = mount(<DatePicker.BaseComponent value="1/20/1993" />)
    const { mm, dd, yyyy } = wrapper.state()

    expect(mm).toEqual(1)
    expect(dd).toEqual(20)
    expect(yyyy).toEqual(1993)
  })

  // TODO: because we're using a function component to inject theme, enzyme
  //       can't be used to check state. we should refactor to use react-test-library
  it('should update state when the value prop changes', () => {
    const wrapper = mount(<DatePicker.BaseComponent value="1/20/1993" />)

    wrapper.setProps({ value: '2/10/2000' })
    const { mm, dd, yyyy } = wrapper.state()

    expect(mm).toEqual(2)
    expect(dd).toEqual(10)
    expect(yyyy).toEqual(2000)
  })
})
