import { HomeIcon } from '@pluralsight/ps-design-system-icon'
import NavItem from '@pluralsight/ps-design-system-navitem'
import React from 'react'

function Example() {
  return (
    <div className="example-grid">
      <NavItem icon={<HomeIcon />} menu={<div>placeholder</div>}>
        Label
      </NavItem>
      <NavItem icon={<HomeIcon />}>Label</NavItem>
      <NavItem menu={<div>placeholder</div>}>Label</NavItem>
      <NavItem
        renderContainer={({ children, href, ...rest }) => (
          <a href={href} {...rest}>
            {children}
          </a>
        )}
      >
        Label
      </NavItem>

      <NavItem icon={<HomeIcon />} alignment={NavItem.alignments.vertical}>
        Label
      </NavItem>
      <NavItem
        icon={<HomeIcon />}
        alignment={NavItem.alignments.vertical}
        menu={<div>placeholder</div>}
      >
        Label
      </NavItem>
      <NavItem icon={<HomeIcon />} />
    </div>
  )
}

export default Example
