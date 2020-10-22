import React from 'react'
import { fireEvent, render } from '@testing-library/react'

import Drawer from '../index.js'

describe('Drawer', () => {
  describe('when the arrow icons is clicked', () => {
    it('toggles open/close', () => {
      const { container } = render(
        <Drawer base={<div />}>
          <div />
        </Drawer>
      )

      const btn = container.querySelector('button')
      const contentWrapper = container.querySelector('[aria-hidden]')

      fireEvent.click(btn)
      expect(contentWrapper).toHaveAttribute('aria-hidden', 'false')

      fireEvent.click(btn)
      expect(contentWrapper).toHaveAttribute('aria-hidden', 'true')
    })
  })

  describe('when is controlled', () => {
    it('isOpen toggles open/closed', () => {
      const { container, rerender } = render(
        <Drawer base={<div />} isOpen>
          <div />
        </Drawer>
      )

      const contentWrapper = container.querySelector('[aria-hidden]')
      expect(contentWrapper).toHaveAttribute('aria-hidden', 'false')

      rerender(
        <Drawer base={<div />} isOpen={false}>
          <div />
        </Drawer>
      )

      expect(contentWrapper).toHaveAttribute('aria-hidden', 'true')
    })
  })
})
