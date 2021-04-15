import ActionMenu from '@pluralsight/ps-design-system-actionmenu'
import Avatar from '@pluralsight/ps-design-system-avatar'
import * as Icon from '@pluralsight/ps-design-system-icon'
import Link from '@pluralsight/ps-design-system-link'
import { BelowLeft } from '@pluralsight/ps-design-system-position'
import * as Text from '@pluralsight/ps-design-system-text'
import { storiesOf } from '@storybook/react'
import React from 'react'

import Note from '../index'

const longStringsMetaData = [
  'It is impossible to count the grand contributions of this great author',
  'Levels heretofore unknown in the battle for truth and knowledge',
  'A length of such amazing lengthitude so-as to blow the mind'
]

const ConstrainWidth: React.FC = props => (
  <div {...props} style={{ maxWidth: '420px' }} />
)

interface NoteWithDefaultProps
  extends Partial<React.ComponentProps<typeof Note>> {
  noAvatar?: boolean
  noHeading?: boolean
  noMetadata?: boolean
}

const NoteWithDefaults: React.FC<NoteWithDefaultProps> = props => {
  const { noAvatar, noHeading, noMetadata, ...rest } = props
  const avatar = noAvatar
    ? undefined
    : props.avatar || <Avatar name="Bob Ross" src="//picsum.photos/128" />
  const heading = noHeading ? undefined : props.heading || 'Bob Ross'
  const metadata = noMetadata
    ? undefined
    : props.metadata || ['meta first', 'meta second']
  return (
    <Note
      message={
        <p>
          If these lines aren't straight, your water's going to run right out of
          your painting and get your floor wet. At home you have unlimited time.
          See there, told you that would be easy. Decide where your cloud lives.
          Maybe he lives right in here.
        </p>
      }
      {...rest}
      avatar={avatar}
      heading={heading}
      metadata={metadata}
    />
  )
}

storiesOf('Note', module)
  .addDecorator(fn => <ConstrainWidth>{fn()}</ConstrainWidth>)
  .add('basic', () => <NoteWithDefaults />)
  .add('with linked avatar', () => (
    <NoteWithDefaults
      avatar={
        <Note.AvatarLink>
          <a href="https://duck.com?q=pluralsight">
            <Avatar name="Bob Ross" src="//picsum.photos/128" />
          </a>
        </Note.AvatarLink>
      }
    />
  ))
  .add('with linked heading', () => (
    <NoteWithDefaults
      heading={
        <p>
          <Link appearance={Link.appearances.subtle}>
            <a href="#">Bob Ross</a>
          </Link>
        </p>
      }
    />
  ))
  .add('without avatar and author', () => (
    <NoteWithDefaults noAvatar noHeading />
  ))
  .add('with DS Text components', () => (
    <NoteWithDefaults
      heading={
        <Text.Heading size={Text.Heading.sizes.medium}>
          <h3>Bob Ross</h3>
        </Text.Heading>
      }
      message={
        <>
          <Text.P>
            Be so very light. Be a gentle whisper. If these lines aren't
            straight, your water's going to run right out of your painting and
            get your floor wet. It is a lot of fun.
          </Text.P>

          <Text.P>
            So often we avoid running water, and running water is a lot of fun.
            Just beat the devil out of it. Work that paint. A beautiful little
            sunset. This painting comes right out of your heart.
          </Text.P>
        </>
      }
    />
  ))
  .add('with h1 in heading', () => (
    <NoteWithDefaults
      heading={<h1>Bob Ross</h1>}
      message={
        <>
          <Text.P>
            Be so very light. Be a gentle whisper. If these lines aren't
            straight, your water's going to run right out of your painting and
            get your floor wet. It is a lot of fun.
          </Text.P>

          <Text.P>
            So often we avoid running water, and running water is a lot of fun.
            Just beat the devil out of it. Work that paint. A beautiful little
            sunset. This painting comes right out of your heart.
          </Text.P>
        </>
      }
    />
  ))

