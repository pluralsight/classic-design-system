import { ValueOf } from '../../../util'
import { render } from '@testing-library/react'
import { renderHook } from '@testing-library/react-hooks'

import React from 'react'

import { Theme, useTheme, withTheme } from '../index'
import { themeDefaultName } from '../../vars'
describe('Theme', () => {
  const MockComponent: React.FC<
    React.HTMLAttributes<HTMLDivElement>
  > = props => {
    const themeName = useTheme()
    return <div {...props}>{themeName}</div>
  }

  it('renders children', () => {
    const { getByTestId } = render(
      <Theme>
        <div data-testid="child" />
      </Theme>
    )

    const child = getByTestId('child')

    expect(child).not.toBeNull()
  })

  it('adds theme to context', () => {
    const { container } = render(
      <Theme name={Theme.names.light}>
        <MockComponent />
      </Theme>
    )
    expect(container).toHaveTextContent(Theme.names.light)
  })

  it('themeDefaultNamelts to dark theme', () => {
    const { container } = render(
      <Theme>
        <MockComponent />
      </Theme>
    )
    expect(container).toHaveTextContent(themeDefaultName)
    expect(container).toHaveTextContent(Theme.names.dark)
  })

  it('should allow changing of the theme', () => {
    const { container, rerender } = render(
      <Theme name={Theme.names.dark}>
        <MockComponent />
      </Theme>
    )

    rerender(
      <Theme name={Theme.names.light}>
        <MockComponent />
      </Theme>
    )

    expect(container).toHaveTextContent(Theme.names.light)
  })

  it('should allow nesting', () => {
    const { getByTestId } = render(
      <Theme name={Theme.names.light}>
        <MockComponent data-testid="outer" />

        <Theme name={Theme.names.dark}>
          <MockComponent data-testid="inner" />
        </Theme>
      </Theme>
    )

    expect(getByTestId('outer')).toHaveTextContent(Theme.names.light)
    expect(getByTestId('inner')).toHaveTextContent(Theme.names.dark)
  })
})

describe('useTheme', () => {
  it('should return the themeName', () => {
    const { result } = renderHook(() => useTheme())
    expect(result.current).toEqual(themeDefaultName)
  })
})

describe('withTheme', () => {
  const MockComponent: React.FC<{ themeName: ValueOf<typeof Theme.names> }> = ({
    themeName,
    ...props
  }) => {
    return <div {...props}>{themeName}</div>
  }

  let EnhancedComponent: React.FC

  beforeAll(() => {
    EnhancedComponent = (withTheme(MockComponent) as unknown) as React.FC
  })

  it('enhances the Component', () => {
    expect(EnhancedComponent).not.toBeNull()
  })

  it('adds a debuggable displayName', () => {
    expect(EnhancedComponent.displayName).toBe('withTheme(MockComponent)')
  })

  describe('when wrapped in a ThemeProvider', () => {
    it('injects the themeName from context', () => {
      const { container } = render(
        <Theme name={Theme.names.light}>
          <EnhancedComponent />
        </Theme>
      )

      expect(container).toHaveTextContent(Theme.names.light)
    })
  })

  describe('when NOT wrapped in a ThemeProvider', () => {
    it('falls back to the themeDefaultNamelt theme', () => {
      const { container } = render(<EnhancedComponent />)

      expect(container).toHaveTextContent(themeDefaultName)
    })
  })
})
