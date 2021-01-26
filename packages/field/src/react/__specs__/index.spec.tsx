import { render } from '@testing-library/react'
import React from 'react'

import Field from '..'

describe('Field', () => {
  it.skip('renders', () => {
    const { getByTestId } = render(<Field data-testid="undertest" />)

    expect(getByTestId('undertest')).toBeInTheDocument()
  })

  it.skip('forwards refs', () => {
    const ref = React.createRef<HTMLLabelElement>()

    render(<Field ref={ref} />)

    expect(ref.current).not.toBeNull()
  })
})