storiesOf('Note/metadata', module)
  .addDecorator(fn => <ConstrainWidth>{fn()}</ConstrainWidth>)
  .add('with long strings', () => (
    <NoteWithDefaults metadata={longStringsMetaData} />
  ))
  .add('as a link', () => (
    <NoteWithDefaults
      metadata={[
        <Link key="l1">
          <a href="#">i'm a link</a>
        </Link>,
        <Link appearance={Link.appearances.subtle} key="l2">
          <a href="#">i'm a subtle link</a>
        </Link>
      ]}
    />
  ))

storiesOf('Note/actions', module)
  .addDecorator(fn => <ConstrainWidth>{fn()}</ConstrainWidth>)
  .add('visible on hover', () => (
    <NoteWithDefaults
      actionBar={[
        <Note.Action key="1" icon={<Icon.MoreIcon />} title="More" />
      ]}
      actionBarVisible={false}
    />
  ))
  .add('one action', () => (
    <NoteWithDefaults
      actionBar={[
        <Note.Action key="1" icon={<Icon.MoreIcon />} title="More" />
      ]}
      actionBarVisible
    />
  ))
  .add('two actions', () => (
    <NoteWithDefaults
      actionBar={[
        <Note.Action key="1" icon={<Icon.BookmarkIcon />} title="Bookmark" />,
        <Note.Action key="2" icon={<Icon.MoreIcon />} title="More" />
      ]}
      actionBarVisible
    />
  ))
  .add('three actions', () => (
    <NoteWithDefaults
      actionBar={[
        <Note.Action key="1" icon={<Icon.BookmarkIcon />} title="Bookmark" />,
        <Note.Action key="2" icon={<Icon.AnalyticsIcon />} title="Analytics" />,
        <Note.Action key="3" icon={<Icon.MoreIcon />} title="More" />
      ]}
      actionBarVisible
    />
  ))
  .add('with long heading', () => (
    <NoteWithDefaults
      heading="This is probably the greatest thing that's ever happened in my life"
      actionBar={[
        <Note.Action key="1" icon={<Icon.BookmarkIcon />} title="Bookmark" />,
        <Note.Action key="2" icon={<Icon.MoreIcon />} title="More" />
      ]}
      actionBarVisible
    />
  ))
  .add('without author', () => (
    <NoteWithDefaults
      actionBar={[
        <Note.Action key="1" icon={<Icon.BookmarkIcon />} title="Bookmark" />,
        <Note.Action key="2" icon={<Icon.MoreIcon />} title="More" />
      ]}
      actionBarVisible
      noAvatar
      noHeading
    />
  ))
  .add('no author - long metadata', () => (
    <NoteWithDefaults
      actionBar={[
        <Note.Action key="1" icon={<Icon.BookmarkIcon />} title="Bookmark" />,
        <Note.Action key="2" icon={<Icon.MoreIcon />} title="More" />
      ]}
      actionBarVisible
      noAvatar
      noHeading
      metadata={longStringsMetaData}
    />
  ))
  .add('no author - no metadata', () => (
    <NoteWithDefaults
      actionBar={[
        <Note.Action key="1" icon={<Icon.BookmarkIcon />} title="Bookmark" />,
        <Note.Action key="2" icon={<Icon.MoreIcon />} title="More" />
      ]}
      actionBarVisible
      noAvatar
      noHeading
      noMetadata
    />
  ))
  .add('with an action menu', () => {
    const Story = () => {
      const [isOpen, setIsOpen] = React.useState(false)

      return (
        <>
          <NoteWithDefaults
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
                  icon={<Icon.MoreIcon />}
                  onClick={() => setIsOpen(!isOpen)}
                  title="More"
                />
              </BelowLeft>
            ]}
            actionBarVisible
          />
        </>
      )
    }

    return <Story />
  })

storiesOf('Note/in a list', module)
  .addDecorator(fn => <ConstrainWidth>{fn()}</ConstrainWidth>)
  .add('basic', () => (
    <Note.List>
      <NoteWithDefaults />
      <NoteWithDefaults />
      <NoteWithDefaults />
    </Note.List>
  ))
