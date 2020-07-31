import { storiesOf } from '@storybook/react'
import React, { useCallback, useEffect, useState } from 'react'

import {
  HomeIcon,
  BrowseIcon,
  PlaceholderIcon
} from '@pluralsight/ps-design-system-icon'

import Frame from '../index.js'
import {
  MockContent,
  SideNav as MockSideNav,
  TopNav as MockTopNav
} from './shared.js'

import { breakpoints } from '../../vars/index.js'

import useMatchMedia from '../use-match-media.js'

storiesOf('Frame|Examples/Skills', module).add('controlled', () => {
  const largeMedia = useMatchMedia(`(min-width: ${breakpoints.large})`)

  const [open, setOpen] = useState(() => largeMedia)
  const [hovered, setHovered] = useState(false)

  const toggle = () => setOpen(!open)
  const handleMouseEnter = () => setHovered(true)
  const handleMouseLeave = () => setHovered(false)

  const hideNavItems = !open && !hovered

  return (
    <Frame
      sidenav={
        <SkillsSideNav
          collapsed={hideNavItems}
          hideLabels={hideNavItems}
          onMouseEnter={handleMouseEnter}
          onMouseLeave={handleMouseLeave}
        />
      }
      sidenavOpen={open}
      sidenavOverlayed={!open && hovered}
      topnav={<SkillsTopNav onMobileMenuClick={toggle} />}
    >
      <MockContent />
    </Frame>
  )
})

function SkillsSideNav(props) {
  const mediumMedia = useMatchMedia(`(min-width: ${breakpoints.medium})`)

  const getSections = useCallback(() => {
    return mediumMedia
      ? SIDE_NAV_SECTIONS
      : [{ items: MAIN_NAV_ITEMS }, ...SIDE_NAV_SECTIONS]
  }, [mediumMedia])

  const [sections, setSections] = useState(getSections)

  useEffect(() => {
    setSections(getSections)
  }, [getSections])

  return <MockSideNav {...props} sections={sections} />
}

function SkillsTopNav(props) {
  const mediumMedia = useMatchMedia(`(min-width: ${breakpoints.medium})`)

  const getItems = useCallback(() => {
    return mediumMedia ? MAIN_NAV_ITEMS : []
  }, [mediumMedia])

  const [items, setItems] = useState(getItems)

  useEffect(() => {
    setItems(getItems)
  }, [getItems])

  return <MockTopNav {...props} items={items} />
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
