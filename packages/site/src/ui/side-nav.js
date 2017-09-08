import core from '@pluralsight/ps-design-system-core'
import PropTypes from 'prop-types'

import Link from './link'
import { withHeadings } from './content'

const Group = props =>
  <div className="group">
    {props.children}
    <style jsx>{`
      .group {
        padding: ${core.layout.spacingSmall} ${core.layout.spacingLarge};
        border-bottom: 1px solid ${core.colors.gray01};
      }
    `}</style>
  </div>

const GroupTitle = props =>
  <div className="groupTitle">
    {props.children}
    <style jsx>{`
      .groupTitle {
        margin: 0;
        color: ${core.colors.black};
        font-size: ${core.type.fontSizeXSmall};
        line-height: ${core.type.lineHeightExtra};
        font-weight: ${core.type.fontWeightMedium};
      }
    `}</style>
  </div>

const InternalLinks = props =>
  Array.isArray(props.headings) && props.headings.length > 0
    ? <div className="links">
        {props.headings.map(h =>
          <a className="link" href={h.href} key={h.href}>{h.label}</a>
        )}
        <style jsx>{`
      .links {
        border-left: 1px solid ${core.colors.gray01};
        margin: ${core.layout.spacingSmall} 0 ${core.layout.spacingSmall} ${core.layout.spacingTiny};
        padding: 0 0 0 ${core.layout.spacingMedium};
        overflow: hidden;
      }
      .link {
        display: block;
        font-size: ${core.type.fontSizeXSmall};
        line-height: ${core.type.lineHeightExtra};
        color: ${core.colors.gray03};
        white-space: nowrap;
        cursor: pointer;
        transition: all ${core.motion.speedFastest} ease-in-out;
      }
      .link:first-child {
        line-height: 10px;
        padding-bottom: ${core.layout.spacingSmall};
      }
      .link:last-child {
        line-height: 10px;
        padding-top: ${core.layout.spacingSmall};
      }
      .link:hover {
        color: ${core.colors.black};
        text-decoration: none;
      }
    `}</style>
      </div>
    : null

class NavLink extends React.Component {
  render() {
    const isActive =
      (typeof window != 'undefined' &&
        window.location.pathname === this.props.href) ||
      this.context.pathname === this.props.href
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
      .navLink {
        padding-left: 14px; /* TODO: how to handle additive spacing scenarios? */
      }
      .box {
        display: inline-block;
        height: 8px;
        width: 0px;
        margin-right: 0px;
        background: ${core.colors.gradientHorz};
        transition: all ${core.motion.speedFastest} ease-in-out;
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
        transition: all ${core.motion.speedFastest} ease-in-out;
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
        width: 8px;
        padding-left: 8px;
        margin-right: 12px;
      }
    `}</style>
      </div>
    )
  }
}
NavLink.contextTypes = {
  pathname: PropTypes.string
}

const LogoSvg = props =>
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

const Logo = _ =>
  <div className="logo">
    <Link href="/">
      <span className="box">
        <LogoSvg />
        <h2 className="text">
          <span className="textCompany">PLURALSIGHT</span>
          <span className="textTitle">
            DESIGN SYSTEM
          </span>
        </h2>
      </span>
    </Link>
    <style jsx>{`
      .logo :global(a) {
        text-decoration: none;
      }
      .box {
        display: flex;
        justify-content: center;

        align-items: center;
        border-bottom: 1px solid ${core.colors.gray01};
        text-decoration: none;
        padding: ${core.layout.spacingLarge} 0;
      }
      .box:hover {
        text-decoration: none !important;
      }
      .text {
        margin: 0;
      }
      .textCompany {
        display: block;
        letter-spacing: .15em;
        font-size: ${core.type.fontSizeXSmall};
        font-weight: ${core.type.fontWeightMedium};
        color: ${core.colors.black};
        font-family: ${core.type.fontFamily};
      }
      .textTitle {
        display: block;
        font-size: 8px;
        color: ${core.colors.gray03};
        font-weight: ${core.type.fontWeightMedium};
      }
      @media screen and (min-width: 769px) {
        .box {
          padding: 72px 0;
        }
      }
    `}</style>
  </div>

export default withHeadings(props =>
  <div className="sidenav">
    <Logo />
    <Group>
      <GroupTitle>INTRODUCTION</GroupTitle>
      <NavLink href="/">Get Started</NavLink>
      <NavLink href="/install">Install</NavLink>
    </Group>
    <Group>
      <GroupTitle>CORE</GroupTitle>
      <NavLink href="/core/color">Color</NavLink>
      <NavLink href="/core/typography">Typography</NavLink>
      <NavLink href="/core/spacing">Spacing</NavLink>
    </Group>
    <Group>
      <GroupTitle>COMPONENTS</GroupTitle>
      <NavLink href="/components/actionmenu" headings={props.headings}>
        Action Menu
      </NavLink>
      <NavLink href="/components/badge" headings={props.headings}>
        Badge
      </NavLink>
      <NavLink href="/components/button" headings={props.headings}>
        Button
      </NavLink>
      <NavLink href="/components/card" headings={props.headings}>Card</NavLink>
      <NavLink href="/components/icon" headings={props.headings}>Icon</NavLink>
      <NavLink href="/components/row" headings={props.headings}>Row</NavLink>
      <NavLink href="/components/tab" headings={props.headings}>Tab</NavLink>
      <NavLink href="/components/text" headings={props.headings}>Text</NavLink>
    </Group>
    <style jsx>{`
      .root {
        border-top: 1px solid ${core.colors.gray01};
        display: flex;
        flex-direction: column-reverse;
      }
      @media screen and (min-width: 769px) {
        .root {
          min-height: 100%;
          border-top: none;
          flex-direction: column;
        }
      }
    `}</style>
  </div>
)
