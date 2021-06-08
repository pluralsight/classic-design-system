import * as core from '@pluralsight/ps-design-system-core'
import { RefFor } from '@pluralsight/ps-design-system-util'
import { BelowLeft, BelowRight } from '@pluralsight/ps-design-system-position'
import { Meta, Story } from '@storybook/react/types-6-0'
import { action } from '@storybook/addon-actions'
import React from 'react'

import Menu from '../index'
import { MenuItemWithDescription } from '../ItemWithDescription'

export default {
  title: 'Components/Menu',
  component: Menu
} as Meta

const useActive = (ref: React.MutableRefObject<HTMLLIElement | undefined>) => {
  const [active, setActive] = React.useState(false)
  const handleActiveState = React.useCallback(() => {
    ref.current && setActive(document.activeElement === ref.current)
  }, [ref, setActive])
  React.useEffect(() => {
    handleActiveState()
  }, [handleActiveState])
  return {
    active,
    handleActiveState: handleActiveState
  }
}

export const MenuItemsOne: Story = () => (
  <Menu>
    <Menu.Item>One item</Menu.Item>
  </Menu>
)

export const MenuItemsMultiple: Story = () => (
  <Menu>
    <Menu.Item>One item</Menu.Item>
    <Menu.Item>Two item</Menu.Item>
    <Menu.Item>Three item</Menu.Item>
  </Menu>
)

export const MenuItemsLots: Story = () => (
  <Menu>
    {new Array(30).fill(null).map((_, index) => (
      <Menu.Item key={index}>index: {index}</Menu.Item>
    ))}
  </Menu>
)

export const Ellipsis: Story = () => (
  <Menu>
    <Menu.Item>
      <Menu.Ellipsis>
        One item that has text that goes on forever and onward into the
        universes yet to be
      </Menu.Ellipsis>
    </Menu.Item>
  </Menu>
)

