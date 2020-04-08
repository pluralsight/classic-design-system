import React, { useState } from 'react'
import { fireEvent, render } from '@testing-library/react'

import { Drawer } from '../index.js'

describe('Drawer', () => {
  describe('when uncontrolled', () => {
    it('toggles open/close', async () => {
      const { getByTestId } = render(
        <Drawer>
          <Drawer.Head data-testid="head">
            <p>Click me to open</p>
          </Drawer.Head>
          <Drawer.Body data-testid="body">
            <p>Drawer Content here</p>
          </Drawer.Body>
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
          <Drawer.Head data-testid="head">
            <p>Click me to open</p>
          </Drawer.Head>
          <Drawer.Body data-testid="body">
            <p>Drawer Content here</p>
          </Drawer.Body>
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
