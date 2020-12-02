import { PlaceholderIcon } from '@pluralsight/ps-design-system-icon'
import React from 'react'

import { getLongestMenuLabel, formatItemId, parseMenuChildren } from '..'
import Dropdown from '../../react'

describe('#formatItemId', () => {
  it('is menuId-value by default', () => {
    expect(formatItemId('aMenuId', 'aLabel', 'aValue')).toEqual(
      'aMenuId-aValue'
    )
    expect(formatItemId('aMenuId', 'aLabel', 123)).toEqual('aMenuId-123')
  })

  it('is menuId-label as a secondary option', () => {
    expect(formatItemId('aMenuId', 'aLabel')).toEqual('aMenuId-aLabel')
    expect(formatItemId('aMenuId', 'a Fine Label')).toEqual(
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
        <Dropdown.Item value="o">One</Dropdown.Item>
        <Dropdown.Item value="w">Two</Dropdown.Item>
        <Dropdown.Item value="h">Three</Dropdown.Item>
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
      <Dropdown.Item value="o" key="o">
        One
      </Dropdown.Item>,
      <Dropdown.Item value="w" key="w">
        Two
      </Dropdown.Item>,
      <Dropdown.Item value="h" key="h">
        Three
      </Dropdown.Item>
    ]

    expect(parseMenuChildren('aMenuId', children)).toEqual([
      { id: 'aMenuId-o', label: 'One', value: 'o' },
      { id: 'aMenuId-w', label: 'Two', value: 'w' },
      { id: 'aMenuId-h', label: 'Three', value: 'h' }
    ])
  })

  it('removes dividers', () => {
    const children = (
      <>
        <Dropdown.Item value="o">One</Dropdown.Item>
        <Dropdown.Item value="w">Two</Dropdown.Item>
        <Dropdown.Divider />
        <Dropdown.Item value="h">Three</Dropdown.Item>
      </>
    )
    expect(parseMenuChildren('aMenuId', children)).toEqual([
      { id: 'aMenuId-o', label: 'One', value: 'o' },
      { id: 'aMenuId-w', label: 'Two', value: 'w' },
      { id: 'aMenuId-h', label: 'Three', value: 'h' }
    ])
  })
})

describe('#getLongestMenuLabel', () => {
  it('is empty string if no items and no placeholder', () => {
    expect(getLongestMenuLabel([])).toEqual('')
  })

  it('is placeholder if no items', () => {
    expect(getLongestMenuLabel([], 'aPlace')).toEqual('aPlace')
  })

  it('is placeholder if still longest', () => {
    expect(
      getLongestMenuLabel(
        [{ label: 'One' }, { label: 'Two Longer' }, { label: 'Three' }],
        'A Longest Placeholder'
      )
    ).toEqual('A Longest Placeholder')
  })

  it('is longest label', () => {
    expect(
      getLongestMenuLabel(
        [{ label: 'One' }, { label: 'Two Longest' }, { label: 'Three' }],
        'aPlace'
      )
    ).toEqual('Two Longest')
  })
})
