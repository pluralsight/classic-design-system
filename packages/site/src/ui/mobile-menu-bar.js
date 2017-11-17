import core from '@pluralsight/ps-design-system-core'
import Icon from '@pluralsight/ps-design-system-icon/react'
import { TitleLogo, TopBar } from './index'

export default props => (
  <div>
    <div className="bar">
      <button className="burger" onClick={props.onBurgerClick}>
        <Icon id={Icon.ids.menu} />
      </button>
      <div className="title">
        <TitleLogo />
      </div>
      <div className="balance" aria-hidden="true" />
    </div>
    <TopBar />
    <style jsx>{`
      .bar {
        display: flex;
        justify-content: center;
        align-items: center;
        height: 69px;
      }
      .burger {
        align-self: stretch;
        text-align: center;
        width: calc(${core.layout.spacingLarge} * 3);
        border: 0;
        background: none;
        cursor: pointer;
        color: ${core.colors.gray03};
        transition: all ${core.motion.speedXFast} linear;
      }
      .burger:hover,
      .burger:focus {
        color: ${core.colors.black};
      }
      .burger:focus {
        outline: 1px solid ${core.colors.black};
      }
      .title {
        text-align: center;
        flex: 1;
        line-height: 0;
      }
      .balance {
        display: block;
        content: ''
        height: 0;
        width: calc(${core.layout.spacingLarge} * 3);
      }
      @media screen and (min-width: 769px) {
        .bar {
          display: none;
        }
      }
    `}</style>
  </div>
)
