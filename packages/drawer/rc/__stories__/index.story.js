import React, { useState } from 'react'

import { storiesOf } from '@storybook/react'
import { action } from '@storybook/addon-actions'
import Button from '@pluralsight/ps-design-system-button'
import * as Icon from '@pluralsight/ps-design-system-icon'
import * as Text from '@pluralsight/ps-design-system-text'
import Row from '@pluralsight/ps-design-system-row'

import { Drawer, useDrawer } from '../index.js'

const DrawerHeadContent = props => (
  <Text.P {...props} style={{ padding: '10px 0', margin: 0 }} />
)

const DrawerBodyContent = props => (
  <Text.P {...props} style={{ padding: 20, margin: 0 }} />
)

const ControlledExternalState = () => {
  const [open, setOpen] = useState(true)
  const { onOpen, onClose } = useDrawer({
    init: () => ({
      open
    })
  })
  React.useEffect(() => {
    if (open) {
      onOpen()
    } else {
      onClose()
    }
  }, [open, onOpen, onClose])

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
        open={open}
        onToggle={() => {
          setOpen(!open)
        }}
      >
        <Drawer.Head>
          <DrawerHeadContent>Click me to open</DrawerHeadContent>
        </Drawer.Head>
        <Drawer.Body>
          <DrawerBodyContent>Drawer Content here</DrawerBodyContent>
        </Drawer.Body>
      </Drawer>
    </>
  )
}

const ControlledStartOpen = () => (
  <Drawer
    {...useDrawer({
      init: () => ({
        open: true
      })
    })}
  >
    <Drawer.Head>
      <DrawerHeadContent>Click me to open</DrawerHeadContent>
    </Drawer.Head>
    <Drawer.Body>
      <DrawerBodyContent>Drawer Content here</DrawerBodyContent>
    </Drawer.Body>
  </Drawer>
)

const ControlledButtonOnly = () => {
  const { onToggle, open } = useDrawer()
  return (
    <>
      <button onClick={onToggle}>toggle drawer</button>
      <Drawer open={open}>
        <Drawer.Head>
          <DrawerHeadContent>Clicking me won't toggle drawer</DrawerHeadContent>
        </Drawer.Head>
        <Drawer.Body>
          <DrawerBodyContent>Drawer Content here</DrawerBodyContent>
        </Drawer.Body>
      </Drawer>
    </>
  )
}
storiesOf('drawer:rc', module)
  .addDecorator(story => <div style={{ padding: 48 }}>{story()}</div>)
  .add('default', () => {
    return (
      <Drawer>
        <Drawer.Head>
          <DrawerHeadContent>Click me to open</DrawerHeadContent>
        </Drawer.Head>
        <Drawer.Body>
          <DrawerBodyContent>Drawer Content here</DrawerBodyContent>
        </Drawer.Body>
      </Drawer>
    )
  })
  .add('controlled: external state', () => <ControlledExternalState />)
  .add('controlled: start open', () => <ControlledStartOpen />)
  .add('controlled: open with button only', () => <ControlledButtonOnly />)
  .add('with row component', () => (
    <Drawer>
      <Drawer.Head>
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
      </Drawer.Head>
      <Drawer.Body>
        <DrawerBodyContent>Drawer Content here</DrawerBodyContent>
      </Drawer.Body>
    </Drawer>
  ))
  .add('row component with actions', () => (
    <Drawer>
      <Drawer.Head>
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
            <Row.TextLink>
              <a href="https://duckduckgo.com?q=cats">Kitten McCatbuns</a>
            </Row.TextLink>,
            '23 hours of cuteness'
          ]}
          image={
            <Row.ImageLink>
              <a href="https://duckduckgo.com?q=image">
                <img src="https://cataas.com/cat" />
              </a>
            </Row.ImageLink>
          }
          size={Row.sizes.medium}
          title={
            <Row.TextLink>
              <a href="https://duckduckgo.com?q=title">
                I'm a Row with Actions
              </a>
            </Row.TextLink>
          }
        />
      </Drawer.Head>
      <Drawer.Body>
        <DrawerBodyContent>Drawer Content here</DrawerBodyContent>
      </Drawer.Body>
    </Drawer>
  ))
  .add('stack of drawers', () => (
    <div>
      <Drawer>
        <Drawer.Head>
          <DrawerHeadContent>The Drawer #1</DrawerHeadContent>
        </Drawer.Head>
        <Drawer.Body>
          <DrawerBodyContent>Drawer Content here</DrawerBodyContent>
        </Drawer.Body>
      </Drawer>
      <Drawer>
        <Drawer.Head>
          <DrawerHeadContent>The Drawer #2</DrawerHeadContent>
        </Drawer.Head>
        <Drawer.Body>
          <DrawerBodyContent>Drawer Content here</DrawerBodyContent>
        </Drawer.Body>
      </Drawer>
      <Drawer>
        <Drawer.Head>
          <DrawerHeadContent>The Drawer #1</DrawerHeadContent>
        </Drawer.Head>
        <Drawer.Body>
          <DrawerBodyContent>Drawer Content here</DrawerBodyContent>
        </Drawer.Body>
      </Drawer>
    </div>
  ))
  .add('stack of non-sibling drawers', () => (
    <>
      <div>
        <Drawer>
          <Drawer.Head>
            <DrawerHeadContent>The Drawer #1</DrawerHeadContent>
          </Drawer.Head>
          <Drawer.Body>
            <DrawerBodyContent>Drawer Content here</DrawerBodyContent>
          </Drawer.Body>
        </Drawer>
      </div>

      <div>
        <Drawer>
          <Drawer.Head>
            <DrawerHeadContent>The Drawer #2</DrawerHeadContent>
          </Drawer.Head>
          <Drawer.Body>
            <DrawerBodyContent>Drawer Content here</DrawerBodyContent>
          </Drawer.Body>
        </Drawer>
      </div>

      <div>
        <Drawer>
          <Drawer.Head>
            <DrawerHeadContent>The Drawer #3</DrawerHeadContent>
          </Drawer.Head>
          <Drawer.Body>
            <DrawerBodyContent>Drawer Content here</DrawerBodyContent>
          </Drawer.Body>
        </Drawer>
      </div>
    </>
  )) // Is accessibility labels something we should be responsible for
  .add('using custom aria label', () => (
    <Drawer>
      <Drawer.Head aria-label="custom drawer header">
        <DrawerHeadContent>The Drawer</DrawerHeadContent>
      </Drawer.Head>
      <Drawer.Body aria-label="custom drawer body">
        <DrawerBodyContent>Drawer Content here</DrawerBodyContent>
      </Drawer.Body>
    </Drawer>
  ))
