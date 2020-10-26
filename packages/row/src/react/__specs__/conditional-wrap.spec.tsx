import React from 'react'
import { render, waitForElement } from '@testing-library/react'

import ConditionalWrap from '../conditional-wrap'

describe('ConditionalWrap', () => {
  it('wraps children if condition is met', async () => {
    const { getByTestId, queryByTestId } = render(
      <ConditionalWrap
        shouldWrap
        wrapper={c => <div data-testid="wrap">{c}</div>}
      >
        <div data-testid="child" />
      </ConditionalWrap>
    )

    await waitForElement(() => getByTestId('child'))

    expect(queryByTestId('wrap')).toBeInTheDocument()
  })

  it('does NOT wrap children if condition is NOT met', async () => {
    const { getByTestId, queryByTestId } = render(
      <ConditionalWrap
        shouldWrap={false}
        wrapper={c => <div data-testid="wrap">{c}</div>}
      >
        <div data-testid="child" />
      </ConditionalWrap>
    )

    await waitForElement(() => getByTestId('child'))

    expect(queryByTestId('wrap')).not.toBeInTheDocument()
  })
})
