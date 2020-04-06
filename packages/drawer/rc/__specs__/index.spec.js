import React, { useState } from 'react'
import { fireEvent, render } from '@testing-library/react'

import { Drawer } from '../index.js'

describe('Drawer', () => {
  describe('when the arrow icons is clicked', () => {
    it('toggles open/close', () => {
      const { container } = render(
        <Drawer>
          <Drawer.Head>
            <p>Click me to open</p>
          </Drawer.Head>
          <Drawer.Body>
            <p>Drawer Content here</p>
          </Drawer.Body>
        </Drawer>
      )

      const btn = container.querySelector('div')
      const contentWrapper = container.querySelector('[aria-hidden]')
      expect(contentWrapper).toHaveAttribute('aria-hidden', 'true')
      fireEvent.click(btn)
      expect(contentWrapper).toHaveAttribute('aria-hidden', 'true')
      fireEvent.click(btn)
      expect(contentWrapper).toHaveAttribute('aria-hidden', 'true')
    })
  })
  const Controlled = () => {
    const [open, setOpen] = useState(false)
    return (
      <Drawer onToggle={() => setOpen(!open)} isOpen={open}>
        <Drawer.Head>
          <p>Click me to open</p>
        </Drawer.Head>
        <Drawer.Body>
          <p>Drawer Content here</p>
        </Drawer.Body>
      </Drawer>
    )
  }
  describe('when is controlled', () => {
    it('isOpen toggles open/closed', () => {
      const { container } = render(<Controlled />)
      const btn = container.querySelector('div')
      const contentWrapper = container.querySelector('[aria-hidden]')
      expect(contentWrapper).toHaveAttribute('aria-hidden', 'true')
      fireEvent.click(btn)
      expect(contentWrapper).toHaveAttribute('aria-hidden', 'true')
      fireEvent.click(btn)
      expect(contentWrapper).toHaveAttribute('aria-hidden', 'true')
    })
  })
})
