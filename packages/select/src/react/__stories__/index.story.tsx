import { storiesOf } from '@storybook/react'
import React, { useRef } from 'react'

import Select from '..'
import { RefFor } from '@pluralsight/ps-design-system-util'

storiesOf('button', module)
  .add('Select.Button', () => <Select.Button>Hello</Select.Button>)
  .add('Select.Button: focused', () => {
    const ref = useRef<HTMLButtonElement>()
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
storiesOf('dropdown', module)
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
