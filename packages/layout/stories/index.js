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
