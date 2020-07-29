import { storiesOf } from '@storybook/react'
import React, { useState } from 'react'
import PropTypes from 'prop-types'

import * as Text from '@pluralsight/ps-design-system-text'
import NavBar from '@pluralsight/ps-design-system-navbar'
import NavBrand from '@pluralsight/ps-design-system-navbrand'
import NavUser from '@pluralsight/ps-design-system-navuser'

import { breakpoints } from '../../vars/index.js'

import Frame from '../index.js'
import useMatchMedia from '../use-match-media.js'

storiesOf('Frame', module)
  .add('basic', _ => (
    <Frame topnav={<MockTopNav />}>
      <MockContent />
    </Frame>
  ))
  .add('w/sidenav', _ => {
    const { sidenavStates: states } = Frame

    function Story() {
      const medium = useMatchMedia(`(min-width: ${breakpoints.medium})`)

      const [open, setOpen] = useState(true)
      const toggle = () => setOpen(!open)

      const sidenavState = open
        ? states.open
        : medium
        ? states.minimized
        : states.closed

      return (
        <Frame
          topnav={<MockTopNav onMobileMenuClick={toggle} />}
          sidenav={<MockSideNav />}
          sidenavState={sidenavState}
        >
          <MockContent />
        </Frame>
      )
    }

    return <Story />
  })

function MockContent() {
  return <Text.P>hello world</Text.P>
}

function MockSideNav() {
  return (
    <div>
      <Text.P>side nav</Text.P>
    </div>
  )
}

function MockTopNav(props) {
  const { onMobileMenuClick } = props

  return (
    <div>
      <NavBar
        brand={<SkillsBrand />}
        onMobileMenuClick={onMobileMenuClick}
        user={<NavUser name="Jake" planName="Accenture" />}
      />
    </div>
  )
}
MockTopNav.propTypes = {
  onMobileMenuClick: PropTypes.func
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
