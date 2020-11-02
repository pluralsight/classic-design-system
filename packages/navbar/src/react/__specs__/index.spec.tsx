import { render } from '@testing-library/react'
import React from 'react'

import NavBar from '..'

describe('Navbar', () => {
  it('renders', () => {
    const { getByTestId } = render(<NavBar data-testid="undertest" />)

    expect(getByTestId('undertest')).toBeInTheDocument()
  })

  it('forwards refs', () => {
    const ref = React.createRef<HTMLDivElement>()

    render(<NavBar ref={ref} />)

    expect(ref.current).not.toBeNull()
  })
})
