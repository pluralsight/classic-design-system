import ActionMenu from '@pluralsight/ps-design-system-actionmenu'
import { colorsPink, layout } from '@pluralsight/ps-design-system-core'
import {
  AccountIcon,
  BrowseIcon,
  HomeIcon,
  NotificationsIcon
} from '@pluralsight/ps-design-system-icon'
import NavBrand from '@pluralsight/ps-design-system-navbrand'
import NavItem from '@pluralsight/ps-design-system-navitem'
import NavUser from '@pluralsight/ps-design-system-navuser'
import { BelowLeft, BelowRight } from '@pluralsight/ps-design-system-position'

import { action } from '@storybook/addon-actions'
import { Meta, Story } from '@storybook/react/types-6-0'
import React from 'react'

import NavBar from '../index'

const Filler: React.FC = props => (
  <div
    style={{
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      color: colorsPink[6],
      height: '100%',
      border: `2px dashed ${colorsPink[6]}`,
      padding: `0 ${layout.spacingMedium}`
    }}
    {...props}
  />
)

const SkillsLogo: React.FC = () => (
  <svg aria-hidden viewBox="0 0 32 32">
    <defs>
      <linearGradient
        id="skills-gradient"
        x1="45.6377"
        y1="47.4727"
        x2="-32.2436"
        y2="-35.2537"
        gradientUnits="userSpaceOnUse"
      >
        <stop offset="0.03" stopColor="#F05A28" />
        <stop offset="0.93" stopColor="#EB008B" />
      </linearGradient>
    </defs>
    <path
      d="M0 0V32H32V0H0ZM9.4053 12.7438L15.088 16L9.4053 19.287V12.7438ZM9.4053 24.8503V21.6468L19.1842 16L9.4053 10.3532V7.17166L24.6955 16L9.4053 24.8503Z"
      fill="url(#skills-gradient)"
    />
  </svg>
)

type SkillsBrandProps = Omit<
  React.ComponentProps<typeof NavBrand>,
  'logo' | 'wordmark'
>

const SkillsBrand: React.FC<SkillsBrandProps> = props => (
  <NavBrand logo={<SkillsLogo />} wordmark="SKILLS" {...props} />
)

const defaultArgs = {
  brand: <Filler>Brand</Filler>,
  items: <Filler>Items</Filler>,
  onMobileMenuClick: action('on mobile menu click'),
  user: <Filler>User</Filler>,
  utility: <Filler>Utility</Filler>
}

export default {
  title: 'Components/NavBar',
  component: NavBar
} as Meta

const Template: Story<React.ComponentProps<typeof NavBar>> = args => (
  <NavBar {...args} />
)

export const Basic = Template.bind({})
Basic.args = { ...defaultArgs }

export const DesktopOnly = Template.bind({})
DesktopOnly.args = { ...defaultArgs, onMobileMenuClick: undefined }

export const WithSkillsBrand = Template.bind({})
WithSkillsBrand.args = { ...defaultArgs, brand: <SkillsBrand /> }

export const ExampleSkills: Story<React.ComponentProps<typeof NavBar>> =
  args => {
    const [isBrowseMenuOpen, setBrowseMenuOpen] = React.useState(false)
    const [isProfileMenuOpen, setProfileMenuOpen] = React.useState(false)

    return (
      <NavBar
        {...args}
        brand={<SkillsBrand />}
        items={
          <>
            <div
              style={{
                display: 'inline-block',
                marginRight: layout.spacingXXSmall
              }}
            >
              <NavItem icon={<HomeIcon />}>Home</NavItem>
            </div>

            <div style={{ display: 'inline-block' }}>
              <BelowLeft
                show={
                  <ActionMenu>
                    <ActionMenu.Item>Experimental flyout</ActionMenu.Item>
                  </ActionMenu>
                }
                when={isBrowseMenuOpen}
              >
                <div>
                  <NavItem
                    icon={<BrowseIcon />}
                    selected
                    menu
                    renderContainer={(
                      contentProps: React.HTMLAttributes<HTMLButtonElement>
                    ) => (
                      <button
                        {...contentProps}
                        onClick={() => setBrowseMenuOpen(!isBrowseMenuOpen)}
                      />
                    )}
                  >
                    Browse
                  </NavItem>
                </div>
              </BelowLeft>
            </div>
          </>
        }
        user={
          <BelowRight
            show={
              <ActionMenu origin={ActionMenu.origins.topLeft}>
                <ActionMenu.Item>Lame</ActionMenu.Item>
              </ActionMenu>
            }
            when={isProfileMenuOpen}
          >
            <NavUser
              name="Jake"
              meta="Accenture"
              onClick={() => setProfileMenuOpen(!isProfileMenuOpen)}
            />
          </BelowRight>
        }
        utility={
          <>
            <div
              style={{
                display: 'inline-block',
                marginRight: layout.spacingXXSmall
              }}
            >
              <NavItem icon={<NotificationsIcon />} />
            </div>

            <div style={{ display: 'inline-block' }}>
              <NavItem icon={<AccountIcon />} />
            </div>
          </>
        }
      />
    )
  }
ExampleSkills.args = { ...defaultArgs }
ExampleSkills.parameters = { center: { disabled: true }, layout: 'fullscreen' }
