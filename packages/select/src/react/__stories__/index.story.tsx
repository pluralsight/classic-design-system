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
      selectedItem={{ label: 'placeholder', value: 'placeholder' }}
      placeholder="placeholder"
    />
  ))
  .add('Select.Selected: selected', () => (
    <Select.Selected
      selectedItem={{ label: 'selected', value: 'selected' }}
      placeholder="placeholder"
    />
  ))

const items = [
  { value: 'One item', label: 'One item' },
  { value: 'Two item', label: 'Two item' },
  { value: 'Three item', label: 'Three item' }
]
const itemsWithDescription = [
  {
    value: 'Can view',
    label: 'Can view',
    description: 'View details, content and other members in the channel.'
  },
  {
    value: 'Can edit',
    label: 'Can edit',
    description:
      'Edit details, add or remove content and invite or remove members'
  },
  {
    value: 'Make Owner',
    label: 'Make Owner',
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
          label: itemsWithDescription[0].label,
          value: itemsWithDescription[0].value
        }}
      >
        {itemsWithDescription.map(i => (
          <MenuItemWithDescription {...i} key={i.value} />
        ))}
        <Menu.Divider />
        <Menu.Item
          onClick={handleClick}
          style={{ color: colorsStatus.error }}
          value={{
            label: itemsWithDescription[0].label,
            value: itemsWithDescription[0].value
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
        options={itemsWithDescription}
        position={Select.positions.belowRight}
        renderOption={(MenuItemWithDescription as unknown) as React.FC}
        value={{
          label: itemsWithDescription[0].label,
          value: itemsWithDescription[0].value
        }}
      />
    )
  })
  .add('BelowLeft: placholder', () => (
    <Select
      position={Select.positions.belowLeft}
      options={items}
      placeholder={'Select item'}
    />
  ))
  .add('BelowRight: selected value', () => (
    <Select
      position={Select.positions.belowRight}
      options={items}
      value={{
        label: items[1].label,
        value: items[1].value
      }}
    />
  ))
