import { render } from '@testing-library/react'
import React from 'react'

import * as components from '../index.js'

describe('Position', () => {
  // NOTE: suppressing unnecessary warnings from test renderer.
  //       ref: https://github.com/facebook/react/pull/14853
  // TODO: once we've upgraded to react@16.9 we can remove
  const originalError = console.error

  beforeAll(() => {
    console.error = (...args) => {
      if (/Warning.*not wrapped in act/.test(args[0])) return

      originalError.call(console, ...args)
    }
  })

  afterAll(() => {
    console.error = originalError
  })
  // END NOTE

  describe.each(Object.keys(components))('%s', key => {
    const Comp = components[key]

    it('should render', () => {
      const { getByTestId } = render(
        <Comp show={<div data-testid="tethered" />}>
          <div data-testid="child" />
        </Comp>
      )

      expect(getByTestId('child')).toBeInTheDocument()
    })

    it('shows tethered by default', () => {
      const { getByTestId } = render(
        <Comp show={<div data-testid="tethered" />}>
          <div data-testid="child" />
        </Comp>
      )

      expect(getByTestId('tethered')).toBeInTheDocument()
    })

    it('forwards refs', () => {
      const ref = React.createRef()

      render(
        <Comp ref={ref} show={<div data-testid="tethered" />}>
          <div data-testid="child" />
        </Comp>
      )

      expect(ref.current).not.toBeNull()
    })

    it('preserves ref on child component', () => {
      const ref = React.createRef()

      render(
        <Comp show={<div data-testid="tethered" />}>
          <div data-testid="child" ref={ref} />
        </Comp>
      )

      expect(ref.current).not.toBeNull()
    })
  })
})
