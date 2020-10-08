import ActionMenu from '@pluralsight/ps-design-system-actionmenu'
import React from 'react'

import { findMatchingActionMenuItem } from '..'

describe('#findMatchingActionMenuItem', () => {
  it('returns undefined for undefined menu', () => {
    const item = findMatchingActionMenuItem()
    expect(item).toBeUndefined()
  })

  it('returns undefined for empty menu', () => {
    const item = findMatchingActionMenuItem(<ActionMenu />, 'findme')
    expect(item).toBeUndefined()
  })

  it('returns undefined for unmatchable menu', () => {
    const item = findMatchingActionMenuItem(
      <ActionMenu>
        <ActionMenu.Item value="diff">Different</ActionMenu.Item>
      </ActionMenu>,
      'findme'
    )
    expect(item).toBeUndefined()
  })

  it('returns item for matched first-level option', () => {
    const toFind = <ActionMenu.Item value="findme">Find Me</ActionMenu.Item>
    const item = findMatchingActionMenuItem(
      <ActionMenu>
        <ActionMenu.Item value="diff">Different</ActionMenu.Item>
        {toFind}
        <ActionMenu.Item value="morediff">Different</ActionMenu.Item>
      </ActionMenu>,
      'findme'
    )
    expect(item.props.children).toEqual(toFind.props.children)
    expect(item.props.value).toEqual(toFind.props.value)
  })

  it('returns item for matched 2nd-level option', () => {
    const toFind = <ActionMenu.Item value="findme">Find Me</ActionMenu.Item>
    const item = findMatchingActionMenuItem(
      <ActionMenu>
        <ActionMenu.Item value="diff">Different</ActionMenu.Item>
        <ActionMenu.Item
          nested={
            <>
              <ActionMenu.Item value="stilldiff">Still Diff</ActionMenu.Item>
              {toFind}
            </>
          }
        >
          Nested Different
        </ActionMenu.Item>
      </ActionMenu>,
      'findme'
    )
    expect(item.props.children).toEqual(toFind.props.children)
    expect(item.props.value).toEqual(toFind.props.value)
  })
})
