/* eslint-disable @typescript-eslint/ban-ts-comment */

import { render, screen } from '@testing-library/react'
import React, { MouseEventHandler } from 'react'

import {
  HTMLPropsFor,
  forwardRefWithAs,
  forwardRefWithAsAndStatics,
  forwardRefWithStatics,
  memoWithAs
} from '..'

describe('utils/primatives', () => {
  describe('#forwardRefWithAs', () => {
    interface Props {
      opt?: boolean
      req: boolean
    }
    const Anchor = forwardRefWithAs<Props, 'a'>((props, ref) => {
      const { as: Comp = 'a', opt, req, ...rest } = props
      return <Comp data-opt={opt} data-req={req} ref={ref} {...rest} />
    })

    const Button = forwardRefWithAs<Props, 'button'>((props, ref) => {
      const { as: Comp = 'button', opt, req, ...rest } = props
      return <Comp data-opt={opt} data-req={req} ref={ref} {...rest} />
    })

    it('supports required props', () => {
      expect.assertions(0)
      render(<Anchor req />)
    })

    it('supports optional props', () => {
      expect.assertions(0)
      render(<Anchor req opt />)
    })

    describe('as an anchor', () => {
      it('supports required props', () => {
        expect.assertions(0)
        render(<Anchor as="a" req />)
      })

      it('supports optional props', () => {
        expect.assertions(0)
        render(<Anchor as="a" req opt />)
      })

      it('accepts a href prop', () => {
        expect.assertions(0)
        render(<Anchor as="a" req href="//" />)
      })

      it('accepts a typed onClick prop', () => {
        expect.assertions(0)
        const onClick: MouseEventHandler<HTMLAnchorElement> = jest.fn()
        render(<Anchor as="a" req onClick={onClick} />)
      })

      it('does NOT accept a disabled prop', () => {
        expect.assertions(0)

        /* @ts-expect-error */
        render(<Anchor as="a" req disabled />)
      })
    })

    describe('as a button', () => {
      it('supports required props', () => {
        expect.assertions(0)
        render(<Anchor as="a" req />)
      })

      it('supports optional props', () => {
        expect.assertions(0)
        render(<Anchor as="button" req opt />)
      })

      it('accepts a disabled prop', () => {
        expect.assertions(0)
        render(<Anchor as="button" req disabled />)
      })

      it('accepts a typed onClick prop', () => {
        expect.assertions(0)
        const onClick: MouseEventHandler<HTMLButtonElement> = jest.fn()
        render(<Anchor as="button" req onClick={onClick} />)
      })

      it('does NOT accept a href prop', () => {
        expect.assertions(0)

        /* @ts-expect-error */
        render(<Anchor as="button" req href="//" />)
      })
    })

    describe('as a Button component', () => {
      it('supports required props', () => {
        expect.assertions(0)
        render(<Anchor as={Button} req />)
      })

      it('supports optional props', () => {
        expect.assertions(0)
        render(<Anchor as={Button} req opt />)
      })

      it('accepts a disabled prop', () => {
        expect.assertions(0)
        render(<Anchor as={Button} req disabled />)
      })

      it('accepts a typed onClick prop', () => {
        expect.assertions(0)
        const onClick: MouseEventHandler<HTMLButtonElement> = jest.fn()
        render(<Anchor as={Button} req onClick={onClick} />)
      })
    })
  })

  describe('#forwardRefWithAsAndStatics', () => {
    interface Statics {
      Nested: typeof Nested
    }
    const Nested: React.FC = props => <div {...props} />
    const Compound = forwardRefWithAsAndStatics<unknown, 'div', Statics>(
      (props, ref) => {
        const { as: Comp = 'div', ...rest } = props
        return <Comp ref={ref} {...rest} />
      }
    )
    Compound.Nested = Nested

    it('supports statics', () => {
      expect(Compound.Nested).toEqual(Nested)
    })

    it('renders self and child components', () => {
      render(
        <Compound data-testid="undertest">
          <Compound.Nested data-testid="nested" />
        </Compound>
      )

      expect(screen.getByTestId('undertest')).toBeInTheDocument()
      expect(screen.getByTestId('nested')).toBeInTheDocument()
    })
  })

  describe('#forwardRefWithStatics', () => {
    interface Props extends HTMLPropsFor<'div'> {}
    interface Statics {
      Nested: typeof Nested
    }

    const Nested: React.FC = props => <div {...props} />
    const Compound = forwardRefWithStatics<Props, 'div', Statics>(
      (props, ref) => <div ref={ref} {...props} />
    )
    Compound.Nested = Nested

    it('supports statics', () => {
      expect(Compound.Nested).toEqual(Nested)
    })

    it('renders self and child components', () => {
      render(
        <Compound data-testid="undertest">
          <Compound.Nested data-testid="nested" />
        </Compound>
      )

      expect(screen.getByTestId('undertest')).toBeInTheDocument()
      expect(screen.getByTestId('nested')).toBeInTheDocument()
    })
  })

  describe('#memoWithAs', () => {
    interface Props {
      opt?: boolean
      req: boolean
    }
    const BaseAnchor = forwardRefWithAs<Props, 'a'>((props, ref) => {
      const { as: Comp = 'a', opt, req, ...rest } = props
      return <Comp data-opt={opt} data-req={req} ref={ref} {...rest} />
    })
    const Anchor = memoWithAs(BaseAnchor)

    it('supports required props', () => {
      expect.assertions(0)
      render(<Anchor req />)
    })

    it('supports optional props', () => {
      expect.assertions(0)
      render(<Anchor req opt />)
    })

    describe('as an anchor', () => {
      it('supports required props', () => {
        expect.assertions(0)
        render(<Anchor as="a" req />)
      })

      it('supports optional props', () => {
        expect.assertions(0)
        render(<Anchor as="a" req opt />)
      })

      it('accepts a href prop', () => {
        expect.assertions(0)
        render(<Anchor as="a" req href="//" />)
      })

      it('accepts a typed onClick prop', () => {
        expect.assertions(0)
        const onClick: MouseEventHandler<HTMLAnchorElement> = jest.fn()
        render(<Anchor as="a" req onClick={onClick} />)
      })

      it('does NOT accept a disabled prop', () => {
        expect.assertions(0)

        /* @ts-expect-error */
        render(<Anchor as="a" req disabled />)
      })
    })

    describe('as a button', () => {
      it('supports required props', () => {
        expect.assertions(0)
        render(<Anchor as="a" req />)
      })

      it('supports optional props', () => {
        expect.assertions(0)
        render(<Anchor as="button" req opt />)
      })

      it('accepts a disabled prop', () => {
        expect.assertions(0)
        render(<Anchor as="button" req disabled />)
      })

      it('accepts a typed onClick prop', () => {
        expect.assertions(0)
        const onClick: MouseEventHandler<HTMLButtonElement> = jest.fn()
        render(<Anchor as="button" req onClick={onClick} />)
      })

      it('does NOT accept a href prop', () => {
        expect.assertions(0)

        /* @ts-expect-error */
        render(<Anchor as="button" req href="//" />)
      })
    })
  })
})
