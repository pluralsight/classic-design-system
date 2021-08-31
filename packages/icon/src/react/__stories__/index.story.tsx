import { Meta, Story } from '@storybook/react/types-6-0'
import React from 'react'

import Icon, { icons } from '../../index'

export default {
  title: 'Components/Icon',
  component: Icon
} as Meta

export const Colors: Story = () => (
  <div>
    {Object.values(Icon.colors).map(color => (
      <icons.CheckIcon key={color} color={Icon.colors[color]} />
    ))}
  </div>
)

export const Sizes: Story = () => (
  <div>
    {Object.values(Icon.sizes).map(size => (
      <icons.CheckIcon key={size} size={Icon.sizes[size]} />
    ))}
  </div>
)

export const ExportedIcons: Story = () => (
  <StoryGrid>
    {Object.keys(icons).map(id => {
      // @ts-ignore: mapping over icons
      const Comp = icons[id]
      return [
        <div key={'div' + id}>{id}</div>,
        <Comp
          key={'icon' + id}
          id={`icon-${id}`}
          color={Icon.colors.textIconHighOnDark}
          size="large"
        />
      ]
    })}
  </StoryGrid>
)

export const CustomProps: Story = () => (
  <icons.CheckIcon
    color={Icon.colors.textIconHighOnDark}
    aria-label="completed"
  />
)

export const CustomIcon: Story = () => (
  <Icon color={Icon.colors.textIconHighOnDark}>
    <CustomSvgIcon />
  </Icon>
)

const CustomSvgIcon: React.FC<unknown> = props => (
  <svg aria-label="account icon" viewBox="0 0 24 24" role="img" {...props}>
    <path d="M20 2c1.103 0 2 .898 2 2v16c0 1.103-.897 2-2 2H4c-1.103 0-2-.897-2-2V4c0-1.102.897-2 2-2h16zm-4 18h4.001L20 4h-4v3h-2V4h-4v8H8V4H4v16h4v-3h2v3h4v-8h2v8zM6 13h6v3H6v-3zm6-5h6v3h-6V8z" />
  </svg>
)

const StoryGrid: React.FC<{ cols?: number }> = props => {
  const { cols = 2, ...rest } = props

  return (
    <div
      style={{
        display: 'grid',
        gap: '20px',
        gridTemplateColumns: Array(cols).fill('1fr').join(' '),
        justifyItems: 'left'
      }}
      {...rest}
    />
  )
}
