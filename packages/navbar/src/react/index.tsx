import { MenuIcon } from '@pluralsight/ps-design-system-icon'
import NavItem from '@pluralsight/ps-design-system-navitem'
import { HTMLPropsFor } from '@pluralsight/ps-design-system-util'
import glamorDefault, * as glamorExports from 'glamor'
import React from 'react'

import stylesheet from '../css/index'

const glamor = glamorDefault || glamorExports

const styles = {
  brand: () => glamor.css(stylesheet['.psds-navbar__brand']),
  mobileMenu: () => glamor.css(stylesheet['.psds-navbar__mobile-menu']),
  navbar: () => glamor.css(stylesheet['.psds-navbar']),
  items: () => glamor.css(stylesheet['.psds-navbar__items']),
  user: () => glamor.css(stylesheet['.psds-navbar__user']),
  utility: () => glamor.css(stylesheet['.psds-navbar__utility'])
}

interface NavBarProps extends HTMLPropsFor<'div'> {
  brand?: React.ReactNode
  items?: React.ReactNode
  onMobileMenuClick?: React.MouseEventHandler
  user?: React.ReactNode
  utility?: React.ReactNode
}

const NavBar = React.forwardRef<HTMLDivElement, NavBarProps>(
  (props, forwardedRef) => {
    const { brand, items, onMobileMenuClick, utility, user, ...rest } = props

    const ref = React.useRef<HTMLDivElement>(null)
    React.useImperativeHandle(
      forwardedRef,
      () => (ref.current as unknown) as HTMLDivElement
    )

    return (
      <div ref={ref} {...styles.navbar()} {...rest}>
        {onMobileMenuClick && (
          <div {...styles.mobileMenu()}>
            <NavItem icon={<MenuIcon />} onClick={onMobileMenuClick} />
          </div>
        )}
        <div {...styles.brand()}>{brand}</div>
        <div {...styles.items()}>{items}</div>
        <div {...styles.utility()}>{utility}</div>
        <div {...styles.user()}>{user}</div>
      </div>
    )
  }
)
NavBar.displayName = 'NavBar'

export default NavBar
