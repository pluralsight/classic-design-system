import { withRouter } from 'next/router.js'
import PropTypes from 'prop-types'
import React from 'react'

import {
  colorsBackgroundLight,
  colorsBorder,
  colorsPrimaryAction,
  colorsTextIcon,
  layout,
  motion,
  type
} from '@pluralsight/ps-design-system-core'
import { CloseIcon } from '@pluralsight/ps-design-system-icon'

import { withHeadings } from './content.js'
import Link from './link.js'

const cssVars = {
  linkActiveWidth: '8px',
  sidenavWidth: '200px'
}

const NAV_CONFIG = [
  {
    id: 'group-intro',
    title: 'Introduction',
    items: [
      { href: '/install', label: 'Install' },
      { href: '/config', label: 'Config' },
      { href: '/contribute', label: 'Contribute' },
      { href: '/roadmap', label: 'Roadmap' }
    ]
  },
  {
    id: 'group-core',
    title: 'Core',
    hrefPrefix: '/core',
    items: [
      { href: '/color', label: 'Color' },
      { href: '/motion', label: 'Motion' },
      { href: '/spacing', label: 'Spacing' },
      { href: '/typography', label: 'Typography' }
    ]
  },
  {
    id: 'group-patterns',
    title: 'Patterns',
    hrefPrefix: '/patterns',
    items: [
      { href: '/iconography', label: 'Iconography' },
      { href: '/voice-tone', label: 'Voice & tone' }
    ]
  },
  {
    id: 'group-utils',
    title: 'Utils',
    hrefPrefix: '/utils',
    items: [
      { href: '/featureflags', label: 'Feature Flags' },
      { href: '/icon', label: 'Icon Cli' },
      { href: '/position', label: 'Position' },
      { href: '/scrollable', label: 'Scrollable' },
      { href: '/theme', label: 'Theme' },
      { href: '/screenreaderonly', label: 'Screen Reader Only' }
    ]
  },
  {
    id: 'group-components',
    title: 'Components',
    hrefPrefix: '/components',
    items: [
      { href: '/actionmenu', label: 'Action Menu' },
      { href: '/appframe', label: 'App Frame' },
      { href: '/avatar', label: 'Avatar' },
      { href: '/badge', label: 'Badge' },
      { href: '/banner', label: 'Banner' },
      { href: '/breadcrumb', label: 'Breadcrumb' },
      { href: '/button', label: 'Button' },
      { href: '/card', label: 'Card' },
      { href: '/carousel', label: 'Carousel' },
      { href: '/checkbox', label: 'Checkbox' },
      { href: '/circularprogress', label: 'Circular Progress' },
      { href: '/code', label: 'Code' },
      { href: '/datawell', label: 'Data Well' },
      { href: '/datepicker', label: 'Date Picker' },
      { href: '/dialog', label: 'Dialog' },
      { href: '/drawer', label: 'Drawer' },
      { href: '/dropdown', label: 'Dropdown' },
      { href: '/emptystate', label: 'Empty State' },
      { href: '/errors', label: 'Errors' },
      { href: '/form', label: 'Form' },
      { href: '/icon', label: 'Icon' },
      { href: '/layout', label: 'Layout' },
      { href: '/linearprogress', label: 'Linear Progress' },
      { href: '/link', label: 'Link' },
      { href: '/nav', label: 'Nav' },
      { href: '/note', label: 'Note' },
      { href: '/radio', label: 'Radio' },
      { href: '/row', label: 'Row' },
      { href: '/searchinput', label: 'Search Input' },
      { href: '/starrating', label: 'Star Rating' },
      { href: '/switch', label: 'Switch' },
      { href: '/tab', label: 'Tab' },
      { href: '/table', label: 'Table' },
      { href: '/tag', label: 'Tag' },
      { href: '/text', label: 'Text' },
      { href: '/textarea', label: 'Text Area' },
      { href: '/textinput', label: 'Text Input' },
      { href: '/tooltip', label: 'Tooltip' },
      { href: '/typeahead', label: 'Typeahead' },
      { href: '/verticaltabs', label: 'Vertical Tabs' },
      { href: '/viewtoggle', label: 'View Toggle' }
    ]
  }
]