export const LongText: Story = () => (
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

export const NullItem: Story = () => (
  <Menu>
    <Menu.Item>One item</Menu.Item>
    {null}
    <Menu.Item>Skip to three item</Menu.Item>
  </Menu>
)

export const ActiveItem: Story = () => {
  const ref = React.useRef<HTMLUListElement>()
  const selectedItem = {
    label: 'Active',
    value: 'active'
  }
  React.useEffect(() => {
    if (ref?.current) {
      const li = ref.current.querySelectorAll('li')[1]
      li.focus()
    }
  })
  return (
    <Menu selectedItem={selectedItem} ref={ref as RefFor<'ul'>}>
      <Menu.Item>Not active</Menu.Item>
      <Menu.Item active value={{ value: 'active', label: 'active' }}>
        Active
      </Menu.Item>
      <Menu.Item active disabled>
        Active disabled
      </Menu.Item>
    </Menu>
  )
}

export const ActiveAndSelectedItem: Story = () => {
  const ref = React.useRef<HTMLUListElement>()
  const selectedItem = {
    label: 'Active',
    value: 'active'
  }
  React.useEffect(() => {
    if (ref?.current) {
      const li = ref.current.querySelectorAll('li')[1]
      li.focus()
    }
  })
  return (
    <Menu
      selectedItem={selectedItem}
      useActive={useActive}
      ref={ref as RefFor<'ul'>}
    >
      <Menu.Item>Not active</Menu.Item>
      <Menu.Item active value={{ value: 'active', label: 'active' }}>
        Selected
        <Menu.Check style={{ marginLeft: 'auto' }} />
      </Menu.Item>
      <Menu.Item active disabled>
        Active disabled
      </Menu.Item>
    </Menu>
  )
}

export const ItemWithDescription: Story = () => (
  <Menu>
    <MenuItemWithDescription
      value="1"
      label="item"
      description="some words that describe a thing that really should wrap you known"
    />
  </Menu>
)

export const ItemWithDescriptionSelected: Story = () => {
  const selectedItem = {
    label: 'item active',
    value: '1'
  }
  return (
    <Menu selectedItem={selectedItem}>
      <MenuItemWithDescription
        active
        value="1"
        label="item active"
        description="some words that describe a thing that really should wrap you known"
      />
    </Menu>
  )
}

export const ItemNextToItemsWithNoDescription: Story = () => (
  <Menu>
    <MenuItemWithDescription
      value="1"
      label="Can view"
      description="View details, content and other members in the channel."
    />
    <MenuItemWithDescription
      value="2"
      label="Can edit"
      description="Edit details, add or remove content and invite or remove members"
    />
    <MenuItemWithDescription
      value="3"
      label="Make owner"
      description="Edit details, add or remove content, invite or remove members and delete Channel"
    />
    <Menu.Item>Remove member</Menu.Item>
    <Menu.Item>
      Remove member with so many lines that it goes to a second line
    </Menu.Item>
  </Menu>
)

export const DividerEdge: Story = () => (
  <Menu>
    <Menu.Item>One item</Menu.Item>
    <Menu.Divider />
  </Menu>
)

export const DividerSandwich: Story = () => (
  <Menu>
    <Menu.Item>One item</Menu.Item>
    <Menu.Divider />
    <Menu.Item>Two item</Menu.Item>
    <Menu.Item>Three item</Menu.Item>
  </Menu>
)

const handleClick = (_e: unknown, value: unknown) => {
  action('on click')(value)
}

export const OnClick: Story = () => (
  <Menu onClick={handleClick}>
    <Menu.Item value={{ label: 'One item', value: 'one' }}>One item</Menu.Item>
    <Menu.Item value={{ label: 'Two item', value: 'two' }}>Two item</Menu.Item>
    <Menu.Item value={{ label: 'Two item', value: 'three' }}>
      TTwo item
    </Menu.Item>
  </Menu>
)

export const CustomStyleItem: Story = () => (
  <Menu>
    <Menu.Item style={{ outline: '1px solid red' }}>One item</Menu.Item>
    <Menu.Item style={{ outline: '1px solid blue' }}>Two item</Menu.Item>
    <Menu.Item style={{ outline: '1px solid green' }}>Three item</Menu.Item>
  </Menu>
)

export const ItemLink: Story = () => (
  <Menu>
    <Menu.Item href="https://duckduckgo.com" as="a" target="_blank">
      Links to web
    </Menu.Item>
  </Menu>
)

export const ItemDisabled: Story = () => (
  <Menu>
    <Menu.Item disabled>Single, disabled</Menu.Item>
  </Menu>
)

export const ItemDisabledMultiple: Story = () => (
  <Menu>
    <Menu.Item disabled>Mult 1, disabled</Menu.Item>
    <Menu.Item disabled>Mult 2, disabled</Menu.Item>
  </Menu>
)

export const ItemDisabledMix: Story = () => (
  <Menu>
    <Menu.Item>Enabled</Menu.Item>
    <Menu.Item disabled>Disabled</Menu.Item>
    <Menu.Item>Enabled</Menu.Item>
    <Menu.Item disabled>Disabled</Menu.Item>
  </Menu>
)

export const ItemLinks: Story = () => (
  <Menu>
    <Menu.Item href="https://duck.com" as="a" target="_blank">
      Enabled
    </Menu.Item>
    <Menu.Item disabled href="https://duck.com" as="a" target="_blank">
      Disabled
    </Menu.Item>
    <Menu.Item href="https://duck.com" as="a" target="_blank">
      Enabled
    </Menu.Item>
    <Menu.Item disabled href="https://duck.com" as="a" target="_blank">
      Disabled
    </Menu.Item>
  </Menu>
)

export const PositionBelowLeft: Story = () => (
  <BelowLeft
    when
    show={
      <div>
        <Menu>
          <Menu.Item>One item</Menu.Item>
          <Menu.Item>Two item</Menu.Item>
          <Menu.Item>Three item</Menu.Item>
        </Menu>
      </div>
    }
  >
    <div
      style={{
        background: 'pink',
        display: 'inline-block',
        padding: core.layout.spacingXXSmall
      }}
    >
      anchor
    </div>
  </BelowLeft>
)

export const PositionBelowRight: Story = () => (
  <BelowRight
    when
    show={
      <Menu>
        <Menu.Item>One item</Menu.Item>
        <Menu.Item>Two item</Menu.Item>
        <Menu.Item>Three item</Menu.Item>
      </Menu>
    }
  >
    <div
      style={{
        background: 'pink',
        display: 'inline-block',
        padding: core.layout.spacingXXSmall
      }}
    >
      anchor
    </div>
  </BelowRight>
)
