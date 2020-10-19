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
})
