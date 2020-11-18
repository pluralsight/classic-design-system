import { axe } from 'jest-axe'
import React from 'react'
import { render } from '@testing-library/react'

import * as stories from '../__stories__/index.story'

describe('Table', () => {
  const { Basic } = stories

  it('passes a basic a11y audit', async () => {
    const { container } = render(<Basic />)
    const results = await axe(container)

    expect(results).toHaveNoViolations()
  })
})
