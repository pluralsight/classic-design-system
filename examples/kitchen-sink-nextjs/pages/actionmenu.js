const ActionMenu = require('@pluralsight/ps-design-system-actionmenu').default
const {
  ChannelIcon,
  PlayIcon,
  PencilIcon,
} = require('@pluralsight/ps-design-system-icon')
const React = require('react')

function Example() {
  return (
    <div>
      <ActionMenu>
        <ActionMenu.Item>
          <ActionMenu.Icon marginRight>
            <PencilIcon />
          </ActionMenu.Icon>
          One item
        </ActionMenu.Item>
        <ActionMenu.Item>
          <ActionMenu.Icon marginRight>
            <ChannelIcon />
          </ActionMenu.Icon>
          Two item
        </ActionMenu.Item>
        <ActionMenu.Item>
          <ActionMenu.Icon marginRight>
            <PlayIcon />
          </ActionMenu.Icon>
          Three item
        </ActionMenu.Item>
      </ActionMenu>
    </div>
  )
}
// export default Example
module.exports = Example
