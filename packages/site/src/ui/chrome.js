import core from '@pluralsight/ps-design-system-core'
import React from 'react'

import { Head, GlobalStyles, MobileMenuBar, SideNav } from './index'

export default class extends React.Component {
  constructor(props) {
    super(props)
    this.state = { isSideNavOpen: false }
  }
  render() {
    return (
      <div>
        <Head />
        <GlobalStyles />
        <MobileMenuBar
          onBurgerClick={_ => this.setState({ isSideNavOpen: true })}
        />
        <div className="page">
          <div className="side">
            <SideNav
              isOpen={this.state.isSideNavOpen}
              onCloseClick={_ => this.setState({ isSideNavOpen: false })}
            />
          </div>
          <div className="main">{this.props.children}</div>
        </div>
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
