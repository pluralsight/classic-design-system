import React from 'react'
import { fireEvent, render } from '@testing-library/react'

import Table from '..'

describe('columnHeader', () => {
  test('sorted=false onClick called with asc', done => {
    const onClick = sort => {
      expect(sort).toBe(Table.sorts.asc)
      done()
    }
    const { getByText } = render(
      <Table.ColumnHeader onClick={onClick}>Click me</Table.ColumnHeader>
    )
    fireEvent.click(getByText('Click me'))
  })

  test('sorted=true onClick called with asc', done => {
    const onClick = sort => {
      expect(sort).toBe(Table.sorts.asc)
      done()
    }
    const { getByText } = render(
      <Table.ColumnHeader sort onClick={onClick}>
        Click me
      </Table.ColumnHeader>
    )
    fireEvent.click(getByText('Click me'))
  })

  test('sorted=asc onClick called with desc', done => {
    const onClick = sort => {
      expect(sort).toBe(Table.sorts.desc)
      done()
    }
    const { getByText } = render(
      <Table.ColumnHeader sort={Table.sorts.asc} onClick={onClick}>
        Click me
      </Table.ColumnHeader>
    )
    fireEvent.click(getByText('Click me'))
  })

  test('sorted=desc onClick called with asc', done => {
    const onClick = sort => {
      expect(sort).toBe(Table.sorts.asc)
      done()
    }
    const { getByText } = render(
      <Table.ColumnHeader sort={Table.sorts.desc} onClick={onClick}>
        Click me
      </Table.ColumnHeader>
    )
    fireEvent.click(getByText('Click me'))
  })
})
