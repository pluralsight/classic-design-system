/* eslint-disable react/no-unescaped-entities */

import ActionMenu from '@pluralsight/ps-design-system-actionmenu'
import Avatar from '@pluralsight/ps-design-system-avatar'
import { layout } from '@pluralsight/ps-design-system-core'
import Link from '@pluralsight/ps-design-system-link'
import { PlaceholderIcon } from '@pluralsight/ps-design-system-icon'
import { BelowLeft } from '@pluralsight/ps-design-system-position'
import { Heading, P } from '@pluralsight/ps-design-system-text'
import { action } from '@storybook/addon-actions'
import { DecoratorFn } from '@storybook/react'
import { Meta, Story } from '@storybook/react/types-6-0'
import glamorDefault, * as glamorExports from 'glamor'
import React from 'react'

import Note from '../index'

const glamor = glamorDefault || glamorExports

const ConstrainWidthDecorator: DecoratorFn = storyFn => (
  <div {...glamor.css({ padding: layout.spacingLarge })}>{storyFn()}</div>
)

export default {
  title: 'Components/Note',
  component: Note,
  decorators: [ConstrainWidthDecorator]
} as Meta

const defaultArgs = {
  avatar: <Avatar name="Bob Ross" src="//picsum.photos/128" />,
  heading: 'Bob Ross',
  metadata: ['meta first', 'meta second'],
  message: (
    <P>
      If these lines aren't straight, your water's going to run right out of
      your painting and get your floor wet. At home you have unlimited time. See
      there, told you that would be easy. Decide where your cloud lives. Maybe
      he lives right in here.
    </P>
  ),
  onClick: action('on click')
}

const Template: Story<React.ComponentProps<typeof Note>> = args => (
  <Note {...args} />
)

export const Basic = Template.bind({})
Basic.args = { ...defaultArgs }

export const WithLinkedAvatar = Template.bind({})
WithLinkedAvatar.args = {
  ...defaultArgs,
  avatar: (
    <Note.AvatarLink>
      <a aria-label="Bob Ross" href="https://duck.com?q=pluralsight">
        <Avatar name="Bob Ross" src="//picsum.photos/128" />
      </a>
    </Note.AvatarLink>
  )
}

export const WithLinkedHeading = Template.bind({})
WithLinkedHeading.args = {
  ...defaultArgs,
  heading: (
    <P>
      <Link appearance={Link.appearances.subtle}>
        <a href="#">Bob Ross</a>
      </Link>
    </P>
  )
}

export const WithHeadingComponent = Template.bind({})
WithHeadingComponent.args = {
  ...defaultArgs,
  heading: (
    <Heading size={Heading.sizes.medium}>
      <h3>Bob Ross</h3>
    </Heading>
  )
}

export const WithH1Heading = Template.bind({})
WithH1Heading.args = {
  ...defaultArgs,
  heading: <h1>Bob Ross</h1>
}

export const NoAuthor = Template.bind({})
NoAuthor.args = {
  ...defaultArgs,
  avatar: undefined,
  heading: undefined
}

export const LongMetadata = Template.bind({})
LongMetadata.args = {
  ...defaultArgs,
  metadata: [
    'It is impossible to count the grand contributions of this great author',
    'Levels heretofore unknown in the battle for truth and knowledge',
    'A length of such amazing lengthitude so-as to blow the mind'
  ]
}

export const LinkedMetadata = Template.bind({})
LinkedMetadata.args = {
  ...defaultArgs,
  metadata: [
    <Link key="l1">
      <a href="#">i'm a link</a>
    </Link>,
    <Link appearance={Link.appearances.subtle} key="l2">
      <a href="#">i'm a subtle link</a>
    </Link>
  ]
}

export const ActionsVisibleOnHover = Template.bind({})
ActionsVisibleOnHover.args = {
  ...defaultArgs,
  actionBar: [<Note.Action key="1" icon={<PlaceholderIcon />} title="More" />],
  actionBarVisible: false
}

