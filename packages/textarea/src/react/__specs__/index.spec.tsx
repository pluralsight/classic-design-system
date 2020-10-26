import { render } from '@testing-library/react'
import React from 'react'

import TextArea from '..'

describe('TextArea', () => {
  it('renders', () => {
    const { getByTestId } = render(<TextArea data-testid="undertest" />)

    expect(getByTestId('undertest')).toBeInTheDocument()
  })

  it('forwards refs', () => {
    const ref = React.createRef<HTMLTextAreaElement>()

    render(<TextArea ref={ref} />)

    expect(ref.current).not.toBeNull()
  })
})
