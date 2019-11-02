import Avatar from '@pluralsight/ps-design-system-avatar'
import React from 'react'

import {
  Chrome,
  Code,
  Content,
  Example,
  P,
  PageHeading,
  PropTypes,
  SectionHeading
} from '../../src/ui/index.js'

export default _ => (
  <Chrome>
    <Content title="Avatar">
      <PageHeading packageName="avatar">Avatar</PageHeading>

      <P>Install the component dependency:</P>
      <Code language="bash">
        npm install @pluralsight/ps-design-system-avatar
      </Code>

      <P>Include a React component in your project:</P>
      <Code language="javascript">
        import Avatar from '@pluralsight/ps-design-system-avatar'
      </Code>

      <PropTypes
        props={[
          PropTypes.row([
            'name',
            'string',
            null,
            null,
            'used to generate intials as a fallback image'
          ]),
          PropTypes.row([
            'size',
            PropTypes.union(Avatar.sizes),
            null,
            <code>medium</code>,
            <span>
              avatar size (from <code>Avatar.sizes</code>)
            </span>
          ]),
          PropTypes.row([
            'src',
            'string',
            null,
            null,
            'URI or path to avatar image'
          ])
        ]}
      />

      <SectionHeading>Size</SectionHeading>
      <P>Five avatar sizes are available.</P>
      <Example.React
        includes={{ Avatar }}
        codes={Object.keys(Avatar.sizes).map(
          size =>
            `<Avatar size={Avatar.sizes.${size}} src="https://secure.gravatar.com/avatar/0f792a763ebf08411c7f566079e4adc7?s=400" />`
        )}
      />

      <SectionHeading>Default with initials</SectionHeading>
      <P>
        An avatar with a visual image is preferred. In cases where the image is
        unavailable or loading, initials of the person pictured will be
        displayed. Always provide the <code>name</code> prop as a fallback.
      </P>
      <Example.React
        includes={{ Avatar }}
        codes={[
          `<Avatar name="Alan Turing" />`,
          `<Avatar name="Grace Hopper" />`,
          `<Avatar name="Tim Berners-Lee" />`
        ]}
      />
    </Content>
  </Chrome>
)
