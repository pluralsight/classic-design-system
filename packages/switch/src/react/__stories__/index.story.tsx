import { layout } from '@pluralsight/ps-design-system-core'
import { action } from '@storybook/addon-actions'
import { Meta, Story } from '@storybook/react/types-6-0'
import { DecoratorFn } from '@storybook/react'
import { css } from 'glamor'
import React from 'react'

import Switch from '..'

const PaddingDecorator: DecoratorFn = storyFn => (
  <div {...css({ padding: layout.spacingLarge })}>{storyFn()}</div>
)

const StoryGrid: React.FC<{ cols?: number }> = props => {
  const { cols = 2, ...rest } = props

  return (
    <div
      {...css({
        display: 'grid',
        gap: '20px',
        gridTemplateColumns: Array(cols).fill('1fr').join(' ')
      })}
      {...rest}
    />
  )
}

const defaultArgs = {
  onFocus: action('on focus'),
  onBlur: action('on blur')
}

export default {
  title: 'Components/Switch',
  component: Switch,
  decorators: [PaddingDecorator]
} as Meta

const Template: Story<React.ComponentProps<typeof Switch>> = args => (
  <Switch {...args} />
)

export const Basic = Template.bind({})
Basic.args = { ...defaultArgs }

export const Checked = Template.bind({})
Checked.args = { ...defaultArgs, checked: true }

export const Disabled = Template.bind({})
Disabled.args = { ...defaultArgs, disabled: true }

export const Error = Template.bind({})
Error.args = { ...defaultArgs, error: true }

export const CheckedError = Template.bind({})
CheckedError.args = { ...defaultArgs, checked: true, error: true }

export const DisabledError = Template.bind({})
DisabledError.args = { ...defaultArgs, disabled: true, error: true }

export const Colors: Story = args => (
  <StoryGrid>
    {Object.values(Switch.colors).map((color, i) => (
      <Switch key={i} color={color} {...args} />
    ))}
  </StoryGrid>
)
Colors.args = { ...defaultArgs, checked: true }

export const LabelAlignment: Story = args => (
  <StoryGrid>
    {Object.values(Switch.sizes).map(size => (
      <>
        {Object.values(Switch.labelAligns).map(labelAlign => (
          <Switch
            key={`${size}-${labelAlign}`}
            labelAlign={labelAlign}
            size={size}
            {...args}
          >
            {size}-{labelAlign}
          </Switch>
        ))}
      </>
    ))}
  </StoryGrid>
)
LabelAlignment.args = { ...defaultArgs }

export const Sizes: Story = args => (
  <StoryGrid>
    {Object.values(Switch.sizes).map((size, i) => (
      <Switch key={i} size={size} {...args} />
    ))}
  </StoryGrid>
)
Sizes.args = { ...defaultArgs }

export const ExampleStateDemo: Story = () => {
  const [checked, setChecked] = React.useState<string>()

  return (
    <StoryGrid>
      {Object.values(Switch.colors).map(color => (
        <Switch
          checked={checked === color}
          color={color}
          key={color}
          onClick={next => {
            setChecked(next ? color : undefined)
          }}
        >
          {color}
        </Switch>
      ))}
    </StoryGrid>
  )
}