const SideNav = withHeadings(props => {
  const { headings, isOpen } = props

  return (
    <>
      <nav className={`sidenav ${isOpen ? 'sidenavOpen' : ''}`}>
        <SideNav.Close onCloseClick={props.onCloseClick} />

        <Logo />

        {NAV_CONFIG.map(group => {
          const prefix = group.hrefPrefix || ''

          return (
            <Group key={group.id}>
              <Group.Title>{group.title}</Group.Title>

              {group.items.map((item, index) => {
                const href = prefix + item.href

                return (
                  <Group.Item key={index} headings={headings} href={href}>
                    {item.label}
                  </Group.Item>
                )
              })}
            </Group>
          )
        })}
      </nav>

      <style jsx>{`
        .sidenav {
          position: fixed;
          top: 0;
          left: 0;
          border-right: 1px solid ${colorsBorder.lowOnLight};
          transform: translateX(calc(-1 * ${cssVars.sidenavWidth}));
          height: 100vh;
          width: ${cssVars.sidenavWidth};
          background: ${colorsBackgroundLight[2]};
          overflow-x: hidden;
          overflow-y: auto;
          transition: transform ${motion.speedXFast} ease-in-out;
        }
        .sidenavOpen {
          transform: translateX(0);
          box-shadow: 0 2px 17px rgba(0, 0, 0, 0.5);

          /* TODO: arbitrary; place above code mirror; come back when ready to systemize */
          z-index: 10;
        }
        @media screen and (min-width: 769px) {
          .sidenav {
            transition: none;
            position: fixed;
            box-shadow: none;
            transform: translateX(0);
            min-height: 100%;
            border-top: none;
            flex-direction: column;
          }
        }
      `}</style>
    </>
  )
})

SideNav.displayName = 'SideNav'

SideNav.propTypes = {
  isOpen: PropTypes.bool
}

export default SideNav

function Close(props) {
  const { onCloseClick } = props
  return (
    <>
      <div className="close">
        <button className="button" onClick={onCloseClick}>
          <CloseIcon />
        </button>
      </div>

      <style jsx>{`
        .button {
          background: none;
          border: 0;
          padding: 0;
          margin: ${layout.spacingLarge};
          cursor: pointer;
          color: ${colorsTextIcon.lowOnLight};
          line-height: 0;
          transition: all ${motion.speedXFast} linear;
        }
        .button:hover,
        .button:focus {
          color: ${colorsTextIcon.highOnLight};
        }
        .button:focus {
          color: ${colorsTextIcon.highOnLight};
          border-radius: 2px;
        }
        @media screen and (min-width: 769px) {
          .close {
            display: none;
          }
        }
      `}</style>
    </>
  )
}

SideNav.Close = Close
SideNav.Close.displayName = 'SideNav.Close'

Close.propTypes = {
  onCloseClick: PropTypes.func.isRequired
}

function Group(props) {
  return (
    <>
      <div className="group" {...props} />

      <style jsx>{`
        .group {
          padding: ${layout.spacingSmall} ${layout.spacingLarge};
          border-top: 1px solid ${colorsBorder.lowOnLight};
        }
      `}</style>
    </>
  )
}

SideNav.Group = Group
SideNav.Group.displayName = 'SideNav.Group'

const GroupItem = withRouter(props => {
  const { children, headings, href, router } = props

  const isActive =
    (typeof window !== 'undefined' && window.location.pathname === href) ||
    router.pathname === href

  return (
    <>
      <div className="navLink">
        <Link href={href}>
          <span className={`link ${isActive ? 'linkActive' : ''}`}>
            <span aria-hidden="true" className="box" />
            {children}
          </span>
        </Link>

        {isActive && <Group.Nested headings={headings} />}
      </div>

      <style jsx>{`
        .box {
          display: inline-block;
          height: 8px;
          width: 0px;
          margin-right: 0px;
          background: ${colorsPrimaryAction.background};
          transition: all ${motion.speedXFast} ease-in-out;
        }
        .navLink :global(a) {
          text-decoration: none;
        }
        .navLink .link {
          display: flex;
          align-items: center;
          font-size: ${type.fontSizeSmall};
          line-height: ${type.lineHeightExtra};
          color: ${colorsTextIcon.lowOnLight};
          white-space: nowrap;
          transition: all ${motion.speedXFast} ease-in-out;
        }
        .navLink .link:hover {
          color: ${colorsTextIcon.highOnLight};
          text-decoration: none;
        }
        .link:hover .box {
          width: 8px;
          padding-left: 8px;
          margin-right: 12px;
        }
        .linkActive {
          color: ${colorsTextIcon.highOnLight};
          font-weight: ${type.fontWeightBold};
        }
        .linkActive .box {
          width: ${cssVars.linkActiveWidth};
          padding-left: 8px;
          margin-right: 12px;
        }
      `}</style>
    </>
  )
})

GroupItem.propTypes = {
  children: PropTypes.node,
  headings: PropTypes.arrayOf(PropTypes.any),
  href: PropTypes.string,
  router: PropTypes.shape({
    pathname: PropTypes.string
  })
}

SideNav.Group.Item = GroupItem
SideNav.Group.Item.displayName = 'SideNav.Group.Item'

