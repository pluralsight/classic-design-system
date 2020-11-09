import { render } from '@testing-library/react'
import React from 'react'

import NavUser from '..'

describe('NavUser', () => {
  it('should render a div by default', () => {
    const ref = React.createRef<HTMLDivElement>()
    const { getByTestId } = render(
      <NavUser data-testid="undertest" ref={ref}>
        test
      </NavUser>
    )
    const el = getByTestId('undertest')

    expect(el.tagName.toLowerCase()).toEqual('div')
    expect(ref.current).not.toBeNull()
  })

  it('should render a hyperlink when an `href` is present', () => {
    const ref = React.createRef<HTMLAnchorElement>()
    const { getByTestId } = render(
      <NavUser data-testid="undertest" href="/" ref={ref}>
        test
      </NavUser>
    )
    const el = getByTestId('undertest')

    expect(el.tagName.toLowerCase()).toEqual('a')
    expect(ref.current).not.toBeNull()
  })

  it('should render a button when an `onClick` is present', () => {
    const ref = React.createRef<HTMLButtonElement>()
    const onClick = jest.fn()
    const { getByTestId } = render(
      <NavUser
        data-testid="undertest"
        onClick={onClick}
        name="someVal"
        ref={ref}
      >
        test
      </NavUser>
    )
    const el = getByTestId('undertest')

    expect(el.tagName.toLowerCase()).toEqual('button')
    expect(ref.current).not.toBeNull()
  })
})
