/* eslint-disable @typescript-eslint/no-unnecessary-type-assertion */
import React from 'react'
import { render, fireEvent } from '@testing-library/react'

import DatePicker from '..'
import * as vars from '../../vars'

describe('DatePicker', () => {
  describe('.appearances', () => {
    it('exists', () => expect(DatePicker.appearances).toEqual(vars.appearances))
  })

  it('renders', () => {
    const { getByTestId } = render(
      <DatePicker data-testid="mock-component" value={undefined} />
    )

    expect(getByTestId('mock-component')).toBeInTheDocument()
  })

  it('forwards refs', () => {
    const ref = React.createRef<HTMLInputElement>()

    render(<DatePicker ref={ref} value={undefined} />)

    expect(ref.current).not.toBeNull()
  })

  it('opens calendar on icon click', () => {
    const { getByText, getByLabelText, container, rerender } = render(
      <DatePicker value={new Date(1993, 0, 20)} />
    )
    const icon = getByLabelText('calendar icon', { selector: 'svg' })

    fireEvent.click(icon)

    const calendar = getByText('January 1993')

    expect(calendar).toBeInTheDocument()
  })

  describe('onBlur prop', () => {
    it('calls onBlur when onBlur is called for a valid date', () => {
      const onBlurMock = jest.fn()
      const date = new Date(2001, 7, 14)
      const { getByDisplayValue } = render(
        <DatePicker value={date} onSubBlur={onBlurMock} />
      )
      fireEvent.blur(getByDisplayValue('2001'))
      expect(onBlurMock).toHaveBeenCalledTimes(1)
      expect(onBlurMock).toHaveBeenCalledWith(date)
    })

    it('calls onBlur when onBlur is called for an invalid date', () => {
      const onBlurMock = jest.fn()
      const date = new Date(2001, 7, 14)
      const { getByDisplayValue } = render(
        <DatePicker value={date} onSubBlur={onBlurMock} />
      )
      const yearSubField = getByDisplayValue('2001')
      fireEvent.change(yearSubField, { target: { value: '' } })
      fireEvent.blur(yearSubField)
      expect(onBlurMock).toHaveBeenCalledTimes(1)
      expect(onBlurMock).toHaveBeenCalledWith(undefined)
    })
  })

  it('derives initial value from prop', () => {
    const date = new Date(1993, 0, 20)
    const { container } = render(<DatePicker value={date} />)

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
    expect(parseInt(fields.day.value, 10)).toEqual(date.getDate())
    expect(parseInt(fields.month.value, 10)).toEqual(date.getMonth() + 1)
    expect(parseInt(fields.year.value, 10)).toEqual(date.getFullYear())
  })

  it('updates render state on prop change', () => {
    const date = new Date(1993, 0, 20)
    const { container, rerender } = render(<DatePicker value={date} />)

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
    const newDate = new Date(2001, 7, 14)
    rerender(<DatePicker value={newDate} />)

    expect(fields.day.value).toEqual(newDate.getDate())
    expect(fields.month.value).toEqual(newDate.getMonth() + 1)
    expect(fields.year.value).toEqual(newDate.getFullYear())
  })
})
