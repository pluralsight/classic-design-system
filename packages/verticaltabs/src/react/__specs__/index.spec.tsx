import { render } from '@testing-library/react'
import React from 'react'

import VerticalTab from '..'

describe('Verticaltab', () => {
  it('renders', () => {
    const { getByTestId } = render(<VerticalTab data-testid="undertest" />)

    expect(getByTestId('undertest')).toBeInTheDocument()
  })

  it('forwards refs', () => {
    const ref = React.createRef<HTMLUListElement>()

    render(<VerticalTab ref={ref} />)

    expect(ref.current).not.toBeNull()
  })
})
