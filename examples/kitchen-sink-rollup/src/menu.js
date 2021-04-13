import React from 'react'
import Menu from '@pluralsight/ps-design-system-menu'
function Example() {
  return (
    <Menu>
      <Menu.Item>
        <Menu.Ellipsis>
          One item that has text that goes on forever and onward into the
          universes yet to be
        </Menu.Ellipsis>
      </Menu.Item>
      <Menu.Item>
        <Menu.Ellipsis>
          Another item that takes a long time to explain in the context of
          everything that is in a line.
        </Menu.Ellipsis>
      </Menu.Item>
    </Menu>
  )
}
export default Example
