import { render } from '@testing-library/react'
import React from 'react'

import Field from '..'

describe('Field', () => {
  it('renders', () => {
    const { getByTestId } = render(<Field data-testid="undertest" />)

    expect(getByTestId('undertest')).toBeInTheDocument()
  })

  it('forwards refs', () => {
    const ref = React.createRef<HTMLDivElement>()

    render(<Field ref={ref} />)

    expect(ref.current).not.toBeNull()
  })
})
