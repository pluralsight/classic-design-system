import { HTMLPropsFor } from '@pluralsight/ps-design-system-util'
import { render } from '@testing-library/react'
import React, { createRef } from 'react'

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
      <NavItem
        renderContainer={(props: HTMLPropsFor<'a'>) => <a href="" {...props} />}
      >
        test
      </NavItem>
    )

    const label = await findByText('test')
    const el = label.closest('a')
    expect(el).not.toBeNull()
  })

  it('forwards refs', () => {
    const ref = createRef<HTMLButtonElement>()

    render(<NavItem ref={ref} />)

    expect(ref.current).not.toBeNull()
  })
})
