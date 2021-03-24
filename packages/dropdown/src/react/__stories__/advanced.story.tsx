import { layout } from '@pluralsight/ps-design-system-core'
import {
  AnalyticsIcon,
  AuthorKitIcon,
  ChannelIcon,
  LabsIcon,
  PlaceholderIcon
} from '@pluralsight/ps-design-system-icon'
import { action } from '@storybook/addon-actions'
import { Meta, Story } from '@storybook/react/types-6-0'
import { DecoratorFn } from '@storybook/react'
import { css } from 'glamor'
import React, {
  ComponentProps,
  KeyboardEvent,
  MouseEvent,
  ReactText,
  ReactNode,
  forwardRef,
  useMemo,
  useState
} from 'react'

import Dropdown from '../'
import { DropdownContext, useDropdown } from '../../js'

const PaddingDecorator: DecoratorFn = storyFn => (
  <div {...css({ height: '100vh', padding: layout.spacingLarge })}>
    {storyFn()}
  </div>
)

const defaultArgs = {
  onFocus: action('on focus'),
  onBlur: action('on blur'),
  label: 'The label',
  placeholder: 'Some placeholder',
  subLabel: 'The sub label'
}

export default {
  title: 'Components/Dropdown/advanced',
  component: Dropdown,
  decorators: [PaddingDecorator]
} as Meta

interface DropdownWithIconProps extends ComponentProps<typeof Dropdown> {
  icon: ReactNode
}
const DropdownWithIcon = forwardRef<HTMLButtonElement, DropdownWithIconProps>(
  (props, ref) => {
    const { icon, ...rest } = props

    const dropdownProps = useDropdown(rest, ref)

    return (
      <Dropdown.Layout
        {...dropdownProps.layout}
        button={
          <Dropdown.Button {...dropdownProps.button}>
            <div
              {...css({
                alignItems: 'center',
                display: 'flex',
                height: '100%',
                marginRight: 8
              })}
            >
              {icon}
            </div>

            <div {...css({ height: '100%', position: 'relative', flex: 1 })}>
              <Dropdown.Selected {...dropdownProps.selected} />
            </div>
          </Dropdown.Button>
        }
        label={<Dropdown.Label {...dropdownProps.label} />}
        menu={
          <DropdownContext.Provider {...dropdownProps.value}>
            <Dropdown.Menu {...dropdownProps.menu} />
          </DropdownContext.Provider>
        }
        subLabel={<Dropdown.SubLabel {...dropdownProps.subLabel} />}
      />
    )
  }
)

const TemplateWithIcon: Story<
  ComponentProps<typeof DropdownWithIcon>
> = args => <DropdownWithIcon {...args} />

export const CustomIcon = TemplateWithIcon.bind({})
CustomIcon.args = {
  ...defaultArgs,
  icon: <PlaceholderIcon />
}

export const DynamicCustomIcon: Story = args => {
  const options = useMemo<{
    [key: string]: { value: string; icon: React.FC; label: string }
  }>(
    () => ({
      analytics: {
        value: 'analytics',
        icon: AnalyticsIcon,
        label: 'Analytics'
      },
      authorKit: {
        value: 'authorKit',
        icon: AuthorKitIcon,
        label: 'Author Kit'
      },
      channel: {
        value: 'channel',
        icon: ChannelIcon,
        label: 'Channel'
      },
      labs: {
        value: 'labs',
        icon: LabsIcon,
        label: 'Labs'
      }
    }),
    []
  )
  const [selected, setSelected] = useState<string>(Object.keys(options)[1])
  const { icon: CurrentIcon, value } = options[selected]

  const handleChange = (_evt: MouseEvent | KeyboardEvent, key?: ReactText) => {
    setSelected(key as string)
  }

  return (
    <DropdownWithIcon
      {...args}
      icon={<CurrentIcon />}
      value={value}
      onChange={handleChange}
      menu={
        <>
          {Object.keys(options).map(key => {
            const { value, icon: Icon, label } = options[key]

            return (
              <Dropdown.Item value={value} key={key} icon={<Icon />}>
                {label}
              </Dropdown.Item>
            )
          })}
        </>
      }
    />
  )
}
DynamicCustomIcon.args = { ...defaultArgs }
