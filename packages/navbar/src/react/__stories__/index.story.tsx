import ActionMenu from '@pluralsight/ps-design-system-actionmenu'
import { colorsPink, layout } from '@pluralsight/ps-design-system-core'
import { storiesOf } from '@storybook/react'
import {
  AccountIcon,
  HomeIcon,
  BrowseIcon,
  NotificationsIcon
} from '@pluralsight/ps-design-system-icon'
import NavBrand from '@pluralsight/ps-design-system-navbrand'
import NavItem from '@pluralsight/ps-design-system-navitem'
import NavUser from '@pluralsight/ps-design-system-navuser'
import { BelowLeft, BelowRight } from '@pluralsight/ps-design-system-position'
import PropTypes from 'prop-types'
import React from 'react'

import NavBar from '../index.js'

storiesOf('Navbar', module).add('desktop', _ => {
  function Story() {
    const [isBrowseMenuOpen, setBrowseMenuOpen] = React.useState(false)
    const [isProfileMenuOpen, setProfileMenuOpen] = React.useState(false)
    return (
      <Grid>
        <NavBar
          brand={<Filler>Brand</Filler>}
          items={<Filler>Items</Filler>}
          user={<Filler>User</Filler>}
          utility={<Filler>Utility</Filler>}
        />
        <NavBar
          brand={<Filler>Brand</Filler>}
          items={<Filler>Items</Filler>}
          onMobileMenuClick={() => alert('mobile click')}
          user={<Filler>User</Filler>}
          utility={<Filler>Utility</Filler>}
        />
        <NavBar
          brand={<SkillsBrand />}
          items={<Filler>Items</Filler>}
          onMobileMenuClick={() => alert('mobile click')}
          user={<Filler>User</Filler>}
          utility={<Filler>Utility</Filler>}
        />
        <NavBar
          brand={<SkillsBrand onClick={() => alert('home')} />}
          items={
            <>
              <div
                style={{
                  marginRight: layout.spacingXXSmall,
                  display: 'inline-block'
                }}
              >
                <NavItem icon={<HomeIcon />}>Home</NavItem>
              </div>
              <div
                style={{
                  display: 'inline-block'
                }}
              >
                <BelowLeft
                  show={
                    <ActionMenu>
                      <ActionMenu.Item>Experimental flyout</ActionMenu.Item>
                    </ActionMenu>
                  }
                  when={isBrowseMenuOpen}
                >
                  <NavItem
                    icon={<BrowseIcon />}
                    selected
                    menu
                    onClick={() => setBrowseMenuOpen(!isBrowseMenuOpen)}
                  >
                    Browse
                  </NavItem>
                </BelowLeft>
              </div>
            </>
          }
          onMobileMenuClick={() => alert('mobile click')}
          user={
            <BelowRight
              show={
                <ActionMenu origin={ActionMenu.origins.topLeft}>
                  <ActionMenu.Item>Lame</ActionMenu.Item>
                </ActionMenu>
              }
              when={isProfileMenuOpen}
            >
              <NavUser
                name="Jake"
                planName="Accenture"
                onClick={() => setProfileMenuOpen(!isProfileMenuOpen)}
              />
            </BelowRight>
          }
          utility={
            <>
              <div
                style={{
                  marginRight: layout.spacingXXSmall,
                  display: 'inline-block'
                }}
              >
                <NavItem icon={<NotificationsIcon />} />
              </div>
              <div
                style={{
                  display: 'inline-block'
                }}
              >
                <NavItem icon={<AccountIcon />} />
              </div>
            </>
          }
        />
      </Grid>
    )
  }

  return <Story />
})

function Grid(props) {
  return (
    <div
      style={{
        width: '100%'
      }}
    >
      {props.children}
    </div>
  )
}
Grid.propTypes = {
  children: PropTypes.node
}

function Filler(props) {
  return (
    <div
      style={{
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        color: colorsPink.base,
        height: '100%',
        border: `2px dashed ${colorsPink.base}`,
        padding: `0 ${layout.spacingMedium}`
      }}
    >
      {props.children}
    </div>
  )
}
Filler.propTypes = {
  children: PropTypes.node
}

function SkillsBrand(props) {
  function SkillsLogo() {
    return (
      <svg aria-hidden viewBox="0 0 32 32">
        <defs>
          <linearGradient
            id="skills-gradient"
            x1="45.6377"
            y1="47.4727"
            x2="-32.2436"
            y2="-35.2537"
            gradientUnits="userSpaceOnUse"
          >
            <stop offset="0.03" stopColor="#F05A28" />
            <stop offset="0.93" stopColor="#EB008B" />
          </linearGradient>
        </defs>
        <path
          d="M0 0V32H32V0H0ZM9.4053 12.7438L15.088 16L9.4053 19.287V12.7438ZM9.4053 24.8503V21.6468L19.1842 16L9.4053 10.3532V7.17166L24.6955 16L9.4053 24.8503Z"
          fill="url(#skills-gradient)"
        />
      </svg>
    )
  }

  return <NavBrand {...props} logo={<SkillsLogo />} wordmark="SKILLS" />
}
