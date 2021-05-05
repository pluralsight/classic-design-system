import { render } from '@testing-library/react'
import React from 'react'

import { useCollapsible } from '../use-collapsible'

const Collapsible: React.FC<{ open: boolean }> = ({ open }) => (
  <div {...useCollapsible(open)}>
    <div>content</div>
  </div>
)

describe('useCollapsible', () => {
  it('isOpen toggles open/closed', () => {
    const { container, rerender } = render(<Collapsible open />)
    const wrapper = container.querySelector('[aria-hidden]')

    expect(wrapper).toHaveAttribute('aria-hidden', 'false')
    expect(wrapper).toHaveStyle('height: auto')

    rerender(<Collapsible open={false} />)

    expect(wrapper).toHaveAttribute('aria-hidden', 'true')
    expect(wrapper).toHaveStyle('height: 0')
  })
})
