import { render, waitForElement } from 'react-testing-library'
import React from 'react'

import { relativeTo } from '../index.js'

describe('#relativeTo', () => {
  it('throws if no relativeEl given', () => {
    expect(_ => relativeTo()).toThrow(/relative element required/)
  })
})

describe('#styleBelow', () => {
  it('returns undefined if no el given', async () => {
    const { getByTestId } = render(<div data-testid="relative-el" />)
    const relativeEl = await waitForElement(() => getByTestId('relative-el'))
    expect(relativeTo(relativeEl).styleBelow()).toBeUndefined()
  })

  it('returns styles', async () => {
    const relativeEl = await createEl()
    const el = await createEl({
      width: 100,
      height: 100
    })

    expect(relativeTo(relativeEl).styleBelow(el)).toEqual({
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

    expect(relativeTo(relativeEl).styleBelow(el)).toEqual({
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

    expect(relativeTo(relativeEl).styleBelow(el)).toEqual({
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

    expect(relativeTo(relativeEl).styleBelow(el)).toEqual({
      position: 'absolute',
      top: '212px',
      left: '0px'
    })
  })
})

describe('#styleAbove', () => {
  it('returns undefined if no el given', async () => {
    const { getByTestId } = render(<div data-testid="relative-el" />)
    const relativeEl = await waitForElement(() => getByTestId('relative-el'))
    expect(relativeTo(relativeEl).styleAbove()).toBeUndefined()
  })

  it('adjusts for relative placement and dimensions', async () => {
    const relativeEl = await createEl({
      top: 100,
      left: 25,
      height: 200,
      width: 200
    })
    const el = await createEl({
      width: 100,
      height: 50
    })

    expect(relativeTo(relativeEl).styleAbove(el)).toEqual({
      position: 'absolute',
      top: '38px',
      left: '75px'
    })
  })

  it('adjusts for element width', async () => {
    const relativeEl = await createEl({
      top: 100,
      left: 25,
      height: 200,
      width: 200
    })
    const el = await createEl({
      width: 300,
      height: 50
    })

    expect(relativeTo(relativeEl).styleAbove(el)).toEqual({
      position: 'absolute',
      top: '38px',
      left: '-25px'
    })
  })
})

describe('#styleRightOf', () => {
  it('returns undefined if no el given', async () => {
    const { getByTestId } = render(<div data-testid="relative-el" />)
    const relativeEl = await waitForElement(() => getByTestId('relative-el'))
    expect(relativeTo(relativeEl).styleRightOf()).toBeUndefined()
  })

  it('adjusts for relative dimensions and placement', async () => {
    const relativeEl = await createEl({
      top: 50,
      height: 200,
      width: 200
    })
    const el = await createEl({
      width: 100,
      height: 50
    })

    expect(relativeTo(relativeEl).styleRightOf(el)).toEqual({
      position: 'absolute',
      top: '125px',
      left: '212px'
    })
  })

  it('adjusts for element height', async () => {
    const relativeEl = await createEl({
      top: 50,
      height: 200,
      width: 200
    })
    const el = await createEl({
      width: 100,
      height: 250
    })

    expect(relativeTo(relativeEl).styleRightOf(el)).toEqual({
      position: 'absolute',
      top: '25px',
      left: '212px'
    })
  })
})

describe('#styleLeftOf', () => {
  it('returns undefined if no el given', async () => {
    const { getByTestId } = render(<div data-testid="relative-el" />)
    const relativeEl = await waitForElement(() => getByTestId('relative-el'))
    expect(relativeTo(relativeEl).styleLeftOf()).toBeUndefined()
  })

  it('adjusts for relative dimensions and placement', async () => {
    const relativeEl = await createEl({
      top: 50,
      left: 300,
      height: 200,
      width: 200
    })
    const el = await createEl({
      width: 100,
      height: 50
    })

    expect(relativeTo(relativeEl).styleLeftOf(el)).toEqual({
      position: 'absolute',
      top: '125px',
      left: '188px'
    })
  })

  it('adjusts for element width', async () => {
    const relativeEl = await createEl({
      top: 50,
      left: 300,
      height: 200,
      width: 200
    })
    const el = await createEl({
      width: 25,
      height: 50
    })

    expect(relativeTo(relativeEl).styleLeftOf(el)).toEqual({
      position: 'absolute',
      top: '125px',
      left: '263px'
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
