import { Button } from '@pluralsight/ps-design-system-button'
import * as Icon from '@pluralsight/ps-design-system-icon'
import * as Text from '@pluralsight/ps-design-system-text'
import { Row } from '@pluralsight/ps-design-system-row'
import { DecoratorFn, storiesOf } from '@storybook/react'
import { Meta, Story } from '@storybook/react/types-6-0'
import { action } from '@storybook/addon-actions'
import React from 'react'

import { Drawer } from '../index'

const PaddingDecorator: DecoratorFn = storyFn => (
  <div style={{ padding: 48 }}>{storyFn()}</div>
)

export default {
  title: 'Components/Row',
  component: Row,
  decorators: [PaddingDecorator]
} as Meta

const DrawerSummaryContent: React.FC = props => (
  <Text.P {...props} style={{ padding: '10px 0', margin: 0 }} />
)

const DrawerBodyContent: React.FC = props => (
  <Text.P {...props} style={{ padding: 20, margin: 0 }} />
)

export const Default: Story = () => (
  <Drawer>
    <Drawer.Summary>
      <DrawerSummaryContent>Click me to open</DrawerSummaryContent>
    </Drawer.Summary>
    <Drawer.Details>
      <DrawerBodyContent>
        This year’s spring releases of Safari 13.1 for macOS Catalina, iPadOS,
        iOS, and watchOS bring a tremendous number of WebKit improvements for
        the web across Apple’s platforms. All of this with many more updates for
        improved privacy, performance, and a host of new tools for web
        developers. Here’s a quick look at the new WebKit enhancements available
        with these releases. Pointer and Mouse Events on iPadOS The latest
        iPadOS 13.4 brings desktop-class pointer and mouse event support to
        Safari and WebKit. To ensure the best experience, web developers can use
        feature detection and adopt Pointer Events. Since a mouse or trackpad
        won’t send touch events, web content should not depend on touch events.
        Pointer Events will specify whether a mouse/trackpad or touch generated
        the event. Web Animations API These releases ship with support for the
        Web Animations API, a web standard offering developers a JavaScript API
        to create, query, and control animations, including direct control of
        CSS Animations and CSS Transitions. It offers a convenient unified model
        for programmatic animations, CSS Animations and Transitions. They can
        all now be directly controlled to pause, resume, seek, or change speed
        and direction, with less manual calculation. In addition, Web Inspector
        has been updated to show entries for them in the Media and Animations
        timeline.
      </DrawerBodyContent>
    </Drawer.Details>
  </Drawer>
)

export const ControlledStartOpen: Story = () => {
  const [open, setOpen] = React.useState(true)
  return (
    <Drawer onToggle={() => setOpen(!open)} isOpen={open}>
      <Drawer.Summary>
        <DrawerSummaryContent>Click me to open</DrawerSummaryContent>
      </Drawer.Summary>
      <Drawer.Details>
        <DrawerBodyContent>Drawer Content here</DrawerBodyContent>
      </Drawer.Details>
    </Drawer>
  )
}

export const ControlledButtonOnly: Story = () => {
  const [open, setOpen] = React.useState(false)
  return (
    <>
      <button onClick={() => setOpen(!open)}>toggle drawer</button>
      <Drawer isOpen={open}>
        <Drawer.Summary>
          <DrawerSummaryContent>
            Clicking me won't toggle drawer
          </DrawerSummaryContent>
        </Drawer.Summary>
        <Drawer.Details>
          <DrawerBodyContent>Drawer Content here</DrawerBodyContent>
        </Drawer.Details>
      </Drawer>
    </>
  )
}

export const ControlledExternalState: Story = () => {
  const [open, setOpen] = React.useState(false)

  return (
    <>
      <button
        onClick={() => {
          setOpen(true)
        }}
      >
        open
      </button>
      <button
        onClick={() => {
          setOpen(false)
        }}
      >
        close
      </button>
      <Drawer
        isOpen={open}
        onToggle={() => {
          setOpen(!open)
        }}
      >
        <Drawer.Summary>
          <DrawerSummaryContent>Click me to open</DrawerSummaryContent>
        </Drawer.Summary>
        <Drawer.Details>
          <DrawerBodyContent>Drawer Content here</DrawerBodyContent>
        </Drawer.Details>
      </Drawer>
    </>
  )
}

