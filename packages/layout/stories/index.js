import addons from '@storybook/addons'
import core from '@pluralsight/ps-design-system-core'
import React from 'react'
import { storiesOf } from '@storybook/react'
import themeDecorator from '@pluralsight/ps-design-system-storybook-addon-theme'

import { PageHeadingLayout, SidebarLayout } from '../react'

const pageHeadingLayoutStory = storiesOf('PageHeadingLayout', module)
  .addDecorator(themeDecorator(addons))
  .add('default', _ => (
    <PageHeadingLayout heading={<h2>My Page</h2>}>My content</PageHeadingLayout>
  ))

const sidebarLayoutStory = storiesOf('SidebarLayout', module).addDecorator(
  themeDecorator(addons)
)

Object.keys(SidebarLayout.sidebarPositions).map(pos =>
  sidebarLayoutStory.add(`sidebarPosition: ${pos}`, _ => (
    <div style={{ color: 'white' }}>
      <SidebarLayout
        sidebarPosition={pos}
        sidebar={
          <SidebarLayout.Sidebar>
            This is sidebar stuff that goes here. This is sidebar stuff that
            goes here. This is sidebar stuff that goes here. This is sidebar
            stuff that goes here.
          </SidebarLayout.Sidebar>
        }
        main={
          <SidebarLayout.Main>
            This is main stuff that goes here. This is main stuff that goes
            here. This is main stuff that goes here. This is main stuff that
            goes here.
          </SidebarLayout.Main>
        }
      />
    </div>
  ))
)
sidebarLayoutStory.add('short main content', _ => (
  <div style={{ color: 'white' }}>
    <SidebarLayout
      sidebar={
        <SidebarLayout.Sidebar>
          This is sidebar stuff that goes here. This is sidebar stuff that goes
          here. This is sidebar stuff that goes here. This is sidebar stuff that
          goes here.
        </SidebarLayout.Sidebar>
      }
      main={<SidebarLayout.Main>Very little</SidebarLayout.Main>}
    />
  </div>
))
sidebarLayoutStory.add('short sidebar content', _ => (
  <div style={{ color: 'white' }}>
    <SidebarLayout
      sidebar={<SidebarLayout.Sidebar>Very short</SidebarLayout.Sidebar>}
      main={
        <SidebarLayout.Main>
          This is main stuff that goes here. This is main stuff that goes here.
          This is main stuff that goes here. This is main stuff that goes here.
        </SidebarLayout.Main>
      }
    />
  </div>
))
sidebarLayoutStory.add('wide, fixed sidebar content', _ => (
  <div style={{ color: 'white' }}>
    <SidebarLayout
      sidebar={
        <SidebarLayout.Sidebar>
          <div style={{ width: '700px', height: '50px', background: 'red' }}>
            Fixed width thing
          </div>
        </SidebarLayout.Sidebar>
      }
      main={
        <SidebarLayout.Main>
          This is main stuff that goes here. This is main stuff that goes here.
          This is main stuff that goes here. This is main stuff that goes here.
        </SidebarLayout.Main>
      }
    />
  </div>
))

sidebarLayoutStory.add('sidebar style overrides', _ => (
  <div style={{ color: 'white' }}>
    <SidebarLayout
      sidebar={
        <SidebarLayout.Sidebar style={{ overflow: 'hidden' }}>
          <div style={{ width: '700px', height: '50px', background: 'red' }}>
            Fixed width thing
          </div>
        </SidebarLayout.Sidebar>
      }
      main={
        <SidebarLayout.Main>
          This is main stuff that goes here. This is main stuff that goes here.
          This is main stuff that goes here. This is main stuff that goes here.
        </SidebarLayout.Main>
      }
    />
  </div>
))
