import { PlaceholderIcon } from '@pluralsight/ps-design-system-icon'
import { action } from '@storybook/addon-actions'
import { Meta, Story } from '@storybook/react/types-6-0'
import glamorDefault, * as glamorExports from 'glamor'
import React from 'react'

import { Tag } from '../index'

const glamor = glamorDefault || glamorExports

const defaultArgs = { children: 'hello world' }

export default {
  title: 'Components/Tag',
  component: Tag
} as Meta

const StoryGrid: React.FC<{ cols?: number }> = props => {
  const { cols = 2, ...rest } = props

  return (
    <div
      {...glamor.css({
        display: 'grid',
        gap: '20px',
        gridTemplateColumns: Array(cols).fill('1fr').join(' ')
      })}
      {...rest}
    />
  )
}

const Template: Story<React.ComponentProps<typeof Tag>> = args => (
  <Tag {...args} />
)

export const Basic = Template.bind({})
Basic.args = { ...defaultArgs }

export const Button = Template.bind({})
Button.args = { ...defaultArgs, onClick: action('click') }

export const SmallButton = Template.bind({})
SmallButton.args = {
  ...defaultArgs,
  onClick: action('click'),
  size: Tag.sizes.small
}

export const IconButton = Template.bind({})
IconButton.args = {
  ...defaultArgs,
  onClick: action('click'),
  icon: <PlaceholderIcon />
}

export const WithIconButton = Template.bind({})
WithIconButton.args = {
  ...defaultArgs,
  onClick: action('click'),
  icon: <PlaceholderIcon onClick={action('icon click')} />
}

export const Link = Template.bind({})
Link.args = { ...defaultArgs, href: 'https://duckduckgo.com/' } as any

export const Error = Template.bind({})
Error.args = { ...defaultArgs, error: true }

export const LongText = Template.bind({})
LongText.args = {
  ...defaultArgs,
  children:
    "This is the string that goes on forever and always. There really isn't an end. Wow."
}

export const LongTextWithIcon = Template.bind({})
LongTextWithIcon.args = {
  ...defaultArgs,
  children:
    "This is the string that goes on forever and always. There really isn't an end. Wow.",
  icon: <PlaceholderIcon />
}

export const Pressed = Template.bind({})
Pressed.args = { ...defaultArgs, isPressed: true }

export const PressedButton = Template.bind({})
PressedButton.args = {
  ...defaultArgs,
  isPressed: true,
  onClick: action('click')
}

export const PressedLink = Template.bind({})
PressedLink.args = {
  ...defaultArgs,
  href: '#',
  isPressed: true
} as any

export const PressedWithIcon = Template.bind({})
PressedWithIcon.args = {
  ...defaultArgs,
  isPressed: true,
  icon: <PlaceholderIcon />
}

export const Sizes: Story = () => (
  <StoryGrid>
    {Object.values(Tag.sizes).map((size, i) => (
      <Tag key={i} size={size}>
        {size}
      </Tag>
    ))}
  </StoryGrid>
)

export const SizesWithIcons: Story = () => (
  <StoryGrid>
    {Object.values(Tag.sizes).map((size, i) => (
      <Tag key={i} icon={<PlaceholderIcon />} size={size}>
        {size}
      </Tag>
    ))}
  </StoryGrid>
)

export const StyleOverride = Template.bind({})
StyleOverride.args = { ...defaultArgs, style: { background: 'red' } }

export const ClassNameOverride = Template.bind({})
ClassNameOverride.args = {
  ...defaultArgs,
  className: glamor.css({ background: 'green' }).toString()
}