export const WithRowComponent: Story = () => (
  <Drawer>
    <Drawer.Summary>
      <Row
        actionBar={[
          <Button
            size={Button.sizes.small}
            appearance={Button.appearances.flat}
            key="iHeartCats"
            icon={<Icon.MoreIcon />}
          />
        ]}
        actionBarVisible
        image={<Row.Image src="https://cataas.com/cat" />}
        metadata1={['Kitten McCatbuns', '23 hours of cuteness']}
        size={Row.sizes.medium}
        title="Look at me! I'm a <Row />!"
      />
    </Drawer.Summary>
    <Drawer.Details>
      <DrawerBodyContent>Drawer Content here</DrawerBodyContent>
    </Drawer.Details>
  </Drawer>
)

export const RowComponentWithActions: Story = () => (
  <Drawer>
    <Drawer.Summary>
      <Row
        actionBar={[
          <Button
            size={Button.sizes.small}
            appearance={Button.appearances.flat}
            key="iHeartCats"
            icon={<Icon.MoreIcon />}
            onClick={action('action')}
          />
        ]}
        actionBarVisible
        fullOverlay={
          <Row.FullOverlayLink>
            <a href="https://duckduckgo.com?q=overlay">Overlay</a>
          </Row.FullOverlayLink>
        }
        metadata1={[
          <Row.TextLink key="01">
            <a href="https://duckduckgo.com?q=cats">Kitten McCatbuns</a>
          </Row.TextLink>,
          '23 hours of cuteness'
        ]}
        image={
          <Row.ImageLink>
            <a href="https://duckduckgo.com?q=image">
              <img src="https://cataas.com/cat" alt="Link text" />
            </a>
          </Row.ImageLink>
        }
        size={Row.sizes.medium}
        title={
          <Row.TextLink>
            <a href="https://duckduckgo.com?q=title">I'm a Row with Actions</a>
          </Row.TextLink>
        }
      />
    </Drawer.Summary>
    <Drawer.Details>
      <DrawerBodyContent>Drawer Content here</DrawerBodyContent>
    </Drawer.Details>
  </Drawer>
)

export const StackOfDrawers: Story = () => (
  <div>
    <Drawer>
      <Drawer.Summary>
        <DrawerSummaryContent>The Drawer #1</DrawerSummaryContent>
      </Drawer.Summary>
      <Drawer.Details>
        <DrawerBodyContent>Drawer Content here</DrawerBodyContent>
      </Drawer.Details>
    </Drawer>
    <Drawer>
      <Drawer.Summary>
        <DrawerSummaryContent>The Drawer #2</DrawerSummaryContent>
      </Drawer.Summary>
      <Drawer.Details>
        <DrawerBodyContent>Drawer Content here</DrawerBodyContent>
      </Drawer.Details>
    </Drawer>
    <Drawer>
      <Drawer.Summary>
        <DrawerSummaryContent>The Drawer #1</DrawerSummaryContent>
      </Drawer.Summary>
      <Drawer.Details>
        <DrawerBodyContent>Drawer Content here</DrawerBodyContent>
      </Drawer.Details>
    </Drawer>
  </div>
)

export const StackOfNonSiblingDrawers: Story = () => (
  <>
    <div>
      <Drawer>
        <Drawer.Summary>
          <DrawerSummaryContent>The Drawer #1</DrawerSummaryContent>
        </Drawer.Summary>
        <Drawer.Details>
          <DrawerBodyContent>Drawer Content here</DrawerBodyContent>
        </Drawer.Details>
      </Drawer>
    </div>

    <div>
      <Drawer>
        <Drawer.Summary>
          <DrawerSummaryContent>The Drawer #2</DrawerSummaryContent>
        </Drawer.Summary>
        <Drawer.Details>
          <DrawerBodyContent>Drawer Content here</DrawerBodyContent>
        </Drawer.Details>
      </Drawer>
    </div>

    <div>
      <Drawer>
        <Drawer.Summary>
          <DrawerSummaryContent>The Drawer #3</DrawerSummaryContent>
        </Drawer.Summary>
        <Drawer.Details>
          <DrawerBodyContent>Drawer Content here</DrawerBodyContent>
        </Drawer.Details>
      </Drawer>
    </div>
  </>
)

export const UsingCustomAriaLabel: Story = () => (
  <Drawer>
    <Drawer.Summary aria-label="custom drawer header">
      <DrawerSummaryContent>The Drawer</DrawerSummaryContent>
    </Drawer.Summary>
    <Drawer.Details aria-label="custom drawer body">
      <DrawerBodyContent>Drawer Content here</DrawerBodyContent>
    </Drawer.Details>
  </Drawer>
)
