import { render } from '@testing-library/react'
import React from 'react'

import Navcookiebanner from '../index.js'

describe('Navcookiebanner', () => {
  it('renders', () => {
    const { getByTestId } = render(<Navcookiebanner data-testid="undertest" />)

    expect(getByTestId('undertest')).toBeInTheDocument()
  })

  it('forwards refs', () => {
    const ref = React.createRef()

    render(<Navcookiebanner ref={ref} />)

    expect(ref.current).not.toBeNull()
  })
})
