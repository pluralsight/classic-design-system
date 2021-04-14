import React from 'react'
import { render } from '@testing-library/react'

import CircularProgress from '../index'

describe('CircularProgress', () => {
  it('renders', () => {
    const { getByTestId } = render(
      <CircularProgress data-testid="mock-component" />
    )

    expect(getByTestId('mock-component')).toBeInTheDocument()
  })
  it('forwards refs', () => {
    const ref = React.createRef<HTMLDivElement>()

    render(<CircularProgress ref={ref} />)

    expect(ref.current).not.toBeNull()
  })
})
