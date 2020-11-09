import { PropsWithStylesFor } from '@pluralsight/ps-design-system-util'
import React from 'react'

import { alignments } from '../vars'

import Context, { ContextValue, initialValue } from './context'
import { HorzLayout } from './horz'
import { VertLayout } from './vert'

type AllowedSelectors = 'navitem__bar' | 'navitem__bar--selected'

interface NavItemProps
  extends PropsWithStylesFor<AllowedSelectors>,
    Partial<ContextValue> {}

interface NavItemStatics {
  alignments: typeof alignments
}

const NavItem: React.FC<NavItemProps> & NavItemStatics = props => {
  const {
    alignment = initialValue.alignment,
    bar,
    children,
    icon,
    menu = initialValue.menu,
    renderContainer = initialValue.renderContainer,
    selected = initialValue.selected
  } = props

  const Layout = alignment === alignments.horizontal ? HorzLayout : VertLayout
  const ctx = { alignment, bar, icon, menu, selected, renderContainer }

  return (
    <Context.Provider value={ctx}>
      <Layout>{children}</Layout>
    </Context.Provider>
  )
}

NavItem.displayName = 'NavItem'
NavItem.alignments = alignments

export default NavItem
