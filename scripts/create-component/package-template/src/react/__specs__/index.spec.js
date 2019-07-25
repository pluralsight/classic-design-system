import React from 'react'
import { render } from '@testing-library/react'

import {{componentName}} from '../index.js'

describe('{{componentName}}', () => {
  it('renders', () => {
    const { getByTestId } = render(
      <{{componentName}} data-testid="mock-component" />
    )

    expect(getByTestId('mock-component')).toBeInTheDocument()
  })
})
