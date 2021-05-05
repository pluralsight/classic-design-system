import { PropsWithStylesFor } from '../../util'
import React from 'react'

import Context, {
  AllowedSelectors,
  ContextValue,
  initialValue
} from './context'
import { HorzLayout } from './horz'
import { alignments } from '../vars/index'
import { VertLayout } from './vert'

interface NavItemProps
  extends PropsWithStylesFor<AllowedSelectors>,
    Partial<ContextValue> {}

interface NavItemStatics {
  alignments: typeof alignments
}

export const NavItem = React.forwardRef<HTMLButtonElement, NavItemProps>(
  (props, forwardedRef) => {
    const {
      alignment = initialValue.alignment,
      bar,
      children,
      icon,
      menu = initialValue.menu,
      renderContainer = initialValue.renderContainer,
      selected = initialValue.selected,
      // eslint-disable-next-line camelcase
      UNSAFE_stylesFor,
      ...rest
    } = props

    const Layout = alignment === alignments.horizontal ? HorzLayout : VertLayout
    const ctx = {
      alignment,
      bar,
      icon,
      menu,
      ref: forwardedRef,
      selected,
      renderContainer,
      UNSAFE_stylesFor,
      rest
    }

    return (
      <Context.Provider value={ctx}>
        <Layout>{children}</Layout>
      </Context.Provider>
    )
  }
) as React.ForwardRefExoticComponent<Pick<NavItemProps, React.ReactText>> &
  NavItemStatics

NavItem.displayName = 'NavItem'
NavItem.alignments = alignments
