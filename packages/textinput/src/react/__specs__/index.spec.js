import { render } from '@testing-library/react'
import React from 'react'

import TextInput from '../index.js'

describe('TextInput', () => {
  it('renders', () => {
    const { getByTestId } = render(<TextInput data-testid="undertest" />)

    expect(getByTestId('undertest')).toBeInTheDocument()
  })

  it('forwards refs', () => {
    const ref = React.createRef()

    render(<TextInput ref={ref} />)

    expect(ref.current).not.toBeNull()
  })
})
