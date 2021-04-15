import { colorsStatus } from '@pluralsight/ps-design-system-core'
import Menu, {
  MenuItemWithDescription
} from '@pluralsight/ps-design-system-menu'
import { RefFor } from '@pluralsight/ps-design-system-util'
import { action } from '@storybook/addon-actions'
import { storiesOf } from '@storybook/react'
import React from 'react'

import Select from '../index'

storiesOf('button', module)
  .add('Select.Button', () => <Select.Button>Hello</Select.Button>)
  .add('Select.Button: focused', () => {
    const ref = React.useRef<HTMLButtonElement>()
    ref.current && ref.current.focus()
    return <Select.Button ref={ref as RefFor<'button'>}>Hello</Select.Button>
  })
  .add('Select.Button: erred', () => <Select.Button error>Hello</Select.Button>)
  .add('Select.Button: disabled', () => (
    <Select.Button disabled>Hello</Select.Button>
  ))
  .add('Select.Button: isOpen', () => (
    <Select.Button isOpen>Hello</Select.Button>
  ))
  .add('Select.Button: size', () => (
    <Select.Button size="small">Hello</Select.Button>
  ))
storiesOf('selected', module)
  .add('Select.Selected: placeholder', () => (
    <Select.Selected
      selectedItem={{ name: 'placeholder', id: 'placeholder' }}
      placeholder="placeholder"
    />
  ))
  .add('Select.Selected: selected', () => (
    <Select.Selected
      selectedItem={{ name: 'selected', id: 'selected' }}
      placeholder="placeholder"
    />
  ))

const items = [
  { id: 'One item', name: 'One item' },
  { id: 'Two item', name: 'Two item' },
  { id: 'Three item', name: 'Three item' }
]
const itemsWithDescription = [
  {
    id: 'Can view',
    name: 'Can view',
    description: 'View details, content and other members in the channel.'
  },
  {
    id: 'Can edit',
    name: 'Can edit',
    description:
      'Edit details, add or remove content and invite or remove members'
  },
  {
    id: 'Make Owner',
    name: 'Make Owner',
    description:
      'Edit details, add or remove content, invite or remove members and delete Channel'
  }
]

const handleClick = (_e: unknown, value: unknown) => {
  action('remove click')(value)
}

storiesOf('dropdown', module)
  .add('custom item: static manual', () => {
    return (
      <Select
        position={Select.positions.belowRight}
        value={{
          name: itemsWithDescription[0].name,
          id: itemsWithDescription[0].id
        }}
      >
        {itemsWithDescription.map(i => (
          <MenuItemWithDescription {...i} key={i.id} />
        ))}
        <Menu.Divider />
        <Menu.Item
          onClick={handleClick}
          style={{ color: colorsStatus.error }}
          value={{
            name: itemsWithDescription[0].name,
            id: itemsWithDescription[0].id
          }}
        >
          Remove Member
        </Menu.Item>
      </Select>
    )
  })
  .add('custom item: dynamic', () => {
    return (
      <Select
        items={itemsWithDescription}
        position={Select.positions.belowRight}
        renderOption={(MenuItemWithDescription as unknown) as React.FC}
        value={{
          name: itemsWithDescription[0].name,
          id: itemsWithDescription[0].id
        }}
      />
    )
  })
  .add('BelowLeft: placholder', () => (
    <Select
      position={Select.positions.belowLeft}
      items={items}
      placeholder={'Select item'}
    />
  ))
  .add('BelowRight: selected value', () => (
    <Select
      position={Select.positions.belowRight}
      items={items}
      value={{
        name: items[1].name,
        id: items[1].id
      }}
    />
  ))
