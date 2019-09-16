import { render } from '@testing-library/react'
import React from 'react'

import * as components from '../index.js'

describe('Position', () => {
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
  })
})
