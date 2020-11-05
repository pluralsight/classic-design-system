import { render } from '@testing-library/react'
import React from 'react'

import NavItem from '../index.js'

describe('NavItem', () => {
  it('renders', () => {
    const { getByTestId } = render(<NavItem data-testid="undertest" />)

    expect(getByTestId('undertest')).toBeInTheDocument()
  })

  it('forwards refs', () => {
    const ref = React.createRef()

    render(<NavItem ref={ref} />)

    expect(ref.current).not.toBeNull()
  })
})
