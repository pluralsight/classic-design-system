import { axe } from 'jest-axe'
import React from 'react'
import { render, screen } from '@testing-library/react'

import Table from '..'
import * as stories from '../__stories__/index.story'

type TableProps = React.ComponentProps<typeof Table>
type RenderContainer = TableProps['renderContainer']

describe('Table', () => {
  const { Basic } = stories

  it('should passes a basic a11y audit', async () => {
    const { container } = render(<Basic />)
    const results = await axe(container)

    expect(results).toHaveNoViolations()
  })

  describe('Table', () => {
    it('should forward refs', () => {
      const ref = React.createRef<HTMLTableElement>()

      render(<Table data-testid="undertest" ref={ref} />)
      const el = screen.getByTestId('undertest')

      expect(ref.current).not.toBeNull()
      expect(ref.current).toBe(el)
    })

    describe('with a custom container', () => {
      let ref: React.RefObject<HTMLElement>

      beforeEach(() => {
        ref = React.createRef<HTMLElement>()

        const renderContainer: RenderContainer = props => (
          <main
            className="custom class names"
            data-custom-attribute="i'm special"
            data-testid="undertest"
            ref={ref}
            {...props}
          />
        )

        render(
          <Table renderContainer={renderContainer}>
            <Table.Body>
              <Table.Row>
                <Table.Cell />
              </Table.Row>
            </Table.Body>
          </Table>
        )
      })

      it('should allow a custom tag', () => {
        const el = screen.getByTestId('undertest')

        expect(el).toBeInTheDocument()
        expect(el.tagName.toLowerCase()).toEqual('main')
      })

      it('should allow custom classNames', () => {
        const el = screen.getByTestId('undertest')

        expect(el).toHaveClass('custom class names')
      })

      it('should allow data attributes', () => {
        const el = screen.getByTestId('undertest')

        expect(el).toHaveAttribute('data-custom-attribute', "i'm special")
      })

      it('should allow custom refs', () => {
        const el = screen.getByTestId('undertest')

        expect(ref.current).not.toBeNull()
        expect(ref.current).toBe(el)
      })
    })
  })

  describe('Table.Body', () => {
    it('should forward refs', () => {
      const ref = React.createRef<HTMLTableSectionElement>()

      render(
        <Table>
          <Table.Body data-testid="undertest" ref={ref} />
        </Table>
      )
      const el = screen.getByTestId('undertest')

      expect(ref.current).not.toBeNull()
      expect(ref.current).toBe(el)
    })
  })

  describe('Table.Cell', () => {
    it('should forward refs', () => {
      const ref = React.createRef<HTMLTableCellElement>()

      render(
        <Table>
          <Table.Body>
            <Table.Row>
              <Table.Cell data-testid="undertest" ref={ref} />
            </Table.Row>
          </Table.Body>
        </Table>
      )
      const el = screen.getByTestId('undertest')

      expect(ref.current).not.toBeNull()
      expect(ref.current).toBe(el)
    })
  })

  describe('Table.Head', () => {
    it('should forward refs', () => {
      const ref = React.createRef<HTMLTableSectionElement>()

      render(
        <Table>
          <Table.Head data-testid="undertest" ref={ref} />
        </Table>
      )
      const el = screen.getByTestId('undertest')

      expect(ref.current).not.toBeNull()
      expect(ref.current).toBe(el)
    })
  })

  describe('Table.Header', () => {
    it('should forward refs', () => {
      const ref = React.createRef<HTMLTableHeaderCellElement>()

      render(
        <Table>
          <Table.Body>
            <Table.Row>
              <Table.Header data-testid="undertest" ref={ref} />
            </Table.Row>
          </Table.Body>
        </Table>
      )
      const el = screen.getByTestId('undertest')

      expect(ref.current).not.toBeNull()
      expect(ref.current).toBe(el)
    })
  })

  describe('Table.Row', () => {
    it('should forward refs', () => {
      const ref = React.createRef<HTMLTableRowElement>()

      render(
        <Table>
          <Table.Body>
            <Table.Row data-testid="undertest" ref={ref}>
              <Table.Cell />
            </Table.Row>
          </Table.Body>
        </Table>
      )
      const el = screen.getByTestId('undertest')

      expect(ref.current).not.toBeNull()
      expect(ref.current).toBe(el)
    })
  })
})
