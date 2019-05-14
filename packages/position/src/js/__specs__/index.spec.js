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
    const relativeEl = await createEl()
    const el = await createEl({
      width: 100,
      height: 100
    })

    expect(position.styleBelow(relativeEl, el)).toEqual({
      position: 'absolute',
      top: '12px',
      left: '-50px'
    })
  })

  it('adjusts for relative dimensions', async () => {
    const relativeEl = await createEl({
      height: 200,
      width: 200
    })
    const el = await createEl({
      width: 100,
      height: 100
    })

    expect(position.styleBelow(relativeEl, el)).toEqual({
      position: 'absolute',
      top: '212px',
      left: '50px'
    })
  })

  it('adjusts for relative placement', async () => {
    const relativeEl = await createEl({
      height: 200,
      width: 200,
      top: 50,
      left: 25
    })
    const el = await createEl({
      width: 100,
      height: 100
    })

    expect(position.styleBelow(relativeEl, el)).toEqual({
      position: 'absolute',
      top: '262px',
      left: '75px'
    })
  })

  it('adjusts for element width', async () => {
    const relativeEl = await createEl({
      height: 200,
      width: 200
    })
    const el = await createEl({
      width: 200,
      height: 100
    })

    expect(position.styleBelow(relativeEl, el)).toEqual({
      position: 'absolute',
      top: '212px',
      left: '0px'
    })
  })
})

function randStr() {
  return (
    Math.random()
      .toString(36)
      .substring(2, 15) +
    Math.random()
      .toString(36)
      .substring(2, 15)
  )
}

async function createEl(boundingClientRectOpts) {
  const id = randStr()
  const { getByTestId } = render(<div data-testid={id} />)
  const el = await waitForElement(() => getByTestId(id))
  el.getBoundingClientRect = () => ({
    width: 0,
    height: 0,
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    ...boundingClientRectOpts
  })
  return el
}
