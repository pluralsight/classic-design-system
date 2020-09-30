import React from 'react'
import { render } from '@testing-library/react'

import ViewToggle from '../index.js'

describe('ViewToggle', () => {
  describe('.Option component', () => {
    it('exists', () => expect(ViewToggle.Option).toBeDefined())
  })

  it('renders', () => {
    const { getByTestId } = render(
      <ViewToggle data-testid="mock-component">
        <ViewToggle.Option>The Only Option</ViewToggle.Option>
      </ViewToggle>
    )

    expect(getByTestId('mock-component')).toBeInTheDocument()
  })

  it('fowards refs', () => {
    const toggleRef = React.createRef()
    const optionRef = React.createRef()

    render(
      <ViewToggle ref={toggleRef}>
        <ViewToggle.Option ref={optionRef}>The Only Option</ViewToggle.Option>
      </ViewToggle>
    )

    expect(toggleRef.current).not.toBeNull()
    expect(optionRef.current).not.toBeNull()
  })
})
