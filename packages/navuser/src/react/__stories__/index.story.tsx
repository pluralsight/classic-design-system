import ActionMenu from '@pluralsight/ps-design-system-actionmenu'
import { Button } from '@pluralsight/ps-design-system-button'
import { RightOf } from '@pluralsight/ps-design-system-position'
import { action } from '@storybook/addon-actions'
import { Meta, Story } from '@storybook/react/types-6-0'
import React from 'react'

import { NavUser } from '../index'

const defaultArgs = {
  name: 'Jake Trent',
  src:
    'https://en.gravatar.com/userimage/8399312/b15448d840afacd0eb18102baf788255.jpeg'
}

export default {
  title: 'Components/NavUser',
  component: NavUser
} as Meta

const Template: Story = args => <NavUser {...args} />

export const Basic = Template.bind({})
Basic.args = { ...defaultArgs }

export const AsButton = Template.bind({})
AsButton.args = { ...defaultArgs, onClick: action('on click') }

export const AsLink = Template.bind({})
AsLink.args = { ...defaultArgs, href: 'https://jaketrent.com' }

export const AvatarOnly = Template.bind({})
AvatarOnly.args = { ...defaultArgs, name: undefined }

export const WithMeta = Template.bind({})
WithMeta.args = { ...defaultArgs, name: 'Jake Trent', meta: 'Accenture' }

export const WithActionMenu: Story = () => {
  const [toggleOpen, setToggleOpen] = React.useState('')

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
      <RightOf
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
      </RightOf>

      <br />

      <RightOf
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
      </RightOf>

      <br />

      <RightOf
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
      </RightOf>
    </div>
  )
}
