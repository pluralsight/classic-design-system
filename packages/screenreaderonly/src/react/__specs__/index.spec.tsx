import { render } from '@testing-library/react'
import React from 'react'

import ScreenReaderOnly from '../index'

describe('ScreenReaderOnly', () => {
  it('renders', () => {
    const { getByTestId } = render(<ScreenReaderOnly data-testid="undertest" />)
    expect(getByTestId('undertest')).toBeInTheDocument()
  })

  it('forwards refs', () => {
    const ref = React.createRef<HTMLDivElement>()

    render(<ScreenReaderOnly ref={ref} />)

    expect(ref.current).not.toBeNull()
  })

  it('can render as a span', () => {
    const ref = React.createRef<HTMLSpanElement>()

    const { getByTestId } = render(
      <ScreenReaderOnly as="span" data-testid="undertest" ref={ref} />
    )
    expect(getByTestId('undertest')).toBeInTheDocument()
  })
})
