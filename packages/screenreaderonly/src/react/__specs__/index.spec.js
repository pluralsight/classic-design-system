import { render } from '@testing-library/react'
import React from 'react'

import ScreenReaderOnly from '../index.js'

describe('ScreenReaderOnly', () => {
  it('renders', () => {
    const { getByTestId } = render(<ScreenReaderOnly data-testid="undertest" />)

    expect(getByTestId('undertest')).toBeInTheDocument()
  })

  it('forwards refs', () => {
    const ref = React.createRef()

    render(<ScreenReaderOnly ref={ref} />)

    expect(ref.current).not.toBeNull()
  })
})
