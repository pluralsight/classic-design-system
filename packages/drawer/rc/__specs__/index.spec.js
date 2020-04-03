import React from 'react'
import { fireEvent, render, screen } from '@testing-library/react'

import { Drawer } from '../index.js'

describe('Drawer', () => {
  describe('uncontrolled', () => {
    beforeEach(() => {
      render(
        <Drawer>
          <Drawer.Head data-testid="header">
            <p>Click me to open</p>
          </Drawer.Head>

          <Drawer.Body data-testid="body">
            <p>Drawer Content here</p>
          </Drawer.Body>
        </Drawer>
      )
    })

    it('should toggle open/close on header click', async () => {
      const header = screen.getByTestId('header')
      const body = screen.getByTestId('body')

      fireEvent.click(header)
      expect(body).toHaveAttribute('aria-hidden', 'true')

      fireEvent.click(header)
      expect(body).toHaveAttribute('aria-hidden', 'false')
    })
  })

  describe('controlled', () => {
    let rerender

    beforeEach(() => {
      const result = render(
        <Drawer isOpen={false}>
          <Drawer.Head data-testid="header">
            <p>Click me to open</p>
          </Drawer.Head>

          <Drawer.Body data-testid="body">
            <p>Drawer Content here</p>
          </Drawer.Body>
        </Drawer>
      )

      ;({ rerender } = result)
    })

    it('should start closed', async () => {
      const body = screen.getByTestId('body')

      expect(body).not.toBeVisible()
      expect(body).toHaveAttribute('aria-hidden', 'true')
    })

    it('should open on prop change', async () => {
      const body = screen.getByTestId('body')

      rerender(
        <Drawer isOpen>
          <Drawer.Head data-testid="header">
            <p>Click me to open</p>
          </Drawer.Head>

          <Drawer.Body data-testid="body">
            <p>Drawer Content here</p>
          </Drawer.Body>
        </Drawer>
      )

      expect(body).toBeVisible()
      expect(body).toHaveAttribute('aria-hidden', 'false')
    })
  })
})
