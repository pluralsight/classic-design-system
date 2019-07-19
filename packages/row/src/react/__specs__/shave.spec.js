import React from 'react'
import { render } from '@testing-library/react'

import Shave from '../shave.js'

jest.mock('shave')

describe('Shave', () => {
  let shaveFn

  beforeEach(() => {
    shaveFn = require('shave')
  })

  it('has default props', () => {
    expect(Shave.defaultProps).toMatchInlineSnapshot(`
Object {
  "character": "&hellip;",
  "lineHeight": 24,
  "lines": 3,
}
`)
  })

  it('shaves on initial mount', () => {
    const { character, lineHeight, lines } = Shave.defaultProps

    render(<Shave>some text string</Shave>)

    expect(shaveFn).toHaveBeenCalledWith(
      expect.anything(),
      lineHeight * lines,
      {
        character
      }
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

    // eslint-disable-next-line
    global.dispatchEvent(new Event('resize'))

    expect(shaveFn).toHaveBeenCalled()
  })
})
