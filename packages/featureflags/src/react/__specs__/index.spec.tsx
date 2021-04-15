import { render } from '@testing-library/react'
import { renderHook } from '@testing-library/react-hooks'
import React from 'react'

import FeatureFlags, { useFeatureFlags } from '../index'

describe('FeatureFlags', () => {
  const MockComponent: React.FC<
    React.ComponentProps<typeof FeatureFlags>
  > = props => {
    const { flags } = useFeatureFlags()
    const flagsStr = Object.keys(flags).reduce(
      (str, key) => str + key + ':' + flags[key] + ',',
      ''
    )
    return <div {...props}>flags:{flagsStr}</div>
  }

  it('renders children', () => {
    const { getByTestId } = render(
      <FeatureFlags>
        <div data-testid="child" />
      </FeatureFlags>
    )

    const child = getByTestId('child')

    expect(child).not.toBeNull()
  })

  it('adds flags to context', () => {
    const flags = { some: 'flag', another: true }
    const { container } = render(
      <FeatureFlags flags={flags}>
        <MockComponent />
      </FeatureFlags>
    )
    expect(container).toHaveTextContent('flags:some:flag,another:true')
  })

  it('defaults to empty flags', () => {
    const { container } = render(
      <FeatureFlags>
        <MockComponent />
      </FeatureFlags>
    )
    expect(container).toHaveTextContent('flags:')
  })

  it('updates flags on rerender', () => {
    const { container, rerender } = render(
      <FeatureFlags flags={{}}>
        <MockComponent />
      </FeatureFlags>
    )

    rerender(
      <FeatureFlags flags={{ back: 'from-server' }}>
        <MockComponent />
      </FeatureFlags>
    )

    expect(container).toHaveTextContent('flags:back:from-server')
  })
})

describe('useFeatureFlags', () => {
  it('should return the context with flags', () => {
    const { result } = renderHook(() => useFeatureFlags())
    expect(result.current).toEqual({ flags: {} })
  })
})
