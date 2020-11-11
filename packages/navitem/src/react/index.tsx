import { PropsWithStylesFor } from '@pluralsight/ps-design-system-util'
import React from 'react'

import { alignments } from '../vars'

import Context, {
  AllowedSelectors,
  ContextValue,
  initialValue
} from './context'
import { HorzLayout } from './horz'
import { VertLayout } from './vert'

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
    renderContent = initialValue.renderContent,
    selected = initialValue.selected,
    // eslint-disable-next-line camelcase
    UNSAFE_stylesFor
  } = props

  const Layout = alignment === alignments.horizontal ? HorzLayout : VertLayout
  const ctx = {
    alignment,
    bar,
    icon,
    menu,
    selected,
    renderContent,
    UNSAFE_stylesFor
  }

  return (
    <Context.Provider value={ctx}>
      <Layout>{children}</Layout>
    </Context.Provider>
  )
}

NavItem.displayName = 'NavItem'
NavItem.alignments = alignments

export default NavItem
