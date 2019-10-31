import React from 'react'

import Avatar from '@pluralsight/ps-design-system-avatar/react.js'
import Icon from '@pluralsight/ps-design-system-icon/react.js'
import Link from '@pluralsight/ps-design-system-link/react.js'
import Note from '@pluralsight/ps-design-system-note'
import * as Text from '@pluralsight/ps-design-system-text'

import {
  Chrome,
  Code,
  Content,
  Example,
  P,
  Intro,
  PageHeading,
  PropTypes,
  SectionHeading
} from '../../src/ui/index.js'

export default _ => (
  <Chrome>
    <Content title="Note">
      <PageHeading packageName="note">Note (comment)</PageHeading>
      <Intro>
        Use the note component for conversational elements. A note may have an
        author, metadata and available actions.
      </Intro>

      <br />
      <P>Install the component dependency:</P>
      <Code language="bash">
        npm install @pluralsight/ps-design-system-note
      </Code>

      <P>Include a React component in your project:</P>
      <Code language="javascript">
        import Note from '@pluralsight/ps-design-system-note'
      </Code>

      <PropTypes
        props={{
          Note: [
            PropTypes.row([
              'actionBar',
              <code>Note.Action[]</code>,
              null,
              null,
              'action buttons'
            ]),
            PropTypes.row([
              'actionBarVisible',
              <code>boolean</code>,
              null,
              <code>false</code>,
              'locks actionBar visible'
            ]),
            PropTypes.row([
              'avatar',
              <span>
                <code>Avatar</code>
                {' | '}
                <code>Note.AvatarLink</code>
              </span>,
              null,
              null,
              `a user's avatar`
            ]),
            PropTypes.row([
              'heading',
              <span>
                <code>string</code>
                {' | '}
                <code>node</code>
              </span>,
              null,
              null,
              'the note heading'
            ]),
            PropTypes.row([
              'message',
              <code>node</code>,
              true,
              null,
              'the main message body'
            ]),
            PropTypes.row([
              'metadata',
              <span>
                <code>string[]</code>
                {' | '}
                <code>node[]</code>
              </span>,
              null,
              null,
              'a row of metadata'
            ])
          ],
          'Note.Action': [
            PropTypes.row([
              'icon',
              <code>Icon</code>,
              true,
              null,
              'icon representing action'
            ]),
            PropTypes.row([
              'title',
              <code>string</code>,
              true,
              null,
              'text representing action'
            ])
          ],
          'Note.AvatarLink': [
            PropTypes.row([
              'children',
              <code>a > Avatar</code>,
              true,
              null,
              'hyperlinked avatar'
            ])
          ],
          'Note.List': [
            PropTypes.row([
              'children',
              <code>Note[]</code>,
              true,
              null,
              'Notes to be placed in list'
            ])
          ]
        }}
      />

      <SectionHeading>In-app example</SectionHeading>
      <P>
        The note is a flexible component that will fit the container it's given.
        A user generated list is a common container layout that one might
        encounter in the product.{' '}
      </P>
      <P>Use a List to display a group of related Notes.</P>
      <Example.React
        themeToggle
        themeName="light"
        includes={{ Avatar, Note, Icon }}
        codes={[
          `<Note.List>
  <Note
    actionBar={[
      <Note.Action icon={<Icon id={Icon.ids.more} />} title="More" />
    ]}
    avatar={<Avatar name="Mark Twain" src="//placebear.com/128/128" />}
    heading="Mark Twain"
    message={(
      <p>Customs do not concern themselves with right or wrong or reason. But they have to be obeyed; one reasons all around them until he is tired, but he must not transgress them, it is sternly forbidden.</p>
      )}
    metadata={['June 18, 2019', '10:30am']}
  />

  <Note
    actionBar={[
      <Note.Action icon={<Icon id={Icon.ids.more} />} title="More" />
    ]}
    avatar={<Avatar name="Samuel Lanhorne Clemens" src="//placebear.com/128/128" />}
    heading="Samuel Lanhorne Clemens"
    message={(
      <p>There are those who imagine that the unlucky accidents of life—life's 'experiences'—are in some way useful to us. I wish I could find out how. I never know one of them to happen twice. They always change off and swap around and catch you on your inexperienced side.</p>
    )}
    metadata={['June 18, 2019', '10:30am']}
  />

  <Note
  actionBar={[
    <Note.Action icon={<Icon id={Icon.ids.more} />} title="More" />
  ]}
    avatar={<Avatar name="Mark Twain" src="//placebear.com/128/128" />}
    heading="Mark Twain"
    message={(
      <p>Clothes make the man. Naked people have little or no influence on society.</p>
    )}
    metadata={['June 18, 2019', '10:30am']}
  />
</Note.List>`
        ]}
      />

      <SectionHeading>Title and Avatar</SectionHeading>
      <P>Title and avatar are useful to depict the author of a note. </P>
      <Example.React
        themeToggle
        themeName="light"
        includes={{ Avatar, Link, Note, Text }}
        codes={[
          `<Note
  avatar={
    <Note.AvatarLink>
      <a href="#">
        <Avatar name="Mark Twain" src="//placebear.com/128/128" />
      </a>
    </Note.AvatarLink>
  }
  heading={
    <Text.P>
      <Link appearance={Link.appearances.subtle}>
        <a href="#">Mark Twain</a>
      </Link>
    </Text.P>
  }
  message={(
    <p>Customs do not concern themselves with right or wrong or reason. But they have to be obeyed; one reasons all around them until he is tired, but he must not transgress them, it is sternly forbidden.</p>
  )}
/>`
        ]}
      />

      <SectionHeading>Metadata</SectionHeading>
      <P>
        Metadata is free-form strings or displayable elements like links. Each
        bit of metadata is separated by an interpunct.
      </P>

      <Example.React
        themeToggle
        themeName="light"
        includes={{ Avatar, Link, Note, Text }}
        codes={[
          `<Note
  message={(
    <p>Customs do not concern themselves with right or wrong or reason. But they have to be obeyed; one reasons all around them until he is tired, but he must not transgress them, it is sternly forbidden.</p>
  )}
  metadata={[
    'Great American author',
    'Satirist',
    <Link appearance={Link.appearances.subtle}>
      <a href="#">14 minutes ago</a>
    </Link>
  ]}
/>`
        ]}
      />

      <SectionHeading>Action bar</SectionHeading>
      <P>
        The action bar contains the on-note affordances a user can take. These
        are usually icon buttons. The actions can be displayed always, on hover,
        or without without the title.
      </P>
      <Example.React
        themeToggle
        themeName="light"
        includes={{ Avatar, Note }}
        codes={[
          `<Note
  actionBar={[
    <Note.Action icon={<Icon id={Icon.ids.pencil} />} title="Edit" />,
    <Note.Action icon={<Icon id={Icon.ids.more} />} title="More" />
  ]}
  actionBarVisible
  avatar={
    <Avatar name="Mark Twain" src="//placebear.com/128/128" />
  }
  heading={
    <h2>Mark Twain</h2>
  }
  message={(
    <p>Customs do not concern themselves with right or wrong or reason. But they have to be obeyed; one reasons all around them until he is tired, but he must not transgress them, it is sternly forbidden.</p>
  )}
/>`
        ]}
      />

      <SectionHeading>Without attribution</SectionHeading>
      <P>
        A note can also be used without the avatar and heading. The actions will
        be moved to the bottom next to the metadata.
      </P>
      <Example.React
        themeToggle
        themeName="light"
        includes={{ Note, Link }}
        codes={[
          `<Note
  actionBar={[
    <Note.Action icon={<Icon id={Icon.ids.bookmark} />} title="Bookmark" />,
    <Note.Action icon={<Icon id={Icon.ids.more} />} title="More" />
  ]}
  actionBarVisible
  message={(
    <p>Customs do not concern themselves with right or wrong or reason. But they have to be obeyed; one reasons all around them until he is tired, but he must not transgress them, it is sternly forbidden.</p>
  )}
  metadata={[
    'Metadata 1',
    'Metadata 2',
    '14 minutes ago'
  ]}
/>`
        ]}
      />
    </Content>
  </Chrome>
)
