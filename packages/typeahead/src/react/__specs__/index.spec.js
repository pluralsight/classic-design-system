import { render } from '@testing-library/react'
import React from 'react'

import Typeahead from '../index.js'

describe('Typeahead', () => {
  it('renders', () => {
    const { getByTestId } = render(<Typeahead data-testid="undertest" />)

    expect(getByTestId('undertest')).toBeInTheDocument()
  })

  it('forwards refs', () => {
    const ref = React.createRef()

    render(<Typeahead ref={ref} />)

    expect(ref.current).not.toBeNull()
  })

  describe('when value is uncontrolled', () => {
    it.todo('')
  })

  describe('when value is controlled', () => {
    it.todo('')
  })
})
