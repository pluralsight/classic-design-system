import { storiesOf } from '@storybook/react'
import React from 'react'

import Avatar from '@pluralsight/ps-design-system-avatar/react'
import Text from '@pluralsight/ps-design-system-text/react'

import Note from '../index.js'

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
  .add('without author', _ => <NoteWithDefaults avatar={null} heading={null} />)
  .add('with DS Text components', _ => (
    <NoteWithDefaults
      heading={
        <Text.Heading size={Text.Heading.sizes.medium}>
          <h3>Bob Ross</h3>
        </Text.Heading>
      }
      message={
        <React.Fragment>
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
        </React.Fragment>
      }
    />
  ))
  .add('in a list', _ => (
    <Note.List>
      <NoteWithDefaults />
      <NoteWithDefaults />
      <NoteWithDefaults />
    </Note.List>
  ))
