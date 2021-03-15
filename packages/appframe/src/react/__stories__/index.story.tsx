import { PageWidthLayout } from '@pluralsight/ps-design-system-layout'
import * as Text from '@pluralsight/ps-design-system-text'
import { storiesOf } from '@storybook/react'
import React, { useState } from 'react'

import AppFrame from '../index.js'
import { MockContent, SideNav, TopNav } from './shared.js'

storiesOf('AppFrame', module)
  .add('scrollable sidenav', () => (
    <AppFrame
      topnav={<TopNav />}
      sidenav={
        <SideNav sections={[]}>
          <div style={{ border: '1px dashed red', margin: 40, height: 2000 }} />
        </SideNav>
      }
      sidenavOpen
    >
      <MockContent />
    </AppFrame>
  ))
  .add('sidenav controlled', () => {
    function Story() {
      const [sidenavOpen, setOpen] = useState(false)

      const close = () => setOpen(false)
      const open = () => setOpen(true)
      const toggle = sidenavOpen ? close : open

      return (
        <AppFrame
          onRequestSideNavClose={close}
          onRequestSideNavOpen={open}
          topnav={<TopNav onMobileMenuClick={toggle} />}
          sidenav={({ visible }) => <SideNav collapsed={!visible} />}
          sidenavOpen={sidenavOpen}
        >
          <MockContent />
        </AppFrame>
      )
    }

    return <Story />
  })
  .add('sidenav uncontrolled', () => (
    <AppFrame
      topnav={({ openSidenav, closeSidenav, sidenavOpen }) => {
        const toggle = sidenavOpen ? closeSidenav : openSidenav
        return <TopNav onMobileMenuClick={toggle} />
      }}
      sidenav={({ visible }) => <SideNav collapsed={!visible} />}
    >
      <MockContent />
    </AppFrame>
  ))
  .add('short content', () => (
    <AppFrame
      sidenav={<SideNav collapsed />}
      sidenavOpen={false}
      topnav={<TopNav />}
    >
      <PageWidthLayout>
        <Text.P>
          Cupcake ipsum dolor sit amet. Sweet gummi bears dragée. Pie dragée
          cotton candy candy canes bear claw apple pie.
        </Text.P>
      </PageWidthLayout>
    </AppFrame>
  ))
  .add('no sidenav', () => (
    <AppFrame topnav={<TopNav />}>
      <MockContent />
    </AppFrame>
  ))
