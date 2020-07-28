import { storiesOf } from '@storybook/react'
import React from 'react'

import * as Text from '@pluralsight/ps-design-system-text'

import NavBar from '@pluralsight/ps-design-system-navbar'
import NavBrand from '@pluralsight/ps-design-system-navbrand'
import NavUser from '@pluralsight/ps-design-system-navuser'

import Frame from '../index.js'

storiesOf('Frame', module)
  .add('basic', _ => (
    <Frame topnav={<MockTopNav />}>
      <MockContent />
    </Frame>
  ))
  .add('w/sidenav', _ => (
    <Frame topnav={<MockTopNav />} sidenav={<MockSideNav />}>
      <MockContent />
    </Frame>
  ))

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

function MockTopNav() {
  return (
    <div>
      <NavBar
        brand={<SkillsBrand />}
        user={<NavUser name="Jake" planName="Accenture" />}
      />
    </div>
  )
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
