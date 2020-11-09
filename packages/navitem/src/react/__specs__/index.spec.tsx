import { render } from '@testing-library/react'
import React, { MouseEventHandler } from 'react'

import NavItem from '..'

describe('NavItem', () => {
  it('should render a button', () => {
    const ref = React.createRef<HTMLButtonElement>()
    const onClick: MouseEventHandler<HTMLButtonElement> = jest.fn()

    const { getByTestId } = render(
      <NavItem
        data-testid="undertest"
        onClick={onClick}
        name="someVal"
        type="submit"
        ref={ref}
      >
        test
      </NavItem>
    )
    const el = getByTestId('undertest')

    expect(el.tagName.toLowerCase()).toEqual('button')
    expect(ref.current).not.toBeNull()
  })

  it('should render a hyperlink when an `href` is present', () => {
    const ref = React.createRef<HTMLAnchorElement>()
    const onClick: MouseEventHandler<HTMLAnchorElement> = jest.fn()

    const { getByTestId } = render(
      <NavItem
        data-testid="undertest"
        data-custom-attr="custom-attr"
        href="/"
        onClick={onClick}
        ref={ref}
      >
        test
      </NavItem>
    )
    const el = getByTestId('undertest')

    expect(el.tagName.toLowerCase()).toEqual('a')
    expect(ref.current).not.toBeNull()
  })

  it('should allow custom styles overrides', () => {
    render(
      <NavItem
        UNSAFE_stylesFor={{
          navitem: {},
          navitem__bar: {},
          'navitem__bar--selected': {},
          navitem__hoz: {},
          navitem__vert: {}
        }}
      >
        test
      </NavItem>
    )

    expect(true).toBe(true)
  })
})