function GroupNested(props) {
  const { headings } = props
  if (headings.length <= 0) return null

  return (
    <>
      <div className="links">
        {headings.map(h => (
          <a className="link" href={h.href} key={h.href}>
            {h.label}
          </a>
        ))}
      </div>

      <style jsx>{`
        @keyframes grow {
          100% {
            height: auto;
          }
        }
        .links {
          position: relative;
          margin-top: ${layout.spacingXXSmall};
          margin-bottom: ${layout.spacingXSmall};
          margin-left: calc(${cssVars.linkActiveWidth} / 2);
          padding-left: ${layout.spacingMedium};
          height: 0;
          animation: grow ${motion.speedXSlow} forwards;
        }
        .links:after {
          position: absolute;
          top: ${layout.spacingXSmall};
          left: -1px;
          content: '';
          display: block;
          height: calc(100% - (2 * ${layout.spacingXSmall}));
          width: 0;
          border-left: 1px solid ${colorsBorder.lowOnLight};
        }
        .link {
          display: block;
          font-size: ${type.fontSizeXSmall};
          line-height: ${type.lineHeightExtra};
          color: ${colorsTextIcon.lowOnLight};
          white-space: nowrap;
          cursor: pointer;
          transition: all ${motion.speedXFast} ease-in-out;
        }
        .link:hover {
          color: ${colorsTextIcon.highOnLight};
          text-decoration: none;
        }
      `}</style>
    </>
  )
}

SideNav.Group.Nested = GroupNested
SideNav.Group.Nested.displayName = 'SideNav.Group.Nested'

GroupNested.propTypes = {
  headings: PropTypes.array
}

function GroupTitle(props) {
  return (
    <>
      <div className="groupTitle" {...props} />

      <style jsx>{`
        .groupTitle {
          margin: 0;
          color: ${colorsTextIcon.highOnLight};
          font-size: ${type.fontSizeXSmall};
          line-height: ${type.lineHeightExtra};
          font-weight: ${type.fontWeightMedium};
          text-transform: uppercase;
        }
      `}</style>
    </>
  )
}

SideNav.Group.Title = GroupTitle
SideNav.Group.Title.displayName = 'SideNav.Group.Title'

function Logo() {
  return (
    <>
      <div className="logo">
        <Link href="/">
          <span className="box">
            <LogoSvg />

            <h2 className="text">
              <span className="textCompany">Pluralsight</span>
              <span className="textTitle">Design System</span>
            </h2>
          </span>
        </Link>
      </div>

      <style jsx>{`
        .logo {
          display: none;
        }
        @media screen and (min-width: 769px) {
          .logo {
            display: block;
          }
          .logo :global(a) {
            text-decoration: none;
          }
          .box {
            display: flex;
            justify-content: center;
            align-items: center;
            text-decoration: none;
            padding: 72px 0;
          }
          .box:hover {
            text-decoration: none !important;
          }
          .text {
            margin: 0;
          }
          .textCompany {
            display: block;
            letter-spacing: 0.15em;
            font-size: ${type.fontSizeXSmall};
            font-weight: ${type.fontWeightMedium};
            color: ${colorsTextIcon.highOnLight};
            font-family: ${type.fontFamily};
            text-transform: uppercase;
          }
          .textTitle {
            display: block;
            font-size: 8px;
            color: ${colorsTextIcon.highOnLight};
            font-weight: ${type.fontWeightMedium};
            text-transform: uppercase;
          }
        }
      `}</style>
    </>
  )
}

SideNav.Logo = Logo
SideNav.Logo.displayName = 'SideNav.Logo'

function LogoSvg() {
  return (
    <>
      <svg
        className="logoSvg"
        viewBox="0 0 32 32"
        xmlns="http://www.w3.org/2000/svg"
      >
        <defs>
          <linearGradient x1="50%" y1="0%" x2="50%" y2="100%" id="a">
            <stop stopColor="#F96816" offset="0%" />
            <stop stopColor="#E80A89" offset="100%" />
          </linearGradient>
        </defs>
        <g fill="none" fillRule="evenodd">
          <path
            d="M16 32c8.837 0 16-7.164 16-15.9993C32.0007 7.164 24.837 0 16 0 7.1637 0 0 7.164 0 16.0007 0 24.836 7.163 32 16 32z"
            fill="url(#a)"
          />
          <path
            d="M8.625 9.5v13l11.25-6.5-11.25-6.5zM10 11.8824L17.1265 16 10 20.1174v-8.235z"
            fill="#FFF"
          />
          <path
            d="M11.875 7.625v16.75L26.25 16 11.875 7.625zm1.375 2.3924L23.5186 16 13.25 21.9826V10.0174z"
            fill="#FFF"
          />
        </g>
      </svg>

      <style jsx>{`
        .logoSvg {
          height: 31px;
          width: 31px;
          margin-right: 8px;
        }
      `}</style>
    </>
  )
}
