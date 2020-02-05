import * as core from '@pluralsight/ps-design-system-core'
import { MenuIcon } from '@pluralsight/ps-design-system-icon'
import { Link, TitleLogo, TopBar } from './index.js'
import PropTypes from 'prop-types'
import React from 'react'

export default function MobileMenuBar(props) {
  return (
    <div>
      <div className="bar">
        <button className="burger" onClick={props.onBurgerClick}>
          <MenuIcon />
        </button>
        <div className="title">
          <Link href="/">
            <TitleLogo />
          </Link>
        </div>
      </div>
      <TopBar />
      <style jsx>{`
        .bar {
          display: flex;
          justify-content: center;
          align-items: center;
          height: 69px;
          background: ${core.colorsBackgroundLight[2]};
        }
        .burger {
          position: absolute;
          top: 0;
          left: 0;
          height: 69px;
          text-align: center;
          width: calc(${core.layout.spacingLarge} * 3);
          border: 0;
          background: none;
          cursor: pointer;
          color: ${core.colorsTextIcon.lowOnLight};
          transition: all ${core.motion.speedXFast} linear;
        }
        .burger:hover,
        .burger:focus {
          color: ${core.colorsTextIcon.highOnLight};
        }
        .title {
          text-align: center;
          flex: 1;
          line-height: 0;
        }
        @media screen and (min-width: 769px) {
          .bar {
            display: none;
          }
        }
      `}</style>
    </div>
  )
}
MobileMenuBar.propTypes = {
  onBurgerClick: PropTypes.func
}
