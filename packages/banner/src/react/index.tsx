import Button, { ButtonProps } from '@pluralsight/ps-design-system-button'
import { CloseIcon } from '@pluralsight/ps-design-system-icon'
import { P } from '@pluralsight/ps-design-system-text'
import {
  HTMLPropsFor,
  ValueOf,
  forwardRefWithAs,
  forwardRefWithAsAndStatics
} from '@pluralsight/ps-design-system-util'
import { compose, css, StyleAttribute } from 'glamor'
import React, { createContext, useContext } from 'react'

import stylesheet from '../css'
import * as vars from '../vars'

const ColorContext = createContext<ValueOf<typeof vars.colors>>(
  vars.colors.blue
)

type StyleFn = (props: BannerProps) => StyleAttribute

const styles: { [name: string]: StyleFn } = {
  banner: ({ color }) =>
    compose(
      css(stylesheet['.psds-banner']),
      css(stylesheet[`.psds-banner--color-${color}`])
    ),
  button: ({ color }) =>
    compose(
      css(stylesheet['.psds-banner__button']),
      css(stylesheet[`.psds-banner__button--color-${color}`])
    ),
  dismiss: () => css(stylesheet['.psds-banner__dismiss']),
  text: () => css(stylesheet['.psds-banner__text'])
}

interface BannerProps extends Omit<HTMLPropsFor<'div'>, 'onClick'> {
  color?: ValueOf<typeof vars.colors>
  onClick?: (evt: React.MouseEvent<HTMLButtonElement, MouseEvent>) => void
}

interface BannerStatics {
  Button: typeof BannerButton
  colors: typeof vars.colors
}

const Banner = forwardRefWithAsAndStatics<BannerProps, 'div', BannerStatics>(
  (props, ref) => {
    const {
      as: Comp = 'div',
      color = vars.colors.blue,
      onClick,
      ...rest
    } = props

    return (
      <ColorContext.Provider value={color}>
        <Comp {...styles.banner({ color })} {...rest} ref={ref}>
          <P {...styles.text({ color })}>{props.children}</P>

          {onClick && (
            <button {...styles.dismiss(props)} onClick={onClick}>
              <CloseIcon />
            </button>
          )}
        </Comp>
      </ColorContext.Provider>
    )
  }
)

Banner.displayName = 'Banner'

const BannerButton = forwardRefWithAs<ButtonProps, 'button'>((props, ref) => {
  const {
    appearance = Button.appearances.stroke,
    size = Button.sizes.small,
    ...rest
  } = props

  const color = useContext(ColorContext)

  return (
    <Button
      appearance={appearance}
      ref={ref}
      size={size}
      {...styles.button({ color })}
      {...rest}
    />
  )
})

Banner.Button = BannerButton
Banner.Button.displayName = 'Banner.Button'

Banner.colors = vars.colors
export const colors = vars.colors

export default Banner
