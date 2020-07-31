import { storiesOf } from '@storybook/react'
import React, { useState } from 'react'

import { PageWidthLayout } from '@pluralsight/ps-design-system-layout'
import * as Text from '@pluralsight/ps-design-system-text'

import Frame from '../index.js'
import { MockContent, SideNav, TopNav } from './shared.js'

storiesOf('Frame', module)
  .add('basic', _ => (
    <Frame sidenav={<SideNav collapsed hideLabels />} topnav={<TopNav />}>
      <MockContent />
    </Frame>
  ))
  .add('short content', _ => (
    <Frame sidenav={<SideNav collapsed hideLabels />} topnav={<TopNav />}>
      <PageWidthLayout>
        <Text.P>
          Cupcake ipsum dolor sit amet. Sweet gummi bears dragée. Pie dragée
          cotton candy candy canes bear claw apple pie.
        </Text.P>
      </PageWidthLayout>
    </Frame>
  ))
  .add('no sidenav', _ => (
    <Frame topnav={<TopNav />}>
      <MockContent />
    </Frame>
  ))
  .add('open sidenav', _ => (
    <Frame topnav={<TopNav />} sidenav={<SideNav />} sidenavOpen>
      <MockContent />
    </Frame>
  ))
  .add('overlayed sidenav', _ => (
    <Frame topnav={<TopNav />} sidenav={<SideNav />} sidenavOverlayed>
      <MockContent />
    </Frame>
  ))
  .add('sidenav toggle', _ => {
    function Story() {
      const [open, setOpen] = useState(false)
      const toggle = () => setOpen(!open)

      return (
        <Frame
          topnav={<TopNav onMobileMenuClick={toggle} />}
          sidenav={<SideNav collapsed={!open} hideLabels={!open} />}
          sidenavOpen={open}
        >
          <MockContent />
        </Frame>
      )
    }

    return <Story />
  })
