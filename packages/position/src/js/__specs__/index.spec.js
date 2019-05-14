import { render, waitForElement } from 'react-testing-library'
import React from 'react'

import * as position from '../index.js'

describe('#styleBelow', () => {
  it('returns undefined if no relativeEl given', () => {
    expect(position.styleBelow()).toBeUndefined()
  })

  it('returns undefined if no el given', async () => {
    const { getByTestId } = render(<div data-testid="relative-el" />)
    const relativeEl = await waitForElement(() => getByTestId('relative-el'))
    expect(position.styleBelow(relativeEl)).toBeUndefined()
  })

  it('returns styles', async () => {
    const relativeElRender = render(
      <div
        data-testid="relative-el"
        style={{ position: 'absolute', top: '100px' }}
      />
    )
    const relativeEl = await waitForElement(() =>
      relativeElRender.getByTestId('relative-el')
    )
    relativeEl.getBoundingClientRect = () => ({
      width: 200,
      height: 100,
      top: 300,
      left: 0,
      right: 0,
      bottom: 0
    })

    const elRender = render(<div data-testid="el" />)
    const el = await waitForElement(() => elRender.getByTestId('el'))
    el.getBoundingClientRect = () => ({
      width: 100,
      height: 500
    })

    expect(position.styleBelow(relativeEl, el)).toEqual({
      position: 'absolute',
      top: '412px',
      left: '50px'
    })
  })
})
