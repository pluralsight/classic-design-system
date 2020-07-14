import { render } from '@testing-library/react'
import React from 'react'

import Navbrand from '../index.js'

describe('Navbrand', () => {
  it('renders', () => {
    const { getByTestId } = render(<Navbrand data-testid="undertest" />)

    expect(getByTestId('undertest')).toBeInTheDocument()
  })

  it('forwards refs', () => {
    const ref = React.createRef()

    render(<Navbrand ref={ref} />)

    expect(ref.current).not.toBeNull()
  })
})
