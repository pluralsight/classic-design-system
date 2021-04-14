import { render } from '@testing-library/react'
import React from 'react'

import Steps from '../index'

describe('Steps', () => {
  it('renders', () => {
    const { getByTestId } = render(<Steps data-testid="undertest" />)

    expect(getByTestId('undertest')).toBeInTheDocument()
  })

  it('forwards refs', () => {
    const ref = React.createRef<HTMLDivElement>()

    render(<Steps ref={ref} />)

    expect(ref.current).not.toBeNull()
  })
})
