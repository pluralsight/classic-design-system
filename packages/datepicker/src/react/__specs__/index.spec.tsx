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
    const { getByText, getByLabelText, rerender } = render(
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
      expect(onBlurMock).toHaveBeenCalledWith(expect.any(Object), date)
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
      expect(onBlurMock).toHaveBeenCalledWith(expect.any(Object), undefined)
    })
  })

  it('derives initial value from prop', async () => {
    const date = new Date(1993, 0, 20)
    const { findByRole } = render(<DatePicker value={date} />)

    const dd = (await findByRole('textbox', {
      name: 'day'
    })) as HTMLInputElement
    const mm = (await findByRole('textbox', {
      name: 'month'
    })) as HTMLInputElement
    const yyyy = (await findByRole('textbox', {
      name: 'year'
    })) as HTMLInputElement

    expect(parseInt(dd.value, 10)).toEqual(date.getDate())
    expect(parseInt(mm.value, 10)).toEqual(date.getMonth() + 1)
    expect(parseInt(yyyy.value, 10)).toEqual(date.getFullYear())
  })

  it('updates render state on prop change', async () => {
    const date = new Date(1993, 0, 20)
    const { findByRole, rerender } = render(<DatePicker value={date} />)

    const newDate = new Date(2001, 7, 14)
    rerender(<DatePicker value={newDate} />)
    const dd = (await findByRole('textbox', {
      name: 'day'
    })) as HTMLInputElement
    const mm = (await findByRole('textbox', {
      name: 'month'
    })) as HTMLInputElement
    const yyyy = (await findByRole('textbox', {
      name: 'year'
    })) as HTMLInputElement

    expect(parseInt(dd.value, 10)).toEqual(newDate.getDate())
    expect(parseInt(mm.value, 10)).toEqual(newDate.getMonth() + 1)
    expect(parseInt(yyyy.value, 10)).toEqual(newDate.getFullYear())
  })
})
