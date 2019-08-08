import React from 'react'
import { render } from '@testing-library/react'

import * as vars from '../../vars/index.js'

import DatePicker from '../index'

describe('DatePicker', () => {
  describe('.appearances', () => {
    it('exists', () => expect(DatePicker.appearances).toEqual(vars.appearances))
  })

  it('renders', () => {
    const { getByTestId } = render(<DatePicker data-testid="mock-component" />)

    expect(getByTestId('mock-component')).toBeInTheDocument()
  })

  it('forwards refs', () => {
    const ref = React.createRef()

    render(<DatePicker ref={ref} />)

    expect(ref.current).not.toBeNull()
  })

  describe('with a controlled value', () => {
    let container
    let rerender
    let fields = { day: null, month: null, year: null }

    beforeEach(() => {
      ;({ container, rerender } = render(<DatePicker value="1/20/1993" />))

      fields.day = container.querySelector('[name="dd"]')
      fields.month = container.querySelector('[name="mm"]')
      fields.year = container.querySelector('[name="yyyy"]')
    })

    it('derives initial value from prop', () => {
      expect(fields.day.value).toEqual('20')
      expect(fields.month.value).toEqual('1')
      expect(fields.year.value).toEqual('1993')
    })

    it('should update on prop change', () => {
      rerender(<DatePicker value="8/14/2001" />)

      expect(fields.day.value).toEqual('14')
      expect(fields.month.value).toEqual('8')
      expect(fields.year.value).toEqual('2001')
    })
  })
})
