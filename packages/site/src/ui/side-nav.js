import PropTypes from 'prop-types'
import React from 'react'
import { withRouter } from 'next/router.js'

import * as core from '@pluralsight/ps-design-system-core'
import {CloseIcon} from '@pluralsight/ps-design-system-icon'

import { withHeadings } from './content.js'
import Link from './link.js'

const css = {
  linkActiveWidth: '8px',
  sidenavWidth: '200px'
}

const Group = props => (
  <div className="group">
    {props.children}
    <style jsx>{`
      .group {
        padding: ${core.layout.spacingSmall} ${core.layout.spacingLarge};
        border-top: 1px solid ${core.colors.gray01};
      }
    `}</style>
  </div>
)
Group.propTypes = {
  children: PropTypes.node
}

const GroupTitle = props => (
  <div className="groupTitle">
    {props.children}

    <style jsx>{`
      .groupTitle {
        margin: 0;
        color: ${core.colors.black};
        font-size: ${core.type.fontSizeXSmall};
        line-height: ${core.type.lineHeightExtra};
        font-weight: ${core.type.fontWeightMedium};
        text-transform: uppercase;
      }
    `}</style>
  </div>
)
GroupTitle.propTypes = {
  children: PropTypes.node
}

const InternalLinks = ({ headings = [] }) => {
  if (headings.length <= 0) return null

  return (
    <div className="links">
      {headings.map(h => (
        <a className="link" href={h.href} key={h.href}>
          {h.label}
        </a>
      ))}

      <style jsx>{`
        @keyframes grow {
          100% {
            height: auto;
          }
        }
        .links {
          position: relative;
          margin-top: ${core.layout.spacingXXSmall};
          margin-bottom: ${core.layout.spacingXSmall};
          margin-left: calc(${css.linkActiveWidth} / 2);
          padding-left: ${core.layout.spacingMedium};
          height: 0;
          animation: grow ${core.motion.speedXSlow} forwards;
        }
        .links:after {
          position: absolute;
          top: ${core.layout.spacingXSmall};
          left: -1px;
          content: '';
          display: block;
          height: calc(100% - (2 * ${core.layout.spacingXSmall}));
          width: 0;
          border-left: 1px solid ${core.colors.gray01};
        }
        .link {
          display: block;
          font-size: ${core.type.fontSizeXSmall};
          line-height: ${core.type.lineHeightExtra};
          color: ${core.colors.gray03};
          white-space: nowrap;
          cursor: pointer;
          transition: all ${core.motion.speedXFast} ease-in-out;
        }
        .link:hover {
          color: ${core.colors.black};
          text-decoration: none;
        }
      `}</style>
    </div>
  )
}
InternalLinks.propTypes = {
  headings: PropTypes.array
}

class RouterUnawareNavLink extends React.Component {
  render() {
    const isActive =
      (typeof window !== 'undefined' &&
        window.location.pathname === this.props.href) ||
      this.props.router.pathname === this.props.href
    return (
      <div className="navLink">
        <Link href={this.props.href}>
          <span className={`link ${isActive ? 'linkActive' : ''}`}>
            <span aria-hidden="true" className="box" />
            {this.props.children}
          </span>
        </Link>
        {isActive && <InternalLinks headings={this.props.headings} />}
        <style jsx>{`
          .box {
            display: inline-block;
            height: 8px;
            width: 0px;
            margin-right: 0px;
            background: ${core.colors.gradientHorz};
            transition: all ${core.motion.speedXFast} ease-in-out;
          }
          .navLink :global(a) {
            text-decoration: none;
          }
          .navLink .link {
            display: flex;
            align-items: center;
            font-size: ${core.type.fontSizeSmall};
            line-height: ${core.type.lineHeightExtra};
            color: ${core.colors.gray03};
            white-space: nowrap;
            transition: all ${core.motion.speedXFast} ease-in-out;
          }
          .navLink .link:hover {
            color: ${core.colors.black};
            text-decoration: none;
          }
          .link:hover .box {
            width: 8px;
            padding-left: 8px;
            margin-right: 12px;
          }
          .linkActive {
            color: ${core.colors.black};
            font-weight: ${core.type.fontWeightBold};
          }
          .linkActive .box {
            width: ${css.linkActiveWidth};
            padding-left: 8px;
            margin-right: 12px;
          }
        `}</style>
      </div>
    )
  }
}
RouterUnawareNavLink.propTypes = {
  children: PropTypes.node,
  headings: PropTypes.arrayOf(PropTypes.object),
  href: PropTypes.string
}
RouterUnawareNavLink.propTypes = {
  children: PropTypes.node,
  headings: PropTypes.arrayOf(PropTypes.any),
  href: PropTypes.string,
  router: PropTypes.shape({
    pathname: PropTypes.string
  })
}
const NavLink = withRouter(RouterUnawareNavLink)

