import React from 'react'
import { render } from 'react-testing-library'

import Note from '../index.js'

describe('Note', () => {
  it('exposes an Action Component', () => {
    expect(Note).toHaveProperty('Action')
  })

  it('exposes a List Component', () => {
    expect(Note).toHaveProperty('List')
  })

  it('renders the message', () => {
    const { getByTestId } = render(
      <Note message={<div data-testid="the-message" />} />
    )

    expect(getByTestId('the-message')).toBeInTheDocument()
  })

  it('renders metadata', () => {
    const { container } = render(
      <Note message={'message'} metadata={['meta1', 'meta2']} />
    )

    expect(container).toHaveTextContent('meta1')
    expect(container).toHaveTextContent('meta2')
  })
})
