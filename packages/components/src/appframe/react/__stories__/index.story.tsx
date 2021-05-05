import { PageWidthLayout } from '../../../layout'
import { P } from '../../../text'
import { Meta, Story } from '@storybook/react/types-6-0'
import glamorDefault, * as glamorExports from 'glamor'
import React from 'react'

import { AppFrame } from '../index'
import { MockContent, SideNav, TopNav } from './shared'

const glamor = glamorDefault || glamorExports

const defaultArgs = { children: <MockContent />, topnav: <TopNav /> }

export default {
  title: 'Components/AppFrame',
  component: AppFrame
} as Meta

const Template: Story<React.ComponentProps<typeof AppFrame>> = args => (
  <AppFrame {...args} />
)

export const Basic = Template.bind({})
Basic.args = { ...defaultArgs }

export const SideNavScrolling = Template.bind({})
SideNavScrolling.args = {
  ...defaultArgs,
  sidenav: (
    <SideNav sections={[]}>
      <div
        {...glamor.css({ border: '1px dashed red', margin: 40, height: 2000 })}
      />
    </SideNav>
  )
}

export const SideNavUncontrolled: Story = props => (
  <AppFrame
    {...props}
    topnav={({ openSidenav, closeSidenav, sidenavOpen }) => {
      const toggle = sidenavOpen ? closeSidenav : openSidenav
      return <TopNav onMobileMenuClick={toggle} />
    }}
    sidenav={({ visible }) => <SideNav collapsed={!visible} />}
  >
    <MockContent />
  </AppFrame>
)
SideNavUncontrolled.args = { ...defaultArgs }

export const SideNavControlled: Story = props => {
  const [sidenavOpen, setOpen] = React.useState(false)

  const close = () => setOpen(false)
  const open = () => setOpen(true)
  const toggle = sidenavOpen ? close : open

  return (
    <AppFrame
      {...props}
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
SideNavControlled.args = { ...defaultArgs }

export const ExampleShortContent: Story = props => (
  <AppFrame
    {...props}
    sidenav={<SideNav collapsed />}
    sidenavOpen={false}
    topnav={<TopNav />}
  >
    <PageWidthLayout>
      <P>
        Cupcake ipsum dolor sit amet. Sweet gummi bears dragée. Pie dragée
        cotton candy candy canes bear claw apple pie.
      </P>
    </PageWidthLayout>
  </AppFrame>
)
ExampleShortContent.args = { ...defaultArgs }
