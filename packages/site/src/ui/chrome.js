import PropTypes from 'prop-types'
import React, { useState } from 'react'

import { colorsWhite } from '@pluralsight/ps-design-system-core'

import {
  Head,
  GlobalStyles,
  MobileMenuBar,
  OpenIssuePrompt,
  SideNav
} from './index.js'

export default function Chrome(props) {
  const [navOpen, setNavOpen] = useState(false)

  const openNav = () => setNavOpen(true)
  const closeNav = () => setNavOpen(false)

  return (
    <>
      <Head />
      <GlobalStyles />
      <MobileMenuBar onBurgerClick={openNav} />

      <div className="page">
        <div className="side">
          <SideNav isOpen={navOpen} onCloseClick={closeNav} />
        </div>

        <div className="main" {...props} />
      </div>

      <OpenIssuePrompt />

      <style jsx>{`
        .main {
          background: ${colorsWhite};
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
    </>
  )
}

Chrome.propTypes = {
  children: PropTypes.node.isRequired
}
