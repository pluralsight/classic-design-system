import React from 'react'

import Avatar from '@pluralsight/ps-design-system-avatar/react'
import Icon from '@pluralsight/ps-design-system-icon/react'
import Link from '@pluralsight/ps-design-system-link/react'
import Note from '@pluralsight/ps-design-system-note/react'
import Text from '@pluralsight/ps-design-system-text/react'

import {
  Chrome,
  Code,
  Content,
  Example,
  P,
  PageHeading,
  PropTypes,
  SectionHeading,
  withServerProps
} from '../../src/ui'

export default withServerProps(_ => (
  <Chrome>
    <Content title="Note">
      <PageHeading packageName="note">Note</PageHeading>

      <P>Install the component dependency:</P>
      <Code language="bash">
        npm install @pluralsight/ps-design-system-note
      </Code>

      <P>Include a React component in your project:</P>
      <Code language="javascript">
        import Note from '@pluralsight/ps-design-system-note/react'
      </Code>

      <PropTypes
        props={{
          Row: [
            PropTypes.row([
              'actionBar',
              <code>Note.Action[]</code>,
              null,
              null,
              'action buttons'
            ]),
            PropTypes.row([
              'avatar',
              <span>
                <code>Avatar</code>
                {' | '}
                <code>Note.AvatarLink</code>
              </span>,
              null,
              null
            ]),
            PropTypes.row([
              'heading',
              <span>
                <code>string</code>
                {' | '}
                <code>node</code>
              </span>,
              null,
              null
            ]),
            PropTypes.row(['message', <code>node</code>, true, null]),
            PropTypes.row([
              'metadata',
              <span>
                <code>string[]</code>
                {' | '}
                <code>node[]</code>
              </span>,
              null,
              null
            ])
          ],
          'Note.Action': [
            PropTypes.row(['icon', <code>Icon</code>, true, null, '']),
            PropTypes.row(['title', <code>string</code>, true, null, ''])
          ],
          'Note.AvatarLink': [
            PropTypes.row([
              'actionBar',
              <code>Note.Action[]</code>,
              true,
              null,
              ''
            ])
          ],
          'Note.List': [
            PropTypes.row(['children', <code>Note[]</code>, true, null, ''])
          ]
        }}
      />

      <SectionHeading>Basic Examples</SectionHeading>
      <P>
        The row is a flexible component that will expand to fit the container
        it's in. The height and width will grow indefinitely. Define your own
        constrains with parent elements.
      </P>
      <Example.React
        themeToggle
        includes={{ Avatar, Note }}
        codes={[
          `
<Note
  avatar={<Avatar name="Mark Twain" src="//placebear.com/128/128" />}
  heading="Mark Twain"
  message={(
    <p>Customs do not concern themselves with right or wrong or reason. But they have to be obeyed; one reasons all around them until he is tired, but he must not transgress them, it is sternly forbidden.</p>
  )}
  metadata={['Lorem ipsum dolor sit amet', 'Curabitur dolor sapien']}
/>
        `
        ]}
      />

      <P>Avatar, Heading and Metadata can all be expressed at hyperlinks.</P>
      <Example.React
        themeToggle
        includes={{ Avatar, Link, Note, Text }}
        codes={[
          `
<Note
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
  metadata={[
    <Link appearance={Link.appearances.subtle}>
      <a href="#">Lorem ipusm dolor sit amet</a>
    </Link>
  ]}
/>
        `
        ]}
      />

      <SectionHeading>Action Bar</SectionHeading>
      <P>
        The action bar contains the on-row affordances a user can take besides
        linking straight to the content.
      </P>
      <Example.React
        themeToggle
        includes={{ Avatar, Note, Icon }}
        codes={[
          `
<Note
  actionBar={[
    <Note.Action icon={<Icon id={Icon.ids.bookmark} />} title="Bookmark" />,
    <Note.Action icon={<Icon id={Icon.ids.more} />} title="More" />
  ]}
  avatar={<Avatar name="Mark Twain" src="//placebear.com/128/128" />}
  heading="Mark Twain"
  message={(
    <p>Customs do not concern themselves with right or wrong or reason. But they have to be obeyed; one reasons all around them until he is tired, but he must not transgress them, it is sternly forbidden.</p>
  )}
  metadata={['Lorem ipsum dolor sit amet', 'Curabitur dolor sapien']}
/>
        `
        ]}
      />

      <SectionHeading>Without Attribution</SectionHeading>
      <P>
        A note can also be used without author attribution. The actions will be
        moved to the bottom next to the metadata.
      </P>
      <Example.React
        themeToggle
        includes={{ Note }}
        codes={[
          `
<Note
  actionBar={[
    <Note.Action icon={<Icon id={Icon.ids.bookmark} />} title="Bookmark" />,
    <Note.Action icon={<Icon id={Icon.ids.more} />} title="More" />
  ]}
  message={(
    <p>Customs do not concern themselves with right or wrong or reason. But they have to be obeyed; one reasons all around them until he is tired, but he must not transgress them, it is sternly forbidden.</p>
  )}
  metadata={['Lorem ipsum dolor sit amet', 'Curabitur dolor sapien']}
/>
        `
        ]}
      />
      <SectionHeading>List</SectionHeading>
      <P>Use a List when display a group of related Notes.</P>
      <Example.React
        themeToggle
        includes={{ Note }}
        codes={[
          `
<Note.List>
  <Note
    avatar={<Avatar name="Mark Twain" src="//placebear.com/128/128" />}
    heading="Mark Twain"
    message={(
      <p>Customs do not concern themselves with right or wrong or reason. But they have to be obeyed; one reasons all around them until he is tired, but he must not transgress them, it is sternly forbidden.</p>
    )}
  />

  <Note
    avatar={<Avatar name="Samuel Lanhorne Clemens" src="//placebear.com/128/128" />}
    heading="Samuel Lanhorne Clemens"
    message={(
      <p>There are those who imagine that the unlucky accidents of life—life's 'experiences'—are in some way useful to us. I wish I could find out how. I never know one of them to happen twice. They always change off and swap around and catch you on your inexperienced side.</p>
    )}
  />

  <Note
    avatar={<Avatar name="Mark Twain" src="//placebear.com/128/128" />}
    heading="Mark Twain"
    message={(
      <p>Clothes make the man. Naked people have little or no influence on society.</p>
    )}
  />
</Note.List>
`
        ]}
      />
    </Content>
  </Chrome>
))
