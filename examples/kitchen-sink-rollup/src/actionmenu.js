import React from 'react'
import ActionMenu from '@pluralsight/ps-design-system-actionmenu'
import {
  PencilIcon,
  ChannelIcon,
  PlayIcon,
} from '@pluralsight/ps-design-system-icon'

function Example() {
  return (
    <ActionMenu>
      <ActionMenu.Item>
        <ActionMenu.Icon marginLeft>
          <PencilIcon />
        </ActionMenu.Icon>
        One item
      </ActionMenu.Item>
      <ActionMenu.Item>
        <ActionMenu.Icon marginLeft>
          <ChannelIcon />
        </ActionMenu.Icon>
        Two item
      </ActionMenu.Item>
      <ActionMenu.Item>
        <ActionMenu.Icon marginLeft>
          <PlayIcon />
        </ActionMenu.Icon>
        Three item
      </ActionMenu.Item>
    </ActionMenu>
  )
}
export default Example