const LogoSvg = _ => (
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
    <style jsx>{`
      .logoSvg {
        height: 31px;
        width: 31px;
        margin-right: 8px;
      }
    `}</style>
  </svg>
)

const Logo = _ => (
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
          font-size: ${core.type.fontSizeXSmall};
          font-weight: ${core.type.fontWeightMedium};
          color: ${core.colors.black};
          font-family: ${core.type.fontFamily};
          text-transform: uppercase;
        }
        .textTitle {
          display: block;
          font-size: 8px;
          color: ${core.colors.gray03};
          font-weight: ${core.type.fontWeightMedium};
          text-transform: uppercase;
        }
      }
    `}</style>
  </div>
)

const Close = props => (
  <div className="close">
    <button className="button" onClick={props.onCloseClick}>
      <CloseIcon />
    </button>

    <style jsx>{`
      .close {
      }
      .button {
        background: none;
        border: 0;
        padding: 0;
        margin: ${core.layout.spacingLarge};
        cursor: pointer;
        color: ${core.colors.gray03};
        line-height: 0;
        transition: all ${core.motion.speedXFast} linear;
      }
      .button:hover,
      .button:focus {
        color: ${core.colors.black};
      }
      .button:focus {
        background: ${core.colors.gray01};
        border-radius: 2px;
      }
      @media screen and (min-width: 769px) {
        .close {
          display: none;
        }
      }
    `}</style>
  </div>
)
Close.propTypes = {
  onCloseClick: PropTypes.func.isRequired
}

const SideNav = withHeadings(props => (
  <nav className={`sidenav ${props.isOpen ? 'sidenavOpen' : ''}`}>
    <Close onCloseClick={props.onCloseClick} />

    <Logo />

    <Group>
      <GroupTitle>Introduction</GroupTitle>
      <NavLink href="/install">Install</NavLink>
      <NavLink href="/design-assets">Design assets</NavLink>
      <NavLink href="/contribute" headings={props.headings}>
        Contribute
      </NavLink>
      <NavLink href="/roadmap">Roadmap</NavLink>
    </Group>

    <Group>
      <GroupTitle>Core</GroupTitle>
      <NavLink href="/core/color">Color</NavLink>
      <NavLink href="/core/motion">Motion</NavLink>
      <NavLink href="/core/spacing">Spacing</NavLink>
      <NavLink href="/core/typography">Typography</NavLink>
    </Group>

    <Group>
      <GroupTitle>Patterns</GroupTitle>
      <NavLink href="/patterns/iconography" headings={props.headings}>
        Iconography
      </NavLink>
      <NavLink href="/patterns/voice-tone" headings={props.headings}>
        Voice & tone
      </NavLink>
    </Group>

    <Group>
      <GroupTitle>Components</GroupTitle>
      <NavLink href="/components/actionmenu" headings={props.headings}>
        Action Menu
      </NavLink>
      <NavLink href="/components/avatar" headings={props.headings}>
        Avatar
      </NavLink>
      <NavLink href="/components/badge" headings={props.headings}>
        Badge
      </NavLink>
      <NavLink href="/components/banner" headings={props.headings}>
        Banner
      </NavLink>
      <NavLink href="/components/breadcrumb" headings={props.headings}>
        Breadcrumb
      </NavLink>
      <NavLink href="/components/button" headings={props.headings}>
        Button
      </NavLink>
      <NavLink href="/components/card" headings={props.headings}>
        Card
      </NavLink>
      <NavLink href="/components/carousel" headings={props.headings}>
        Carousel
      </NavLink>
      <NavLink href="/components/checkbox" headings={props.headings}>
        Checkbox
      </NavLink>
      <NavLink href="/components/circularprogress" headings={props.headings}>
        Circular Progress
      </NavLink>
      <NavLink href="/components/code" headings={props.headings}>
        Code
      </NavLink>
      <NavLink href="/components/datawell" headings={props.headings}>
        Data Well
      </NavLink>
      <NavLink href="/components/datepicker" headings={props.headings}>
        Date Picker
      </NavLink>
      <NavLink href="/components/dialog" headings={props.headings}>
        Dialog
      </NavLink>
      <NavLink href="/components/drawer" headings={props.headings}>
        Drawer
      </NavLink>
      <NavLink href="/components/dropdown" headings={props.headings}>
        Dropdown
      </NavLink>
      <NavLink href="/components/emptystate" headings={props.headings}>
        Empty State
      </NavLink>
      <NavLink href="/components/errors" headings={props.headings}>
        Errors
      </NavLink>
      <NavLink href="/components/form" headings={props.headings}>
        Form
      </NavLink>
      <NavLink href="/components/icon" headings={props.headings}>
        Icon
      </NavLink>
      <NavLink href="/components/layout" headings={props.headings}>
        Layout
      </NavLink>
      <NavLink href="/components/linearprogress">Linear Progress</NavLink>
      <NavLink href="/components/link">Link</NavLink>
      <NavLink href="/components/note">Note</NavLink>
      <NavLink href="/components/position" headings={props.headings}>
        Position
      </NavLink>
      <NavLink href="/components/radio" headings={props.headings}>
        Radio
      </NavLink>
      <NavLink href="/components/row" headings={props.headings}>
        Row
      </NavLink>
      <NavLink href="/components/searchinput" headings={props.headings}>
        Search Input
      </NavLink>
      <NavLink href="/components/starrating" headings={props.headings}>
        Star Rating
      </NavLink>
      <NavLink href="/components/switch" headings={props.headings}>
        Switch
      </NavLink>
      <NavLink href="/components/tab" headings={props.headings}>
        Tab
      </NavLink>
      <NavLink href="/components/table" headings={props.headings}>
        Table
      </NavLink>
      <NavLink href="/components/tag" headings={props.headings}>
        Tag
      </NavLink>
      <NavLink href="/components/text" headings={props.headings}>
        Text
      </NavLink>
      <NavLink href="/components/textarea" headings={props.headings}>
        Text Area
      </NavLink>
      <NavLink href="/components/textinput" headings={props.headings}>
        Text Input
      </NavLink>
      <NavLink href="/components/theme" headings={props.headings}>
        Theme
      </NavLink>
      <NavLink href="/components/tooltip" headings={props.headings}>
        Tooltip
      </NavLink>
      <NavLink href="/components/typeahead" headings={props.headings}>
        Typeahead
      </NavLink>
      <NavLink href="/components/verticaltabs" headings={props.headings}>
        Vertical Tabs
      </NavLink>
      <NavLink href="/components/viewtoggle" headings={props.headings}>
        View Toggle
      </NavLink>
    </Group>

    <Group>
      <GroupTitle>Utils</GroupTitle>
      <NavLink href="/utils/icon" headings={props.headings}>
        Icon CLI
      </NavLink>
    </Group>

    <style jsx>{`
      .sidenav {
        position: fixed;
        top: 0;
        left: 0;
        border-right: 1px solid ${core.colors.gray01};
        transform: translateX(calc(-1 * ${css.sidenavWidth}));
        height: 100vh;
        width: ${css.sidenavWidth};
        background: ${core.colors.bone};
        overflow-x: hidden;
        overflow-y: auto;
        transition: transform ${core.motion.speedXFast} ease-in-out;
      }
      .sidenavOpen {
        transform: translateX(0);
        box-shadow: 0 2px 17px rgba(0, 0, 0, 0.5);
        z-index: 10; /* TODO: arbitrary; above code mirror; come back when ready to systemize */
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
  </nav>
))

SideNav.propTypes = {
  isOpen: PropTypes.bool
}

export default SideNav
