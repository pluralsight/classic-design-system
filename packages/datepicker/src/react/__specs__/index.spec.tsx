// eslint-disable @typescript-eslint/no-unnecessary-type-assertion
import React from 'react'
import { render, fireEvent } from '@testing-library/react'

import DatePicker from '..'
import * as vars from '../../vars'

describe('DatePicker', () => {
  describe('.appearances', () => {
    it('exists', () => expect(DatePicker.appearances).toEqual(vars.appearances))
  })

  it('renders', () => {
    const { getByTestId } = render(<DatePicker data-testid="mock-component" />)

    expect(getByTestId('mock-component')).toBeInTheDocument()
  })

  it('forwards refs', () => {
    const ref = React.createRef<HTMLInputElement>()

    render(<DatePicker ref={ref} />)

    expect(ref.current).not.toBeNull()
  })

  describe('onBlur prop', () => {
    it('should call onBlur when onBlur is called for a valid date', () => {
      const onBlurMock = jest.fn()
      const { getByDisplayValue } = render(
        <DatePicker value="8/14/2001" onSubBlur={onBlurMock} />
      )
      fireEvent.blur(getByDisplayValue('2001'))
      expect(onBlurMock).toHaveBeenCalledTimes(1)
      expect(onBlurMock).toHaveBeenCalledWith('8/14/2001', expect.any(Object))
    })

    it('should call onBlur when onBlur is called for an invalid date', () => {
      const onBlurMock = jest.fn()
      const { getByDisplayValue } = render(
        <DatePicker value="8/14/2001" onSubBlur={onBlurMock} />
      )
      const yearSubField = getByDisplayValue('2001')
      fireEvent.change(yearSubField, { target: { value: '' } })
      fireEvent.blur(yearSubField)
      expect(onBlurMock).toHaveBeenCalledTimes(1)
      expect(onBlurMock).toHaveBeenCalledWith(undefined, expect.any(Object))
    })
  })

  describe('with a controlled value', () => {
    it('derives initial value from prop', () => {
      const { container, rerender } = render(<DatePicker value="1/20/1993" />)

      const fields: { [key: string]: HTMLInputElement } = {
        day: container.querySelector<HTMLInputElement>(
          '[name="dd"]'
        ) as HTMLInputElement,
        month: container.querySelector<HTMLInputElement>(
          '[name="mm"]'
        ) as HTMLInputElement,
        year: container.querySelector<HTMLInputElement>(
          '[name="yyyy"]'
        ) as HTMLInputElement
      }
      expect(fields.day.value).toEqual('20')
      expect(fields.month.value).toEqual('1')
      expect(fields.year.value).toEqual('1993')
    })

    it('should update on prop change', () => {
      const { container, rerender } = render(<DatePicker value="1/20/1993" />)

      const fields: { [key: string]: HTMLInputElement } = {
        day: container.querySelector<HTMLInputElement>(
          '[name="dd"]'
        ) as HTMLInputElement,
        month: container.querySelector<HTMLInputElement>(
          '[name="mm"]'
        ) as HTMLInputElement,
        year: container.querySelector<HTMLInputElement>(
          '[name="yyyy"]'
        ) as HTMLInputElement
      }
      rerender(<DatePicker value="8/14/2001" />)

      expect(fields.day.value).toEqual('14')
      expect(fields.month.value).toEqual('8')
      expect(fields.year.value).toEqual('2001')
    })
  })
})
