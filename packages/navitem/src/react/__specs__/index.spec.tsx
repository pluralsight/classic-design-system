import { render } from '@testing-library/react'
import React from 'react'

import NavItem from '..'

describe('NavItem', () => {
  it('should render a button', async () => {
    const { findByText } = render(<NavItem>test</NavItem>)

    const label = await findByText('test')
    const el = label.closest('button')
    expect(el).not.toBeNull()
  })

  it('should allow rendering an anchor element', async () => {
    const { findByText } = render(
      <NavItem renderContainer={props => <a href="" {...props} />}>
        test
      </NavItem>
    )

    const label = await findByText('test')
    const el = label.closest('a')
    expect(el).not.toBeNull()
  })

  it('should support refs', () => {
    const ref = React.createRef<HTMLButtonElement>()

    render(
      <NavItem renderContainer={props => <button ref={ref} {...props} />}>
        test
      </NavItem>
    )

    expect(ref.current).not.toBeNull()
  })

  it('should allow custom styles overrides', () => {
    render(
      <NavItem
        UNSAFE_stylesFor={{
          navitem__bar: {},
          'navitem__bar--selected': {}
        }}
      >
        test
      </NavItem>
    )

    expect(true).toBe(true)
  })
})
