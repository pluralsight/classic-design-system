import { render } from '@testing-library/react'
import React from 'react'

import Verticaltab from '../index.js'

describe('Verticaltab', () => {
  it('renders', () => {
    const { getByTestId } = render(
      <Verticaltab data-testid="undertest" />
    )

    expect(getByTestId('undertest')).toBeInTheDocument()
  })

  it('forwards refs', () => {
    const ref = React.createRef()

    const { getByTestId } = render(
      <Verticaltab ref={ref} />
    )

    expect(ref.current).not.toBeNull()
  })
})
