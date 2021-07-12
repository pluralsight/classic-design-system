import { colorsStatus } from '@pluralsight/ps-design-system-core'
import Menu, {
  MenuItemWithDescription
} from '@pluralsight/ps-design-system-menu'
import { ValueOf } from '@pluralsight/ps-design-system-util'
import { action } from '@storybook/addon-actions'
import { Meta, Story } from '@storybook/react/types-6-0'
import React from 'react'

import Select from '../index'

export default {
  title: 'Components/Select'
} as Meta

interface StoryArgs {
  onChange?: any
  onClick?: any
  options: {
    value: React.ReactText
    label: React.ReactText
  }[]
  placeholder: string
  position: ValueOf<typeof Select.positions>
}

const basicArgs: StoryArgs = {
  options: [
    {
      value: 'Can view',
      label: 'Can view'
    },
    {
      value: 'Can edit',
      label: 'Can edit'
    },
    {
      value: 'Make Owner',
      label: 'Make Owner'
    }
  ],
  onClick: action('on click'),
  placeholder: 'Select item',
  position: Select.positions.belowLeft
}

const Template: Story<StoryArgs> = args => <Select {...args} />

export const Basic = Template.bind({})
Basic.args = { ...basicArgs }

interface CustomStoryArgs {
  onChange?: any
  onClick?: any
  items: {
    description: React.ReactText
    value: React.ReactText
    label: React.ReactText
  }[]
  placeholder: string
  position: ValueOf<typeof Select.positions>
}

const customArgs: CustomStoryArgs = {
  items: [
    {
      description: 'View details, content and other members in the channel.',
      value: 'Can view',
      label: 'Can view'
    },
    {
      description:
        'Edit details, add or remove content and invite or remove members',
      value: 'Can edit',
      label: 'Can edit'
    },
    {
      description:
        'Edit details, add or remove content, invite or remove members',
      value: 'Make Owner',
      label: 'Make Owner'
    }
  ],
  onClick: action('on click'),
  placeholder: 'Select item',
  position: Select.positions.belowLeft
}

const CustomMenuItemTemplate: Story<CustomStoryArgs> = args => {
  const { items } = args
  const [selected] = React.useState()

  const handleClick = (_evt: React.MouseEvent, nextValue: unknown) => {
    action('remove click')(nextValue)
  }

  return (
    <Select
      onChange={args.onChange}
      onClick={args.onClick}
      placeholder={args.placeholder}
      position={args.position}
      value={selected}
    >
      {items.map(item => (
        <MenuItemWithDescription {...item} key={item.value} />
      ))}

      <Menu.Divider />

      <Menu.Item
        onClick={handleClick}
        style={{ color: colorsStatus.error }}
        value={selected}
      >
        Remove Member
      </Menu.Item>
    </Select>
  )
}

export const CustomMenuItem = CustomMenuItemTemplate.bind({})
CustomMenuItem.args = { ...customArgs }

export const PositionBelowLeft = CustomMenuItemTemplate.bind({})
PositionBelowLeft.args = {
  ...customArgs,
  position: Select.positions.belowRight
}

export const CustomRenderOption: Story<CustomStoryArgs> = args => {
  const { items, placeholder, position } = args
  const [selected] = React.useState()

  return (
    <Select
      options={items}
      placeholder={placeholder}
      position={position}
      renderOption={MenuItemWithDescription as unknown as React.FC}
      value={selected}
    />
  )
}
CustomRenderOption.args = { ...customArgs }

const defaultButtonArgs = { children: 'Hello' }

const ButtonTemplate: Story<React.ComponentProps<typeof Select.Button>> =
  args => {
    const { children, ...rest } = args
    return <Select.Button {...rest}>{children}</Select.Button>
  }

export const ButtonBasic = ButtonTemplate.bind({})
ButtonBasic.args = { ...defaultButtonArgs }

export const ButtonIsOpen = ButtonTemplate.bind({})
ButtonIsOpen.args = { ...defaultButtonArgs, isOpen: true }

export const ButtonDisabled = ButtonTemplate.bind({})
ButtonDisabled.args = { ...defaultButtonArgs, disabled: true }

export const ButtonError = ButtonTemplate.bind({})
ButtonError.args = { ...defaultButtonArgs, error: true }

export const ButtonSmall = ButtonTemplate.bind({})
ButtonSmall.args = { ...defaultButtonArgs, size: 'small' }

export const ButtonFocused: Story<React.ComponentProps<typeof Select.Button>> =
  args => {
    const { children, ...rest } = args
    const ref = React.useRef<HTMLButtonElement>(null)

    React.useEffect(() => {
      if (ref.current) ref.current.focus()
    }, [])

    return (
      <Select.Button ref={ref} {...rest}>
        {children}
      </Select.Button>
    )
  }
ButtonFocused.args = { ...defaultButtonArgs }

const defaultSelectedArgs = {
  placeholder: 'placeholder',
  selectedItem: { label: 'placeholder', value: 'placeholder' }
}

const SelectedTemplate: Story<React.ComponentProps<typeof Select.Selected>> =
  args => <Select.Selected {...args} />

export const SelectedPlaceholder = SelectedTemplate.bind({})
SelectedPlaceholder.args = { ...defaultSelectedArgs }

export const SelectedSelected = SelectedTemplate.bind({})
SelectedSelected.args = {
  ...defaultSelectedArgs,
  selectedItem: { label: 'selected', value: 'selected' }
}
