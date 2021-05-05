import ActionMenu from '@pluralsight/ps-design-system-actionmenu'
import { colorsGradient } from '../../../core'
import { BelowRight } from '../../../position'
import { HomeIcon, PlaceholderIcon } from '../../../icon'

import { action } from '@storybook/addon-actions'
import { Meta, Story } from '@storybook/react/types-6-0'
import React from 'react'

import { NavItem } from '../index'

const defaultArgs = {
  children: 'Item Text',
  onClick: action('on click')
}

export default {
  title: 'Components/NavItem',
  component: NavItem
} as Meta

const Template: Story = args => <NavItem {...args} />

export const Basic = Template.bind({})
Basic.args = { ...defaultArgs }

export const AsLink = Template.bind({})
AsLink.args = {
  ...defaultArgs,
  href: 'https://duckduckgo.com',
  renderContainer: (injected: any) => <a {...injected} />
}

export const Horizontal = Template.bind({})
Horizontal.args = {
  ...defaultArgs,
  alignment: NavItem.alignments.horizontal
}

export const HorizontalWithIcon = Template.bind({})
HorizontalWithIcon.args = { ...Horizontal.args, icon: <PlaceholderIcon /> }

export const HorizontalSelected = Template.bind({})
HorizontalSelected.args = {
  ...Horizontal.args,
  icon: <PlaceholderIcon />,
  selected: true
}

export const HorizontalWithMenu = Template.bind({})
HorizontalWithMenu.args = {
  ...Horizontal.args,
  icon: <PlaceholderIcon />,
  menu: true
}

export const HorizontalAsLink = Template.bind({})
HorizontalAsLink.args = {
  ...Horizontal.args,
  href: 'https://duckduckgo.com',
  renderContainer: (injected: any) => <a {...injected} />
}

export const HorizontalAsLinkWithIcon = Template.bind({})
HorizontalAsLinkWithIcon.args = {
  ...Horizontal.args,
  href: 'https://duckduckgo.com',
  icon: <PlaceholderIcon />,
  renderContainer: (injected: any) => <a {...injected} />
}

export const Vertical = Template.bind({})
Vertical.args = {
  ...defaultArgs,
  alignment: NavItem.alignments.vertical
}

export const VerticalWithIcon = Template.bind({})
VerticalWithIcon.args = { ...Vertical.args, icon: <PlaceholderIcon /> }

export const VerticalSelected = Template.bind({})
VerticalSelected.args = {
  ...Vertical.args,
  icon: <PlaceholderIcon />,
  selected: true
}

export const VerticalWithMenu = Template.bind({})
VerticalWithMenu.args = {
  ...Vertical.args,
  icon: <PlaceholderIcon />,
  menu: true
}

export const VerticalAsLink = Template.bind({})
VerticalAsLink.args = {
  ...Vertical.args,
  href: 'https://duckduckgo.com',
  renderContainer: (injected: any) => <a {...injected} />
}

export const VerticalAsLinkWithIcon = Template.bind({})
VerticalAsLinkWithIcon.args = {
  ...Vertical.args,
  href: 'https://duckduckgo.com',
  icon: <PlaceholderIcon />,
  renderContainer: (injected: any) => <a {...injected} />
}

export const SelectedFlowItem = Template.bind({})
SelectedFlowItem.args = {
  ...defaultArgs,
  icon: <PlaceholderIcon />,
  selected: true,
  UNSAFE_stylesFor: {
    'navitem__bar--selected': {
      background: colorsGradient.flowBackground
    }
  }
}

export const SelectedSkillsItem = Template.bind({})
SelectedSkillsItem.args = {
  ...defaultArgs,
  icon: <PlaceholderIcon />,
  selected: true,
  UNSAFE_stylesFor: {
    'navitem__bar--selected': {
      background: colorsGradient.skillsBackground
    }
  }
}

export const WithActionMenu: Story = () => {
  const [open, setOpen] = React.useState(false)

  return (
    <div>
      <BelowRight
        show={
          <ActionMenu>
            {Array(5)
              .fill(null)
              .map((_, index) => (
                <ActionMenu.Item key={index}>Item {index + 1}</ActionMenu.Item>
              ))}
          </ActionMenu>
        }
        when={open}
      >
        <NavItem icon={<HomeIcon />} menu onClick={() => setOpen(!open)}>
          menu open {open.toString()}
        </NavItem>
      </BelowRight>
    </div>
  )
}
