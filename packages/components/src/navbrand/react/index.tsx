import { Halo } from '../../halo'
import { HTMLPropsFor, RefFor } from '../../util'
import glamorDefault, * as glamorExports from 'glamor'
import React from 'react'

import stylesheet from '../css/index'

const glamor = glamorDefault || glamorExports

const styles = {
  logo: (props: { children?: unknown }) =>
    glamor.css(
      stylesheet['.psds-navbrand__logo'],
      props.children &&
        glamor.media(
          '(min-width: 1200px)',
          stylesheet['@media (min-width: 1200px)'][
            '.psds-navbrand__logo--wordmark'
          ]
        )
    ),
  navBrand: (props: { href?: string; onClick?: unknown }) =>
    glamor.css(
      stylesheet['.psds-navbrand'],
      (props.href || props.onClick) && stylesheet['.psds-navbrand--clickable']
    ),
  wordmark: () =>
    glamor.css(
      stylesheet['.psds-navbrand__wordmark'],
      glamor.media(
        '(min-width: 1200px)',
        stylesheet['@media (min-width: 1200px)']['.psds-navbrand__wordmark']
      )
    )
}

interface BaseNavBrandProps {
  logo?: React.ReactNode
  wordmark?: React.ReactNode
}
interface AnchorProps extends BaseNavBrandProps, HTMLPropsFor<'a'> {
  href: string
  onClick?: React.MouseEventHandler<HTMLAnchorElement>
}
interface ButtonProps extends BaseNavBrandProps, HTMLPropsFor<'button'> {
  href?: undefined
  onClick: React.MouseEventHandler<HTMLButtonElement>
}
interface DivProps extends BaseNavBrandProps, HTMLPropsFor<'div'> {
  href?: undefined
  onClick?: React.MouseEventHandler<HTMLDivElement>
}

type NavBrandElement = HTMLAnchorElement | HTMLButtonElement | HTMLDivElement
type NavBrandProps = AnchorProps | ButtonProps | DivProps
type NavBrandComponent = {
  (props: AnchorProps, ref?: RefFor<'a'>): JSX.Element
  (props: ButtonProps, ref?: RefFor<'button'>): JSX.Element
  (props: DivProps, ref?: RefFor<'div'>): JSX.Element
}

export const NavBrand = React.forwardRef<NavBrandElement, NavBrandProps>(
  (props, forwardedRef) => {
    const { logo, wordmark, ...rest } = props

    const ref = React.useRef<NavBrandElement>(null)
    React.useImperativeHandle(
      forwardedRef,
      () => (ref.current as unknown) as NavBrandElement
    )
    const isAnchor = 'href' in props
    const isButton = !isAnchor && 'onClick' in props

    const Wrapper: React.FC = wrapperProps =>
      isAnchor ? (
        <a
          ref={ref as RefFor<'a'>}
          {...(rest as HTMLPropsFor<'a'>)}
          {...wrapperProps}
        />
      ) : isButton ? (
        <button
          ref={ref as RefFor<'button'>}
          {...wrapperProps}
          {...(rest as HTMLPropsFor<'button'>)}
        />
      ) : (
        <div
          ref={ref as RefFor<'div'>}
          {...wrapperProps}
          {...(rest as HTMLPropsFor<'div'>)}
        />
      )

    return (
      <Halo inline gapSize={Halo.gapSizes.small}>
        <Wrapper {...styles.navBrand(props)}>
          <Logo>{logo}</Logo>
          <Wordmark>{wordmark}</Wordmark>
        </Wrapper>
      </Halo>
    )
  }
) as NavBrandComponent

const Logo: React.FC = props => <div {...styles.logo(props)} {...props} />
Logo.displayName = 'NavBrand.Logo'

const Wordmark: React.FC = props => <div {...styles.wordmark()} {...props} />
Wordmark.displayName = 'NavBrand.Wordmark'
