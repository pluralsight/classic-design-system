import * as core from '@pluralsight/ps-design-system-core'
import { render } from '@testing-library/react'
import React from 'react'

import Shave from '../shave'

jest.mock('shave')

describe('Shave', () => {
  let shaveFn: jest.Mock<unknown>

  beforeEach(() => {
    shaveFn = require('shave')
  })

  it('shaves on initial mount', () => {
    const character = '&hellip;'
    const lineHeight = parseInt(core.type.lineHeightStandard, 10)
    const lines = 3

    render(<Shave>some text string</Shave>)

    expect(shaveFn).toHaveBeenCalledWith(
      expect.anything(),
      lineHeight * lines,
      { character }
    )
  })

  it('is configurable', () => {
    const character = '... read more'
    const lineHeight = 10
    const lines = 10

    render(
      <Shave character={character} lineHeight={lineHeight} lines={lines}>
        some text string
      </Shave>
    )

    expect(shaveFn).toHaveBeenCalledWith(
      expect.anything(),
      lineHeight * lines,
      {
        character
      }
    )
  })

  it('updates on window resize', () => {
    render(<Shave>some text string</Shave>)
    shaveFn.mockClear()

    global.dispatchEvent(new Event('resize'))

    expect(shaveFn).toHaveBeenCalled()
  })
})
