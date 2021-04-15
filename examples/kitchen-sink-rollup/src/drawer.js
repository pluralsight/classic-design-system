import Button from '@pluralsight/ps-design-system-button'
import {
  colorsBackgroundDark,
  layout,
} from '@pluralsight/ps-design-system-core'
import Drawer from '@pluralsight/ps-design-system-drawer'
import { BookmarkIcon } from '@pluralsight/ps-design-system-icon'
import Row from '@pluralsight/ps-design-system-row'
import React from 'react'

function Example() {
  return (
    <Drawer>
      <Drawer.Summary>
        <ExampleDrawerSummary />
      </Drawer.Summary>
      <Drawer.Details>
        <ExampleDrawerDetails />
      </Drawer.Details>
    </Drawer>
  )
}

export default Example

const ExampleDrawerSummary = () => (
  <div>
    <Row
      title="Building a Web App with ASP.NET Core"
      progress={18}
      metadata1={['Joe Eames', 'Intermediate', 'Jul 21, 2016']}
      image={<div className="image-placeholder" />}
    />
    <style>{`
      .image-placeholder {
        width: 100%;
        height: 100%;
        background: ${colorsBackgroundDark[3]};
      }
    `}</style>
  </div>
)

const ExampleDrawerDetails = () => (
  <div className="drawer-panel-example">
    <Row
      title="Course Overview"
      metadata1={['1m 46s']}
      actionBar={[
        <Button
          size={Button.sizes.small}
          appearance={Button.appearances.flat}
          icon={<BookmarkIcon />}
          key="bookmark"
        />,
      ]}
      size={Row.sizes.small}
      actionBarVisible
    />
    <Row
      title="What is ASP.NET Core?"
      metadata1={['39m 28s']}
      actionBar={[
        <Button
          size={Button.sizes.small}
          appearance={Button.appearances.flat}
          icon={<BookmarkIcon />}
          key="bookmark"
        />,
      ]}
      size={Row.sizes.small}
      actionBarVisible
    />
    <style>{`
      .drawer-panel-example {
        padding: ${layout.spacingXLarge} ${layout.spacingXLarge}
          ${layout.spacingMedium} ${layout.spacingXLarge};
      }
    `}</style>
  </div>
)
