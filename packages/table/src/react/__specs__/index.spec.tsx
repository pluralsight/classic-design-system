import React from 'react'
import { fireEvent, render } from '@testing-library/react'

import Table from '..'

describe('columnHeader', () => {
  test('sorted=false onClick called with just evt', () => {
    const spy = jest.fn()
    const { getByRole, container } = render(
      <Table.ColumnHeader onClick={spy}>Click me</Table.ColumnHeader>
    )
    const columnHeader = container.firstChild
    expect(columnHeader).not.toHaveAttribute('aria-sort')
    fireEvent.click(getByRole('button'))
    expect(spy).toBeCalledWith(expect.anything(), undefined)
  })

  test('sorted=true onClick called with asc', () => {
    const spy = jest.fn()
    const { getByRole, container } = render(
      <Table.ColumnHeader sort onClick={spy}>
        Click me
      </Table.ColumnHeader>
    )
    const columnHeader = container.firstChild
    expect(columnHeader).toHaveAttribute('aria-sort', 'none')
    fireEvent.click(getByRole('button'))
    expect(spy).toBeCalledWith(expect.anything(), Table.sorts.asc)
  })

  test('sorted=asc onClick called with desc', () => {
    const spy = jest.fn()
    const { getByRole, container } = render(
      <Table.ColumnHeader sort={Table.sorts.asc} onClick={spy}>
        Click me
      </Table.ColumnHeader>
    )
    const columnHeader = container.firstChild
    expect(columnHeader).toHaveAttribute('aria-sort', 'ascending')
    fireEvent.click(getByRole('button'))
    expect(spy).toBeCalledWith(expect.anything(), Table.sorts.desc)
  })

  test('sorted=desc onClick called with asc', () => {
    const spy = jest.fn()
    const { getByRole, container } = render(
      <Table.ColumnHeader sort={Table.sorts.desc} onClick={spy}>
        Click me
      </Table.ColumnHeader>
    )
    const columnHeader = container.firstChild
    expect(columnHeader).toHaveAttribute('aria-sort', 'descending')
    fireEvent.click(getByRole('button'))
    expect(spy).toBeCalledWith(expect.anything(), Table.sorts.asc)
  })
})
