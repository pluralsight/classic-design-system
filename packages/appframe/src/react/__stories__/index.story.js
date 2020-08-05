import { storiesOf } from '@storybook/react'
import React, { useState } from 'react'

import { PageWidthLayout } from '@pluralsight/ps-design-system-layout'
import * as Text from '@pluralsight/ps-design-system-text'

import AppFrame from '../index.js'
import { MockContent, SideNav, TopNav } from './shared.js'

storiesOf('AppFrame', module)
  .add('basic', _ => (
    <AppFrame sidenav={<SideNav collapsed hideLabels />} topnav={<TopNav />}>
      <MockContent />
    </AppFrame>
  ))
  .add('short content', _ => (
    <AppFrame sidenav={<SideNav collapsed hideLabels />} topnav={<TopNav />}>
      <PageWidthLayout>
        <Text.P>
          Cupcake ipsum dolor sit amet. Sweet gummi bears dragée. Pie dragée
          cotton candy candy canes bear claw apple pie.
        </Text.P>
      </PageWidthLayout>
    </AppFrame>
  ))
  .add('no sidenav', _ => (
    <AppFrame topnav={<TopNav />}>
      <MockContent />
    </AppFrame>
  ))
  .add('open sidenav', _ => (
    <AppFrame topnav={<TopNav />} sidenav={<SideNav />} sidenavOpen>
      <MockContent />
    </AppFrame>
  ))
  .add('scrollable sidenav', _ => (
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
  .add('overlayed sidenav', _ => (
    <AppFrame topnav={<TopNav />} sidenav={<SideNav />} sidenavOverlayed>
      <MockContent />
    </AppFrame>
  ))
  .add('sidenav toggle', _ => {
    function Story() {
      const [open, setOpen] = useState(false)
      const toggle = () => setOpen(!open)

      return (
        <AppFrame
          topnav={<TopNav onMobileMenuClick={toggle} />}
          sidenav={<SideNav collapsed={!open} hideLabels={!open} />}
          sidenavOpen={open}
        >
          <MockContent />
        </AppFrame>
      )
    }

    return <Story />
  })
