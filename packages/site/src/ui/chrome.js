import core from '@pluralsight/ps-design-system-core'
import PropTypes from 'prop-types'
import React from 'react'

import {
  Head,
  GlobalStyles,
  MobileMenuBar,
  OpenIssuePrompt,
  SideNav
} from './index.js'

class Chrome extends React.Component {
  constructor(props) {
    super(props)

    this.closeSideNav = this.closeSideNav.bind(this)
    this.openSideNav = this.openSideNav.bind(this)

    this.state = { isSideNavOpen: false }
  }

  closeSideNav() {
    this.setState(() => ({ isSideNavOpen: false }))
  }

  openSideNav() {
    this.setState(() => ({ isSideNavOpen: true }))
  }

  render() {
    return (
      <div>
        <Head />
        <GlobalStyles />
        <MobileMenuBar onBurgerClick={this.openSideNav} />

        <div className="page">
          <div className="side">
            <SideNav
              isOpen={this.state.isSideNavOpen}
              onCloseClick={this.closeSideNav}
            />
          </div>
          <div className="main">{this.props.children}</div>
        </div>

        <OpenIssuePrompt />

        <style jsx>{`
          .main {
            background: ${core.colors.white};
          }
          @media screen and (min-width: 769px) {
            .page {
              display: flex;
              flex-direction: row;
              margin-left: 200px;
            }
            .main {
              flex: 1;
            }
          }
        `}</style>
      </div>
    )
  }
}

Chrome.propTypes = {
  children: PropTypes.node
}

export default Chrome
