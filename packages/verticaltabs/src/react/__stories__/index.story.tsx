import { PlaceholderIcon } from '@pluralsight/ps-design-system-icon'
import { action } from '@storybook/addon-actions'
import { DecoratorFn } from '@storybook/react'
import { Meta, Story } from '@storybook/react/types-6-0'
import glamorDefault, * as glamorExports from 'glamor'
import React from 'react'

import VerticalTabs from '../index'

const glamor = glamorDefault || glamorExports
const { CollapsibleGroup, Group, Tier1, Tier2 } = VerticalTabs

const ConstrainWidthDecorator: DecoratorFn = storyFn => (
  <div {...glamor.css({ height: '100%', width: '240px' })}>{storyFn()}</div>
)

export default {
  title: 'Components/VerticalTabs',
  component: VerticalTabs,
  decorators: [ConstrainWidthDecorator]
} as Meta

/**
 * BaseTemplate
 */

const BaseTemplate: Story<React.ComponentProps<typeof VerticalTabs>> = args => {
  const { children, ...rest } = args
  return <VerticalTabs {...rest}>{children}</VerticalTabs>
}

const baseTemplateDefaultArgs = {
  children: (
    <Group>
      <Tier1 header={<Tier1.Header>First</Tier1.Header>} />
      <Tier1 header={<Tier1.Header>Second</Tier1.Header>} />
      <Tier1 header={<Tier1.Header>Third</Tier1.Header>} />
      <Tier1 header={<Tier1.Header>Fourth</Tier1.Header>} />
    </Group>
  )
}

export const Basic = BaseTemplate.bind({})
Basic.args = { ...baseTemplateDefaultArgs }

export const Header = BaseTemplate.bind({})
Header.args = {
  ...baseTemplateDefaultArgs,
  children: (
    <Group header={<Group.Header>Group Header</Group.Header>}>
      <Tier1 header={<Tier1.Header>First</Tier1.Header>} />
      <Tier1 header={<Tier1.Header>Second</Tier1.Header>} />
      <Tier1 header={<Tier1.Header>Third</Tier1.Header>} />
      <Tier1 header={<Tier1.Header>Fourth</Tier1.Header>} />
    </Group>
  )
}

export const Tiers = BaseTemplate.bind({})
Tiers.args = {
  ...baseTemplateDefaultArgs,
  children: (
    <Group header={<Group.Header>Group Header</Group.Header>}>
      <Tier1 header={<Tier1.Header>First</Tier1.Header>}>
        <Tier2 header={<Tier2.Header>First</Tier2.Header>} />
        <Tier2 header={<Tier2.Header>Second</Tier2.Header>} />
        <Tier2 header={<Tier2.Header>Third</Tier2.Header>} />
      </Tier1>

      <Tier1 header={<Tier1.Header>Second</Tier1.Header>}>
        <Tier2 header={<Tier2.Header>First</Tier2.Header>} />
        <Tier2 header={<Tier2.Header>Second</Tier2.Header>} />
        <Tier2 header={<Tier2.Header>Third</Tier2.Header>} />
      </Tier1>
    </Group>
  )
}

export const ActiveItem = BaseTemplate.bind({})
ActiveItem.args = {
  ...baseTemplateDefaultArgs,
  children: (
    <Group header={<Group.Header>Group Header</Group.Header>}>
      <Tier1 header={<Tier1.Header>First</Tier1.Header>} />
      <Tier1 header={<Tier1.Header>Second</Tier1.Header>} />
      <Tier1 active header={<Tier1.Header>Third</Tier1.Header>} />
      <Tier1 header={<Tier1.Header>Fourth</Tier1.Header>} />
    </Group>
  )
}
export const Collapsible = BaseTemplate.bind({})
Collapsible.args = {
  ...baseTemplateDefaultArgs,
  children: (
    <CollapsibleGroup
      header={<CollapsibleGroup.Header>Group Header</CollapsibleGroup.Header>}
    >
      <Tier1 header={<Tier1.Header>First</Tier1.Header>} />
      <Tier1 header={<Tier1.Header>Second</Tier1.Header>} />
      <Tier1 header={<Tier1.Header>Third</Tier1.Header>} />
      <Tier1 header={<Tier1.Header>Fourth</Tier1.Header>} />
    </CollapsibleGroup>
  )
}

export const CollapsibleStartOpen = BaseTemplate.bind({})
CollapsibleStartOpen.args = {
  ...baseTemplateDefaultArgs,
  children: (
    <CollapsibleGroup
      header={<CollapsibleGroup.Header>Group Header</CollapsibleGroup.Header>}
      startOpen
    >
      <Tier1 header={<Tier1.Header>First</Tier1.Header>} />
      <Tier1 header={<Tier1.Header>Second</Tier1.Header>} />
      <Tier1 header={<Tier1.Header>Third</Tier1.Header>} />
      <Tier1 header={<Tier1.Header>Fourth</Tier1.Header>} />
    </CollapsibleGroup>
  )
}

const longTitle = `Polaroid slow-carb chartreuse keytar cold-pressed salvia single-origin coffee.`

