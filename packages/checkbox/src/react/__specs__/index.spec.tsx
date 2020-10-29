import React from 'react'
import { render } from '@testing-library/react'

import Checkbox from '..'

describe('Checkbox', () => {
  it('renders', () => {
    const { getByTestId } = render(
      <Checkbox
        label="test label"
        value="test value"
        data-testid="mock-component"
      />
    )

    expect(getByTestId('mock-component')).toBeInTheDocument()
  })

  it('forwards refs', () => {
    const ref = React.createRef<HTMLInputElement>()

    render(<Checkbox label="test label" value="test value" ref={ref} />)

    expect(ref.current).not.toBeNull()
  })

  it('is accessible by role', () => {
    const { getByRole } = render(
      <>
        <Checkbox label="First" name="first" value="value" />
        <Checkbox label="Second" name="second" value="value" />
      </>
    )

    expect(getByRole('checkbox', { name: /first/i })).toBeInTheDocument()
  })
})
