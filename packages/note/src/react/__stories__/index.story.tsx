import { storiesOf } from '@storybook/react'
import React from 'react'

import ActionMenu from '@pluralsight/ps-design-system-actionmenu'
import Avatar from '@pluralsight/ps-design-system-avatar'
import * as Icon from '@pluralsight/ps-design-system-icon'
import Link from '@pluralsight/ps-design-system-link'
import { BelowLeft } from '@pluralsight/ps-design-system-position'
import * as Text from '@pluralsight/ps-design-system-text'

import Note from '..'

const longStringsMetaData = [
  'It is impossible to count the grand contributions of this great author',
  'Levels heretofore unknown in the battle for truth and knowledge',
  'A length of such amazing lengthitude so-as to blow the mind'
]

const ConstrainWidth = props => <div {...props} style={{ maxWidth: '420px' }} />

const NoteWithDefaults = props => <Note {...props} />
NoteWithDefaults.defaultProps = {
  avatar: <Avatar name="Bob Ross" src="//picsum.photos/128" />,
  heading: 'Bob Ross',
  message: (
    <p>
      If these lines aren't straight, your water's going to run right out of
      your painting and get your floor wet. At home you have unlimited time. See
      there, told you that would be easy. Decide where your cloud lives. Maybe
      he lives right in here.
    </p>
  ),
  metadata: ['meta first', 'meta second']
}

storiesOf('Note', module)
  .addDecorator(fn => <ConstrainWidth>{fn()}</ConstrainWidth>)
  .add('basic', _ => <NoteWithDefaults />)
  .add('with linked avatar', _ => (
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
  .add('with linked heading', _ => (
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
  .add('without avatar and author', _ => (
    <NoteWithDefaults avatar={null} heading={null} />
  ))
  .add('with DS Text components', _ => (
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
  .add('with h1 in heading', _ => (
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
  .add('with long strings', _ => (
    <NoteWithDefaults metadata={longStringsMetaData} />
  ))
  .add('as a link', _ => (
    <NoteWithDefaults
      metadata={[
        <Link>
          <a href="#">i'm a link</a>
        </Link>,
        <Link appearance={Link.appearances.subtle}>
          <a href="#">i'm a subtle link</a>
        </Link>
      ]}
    />
  ))

storiesOf('Note/actions', module)
  .addDecorator(fn => <ConstrainWidth>{fn()}</ConstrainWidth>)
  .add('visible on hover', _ => (
    <NoteWithDefaults
      actionBar={[<Note.Action icon={<Icon.MoreIcon />} title="More" />]}
      actionBarVisible={false}
    />
  ))
  .add('one action', _ => (
    <NoteWithDefaults
      actionBar={[<Note.Action icon={<Icon.MoreIcon />} title="More" />]}
      actionBarVisible
    />
  ))
  .add('two actions', _ => (
    <NoteWithDefaults
      actionBar={[
        <Note.Action icon={<Icon.BookmarkIcon />} title="Bookmark" />,
        <Note.Action icon={<Icon.MoreIcon />} title="More" />
      ]}
      actionBarVisible
    />
  ))
  .add('three actions', _ => (
    <NoteWithDefaults
      actionBar={[
        <Note.Action icon={<Icon.BookmarkIcon />} title="Bookmark" />,
        <Note.Action icon={<Icon.AnalyticsIcon />} title="Analytics" />,
        <Note.Action icon={<Icon.MoreIcon />} title="More" />
      ]}
      actionBarVisible
    />
  ))
  .add('with long heading', _ => (
    <NoteWithDefaults
      heading="This is probably the greatest thing that's ever happened in my life"
      actionBar={[
        <Note.Action icon={<Icon.BookmarkIcon />} title="Bookmark" />,
        <Note.Action icon={<Icon.MoreIcon />} title="More" />
      ]}
      actionBarVisible
    />
  ))
  .add('without author', _ => (
    <NoteWithDefaults
      actionBar={[
        <Note.Action icon={<Icon.BookmarkIcon />} title="Bookmark" />,
        <Note.Action icon={<Icon.MoreIcon />} title="More" />
      ]}
      actionBarVisible
      avatar={null}
      heading={null}
    />
  ))
  .add('no author - long metadata', _ => (
    <NoteWithDefaults
      actionBar={[
        <Note.Action icon={<Icon.BookmarkIcon />} title="Bookmark" />,
        <Note.Action icon={<Icon.MoreIcon />} title="More" />
      ]}
      actionBarVisible
      avatar={null}
      heading={null}
      metadata={longStringsMetaData}
    />
  ))
  .add('no author - no metadata', _ => (
    <NoteWithDefaults
      actionBar={[
        <Note.Action icon={<Icon.BookmarkIcon />} title="Bookmark" />,
        <Note.Action icon={<Icon.MoreIcon />} title="More" />
      ]}
      actionBarVisible
      avatar={null}
      heading={null}
      metadata={null}
    />
  ))
  .add('with an action menu', _ => {
    const Story = props => {
      const [isOpen, setIsOpen] = React.useState(false)

      return (
        <>
          <NoteWithDefaults
            actionBar={[
              <BelowLeft
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
                  onClick={_ => setIsOpen(!isOpen)}
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
  .add('basic', _ => (
    <Note.List>
      <NoteWithDefaults />
      <NoteWithDefaults />
      <NoteWithDefaults />
    </Note.List>
  ))
