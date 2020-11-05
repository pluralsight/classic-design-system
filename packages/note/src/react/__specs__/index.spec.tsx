import React from 'react'
import { fireEvent, render, waitForElement } from '@testing-library/react'

import Note from '..'

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
      <Note message="message" metadata={['meta1', 'meta2']} />
    )

    expect(container).toHaveTextContent('meta1')
    expect(container).toHaveTextContent('meta2')
  })

  it('supports onMouseOver prop', async () => {
    const spy = jest.fn()

    const { getByTestId } = render(
      <Note data-testid="note" message="message" onMouseOver={spy} />
    )

    const el = await waitForElement(() => getByTestId('note'))
    fireEvent.mouseOver(el)

    expect(spy).toHaveBeenCalled()
  })

  it('supports onMouseOut prop', async () => {
    const spy = jest.fn()

    const { getByTestId } = render(
      <Note data-testid="note" message="message" onMouseOut={spy} />
    )

    const el = await waitForElement(() => getByTestId('note'))
    fireEvent.mouseOut(el)

    expect(spy).toHaveBeenCalled()
  })
})
