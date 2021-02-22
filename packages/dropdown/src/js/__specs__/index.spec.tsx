import React from 'react'

import { getLongestMenuLabel, parseMenuChildren } from '..'
import Dropdown from '../../react'

describe('#parseMenuChildren', () => {
  it('is empty array if no menu given', () => {
    expect(parseMenuChildren()).toEqual([])
  })

  it('parses a fragment of children', () => {
    const children = (
      <>
        <Dropdown.Item value="o">One</Dropdown.Item>
        <Dropdown.Item value="w">Two</Dropdown.Item>
        <Dropdown.Item value="h">Three</Dropdown.Item>
      </>
    )
    expect(parseMenuChildren(children)).toEqual([
      { label: 'One', value: 'o' },
      { label: 'Two', value: 'w' },
      { label: 'Three', value: 'h' }
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

    expect(parseMenuChildren(children)).toEqual([
      { label: 'One', value: 'o' },
      { label: 'Two', value: 'w' },
      { label: 'Three', value: 'h' }
    ])
  })

  it('removes dividers and other non-items', () => {
    const children = (
      <>
        <Dropdown.Item value="o">One</Dropdown.Item>
        <Dropdown.Item value="w">Two</Dropdown.Item>
        <Dropdown.Divider />
        <img />
        <Dropdown.Item value="h">Three</Dropdown.Item>
      </>
    )
    expect(parseMenuChildren(children)).toEqual([
      { label: 'One', value: 'o' },
      { label: 'Two', value: 'w' },
      { label: 'Three', value: 'h' }
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
