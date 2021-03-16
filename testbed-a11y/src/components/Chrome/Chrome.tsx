import AppFrame from '@pluralsight/ps-design-system-appframe'
import { breakpoints } from '@pluralsight/ps-design-system-core'
import { PlaceholderIcon } from '@pluralsight/ps-design-system-icon'
import NavBar from '@pluralsight/ps-design-system-navbar'
import NavBrand from '@pluralsight/ps-design-system-navbrand'
import NavCookieBanner from '@pluralsight/ps-design-system-navcookiebanner'
import NavItem from '@pluralsight/ps-design-system-navitem'
import NavUser from '@pluralsight/ps-design-system-navuser'
import { Label } from '@pluralsight/ps-design-system-text'
import {
  createUniversalPortal,
  useMatchMedia
} from '@pluralsight/ps-design-system-util'
import VerticalTabs from '@pluralsight/ps-design-system-verticaltabs'
import cx from 'classnames'
import { MouseEventHandler, FC, Fragment, useMemo } from 'react'
import { useHistory, useRouteMatch } from 'react-router-dom'

import styles from './Chrome.module.css'

interface Header {
  icon: any
  id: string
  title: string
}

interface Item {
  href: string
  icon: any
  id: string
  title: string
  subItems?: SubItem[]
}

interface Section {
  header?: Header
  items: Item[]
}

interface SubItem {
  href: string
  icon: any
  id: string
  title: string
}

export const Chrome: FC = props => {
  const { children, ...rest } = props
  const mobile = !useMatchMedia(`(min-width: ${breakpoints.xSmall})`)

  const sidenavSections = useMemo(
    () =>
      mobile
        ? [{ items: MAIN_NAV_ITEMS }, ...SIDE_NAV_SECTIONS]
        : SIDE_NAV_SECTIONS,
    [mobile]
  )

  const topnavItems = useMemo(() => (mobile ? [] : MAIN_NAV_ITEMS), [mobile])

  return (
    <div className={styles.chrome} {...rest}>
      <AppFrame
        topnav={({ openSidenav, closeSidenav, sidenavOpen }) => {
          const toggle = sidenavOpen ? closeSidenav : openSidenav
          return <TopNav items={topnavItems} onMobileMenuClick={toggle} />
        }}
        sidenav={({ visible }) => (
          <SideNav collapsed={!visible} sections={sidenavSections} />
        )}
      >
        {children}
      </AppFrame>

      {createUniversalPortal(<NavCookieBanner />, document.body)}
    </div>
  )
}

const Branding: FC = props => (
  <NavBrand {...props} logo={<SkillsLogo />} wordmark="SKILLS" />
)

const SectionDivider: FC = props => (
  <div className={styles.sectionDivider} {...props} />
)

const SectionHeader: FC<{ collapsed: boolean; title: string }> = props => {
  const { collapsed = false, title, ...rest } = props

  const className = cx({
    [styles.sectionHeader]: true,
    [styles.sectionHeaderCollapsed]: collapsed
  })

  return (
    <Label caps color="secondary" size="xSmall" className={className} {...rest}>
      {title}
    </Label>
  )
}
const SkillsLogo: FC = () => (
  <svg aria-hidden viewBox="0 0 32 32">
    <defs>
      <linearGradient
        id="skills-gradient"
        x1="45.6377"
        y1="47.4727"
        x2="-32.2436"
        y2="-35.2537"
        gradientUnits="userSpaceOnUse"
      >
        <stop offset="0.03" stopColor="#F05A28" />
        <stop offset="0.93" stopColor="#EB008B" />
      </linearGradient>
    </defs>
    <path
      d="M0 0V32H32V0H0ZM9.4053 12.7438L15.088 16L9.4053 19.287V12.7438ZM9.4053 24.8503V21.6468L19.1842 16L9.4053 10.3532V7.17166L24.6955 16L9.4053 24.8503Z"
      fill="url(#skills-gradient)"
    />
  </svg>
)

const SideNav: FC<{
  collapsed: boolean
  sections: Section[]
}> = props => {
  const { collapsed = false, sections = [], ...rest } = props

  return (
    <div {...rest}>
      {sections.map((section, sectionKey) => {
        const { header, items = [] } = section

        return (
          <Fragment key={sectionKey}>
            {header && (
              <SectionHeader collapsed={collapsed} title={header.title} />
            )}

            <VerticalTabs forceCollapsed={collapsed} hideLabels={collapsed}>
              {items.map(item => (
                <VerticalTabs.Group key={item.id}>
                  <Tier1 item={item} />
                </VerticalTabs.Group>
              ))}
            </VerticalTabs>

            <SectionDivider />
          </Fragment>
        )
      })}
    </div>
  )
}

const Tier1: FC<{ item: Item }> = props => {
  const { item } = props
  const { subItems = [] } = item

  const match = useRouteMatch({ path: item.href })
  const active = !!match && Object.values(match).length > 0

  return (
    <>
      <VerticalTabs.Tier1
        active={active}
        header={
          <Tier1Header icon={item.icon} to={item.href}>
            {item.title}
          </Tier1Header>
        }
      />

      {subItems.map(subItem => (
        <VerticalTabs.Tier2
          key={subItem.id}
          header={
            <VerticalTabs.Tier2.Header href={subItem.href}>
              {subItem.title}
            </VerticalTabs.Tier2.Header>
          }
        />
      ))}
    </>
  )
}

const Tier1Header: React.FC<{
  onClick?: MouseEventHandler<HTMLAnchorElement>
  icon?: any
  to: string
}> = props => {
  const { onClick, to, ...rest } = props

  const history = useHistory()

  const handleClick: MouseEventHandler<HTMLAnchorElement> = evt => {
    evt.preventDefault()

    if (onClick) onClick(evt)
    history.push(to)
  }

  return (
    <VerticalTabs.Tier1.Header
      href={props.to}
      onClick={handleClick}
      {...rest}
    />
  )
}

interface TopNavProps {
  onMobileMenuClick: any
  items: any[]
}
const TopNav: FC<TopNavProps> = props => {
  const { children, onMobileMenuClick, items = [] } = props
  const history = useHistory()

  const handleUserClick: MouseEventHandler = evt => {
    evt.preventDefault()
    history.push('/profile')
  }

  return (
    <div>
      <NavBar
        brand={<Branding />}
        items={
          <Fragment>
            {items.map(item => (
              <div className={styles.navItem} key={item.id}>
                <NavItem icon={item.icon}>{item.title}</NavItem>
              </div>
            ))}

            {children}
          </Fragment>
        }
        onMobileMenuClick={onMobileMenuClick}
        user={<NavUser name="Jake" onClick={handleUserClick} />}
      />
    </div>
  )
}

const MAIN_NAV_ITEMS: Item[] = []

const SIDE_NAV_SECTIONS: Section[] = [
  {
    header: {
      icon: <PlaceholderIcon />,
      id: 'section-1__header',
      title: 'Examples'
    },
    items: [
      {
        href: '/search',
        icon: <PlaceholderIcon />,
        id: 'section-1__header__search',
        title: 'Search'
      },
      {
        href: '/users',
        icon: <PlaceholderIcon />,
        id: 'section-1__header__users',
        title: 'Users'
      }
    ]
  }
]
