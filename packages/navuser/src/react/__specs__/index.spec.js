import { render } from '@testing-library/react'
import React from 'react'

import Navuser from '../index.js'

describe('Navuser', () => {
  it('renders', () => {
    const { getByTestId } = render(<Navuser data-testid="undertest" />)

    expect(getByTestId('undertest')).toBeInTheDocument()
  })

  it('forwards refs', () => {
    const ref = React.createRef()

    render(<Navuser ref={ref} />)

    expect(ref.current).not.toBeNull()
  })
})
