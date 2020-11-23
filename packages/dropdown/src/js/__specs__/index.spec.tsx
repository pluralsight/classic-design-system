import ActionMenu from '@pluralsight/ps-design-system-actionmenu'
import React from 'react'

import { formatItemId, parseMenuChildren } from '..'
import Item from '../../react'

describe('#formatItemId', () => {
  it('is undefined for no input', () => {
    expect(formatItemId('aMenuId')).toBeUndefined()
  })

  it('is menuId-value by default', () => {
    expect(formatItemId('aMenuId', 'aValue')).toEqual('aMenuId-aValue')
    expect(formatItemId('aMenuId', 123)).toEqual('aMenuId-123')
  })

  it('is menuId-label as a secondary option', () => {
    expect(formatItemId('aMenuId', undefined, 'aLabel')).toEqual(
      'aMenuId-aLabel'
    )
    expect(formatItemId('aMenuId', undefined, 'a Fine Label')).toEqual(
      'aMenuId-aFineLabel'
    )
  })
})

describe('#parseMenuChildren', () => {
  it('is empty array if no menu given', () => {
    expect(parseMenuChildren('aMenuId')).toEqual([])
  })

  it('parses a fragment of children', () => {
    const children = (
      <>
        <Item value="o">One</Item>
        <Item value="w">Two</Item>
        <Item value="h">Three</Item>
      </>
    )
    expect(parseMenuChildren('aMenuId', children)).toEqual([
      { id: 'aMenuId-o', label: 'One', value: 'o' },
      { id: 'aMenuId-w', label: 'Two', value: 'w' },
      { id: 'aMenuId-h', label: 'Three', value: 'h' }
    ])
  })

  it('parses an array of children', () => {
    const children = [
      <Item value="o">One</Item>,
      <Item value="w">Two</Item>,
      <Item value="h">Three</Item>
    ]

    expect(parseMenuChildren('aMenuId', children)).toEqual([
      { id: 'aMenuId-o', label: 'One', value: 'o' },
      { id: 'aMenuId-w', label: 'Two', value: 'w' },
      { id: 'aMenuId-h', label: 'Three', value: 'h' }
    ])
  })
})
