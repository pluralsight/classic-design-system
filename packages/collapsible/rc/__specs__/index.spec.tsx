import { render } from '@testing-library/react'
import React from 'react'

import { useCollapsible } from '../index.js'
// eslint-disable-next-line react/prop-types
const Collapsible = ({ open }) => (
  <div {...useCollapsible(open)}>
    <div>content</div>
  </div>
)

describe('Collapsible', () => {
  it('isOpen toggles open/closed', () => {
    const { container, rerender } = render(<Collapsible open />)
    const wrapper = container.querySelector('[aria-hidden]')
    expect(wrapper).toHaveAttribute('aria-hidden', 'false')
    expect(wrapper).toHaveStyle(`height: auto`)
    rerender(<Collapsible />)
    expect(wrapper).toHaveAttribute('aria-hidden', 'true')
    expect(wrapper).toHaveStyle(`height: 0`)
  })
})
