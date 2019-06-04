import React from 'react'
import { render } from 'react-testing-library'

import Note from '../index.js'

describe('Note', () => {
  it('exposes a List Component', () => {
    expect(Note).toHaveProperty('List')
  })

  it('renders the message', () => {
    const { getByTestId } = render(
      <Note message={<div data-testid="the-message" />} />
    )

    expect(getByTestId('the-message')).toBeInTheDocument()
  })
})
