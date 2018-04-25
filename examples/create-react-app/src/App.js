import ActionMenu from '@pluralsight/ps-design-system-actionmenu/react'
import Card from '@pluralsight/ps-design-system-card/react'
import core from '@pluralsight/ps-design-system-core'
import Icon from '@pluralsight/ps-design-system-icon/react'
import React, { Component } from 'react'
import logo from './logo.svg'
import './App.css'

const Play = _ => (
  <Icon size={Icon.sizes.large}>
    <svg viewBox="0 0 512 512" aria-labelledby="title">
      <title>Play</title>
      <g style={{ fill: core.colors.gray02 }}>
        <defs>
          <linearGradient
            id="playIconGradient"
            x1="0%"
            y1="50%"
            x2="100%"
            y2="50%"
          >
            <stop offset="0%" stopColor="#F05A28" stopOpacity="1" />
            <stop offset="100%" stopColor="#E80A89" stopOpacity="1" />
          </linearGradient>
        </defs>
        <path
          id="bookmark"
          d="M255.5,512c-141.2,0-256-114.8-256-256S114.3,0,255.5,0s256,114.8,256,256S396.7,512,255.5,512z M255.5,24.4 C127.8,24.4,23.9,128.3,23.9,256s103.9,231.6,231.6,231.6c127.7,0,231.6-103.9,231.6-231.6S383.2,24.4,255.5,24.4z M194.5,134.1 v243.8L365.2,256L194.5,134.1z"
        />
      </g>
    </svg>
  </Icon>
)

class App extends Component {
  state = { isMenuOpen: false, menuTriggerPosition: null }
  render() {
    const { menuTriggerPosition } = this.state
    return (
      <div className="App">
        <Card.Action
          onClick={console.log}
          onMouseOver={console.log}
          icon={<Icon id={Icon.ids.play} />}
        />
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        </header>
        <div className="App-intro">
          <Card
            size={Card.sizes.small}
            title={
              <Card.TextLink>
                <a href="https://duckduckgo.com">
                  <Card.Title>
                    Web Security and the OWASP Top 10: The Big Picture
                  </Card.Title>
                </a>
              </Card.TextLink>
            }
            actionBar={[
              <Card.Action
                key="more"
                icon={<Icon id={Icon.ids.more} />}
                onClick={evt => {
                  this.setState({
                    isMenuOpen: !this.state.isMenuOpen,
                    menuTriggerPosition: evt.target.getBoundingClientRect()
                  })
                }}
              />,
              <Card.Action
                key="bookmark"
                icon={<Icon id={Icon.ids.bookmark} />}
                onClick={console.log}
              />
            ]}
            metadata1={['Troy Hunt', 'Intermediate']}
            metadata2={[
              <Card.Text style={{ color: core.colors.green }}>
                Completed{' '}
                <Icon
                  style={{ verticalAlign: 'middle' }}
                  size={Icon.sizes.small}
                  id={Icon.ids.check}
                />
              </Card.Text>
            ]}
            image={
              <Card.Image src="https://pluralsight.imgix.net/course-image-testing/web-security-owasp-top10-big-picture.jpg?w=325" />
            }
            progress={100}
            fullOverlay={
              <Card.FullOverlayLink>
                <a href="https://duckduckgo.com">
                  <Play />
                </a>
              </Card.FullOverlayLink>
            }
          />
        </div>
        {this.state.isMenuOpen && (
          <div
            style={{
              position: 'absolute',
              top: menuTriggerPosition.y + menuTriggerPosition.height,
              left: menuTriggerPosition.x
            }}
          >
            <ActionMenu shouldFocusOnMount={false} style={{ zIndex: 999999 }}>
              <ActionMenu.Item>One menu item</ActionMenu.Item>
              <ActionMenu.Item>Two menu item</ActionMenu.Item>
              <ActionMenu.Item>Three menu item</ActionMenu.Item>
            </ActionMenu>
          </div>
        )}
      </div>
    )
  }
}

export default App
