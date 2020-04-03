/* eslint-disable react/prop-types */
/* eslint-disable react/no-unescaped-entities */
import React from 'react'

import { storiesOf } from '@storybook/react'

import Button from '@pluralsight/ps-design-system-button'
import * as Text from '@pluralsight/ps-design-system-text'

import { useDrawer } from '../index.js'

storiesOf('Drawer | RC / useDrawer', module)
  .addDecorator(story => <div style={{ padding: 48 }}>{story()}</div>)
  .add('default', () => {
    function Story() {
      const { isOpen, open, close, toggle } = useDrawer({})

      return (
        <div>
          <Text.Heading>
            <h2>
              <a onClick={toggle}>Heading click should toggle</a>
            </h2>
          </Text.Heading>

          <div style={{ display: isOpen ? 'block' : 'none' }}>
            <Text.P>
              In this space on-brand but completeley fresh, get six alpha pups
              in here for a focus group what do you feel you would bring to the
              table if you were hired for this position cross functional teams
              enable out of the box brainstorming or win-win. This is not the
              hill i want to die on window-licker. Drill down we've bootstrapped
              the model. I am dead inside closer to the metal can we align on
              lunch orders.
            </Text.P>

            <Text.P>
              This vendor is incompetent put your feelers out, we need to
              aspirationalise our offerings we need to socialize the comms with
              the wider stakeholder community so streamline talk to the slides.
              This is our north star design race without a finish line we need
              to socialize the comms with the wider stakeholder community.
            </Text.P>
          </div>

          <Button onClick={isOpen ? close : open}>
            {isOpen ? 'close' : 'open'}
          </Button>
        </div>
      )
    }

    return <Story />
  })
