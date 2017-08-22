import core from '@pluralsight/ps-design-system-core'
import React from 'react'

import Head from './head'
import GlobalStyles from './global-styles'
import SideNav from './side-nav'
import TopBar from './top-bar'

export default props =>
  <div>
    <Head />
    <GlobalStyles />
    <TopBar />
    <div className="page">
      <div className="side">
        <SideNav />
      </div>
      <div className="main">
        {props.children}
      </div>
    </div>
    <style jsx>{`
      .page {
        display: flex;
        flex-direction: column-reverse;
      }
      .main {
        background: ${core.colors.white};
      }
      @media screen and (min-width: 769px) {
        .page {
          flex-direction: row;
        }
        .side {
          width: 200px;
        }
        .main {
          flex: 1;
          border-left: 1px solid ${core.colors.gray01};
        }
      }
    `}</style>
  </div>
