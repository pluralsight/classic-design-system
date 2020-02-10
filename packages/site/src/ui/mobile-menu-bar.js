import PropTypes from 'prop-types'
import React from 'react'

import {
  colorsBackgroundLight,
  colorsTextIcon,
  layout,
  motion
} from '@pluralsight/ps-design-system-core'
import { MenuIcon } from '@pluralsight/ps-design-system-icon'

import { Link, TitleLogo, TopBar } from './index.js'

export default function MobileMenuBar(props) {
  return (
    <>
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
      </div>

      <style jsx>{`
        .bar {
          display: flex;
          justify-content: center;
          align-items: center;
          height: 69px;
          background: ${colorsBackgroundLight[2]};
        }
        .burger {
          position: absolute;
          top: 0;
          left: 0;
          height: 69px;
          text-align: center;
          width: calc(${layout.spacingLarge} * 3);
          border: 0;
          background: none;
          cursor: pointer;
          color: ${colorsTextIcon.lowOnLight};
          transition: all ${motion.speedXFast} linear;
        }
        .burger:hover,
        .burger:focus {
          color: ${colorsTextIcon.highOnLight};
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
    </>
  )
}
MobileMenuBar.propTypes = {
  onBurgerClick: PropTypes.func
}
