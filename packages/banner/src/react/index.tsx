import DSButton from '@pluralsight/ps-design-system-button'
import { CloseIcon } from '@pluralsight/ps-design-system-icon'
import { P } from '@pluralsight/ps-design-system-text'
import {
  HTMLPropsFor,
  RefForwardingComponent,
  RefFor,
  ValueOf,
  classNames
} from '@pluralsight/ps-design-system-util'
import React from 'react'

import '../css/index.css'
import * as vars from '../vars/index'

const ColorContext = React.createContext<ValueOf<typeof vars.colors>>(
  vars.colors.blue
)

interface BannerProps extends Omit<HTMLPropsFor<'div'>, 'onClick'> {
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
  const { className, color = vars.colors.blue, onClick, ...rest } = props

  return (
    <ColorContext.Provider value={color}>
      <div
        {...rest}
        ref={ref}
        className={classNames(
          'psds-banner',
          `psds-banner--color-${color}`,
          className
        )}
      >
        <P className="psds-banner__text">{props.children}</P>
        {props.onClick && (
          <button className="psds-banner__dismiss" onClick={onClick}>
            <CloseIcon />
          </button>
        )}
      </div>
    </ColorContext.Provider>
  )
}) as BannerComponent

Banner.displayName = 'Banner'

interface AnchorProps extends HTMLPropsFor<'a'> {
  href: string
}
interface ButtonProps extends HTMLPropsFor<'button'> {
  href?: undefined
}
type ButtonComponent = React.ForwardRefExoticComponent<unknown> & {
  (props: AnchorProps, ref?: RefFor<'a'>): JSX.Element
  (props: ButtonProps, ref?: RefFor<'button'>): JSX.Element
}
const Button = React.forwardRef<
  HTMLAnchorElement | HTMLButtonElement,
  AnchorProps | ButtonProps
>((props, ref) => {
  const { className, ...rest } = props
  const color = React.useContext(ColorContext)

  return 'href' in props ? (
    <DSButton
      {...(rest as HTMLPropsFor<'a'>)}
      appearance={DSButton.appearances.stroke}
      className={classNames(
        'psds-banner__button',
        `psds-banner__button--color-${color}`,
        className
      )}
      href={props.href || ''}
      ref={ref as RefFor<'a'>}
      size={DSButton.sizes.small}
    />
  ) : (
    <DSButton
      {...(rest as HTMLPropsFor<'button'>)}
      appearance={DSButton.appearances.stroke}
      className={classNames(
        'psds-banner__button',
        `psds-banner__button--color-${color}`,
        className
      )}
      ref={ref as RefFor<'button'>}
      size={DSButton.sizes.small}
    />
  )
}) as ButtonComponent

Button.displayName = 'Button'

Banner.Button = Button

Banner.colors = vars.colors
export const colors = vars.colors

export default Banner
