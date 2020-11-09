import { render, waitForElement } from '@testing-library/react'
import React from 'react'

import * as positionFns from '..'

describe('#below', () => {
  const { below } = positionFns

  it('returns undefined if no el given', async () => {
    const { getByTestId } = render(<div data-testid="target-el" />)
    const targetEl = await waitForElement(() => getByTestId('target-el'))
    expect(below(targetEl).styleFor(undefined)).toBeUndefined()
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
      left: '0px'
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

describe('#belowLeft', () => {
  const { belowLeft } = positionFns

  it('returns undefined if no el given', async () => {
    const { getByTestId } = render(<div data-testid="target-el" />)
    const targetEl = await waitForElement(() => getByTestId('target-el'))
    expect(belowLeft(targetEl).styleFor(undefined)).toBeUndefined()
  })

  it('returns styles', async () => {
    const targetEl = await createEl()
    const el = await createEl({
      width: 100,
      height: 100
    })

    expect(belowLeft(targetEl).styleFor(el)).toEqual({
      position: 'absolute',
      top: '12px',
      left: '0px'
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

    expect(belowLeft(targetEl).styleFor(el)).toEqual({
      position: 'absolute',
      top: '212px',
      left: '0px'
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

    expect(belowLeft(targetEl).styleFor(el)).toEqual({
      position: 'absolute',
      top: '262px',
      left: '25px'
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

    expect(belowLeft(targetEl).styleFor(el)).toEqual({
      position: 'absolute',
      top: '212px',
      left: '0px'
    })
  })
})

describe('#belowRight', () => {
  const { belowRight } = positionFns

  it('returns undefined if no el given', async () => {
    const { getByTestId } = render(<div data-testid="target-el" />)
    const targetEl = await waitForElement(() => getByTestId('target-el'))
    expect(belowRight(targetEl).styleFor(undefined)).toBeUndefined()
  })

  it('returns styles', async () => {
    const targetEl = await createEl()
    const el = await createEl({ width: 150, height: 100 })

    expect(belowRight(targetEl).styleFor(el)).toEqual({
      position: 'absolute',
      top: '12px',
      left: '0px'
    })
  })

  it('adjusts for target dimensions', async () => {
    const targetEl = await createEl({
      height: 200,
      width: 100
    })
    const el = await createEl({
      width: 150,
      height: 100
    })

    expect(belowRight(targetEl).styleFor(el)).toEqual({
      position: 'absolute',
      top: '212px',
      left: '0px'
    })
  })

  it('adjusts for target placement', async () => {
    const targetEl = await createEl({
      height: 200,
      width: 150,
      top: 50,
      left: 125
    })
    const el = await createEl({
      width: 150,
      height: 100
    })

    expect(belowRight(targetEl).styleFor(el)).toEqual({
      position: 'absolute',
      top: '262px',
      left: '125px'
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

    expect(belowRight(targetEl).styleFor(el)).toEqual({
      position: 'absolute',
      top: '212px',
      left: '0px'
    })
  })
})

describe('#above', () => {
  const { above } = positionFns

  it('returns undefined if no el given', async () => {
    const { getByTestId } = render(<div data-testid="target-el" />)
    const targetEl = await waitForElement(() => getByTestId('target-el'))
    expect(above(targetEl).styleFor(undefined)).toBeUndefined()
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
      left: '0px'
    })
  })
})

describe('#aboveLeft', () => {
  const { aboveLeft } = positionFns

  it('returns undefined if no el given', async () => {
    const { getByTestId } = render(<div data-testid="target-el" />)
    const targetEl = await waitForElement(() => getByTestId('target-el'))
    expect(aboveLeft(targetEl).styleFor(undefined)).toBeUndefined()
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

    expect(aboveLeft(targetEl).styleFor(el)).toEqual({
      position: 'absolute',
      top: '38px',
      left: '25px'
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

    expect(aboveLeft(targetEl).styleFor(el)).toEqual({
      position: 'absolute',
      top: '38px',
      left: '25px'
    })
  })
})

describe('#aboveRight', () => {
  const { aboveRight } = positionFns

  it('returns undefined if no el given', async () => {
    const { getByTestId } = render(<div data-testid="target-el" />)
    const targetEl = await waitForElement(() => getByTestId('target-el'))
    expect(aboveRight(targetEl).styleFor(undefined)).toBeUndefined()
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

    expect(aboveRight(targetEl).styleFor(el)).toEqual({
      position: 'absolute',
      top: '38px',
      left: '125px'
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

    expect(aboveRight(targetEl).styleFor(el)).toEqual({
      position: 'absolute',
      top: '38px',
      left: '0px'
    })
  })
})

describe('#rightOf', () => {
  const { rightOf } = positionFns

  it('returns undefined if no el given', async () => {
    const { getByTestId } = render(<div data-testid="target-el" />)
    const targetEl = await waitForElement(() => getByTestId('target-el'))
    expect(rightOf(targetEl).styleFor(undefined)).toBeUndefined()
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
  const { leftOf } = positionFns

  it('returns undefined if no el given', async () => {
    const { getByTestId } = render(<div data-testid="target-el" />)
    const targetEl = await waitForElement(() => getByTestId('target-el'))
    expect(leftOf(targetEl).styleFor(undefined)).toBeUndefined()
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

describe('#edgeCases', () => {
  Object.defineProperty(window, 'innerHeight', {
    writable: true,
    configurable: true,
    value: 500
  })
  Object.defineProperty(window, 'innerWidth', {
    writable: true,
    configurable: true,
    value: 500
  })

  const targets: { [name: string]: Partial<DOMRect> } = {
    topLeft: {
      top: 0,
      right: 16,
      bottom: 16,
      left: 0,
      width: 16,
      height: 16
    },
    topRight: {
      top: 0,
      right: 500,
      bottom: 16,
      left: 484,
      width: 16,
      height: 16
    },
    bottomLeft: {
      top: 484,
      right: 16,
      bottom: 500,
      left: 0,
      width: 16,
      height: 16
    },
    bottomRight: {
      top: 484,
      right: 500,
      bottom: 500,
      left: 484,
      width: 16,
      height: 16
    }
  }

  it('#above', async () => {
    const { above } = positionFns
    for (const position in targets) {
      const targetEl = await createEl(targets[position])
      const el = await createEl({
        width: 100,
        height: 100
      })
      expect(above(targetEl).styleFor(el)).toMatchSnapshot(position)
    }
  })
  it('#aboveLeft', async () => {
    const { aboveLeft } = positionFns
    for (const position in targets) {
      const targetEl = await createEl(targets[position])
      const el = await createEl({
        width: 100,
        height: 100
      })
      expect(aboveLeft(targetEl).styleFor(el)).toMatchSnapshot(position)
    }
  })
  it('#aboveRight', async () => {
    const { aboveRight } = positionFns
    for (const position in targets) {
      const targetEl = await createEl(targets[position])
      const el = await createEl({
        width: 100,
        height: 100
      })
      expect(aboveRight(targetEl).styleFor(el)).toMatchSnapshot(position)
    }
  })
  it('#below', async () => {
    const { below } = positionFns
    for (const position in targets) {
      const targetEl = await createEl(targets[position])
      const el = await createEl({
        width: 100,
        height: 100
      })
      expect(below(targetEl).styleFor(el)).toMatchSnapshot(position)
    }
  })
  it('#belowLeft', async () => {
    const { belowLeft } = positionFns
    for (const position in targets) {
      const targetEl = await createEl(targets[position])
      const el = await createEl({
        width: 100,
        height: 100
      })
      expect(belowLeft(targetEl).styleFor(el)).toMatchSnapshot(position)
    }
  })
  it('#belowRight', async () => {
    const { belowRight } = positionFns
    for (const position in targets) {
      const targetEl = await createEl(targets[position])
      const el = await createEl({
        width: 100,
        height: 100
      })
      expect(belowRight(targetEl).styleFor(el)).toMatchSnapshot(position)
    }
  })
  it('#rightOf', async () => {
    const { rightOf } = positionFns
    for (const position in targets) {
      const targetEl = await createEl(targets[position])
      const el = await createEl({
        width: 100,
        height: 100
      })
      expect(rightOf(targetEl).styleFor(el)).toMatchSnapshot(position)
    }
  })
  it('#leftOf', async () => {
    const { leftOf } = positionFns
    for (const position in targets) {
      const targetEl = await createEl(targets[position])
      const el = await createEl({
        width: 100,
        height: 100
      })
      expect(leftOf(targetEl).styleFor(el)).toMatchSnapshot(position)
    }
  })
})

function randStr() {
  return (
    Math.random().toString(36).substring(2, 15) +
    Math.random().toString(36).substring(2, 15)
  )
}

async function createEl(boundingClientRectOpts?: Partial<DOMRect>) {
  const id = randStr()
  const { getByTestId } = render(<div data-testid={id} />)
  const el = await waitForElement(() => getByTestId(id))
  el.getBoundingClientRect = () =>
    ({
      width: 0,
      height: 0,
      top: 0,
      left: 0,
      right: 0,
      bottom: 0,
      ...boundingClientRectOpts
    } as DOMRect)
  return el
}
