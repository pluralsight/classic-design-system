import React, { useState } from 'react'

import { storiesOf } from '@storybook/react'
import { action } from '@storybook/addon-actions'
import Button from '@pluralsight/ps-design-system-button'
import * as Icon from '@pluralsight/ps-design-system-icon'
import * as Text from '@pluralsight/ps-design-system-text'
import Row from '@pluralsight/ps-design-system-row'

import { Drawer } from '../index.js'

const DrawerHeadContent = props => (
  <Text.P {...props} style={{ padding: '10px 0' }} />
)

const DrawerBodyContent = props => <Text.P {...props} style={{ padding: 20 }} />

const ControlledExternalState = () => {
  const [open, setOpen] = useState(false)

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

const ControlledStartOpen = () => {
  const [open, setOpen] = useState(true)
  return (
    <Drawer onToggle={() => setOpen(!open)} isOpen={open}>
      <Drawer.Head>
        <DrawerHeadContent>Click me to open</DrawerHeadContent>
      </Drawer.Head>
      <Drawer.Body>
        <DrawerBodyContent>Drawer Content here</DrawerBodyContent>
      </Drawer.Body>
    </Drawer>
  )
}

const ControlledButtonOnly = () => {
  const [open, setOpen] = useState(false)
  return (
    <>
      <button onClick={() => setOpen(!open)}>toggle drawer</button>
      <Drawer isOpen={open}>
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
          <DrawerBodyContent>
            Ambulance and emergency sirens in New York City are wailing
            ceaselessly this month, as the number of reported deaths from
            Covid-19, the disease caused by the novel coronavirus, in the state
            surpassed 4,100 as of April 6. (Public health experts say that these
            tallies are severely undercounting the total.) As one of the
            hardest-hit locations in the US so far, the city is scrambling to
            find enough ventilators — equipment that gets oxygen into the lungs
            of severe Covid-19 patients having trouble breathing on their own —
            for the expected surge in patients. Gov. Andrew Cuomo said at a
            press conference April 4 that the state had ordered 17,000
            ventilators from the federal government, but “that order never came
            through.” Although New York City may be the first city in the
            country to run out of ventilators, other cities are expected to
            follow. New Jersey Governor Phil Murphy recently tweeted,
            “Ventilators are our #1 need right now. I won’t stop fighting to get
            us the equipment we need to save every life we can.” Louisiana
            Governor John Bel Edwards predicted that his state would run out of
            ventilators by April 6. But to save a Covid-19 patient’s life with a
            ventilator, you also need an ample supply of medications, both to be
            able to use the machine and to prevent agonizing pain. Experts say
            there’s a worrisome shortage of those, too — one that’s only
            expected to grow worse.{' '}
          </DrawerBodyContent>
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
