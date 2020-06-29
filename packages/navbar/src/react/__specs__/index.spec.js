import { render } from '@testing-library/react'
import React from 'react'

import Navbar from '../index.js'

describe('Navbar', () => {
  it('renders', () => {
    const { getByTestId } = render(
      <Navbar data-testid="undertest" />
    )

    expect(getByTestId('undertest')).toBeInTheDocument()
  })

  it('forwards refs', () => {
    const ref = React.createRef()

    const { getByTestId } = render(
      <Navbar ref={ref} />
    )

    expect(ref.current).not.toBeNull()
  })
})
