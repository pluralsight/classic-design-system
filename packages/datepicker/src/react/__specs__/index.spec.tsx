/* eslint-disable @typescript-eslint/no-unnecessary-type-assertion */
import userEvent from '@testing-library/user-event'
import { screen } from '@testing-library/dom'
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

  it('derives initial value from prop', async () => {
    const date = new Date(1993, 0, 20)
    render(<DatePicker value={date} />)

    const mm = screen.getByRole('textbox', { name: 'month' })
    const dd = screen.getByRole('textbox', { name: 'day' })
    const yyyy = screen.getByRole('textbox', { name: 'year' })
    expect(mm).toHaveValue(String(date.getMonth() + 1))
    expect(dd).toHaveValue(date.getDate().toString())
    expect(yyyy).toHaveValue(date.getFullYear().toString())
  })

  it('updates render state on prop change', async () => {
    const date = new Date(1993, 0, 20)
    const { findByRole, rerender } = render(<DatePicker value={date} />)

    const newDate = new Date(2001, 7, 14)
    rerender(<DatePicker value={newDate} />)
    const mm = (await findByRole('textbox', {
      name: 'month'
    })) as HTMLInputElement
    const dd = (await findByRole('textbox', {
      name: 'day'
    })) as HTMLInputElement
    const yyyy = (await findByRole('textbox', {
      name: 'year'
    })) as HTMLInputElement

    expect(parseInt(mm.value, 10)).toEqual(newDate.getMonth() + 1)
    expect(parseInt(dd.value, 10)).toEqual(newDate.getDate())
    expect(parseInt(yyyy.value, 10)).toEqual(newDate.getFullYear())
  })

  it('tabs through subfields', () => {
    render(<DatePicker value={undefined} />)
    const mm = screen.getByRole('textbox', { name: 'month' })
    const dd = screen.getByRole('textbox', { name: 'day' })
    const yyyy = screen.getByRole('textbox', { name: 'year' })
    mm.focus()
    expect(mm).toHaveFocus()
    /* expect(document.activeElement?.getAttribute('name')).toEqual('mm') */
    userEvent.tab()
    expect(dd).toHaveFocus()
    /* expect(document.activeElement?.getAttribute('name')).toEqual('dd') */
    userEvent.tab()
    expect(yyyy).toHaveFocus()
    /* expect(document.activeElement?.getAttribute('name')).toEqual('yyyy') */
  })

  it('tabs through subfields when value preexists', () => {
    render(<DatePicker value={new Date(2019, 2, 15)} />)
    const mm = screen.getByRole('textbox', { name: 'month' })
    const dd = screen.getByRole('textbox', { name: 'day' })
    const yyyy = screen.getByRole('textbox', { name: 'year' })
    mm.focus()
    expect(mm).toHaveFocus()
    /* expect(document.activeElement?.getAttribute('name')).toEqual('mm') */
    userEvent.tab()
    expect(dd).toHaveFocus()
    /* expect(document.activeElement?.getAttribute('name')).toEqual('dd') */
    userEvent.tab()
    expect(yyyy).toHaveFocus()
    /* expect(document.activeElement?.getAttribute('name')).toEqual('yyyy') */
  })

  it('tabs and types through subfields', () => {
    render(<DatePicker value={undefined} />)
    const mm = screen.getByRole('textbox', { name: 'month' })
    const dd = screen.getByRole('textbox', { name: 'day' })
    const yyyy = screen.getByRole('textbox', { name: 'year' })
    mm.focus()
    userEvent.type(document.activeElement!, '1')
    expect(mm).toHaveFocus()
    expect(mm).toHaveValue('1')
    userEvent.tab()
    userEvent.type(document.activeElement!, '3')
    expect(dd).toHaveFocus()
    expect(dd).toHaveValue('3')
    userEvent.tab()
    userEvent.type(document.activeElement!, '2000')
    expect(yyyy).toHaveFocus()
    expect(yyyy).toHaveValue('2000')
  })

  it('tabs and types through subfields when value preexists', () => {
    render(<DatePicker value={new Date(2019, 2, 8)} />)
    const mm = screen.getByRole('textbox', { name: 'month' })
    const dd = screen.getByRole('textbox', { name: 'day' })
    const yyyy = screen.getByRole('textbox', { name: 'year' })
    mm.focus()
    userEvent.type(document.activeElement!, '1')
    expect(mm).toHaveFocus()
    expect(mm).toHaveValue('1')
    userEvent.tab()
    userEvent.type(document.activeElement!, '30')
    expect(dd).toHaveFocus()
    expect(dd).toHaveValue('30')
    userEvent.tab()
    userEvent.type(document.activeElement!, '2000')
    expect(yyyy).toHaveFocus()
    expect(yyyy).toHaveValue('2000')
  })

  it('calls onSelect when new date is valid', () => {
    let value = undefined
    const onSelect = jest.fn(
      (evt: React.ChangeEvent | React.MouseEvent, date: Date) => (value = date)
    )
    render(<DatePicker value={value} onSelect={onSelect} />)
    const mm = screen.getByRole('textbox', { name: 'month' })
    mm.focus()
    userEvent.type(document.activeElement!, '12')
    expect(document.activeElement!).toHaveValue('12')
    userEvent.tab()
    userEvent.type(document.activeElement!, '7')
    expect(document.activeElement!).toHaveValue('7')
    userEvent.tab()
    userEvent.type(document.activeElement!, '1941')
    expect(document.activeElement!).toHaveValue('1941')
    userEvent.tab()
    const expected = new Date(1941, 11, 7, 0, 0, 0, 0)
    expect(onSelect).toHaveBeenCalledTimes(1)
    expect(onSelect).toHaveBeenCalledWith(expect.any(Object), expected)
    expect(value).toEqual(expected)
  })

  it('calls onSelect every time the date is updated in a valid way', () => {
    let value = new Date(2019, 2, 15)
    const onSelect = jest.fn(
      (evt: React.ChangeEvent | React.MouseEvent, date: Date) => (value = date)
    )
    render(<DatePicker value={value} onSelect={onSelect} />)
    const mm = screen.getByRole('textbox', { name: 'month' })

    mm.focus()
    userEvent.type(document.activeElement!, '12')
    expect(document.activeElement!).toHaveValue('12')
    userEvent.tab()
    expect(onSelect).toHaveBeenCalledWith(
      expect.any(Object),
      new Date(2019, 11, 15, 0, 0, 0, 0)
    )

    userEvent.type(document.activeElement!, '7')
    expect(document.activeElement!).toHaveValue('7')
    userEvent.tab()
    expect(onSelect).toHaveBeenCalledWith(
      expect.any(Object),
      new Date(2019, 11, 7, 0, 0, 0, 0)
    )

    userEvent.type(document.activeElement!, '1941')
    expect(document.activeElement!).toHaveValue('1941')
    userEvent.tab()
    const finalDate = new Date(1941, 11, 7, 0, 0, 0, 0)
    expect(onSelect).toHaveBeenCalledWith(expect.any(Object), finalDate)

    expect(onSelect).toHaveBeenCalledTimes(3)
    expect(value).toEqual(finalDate)
  })

  // WAT - Keep here for troubleshoooting reference
  // if first digit remains the same in new value, just with 2nd digit added, value becomes 2nd digit *only*
  // observed in mm and dd, not yyyy
  // probably related: https://github.com/testing-library/user-event/issues/387
  it.skip('userEvent.type breaks if ones digit becomes tens digit', () => {
    // Uncomment to make work
    /* render(<DatePicker value={new Date(2019, 0, 1)} />) */
    // Comment to make work
    render(<DatePicker value={new Date(2019, 0, 2)} />)
    const mm = screen.getByRole('textbox', { name: 'month' })
    const dd = screen.getByRole('textbox', { name: 'day' })
    const yyyy = screen.getByRole('textbox', { name: 'year' })
    expect(mm).toHaveValue('1')
    // Unomment to make work
    /* expect(dd).toHaveValue('1') */
    // Comment to make work
    expect(dd).toHaveValue('2')
    expect(yyyy).toHaveValue('2019')
    mm.focus()
    userEvent.type(document.activeElement!, '7')
    expect(mm).toHaveFocus()
    expect(mm).toHaveValue('7')
    userEvent.tab()
    userEvent.type(document.activeElement!, '25')
    expect(dd).toHaveFocus()
    expect(dd).toHaveValue('25')
    userEvent.tab()
    userEvent.type(document.activeElement!, '2000')
    expect(yyyy).toHaveFocus()
    expect(yyyy).toHaveValue('2000')

    expect(mm).toHaveValue('7')
    expect(dd).toHaveValue('25')
    expect(yyyy).toHaveValue('2000')
  })

  // TODO: rm and send to will
  /* it.only('wills test', async () => { */
  /*   render(<DatePicker value={new Date(2019, 0, 2)} />) */
  /*   const mm = screen.getByRole('textbox', { name: 'month' }) */
  /*   const dd = screen.getByRole('textbox', { name: 'day' }) */
  /*   const yyyy = screen.getByRole('textbox', { name: 'year' }) */
  /*   expect(mm).toHaveValue('1') */
  /*   expect(dd).toHaveValue('2') */
  /*   expect(yyyy).toHaveValue('2019') */
  /*   mm.focus() */
  /*   userEvent.type(document.activeElement!, '07') */
  /*   userEvent.tab() */
  /*   userEvent.type(document.activeElement!, '15') */
  /*   userEvent.tab() */
  /*   userEvent.type(document.activeElement!, '2015') */
  /*   userEvent.tab() */
  /*   expect(mm).toHaveValue('7') */
  /*   expect(dd).toHaveValue('15') */
  /*   expect(yyyy).toHaveValue('2015') */
  /* }) */
})
