/* eslint-disable @typescript-eslint/ban-ts-comment */

import { render } from '@testing-library/react'
import React, { MouseEvent } from 'react'

import { forwardRefWithAs, forwardRefWithAsAndStatics } from '..'

interface Props {
  optional?: boolean
}
const Button = forwardRefWithAs<Props, 'button'>((props, ref) => {
  const { as: Comp = 'button', optional, ...rest } = props
  return <Comp data-optional={optional} ref={ref} {...rest} />
})

const Anchor = forwardRefWithAs<Props, 'a'>((props, ref) => {
  const { as: Comp = 'a', optional, ...rest } = props
  return <Comp data-optional={optional} ref={ref} {...rest} />
})

interface Statics {
  Anchor: typeof Anchor
  Button: typeof Button
}

const CompoundComp = forwardRefWithAsAndStatics<Props, 'div', Statics>(
  (props, ref) => {
    const { as: Comp = 'div', optional, ...rest } = props

    return <Comp data-optional={optional} ref={ref} {...rest} />
  }
)
CompoundComp.Anchor = Anchor
CompoundComp.Button = Button

describe('polymorphism', () => {
  describe('#forwardRefWithAs', () => {
    it('renders without type errors', () => {
      expect.assertions(0)

      render(
        <>
          {/* Anchor accepts optional prop */}
          <Anchor optional />

          {/* Anchor accepts href prop */}
          <Anchor href="#" />

          {/* Button accepts optional prop */}
          <Button optional />

          {/* Button accepts disabled prop */}
          <Button disabled />

          {/* Button accepts onClick prop */}
          <Button
            onClick={(evt: MouseEvent<HTMLButtonElement>) =>
              evt.currentTarget.disabled
            }
          />

          {/* Button does NOT accept href prop */}
          {/* @ts-expect-error */}
          <Button href="#" />

          {/* Button as "a" accepts href prop */}
          <Button as="a" href="#" />

          {/* Button as "a" accepts onClick prop */}
          <Button
            as="a"
            onClick={(evt: MouseEvent<HTMLAnchorElement>) =>
              evt.currentTarget.href
            }
          />

          {/* Button as "Anchor" accepts href prop */}
          <Button as={Anchor} href="#" />

          {/* Button as "Anchor" accepts onClick prop */}
          <Button
            as={Anchor}
            onClick={(evt: MouseEvent<HTMLAnchorElement>) =>
              evt.currentTarget.href
            }
          />
        </>
      )
    })
  })

  describe('#forwardRefWithAsAndStatics', () => {
    it('renders without type errors', () => {
      expect.assertions(0)

      render(
        <>
          {/* accepts optional prop */}
          <CompoundComp optional>
            <CompoundComp.Anchor />
            <CompoundComp.Button />
          </CompoundComp>
        </>
      )
    })
  })
})
