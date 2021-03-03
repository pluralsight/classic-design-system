import { storiesOf } from '@storybook/react'
import React, { useRef } from 'react'

import Select, {
  useSelect,
  UseSelectProps,
  useMenuRef,
  handleMenuKeyDownEvents
} from '..'
import { BelowLeft, BelowRight } from '@pluralsight/ps-design-system-position'
import Menu from '@pluralsight/ps-design-system-menu'
import {
  useCloseOnDocumentEvents,
  RefFor
} from '@pluralsight/ps-design-system-util'

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
      selectedItem={{ option: 'placeholder', value: 'placeholder' }}
      placeholder="placeholder"
    />
  ))
  .add('Select.Selected: selected', () => (
    <Select.Selected
      selectedItem={{ option: 'selected', value: 'selected' }}
      placeholder="placeholder"
    />
  ))

export const items = [
  { value: 'One item', option: 'One item' },
  { value: 'Two item', option: 'Two item' },
  { value: 'Three item', option: 'Three item' }
]

interface DropdownProps extends UseSelectProps {
  options: Array<{ value: string; option: string }>
}

export const DrodpdownLeft: React.FC<DropdownProps> = ({
  options,
  ...props
}) => {
  const { button, selected, menu, isOpen, closeMenu } = useSelect(props)
  const ref = useMenuRef()
  useCloseOnDocumentEvents(ref, closeMenu)
  return (
    <BelowLeft
      when={isOpen}
      show={
        <Menu
          ref={ref}
          origin={Menu.origins.topLeft}
          {...menu}
          onKeyDown={handleMenuKeyDownEvents}
        >
          {options.map(i => (
            <Menu.Item value={i} key={i.value}>
              {i.option}
            </Menu.Item>
          ))}
        </Menu>
      }
    >
      <Select.Button {...button}>
        <Select.Selected {...selected} />
      </Select.Button>
    </BelowLeft>
  )
}
export const DrodpdownRight: React.FC<DropdownProps> = ({
  options,
  ...props
}) => {
  const { button, selected, menu, isOpen, closeMenu } = useSelect(props)
  const ref = useMenuRef()
  useCloseOnDocumentEvents(ref, closeMenu)
  return (
    <BelowRight
      when={isOpen}
      show={
        <Menu
          ref={ref}
          origin={Menu.origins.topLeft}
          {...menu}
          onKeyDown={handleMenuKeyDownEvents}
        >
          {options.map(i => (
            <Menu.Item value={i} key={i.value}>
              {i.option}
            </Menu.Item>
          ))}
        </Menu>
      }
    >
      <Select.Button {...button}>
        <Select.Selected {...selected} />
      </Select.Button>
    </BelowRight>
  )
}
storiesOf('dropdown', module)
  .add('BelowLeft: placholder', () => (
    <DrodpdownLeft options={items} placeholder={'Select item'} />
  ))
  .add('BelowRight: selected value', () => (
    <DrodpdownRight
      options={items}
      value={{
        option: items[1].option,
        value: items[1].value
      }}
    />
  ))
