import React from 'react'
import { fireEvent, render } from '@testing-library/react'

import Table from '..'

describe('columnHeader', () => {
  test('sorted=false onClick called with asc', () => {
    return new Promise(resolve => {
      const onClick = sort => {
        expect(sort).toBe(Table.sorts.asc)
        resolve()
      }
      const { getByText } = render(
        <Table.ColumnHeader onClick={onClick}>Click me</Table.ColumnHeader>
      )
      fireEvent.click(getByText('Click me'))
    })
  })

  test('sorted=true onClick called with asc', () => {
    return new Promise(resolve => {
      const onClick = sort => {
        expect(sort).toBe(Table.sorts.asc)
        resolve()
      }
      const { getByText } = render(
        <Table.ColumnHeader sort onClick={onClick}>
          Click me
        </Table.ColumnHeader>
      )
      fireEvent.click(getByText('Click me'))
    })
  })

  test('sorted=asc onClick called with desc', () => {
    return new Promise(resolve => {
      const onClick = sort => {
        expect(sort).toBe(Table.sorts.desc)
        resolve()
      }
      const { getByText } = render(
        <Table.ColumnHeader sort={Table.sorts.asc} onClick={onClick}>
          Click me
        </Table.ColumnHeader>
      )
      fireEvent.click(getByText('Click me'))
    })
  })

  test('sorted=desc onClick called with asc', () => {
    return new Promise(resolve => {
      const onClick = sort => {
        expect(sort).toBe(Table.sorts.asc)
        resolve()
      }
      const { getByText } = render(
        <Table.ColumnHeader sort={Table.sorts.desc} onClick={onClick}>
          Click me
        </Table.ColumnHeader>
      )
      fireEvent.click(getByText('Click me'))
    })
  })
})