export const SingleAction = Template.bind({})
SingleAction.args = {
  ...defaultArgs,
  actionBar: [<Note.Action key="1" icon={<PlaceholderIcon />} title="More" />],
  actionBarVisible: true
}

export const TwoActions = Template.bind({})
TwoActions.args = {
  ...defaultArgs,
  actionBar: [
    <Note.Action key="1" icon={<PlaceholderIcon />} title="Bookmark" />,
    <Note.Action key="2" icon={<PlaceholderIcon />} title="More" />
  ],
  actionBarVisible: true
}

export const ThreeActions = Template.bind({})
ThreeActions.args = {
  ...defaultArgs,
  actionBar: [
    <Note.Action key="1" icon={<PlaceholderIcon />} title="Bookmark" />,
    <Note.Action key="2" icon={<PlaceholderIcon />} title="Analytics" />,
    <Note.Action key="3" icon={<PlaceholderIcon />} title="More" />
  ],
  actionBarVisible: true
}

export const ActionsWithLongHeading = Template.bind({})
ActionsWithLongHeading.args = {
  ...defaultArgs,
  actionBar: [
    <Note.Action key="1" icon={<PlaceholderIcon />} title="Bookmark" />,
    <Note.Action key="2" icon={<PlaceholderIcon />} title="More" />
  ],
  actionBarVisible: true,
  heading: "This is probably the greatest thing that's ever happened in my life"
}

export const ActionsWithNoAuthor = Template.bind({})
ActionsWithNoAuthor.args = {
  ...defaultArgs,
  actionBar: [
    <Note.Action key="1" icon={<PlaceholderIcon />} title="Bookmark" />,
    <Note.Action key="2" icon={<PlaceholderIcon />} title="More" />
  ],
  actionBarVisible: true,
  avatar: undefined,
  heading: undefined
}

export const ActionsWithNoAuthorLongMeta = Template.bind({})
ActionsWithNoAuthorLongMeta.args = {
  ...defaultArgs,
  actionBar: [
    <Note.Action key="1" icon={<PlaceholderIcon />} title="Bookmark" />,
    <Note.Action key="2" icon={<PlaceholderIcon />} title="More" />
  ],
  actionBarVisible: true,
  avatar: undefined,
  heading: undefined,
  metadata: [
    'It is impossible to count the grand contributions of this great author',
    'Levels heretofore unknown in the battle for truth and knowledge',
    'A length of such amazing lengthitude so-as to blow the mind'
  ]
}

export const ActionsWithNoMeta = Template.bind({})
ActionsWithNoMeta.args = {
  ...defaultArgs,
  actionBar: [
    <Note.Action key="1" icon={<PlaceholderIcon />} title="Bookmark" />,
    <Note.Action key="2" icon={<PlaceholderIcon />} title="More" />
  ],
  actionBarVisible: true,
  avatar: undefined,
  heading: undefined,
  metadata: []
}

export const WithActionMenu: Story<
  React.ComponentProps<typeof Note>
> = args => {
  const [isOpen, setIsOpen] = React.useState<boolean>(false)

  return (
    <Note
      {...args}
      actionBar={[
        <BelowLeft
          key="1"
          when={isOpen}
          show={
            <ActionMenu origin={ActionMenu.origins.topRight}>
              <ActionMenu.Item>Edit</ActionMenu.Item>
              <ActionMenu.Item>Delete</ActionMenu.Item>
            </ActionMenu>
          }
        >
          <Note.Action
            icon={<PlaceholderIcon />}
            onClick={() => setIsOpen(!isOpen)}
            title="More"
          />
        </BelowLeft>
      ]}
      actionBarVisible
    />
  )
}
WithActionMenu.args = { ...defaultArgs }

export const InAList: Story<React.ComponentProps<typeof Note>> = args => {
  return (
    <Note.List>
      <Note {...args} />
      <Note {...args} />
      <Note {...args} />
    </Note.List>
  )
}
InAList.args = { ...defaultArgs }
