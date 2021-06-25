import Halo from '@pluralsight/ps-design-system-halo'

import glamorDefault, * as glamorExports from 'glamor'
import React from 'react'

import stylesheet from '../css/index'

const glamor = glamorDefault || glamorExports

const styles = {
  logo: (children: boolean) =>
    glamor.css(
      stylesheet['.psds-navbrand__logo'],
      children &&
        glamor.media(
          '(min-width: 1200px)',
          stylesheet['@media (min-width: 1200px)'][
            '.psds-navbrand__logo--wordmark'
          ]
        )
    ),
  navBrand: (clickable: boolean) =>
    glamor.css(
      stylesheet['.psds-navbrand'],
      clickable && stylesheet['.psds-navbrand--clickable']
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

interface NavBrandProps
  extends React.HTMLAttributes<
    HTMLAnchorElement | HTMLButtonElement | HTMLDivElement
  > {
  logo?: React.ReactNode
  wordmark?: React.ReactNode
  onClick?: React.MouseEventHandler<
    HTMLAnchorElement | HTMLButtonElement | HTMLDivElement
  >
  href?: string
  target?: string
  rel?: string
}

type NavBrandElement = HTMLAnchorElement | HTMLButtonElement | HTMLDivElement

const NavBrand = React.forwardRef<NavBrandElement, NavBrandProps>(
  (props, forwardedRef) => {
    const { logo, wordmark, ...rest } = props

    const ref = React.useRef<NavBrandElement>(null)
    React.useImperativeHandle(
      forwardedRef,
      () => (ref.current as unknown) as NavBrandElement
    )
    const isAnchor = 'href' in props
    const isButton = !isAnchor && 'onClick' in props

    const Wrapper = isAnchor ? 'a' : isButton ? 'button' : 'div'

    return (
      <Halo inline gapSize={Halo.gapSizes.small}>
        <Wrapper
          {...styles.navBrand(Boolean(props.href || props.onClick))}
          ref={ref as any}
          {...rest}
        >
          <Logo>{logo}</Logo>
          <Wordmark>{wordmark}</Wordmark>
        </Wrapper>
      </Halo>
    )
  }
)

export default NavBrand

const Logo: React.FC = props => (
  <div {...styles.logo(Boolean(props.children))} {...props} />
)
Logo.displayName = 'NavBrand.Logo'

const Wordmark: React.FC = props => <div {...styles.wordmark()} {...props} />
Wordmark.displayName = 'NavBrand.Wordmark'
