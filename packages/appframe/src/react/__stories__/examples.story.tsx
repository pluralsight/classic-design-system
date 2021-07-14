import { breakpoints } from '@pluralsight/ps-design-system-core'
import {
  HomeIcon,
  BrowseIcon,
  PlaceholderIcon
} from '@pluralsight/ps-design-system-icon'
import { useMatchMedia } from '@pluralsight/ps-design-system-util'
import { Meta, Story } from '@storybook/react/types-6-0'
import React from 'react'

import AppFrame from '../index'
import { MockContent, SideNav, TopNav } from './shared'

export default {
  title: 'Components/AppFrame/Examples',
  component: AppFrame
} as Meta

export const Skills: Story = () => {
  const mobile = !useMatchMedia(`(min-width: ${breakpoints.xSmall})`)

  const sidenavSections = React.useMemo(
    () =>
      mobile
        ? [{ items: MAIN_NAV_ITEMS }, ...SIDE_NAV_SECTIONS]
        : SIDE_NAV_SECTIONS,
    [mobile]
  )

  const topnavItems = React.useMemo(
    () => (mobile ? [] : MAIN_NAV_ITEMS),
    [mobile]
  )

  return (
    <AppFrame
      topnav={({ openSidenav, closeSidenav, sidenavOpen }) => {
        const toggle = sidenavOpen ? closeSidenav : openSidenav
        return <TopNav items={topnavItems} onMobileMenuClick={toggle} />
      }}
      sidenav={({ visible }) => (
        <SideNav collapsed={!visible} sections={sidenavSections} />
      )}
    >
      <MockContent />
    </AppFrame>
  )
}

const MAIN_NAV_ITEMS = [
  {
    href: '#',
    icon: <HomeIcon />,
    id: 'nav-home',
    title: 'Home'
  },
  {
    href: '#',
    icon: <BrowseIcon />,
    id: 'nav-browse',
    title: 'Browse'
  }
]

const SIDE_NAV_SECTIONS = [
  {
    header: {
      href: '#',
      icon: <PlaceholderIcon />,
      id: 'admin-tools',
      title: 'Admin Tools'
    },
    items: [
      {
        href: '#',
        icon: <PlaceholderIcon />,
        id: 'admin-tools__dashboard',
        title: 'Dashboard'
      },
      {
        href: '#',
        icon: <PlaceholderIcon />,
        id: 'admin-tools__account',
        title: 'Account'
      },
      {
        href: '#',
        icon: <PlaceholderIcon />,
        id: 'admin-tools__people',
        title: 'People'
      },
      {
        href: '#',
        icon: <PlaceholderIcon />,
        id: 'admin-tools__priorities',
        title: 'Priorities'
      },
      {
        href: '#',
        icon: <PlaceholderIcon />,
        id: 'admin-tools__analytics',
        title: 'Analytics'
      },
      {
        href: '#',
        icon: <PlaceholderIcon />,
        id: 'admin-tools__logs',
        title: 'Logs'
      }
    ]
  },
  {
    header: {
      href: '#',
      icon: <PlaceholderIcon />,
      id: 'content-tools',
      title: 'Content Tools'
    },
    items: [
      {
        href: '#',
        icon: <PlaceholderIcon />,
        id: 'home-tools__home',
        title: 'Home'
      },
      {
        href: '#',
        icon: <PlaceholderIcon />,
        id: 'admin-tools__dashboard',
        title: 'Dashboard'
      }
    ]
  }
]
