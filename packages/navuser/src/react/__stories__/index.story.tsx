import Button from '@pluralsight/ps-design-system-button'
import {
  colorsBackgroundDark,
  layout
} from '@pluralsight/ps-design-system-core'
import React, { useState } from 'react'
import { BelowLeft } from '@pluralsight/ps-design-system-position'
import ActionMenu from '@pluralsight/ps-design-system-actionmenu'
import { storiesOf } from '@storybook/react'

import NavUser from '..'

storiesOf('NavUser', module)
  .add('states', () => (
    <Grid>
      <NavUser src="https://en.gravatar.com/userimage/8399312/b15448d840afacd0eb18102baf788255.jpeg" />

      <NavUser
        src="https://en.gravatar.com/userimage/8399312/b15448d840afacd0eb18102baf788255.jpeg"
        name="Jake Trent"
      />

      <NavUser
        src="https://en.gravatar.com/userimage/8399312/b15448d840afacd0eb18102baf788255.jpeg"
        name="Jake Trent"
        meta="Accenture"
      />

      <NavUser
        src="https://en.gravatar.com/userimage/8399312/b15448d840afacd0eb18102baf788255.jpeg"
        name="Jake Trent"
        meta="Accenture"
        href="https://jaketrent.com"
      />

      <NavUser
        src="https://en.gravatar.com/userimage/8399312/b15448d840afacd0eb18102baf788255.jpeg"
        name="Jake Trent Name That is Long"
        meta="Accenture Company Name That is Long"
        onClick={() => alert('clicked')}
      />
    </Grid>
  ))
  .add('clicks', () => {
    function Example() {
      const [toggleOpen, setToggleOpen] = useState('')

      const clickHandler = (name: string) => {
        const isOpen = name === toggleOpen
        if (isOpen) {
          setToggleOpen('')
        } else {
          setToggleOpen(name)
        }
      }

      return (
        <div>
          <BelowLeft
            show={
              <ActionMenu onClose={() => clickHandler('div a close')}>
                <ActionMenu.Item>Open</ActionMenu.Item>
              </ActionMenu>
            }
            when={toggleOpen === 'div a open'}
          >
            <Button onClick={() => clickHandler('div a open')}>
              Click me first
            </Button>
          </BelowLeft>
          <BelowLeft
            show={
              <ActionMenu onClose={() => clickHandler('div b close')}>
                <ActionMenu.Item>Open</ActionMenu.Item>
              </ActionMenu>
            }
            when={toggleOpen === 'div b open'}
          >
            <Button onClick={() => clickHandler('div b open')}>
              Then click me, first menu closes, mine opens
            </Button>
          </BelowLeft>
          <BelowLeft
            show={
              <ActionMenu onClose={() => clickHandler('nav user close')}>
                <ActionMenu.Item>Open</ActionMenu.Item>
              </ActionMenu>
            }
            when={toggleOpen === 'nav user open'}
          >
            <NavUser
              onClick={() => clickHandler('nav user open')}
              name="Then click me, same as 2nd button"
              meta="Menu 2 close, Menu 3 open"
              src="https://en.gravatar.com/userimage/8399312/b15448d840afacd0eb18102baf788255.jpeg"
            />
          </BelowLeft>
        </div>
      )
    }
    return <Example />
  })

const Grid: React.FC = props => {
  return (
    <div
      style={{
        display: 'grid',
        gridTemplateColumns: 'repeat(3, auto)',
        gap: '32px',
        justifyItems: 'center'
      }}
      {...props}
    />
  )
}
