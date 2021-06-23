import DSButton from '@pluralsight/ps-design-system-button'
import { CloseIcon } from '@pluralsight/ps-design-system-icon'
import { P } from '@pluralsight/ps-design-system-text'
import {
  HTMLPropsFor,
  RefForwardingComponent,
  ValueOf
} from '@pluralsight/ps-design-system-util'
import glamorDefault, * as glamorExports from 'glamor'
import React from 'react'

import stylesheet from '../css/index'
import * as vars from '../vars/index'

const glamor = glamorDefault || glamorExports

const ColorContext = React.createContext<ValueOf<typeof vars.colors>>(
  vars.colors.blue
)

type StyleFn = (props: BannerProps) => glamorExports.StyleAttribute

const styles: { [name: string]: StyleFn } = {
  banner: ({ color }) =>
    glamor.compose(
      glamor.css(stylesheet['.psds-banner']),
      glamor.css(stylesheet[`.psds-banner--color-${color}`])
    ),
  button: ({ color }) =>
    glamor.compose(
      glamor.css(stylesheet['.psds-banner__button']),
      glamor.css(stylesheet[`.psds-banner__button--color-${color}`])
    ),
  dismiss: () => glamor.css(stylesheet['.psds-banner__dismiss']),
  text: () => glamor.css(stylesheet['.psds-banner__text'])
}

interface BannerProps extends Omit<HTMLPropsFor<HTMLDivElement>, 'onClick'> {
  color?: ValueOf<typeof vars.colors>
  onClick?: (evt: React.MouseEvent<HTMLButtonElement, MouseEvent>) => void
}

interface BannerStatics {
  Button: typeof Button
  colors: typeof vars.colors
}

interface BannerComponent
  extends RefForwardingComponent<BannerProps, HTMLDivElement, BannerStatics> {}

const Banner = React.forwardRef((props, ref) => {
  const { color = vars.colors.blue, onClick, ...rest } = props

  return (
    <ColorContext.Provider value={color}>
      <div {...styles.banner({ color })} {...rest} ref={ref}>
        <P {...styles.text({ color })}>{props.children}</P>
        {props.onClick && (
          <button {...styles.dismiss(props)} onClick={onClick}>
            <CloseIcon />
          </button>
        )}
      </div>
    </ColorContext.Provider>
  )
}) as BannerComponent

const Button = React.forwardRef<
  HTMLAnchorElement | HTMLButtonElement,
  React.ComponentProps<typeof DSButton>
>((props, ref) => {
  const color = React.useContext(ColorContext)
  return (
    <DSButton
      {...(props as HTMLPropsFor<HTMLButtonElement | HTMLAnchorElement>)}
      {...styles.button({ color })}
      appearance={DSButton.appearances.stroke}
      ref={ref as any}
      size={DSButton.sizes.small}
    />
  )
}) as React.ForwardRefExoticComponent<React.ComponentProps<typeof DSButton>>

Button.displayName = 'Button'

Banner.Button = Button

Banner.colors = vars.colors
export const colors = vars.colors

export default Banner