export const Truncated = BaseTemplate.bind({})
Truncated.args = {
  ...baseTemplateDefaultArgs,
  children: (
    <>
      <Group header={<Group.Header>{longTitle}</Group.Header>}>
        <Tier1 header={<Tier1.Header>{longTitle}</Tier1.Header>}>
          <Tier2 header={<Tier2.Header>{longTitle}</Tier2.Header>} />
          <Tier2 header={<Tier2.Header>{longTitle}</Tier2.Header>} />
          <Tier2 header={<Tier2.Header>{longTitle}</Tier2.Header>} />
        </Tier1>

        <Tier1
          header={
            <Tier1.Header icon={<PlaceholderIcon />}>{longTitle}</Tier1.Header>
          }
        >
          <Tier2 header={<Tier2.Header>{longTitle}</Tier2.Header>} />
          <Tier2 header={<Tier2.Header>{longTitle}</Tier2.Header>} />
          <Tier2 header={<Tier2.Header>{longTitle}</Tier2.Header>} />
        </Tier1>
      </Group>

      <CollapsibleGroup
        header={<CollapsibleGroup.Header>{longTitle}</CollapsibleGroup.Header>}
        startOpen
      >
        <Tier1 header={<Tier1.Header>{longTitle}</Tier1.Header>}>
          <Tier2 header={<Tier2.Header>{longTitle}</Tier2.Header>} />
          <Tier2 header={<Tier2.Header>{longTitle}</Tier2.Header>} />
          <Tier2 header={<Tier2.Header>{longTitle}</Tier2.Header>} />
        </Tier1>

        <Tier1
          header={
            <Tier1.Header icon={<PlaceholderIcon />}>{longTitle}</Tier1.Header>
          }
        >
          <Tier2 header={<Tier2.Header>{longTitle}</Tier2.Header>} />
          <Tier2 header={<Tier2.Header>{longTitle}</Tier2.Header>} />
          <Tier2 header={<Tier2.Header>{longTitle}</Tier2.Header>} />
        </Tier1>
      </CollapsibleGroup>
    </>
  )
}

/**
 * Tier1Template
 */

const Tier1Template: Story<React.ComponentProps<typeof Tier1>> = args => {
  return (
    <BaseTemplate>
      <Tier1 {...args} />
    </BaseTemplate>
  )
}

const tier1DefaultArgs = {
  header: <Tier1.Header icon={<PlaceholderIcon />}>text here</Tier1.Header>
}

export const Tier1Active = Tier1Template.bind({})
Tier1Active.args = { ...tier1DefaultArgs, active: true }

export const Tier1Collapsible = Tier1Template.bind({})
Tier1Collapsible.args = { ...tier1DefaultArgs, collapsible: true }

/**
 * Tier1HeaderTemplate
 */

const Tier1HeaderTemplate: Story<React.ComponentProps<typeof Tier1.Header>> =
  args => {
    return (
      <BaseTemplate>
        <Tier1 header={<Tier1.Header {...args} />} />
      </BaseTemplate>
    )
  }

const tier1HeaderDefaultArgs = {
  children: 'text here',
  icon: <PlaceholderIcon />
}

export const Tier1HeaderBasic = Tier1HeaderTemplate.bind({})
Tier1HeaderBasic.args = { ...tier1HeaderDefaultArgs }

export const Tier1HeaderLink = Tier1HeaderTemplate.bind({})
Tier1HeaderLink.args = { ...tier1HeaderDefaultArgs, href: 'href' }

export const Tier1HeaderButton = Tier1HeaderTemplate.bind({})
Tier1HeaderButton.args = { ...tier1HeaderDefaultArgs, onClick: action('click') }

/**
 * Tier2Template
 */

const Tier2Template: Story<React.ComponentProps<typeof Tier2>> = args => {
  return (
    <BaseTemplate>
      <Tier2 {...args} />
    </BaseTemplate>
  )
}

const tier2DefaultArgs = {
  header: <Tier2.Header>text here</Tier2.Header>
}

export const Tier2Basic = Tier2Template.bind({})
Tier2Basic.args = { ...tier2DefaultArgs }

export const Tier2Active = Tier2Template.bind({})
Tier2Active.args = { ...tier2DefaultArgs, active: true }

/**
 * Tier2HeaderTemplate
 */

const Tier2HeaderTemplate: Story<React.ComponentProps<typeof Tier2.Header>> =
  args => {
    return (
      <BaseTemplate>
        <Tier2 header={<Tier2.Header {...args} />} />
      </BaseTemplate>
    )
  }

const tier2HeaderDefaultArgs = {
  children: 'text here',
  icon: <PlaceholderIcon />
}

export const Tier2HeaderBasic = Tier2HeaderTemplate.bind({})
Tier2HeaderBasic.args = { ...tier2HeaderDefaultArgs }

export const Tier2HeaderLink = Tier2HeaderTemplate.bind({})
Tier2HeaderLink.args = { ...tier2HeaderDefaultArgs, href: '#' }

export const Tier2HeaderButton = Tier2HeaderTemplate.bind({})
Tier2HeaderButton.args = { ...tier2HeaderDefaultArgs, onClick: action('click') }
