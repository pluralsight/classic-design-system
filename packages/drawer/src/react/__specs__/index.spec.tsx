import React, { useState } from 'react'
import { fireEvent, render } from '@testing-library/react'

import Drawer from '..'

describe('Drawer', () => {
  describe('when uncontrolled', () => {
    it('toggles open/close', async () => {
      const { getByTestId } = render(
        <Drawer>
          <Drawer.Summary data-testid="head">
            <p>Click me to open</p>
          </Drawer.Summary>
          <Drawer.Details data-testid="body">
            <p>Drawer Content here</p>
          </Drawer.Details>
        </Drawer>
      )

      const btn = getByTestId('head')
      const contentWrapper = getByTestId('body')
      expect(contentWrapper).toHaveAttribute('aria-hidden', 'true')
      fireEvent.click(btn)
      expect(contentWrapper).toHaveAttribute('aria-hidden', 'false')
      fireEvent.click(btn)
      expect(contentWrapper).toHaveAttribute('aria-hidden', 'true')
    })
  })
  it('when controlled', () => {
    const Controlled = () => {
      const [open, setOpen] = useState(false)
      return (
        <Drawer onToggle={() => setOpen(!open)} isOpen={open}>
          <Drawer.Summary data-testid="head">
            <p>Click me to open</p>
          </Drawer.Summary>
          <Drawer.Details data-testid="body">
            <p>Drawer Content here</p>
          </Drawer.Details>
        </Drawer>
      )
    }
    const { getByTestId } = render(<Controlled />)
    const btn = getByTestId('head')
    const contentWrapper = getByTestId('body')
    expect(contentWrapper).toHaveAttribute('aria-hidden', 'true')
    fireEvent.click(btn)
    expect(contentWrapper).toHaveAttribute('aria-hidden', 'false')
    fireEvent.click(btn)
    expect(contentWrapper).toHaveAttribute('aria-hidden', 'true')
  })
})
