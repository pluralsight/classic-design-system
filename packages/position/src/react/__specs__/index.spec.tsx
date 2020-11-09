import { render } from '@testing-library/react'
import React from 'react'

import * as components from '..'

describe('Position', () => {
  // NOTE: suppressing unnecessary warnings from test renderer.
  //       ref: https://github.com/facebook/react/pull/14853
  // TODO: once we've upgraded to react@16.9 we can remove
  const originalError = console.error

  beforeAll(() => {
    console.error = (message?: any, ...optionalParams: any[]): void => {
      if (/Warning.*not wrapped in act/.test(message)) return

      originalError.call(console, message, ...optionalParams)
    }
  })

  afterAll(() => {
    console.error = originalError
  })
  // END NOTE

  describe.each(Object.values(components))('%s', Comp => {
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
      const ref = React.createRef<HTMLElement>()

      render(
        <Comp ref={ref} show={<div data-testid="tethered" />}>
          <div data-testid="child" />
        </Comp>
      )

      expect(ref.current).not.toBeNull()
    })

    it('preserves ref on child component', () => {
      const ref = React.createRef<HTMLDivElement>()

      render(
        <Comp show={<div data-testid="tethered" />}>
          <div data-testid="child" ref={ref} />
        </Comp>
      )

      expect(ref.current).not.toBeNull()
    })
  })
})
