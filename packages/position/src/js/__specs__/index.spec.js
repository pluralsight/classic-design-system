import { render, waitForElement } from 'react-testing-library'
import React from 'react'

import { above, below, leftOf, rightOf } from '../index.js'

describe('#below', () => {
  it('throws if no target el given', () => {
    expect(_ => below()).toThrow(/target element required/)
  })

  it('returns undefined if no el given', async () => {
    const { getByTestId } = render(<div data-testid="target-el" />)
    const targetEl = await waitForElement(() => getByTestId('target-el'))
    expect(below(targetEl).styleFor()).toBeUndefined()
  })

  it('returns styles', async () => {
    const targetEl = await createEl()
    const el = await createEl({
      width: 100,
      height: 100
    })

    expect(below(targetEl).styleFor(el)).toEqual({
      position: 'absolute',
      top: '12px',
      left: '-50px'
    })
  })

  it('adjusts for target dimensions', async () => {
    const targetEl = await createEl({
      height: 200,
      width: 200
    })
    const el = await createEl({
      width: 100,
      height: 100
    })

    expect(below(targetEl).styleFor(el)).toEqual({
      position: 'absolute',
      top: '212px',
      left: '50px'
    })
  })

  it('adjusts for target placement', async () => {
    const targetEl = await createEl({
      height: 200,
      width: 200,
      top: 50,
      left: 25
    })
    const el = await createEl({
      width: 100,
      height: 100
    })

    expect(below(targetEl).styleFor(el)).toEqual({
      position: 'absolute',
      top: '262px',
      left: '75px'
    })
  })

  it('adjusts for element width', async () => {
    const targetEl = await createEl({
      height: 200,
      width: 200
    })
    const el = await createEl({
      width: 200,
      height: 100
    })

    expect(below(targetEl).styleFor(el)).toEqual({
      position: 'absolute',
      top: '212px',
      left: '0px'
    })
  })
})

describe('#above', () => {
  it('returns undefined if no el given', async () => {
    const { getByTestId } = render(<div data-testid="target-el" />)
    const targetEl = await waitForElement(() => getByTestId('target-el'))
    expect(above(targetEl).styleFor()).toBeUndefined()
  })

  it('adjusts for target placement and dimensions', async () => {
    const targetEl = await createEl({
      top: 100,
      left: 25,
      height: 200,
      width: 200
    })
    const el = await createEl({
      width: 100,
      height: 50
    })

    expect(above(targetEl).styleFor(el)).toEqual({
      position: 'absolute',
      top: '38px',
      left: '75px'
    })
  })

  it('adjusts for element width', async () => {
    const targetEl = await createEl({
      top: 100,
      left: 25,
      height: 200,
      width: 200
    })
    const el = await createEl({
      width: 300,
      height: 50
    })

    expect(above(targetEl).styleFor(el)).toEqual({
      position: 'absolute',
      top: '38px',
      left: '-25px'
    })
  })
})

describe('#rightOf', () => {
  it('returns undefined if no el given', async () => {
    const { getByTestId } = render(<div data-testid="target-el" />)
    const targetEl = await waitForElement(() => getByTestId('target-el'))
    expect(rightOf(targetEl).styleFor()).toBeUndefined()
  })

  it('adjusts for target dimensions and placement', async () => {
    const targetEl = await createEl({
      top: 50,
      height: 200,
      width: 200
    })
    const el = await createEl({
      width: 100,
      height: 50
    })

    expect(rightOf(targetEl).styleFor(el)).toEqual({
      position: 'absolute',
      top: '125px',
      left: '212px'
    })
  })

  it('adjusts for element height', async () => {
    const targetEl = await createEl({
      top: 50,
      height: 200,
      width: 200
    })
    const el = await createEl({
      width: 100,
      height: 250
    })

    expect(rightOf(targetEl).styleFor(el)).toEqual({
      position: 'absolute',
      top: '25px',
      left: '212px'
    })
  })
})

describe('#leftOf', () => {
  it('returns undefined if no el given', async () => {
    const { getByTestId } = render(<div data-testid="target-el" />)
    const targetEl = await waitForElement(() => getByTestId('target-el'))
    expect(leftOf(targetEl).styleFor()).toBeUndefined()
  })

  it('adjusts for target dimensions and placement', async () => {
    const targetEl = await createEl({
      top: 50,
      left: 300,
      height: 200,
      width: 200
    })
    const el = await createEl({
      width: 100,
      height: 50
    })

    expect(leftOf(targetEl).styleFor(el)).toEqual({
      position: 'absolute',
      top: '125px',
      left: '188px'
    })
  })

  it('adjusts for element width', async () => {
    const targetEl = await createEl({
      top: 50,
      left: 300,
      height: 200,
      width: 200
    })
    const el = await createEl({
      width: 25,
      height: 50
    })

    expect(leftOf(targetEl).styleFor(el)).toEqual({
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
