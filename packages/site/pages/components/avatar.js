import Avatar from '@pluralsight/ps-design-system-avatar'
import React from 'react'

import {
  Chrome,
  Content,
  P,
  PageHeading,
  PropTypes,
  SectionHeading
} from '../../src/ui/index.js'

import CodeBlock from '../../src/ui/code-block/index.js'

export default _ => (
  <Chrome>
    <Content title="Avatar">
      <PageHeading packageName="avatar">Avatar</PageHeading>

      <P>Install the component dependency:</P>
      <CodeBlock language="bash">
        npm install @pluralsight/ps-design-system-avatar
      </CodeBlock>

      <P>Include a React component in your project:</P>
      <CodeBlock language="javascript">
        import Avatar from '@pluralsight/ps-design-system-avatar'
      </CodeBlock>

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

      <CodeBlock live>
        {`<>
  <Avatar
    size={Avatar.sizes.xSmall}
    src="https://secure.gravatar.com/avatar/0f792a763ebf08411c7f566079e4adc7?s=400"
  />
  <Avatar
    size={Avatar.sizes.small}
    src="https://secure.gravatar.com/avatar/0f792a763ebf08411c7f566079e4adc7?s=400"
  />
  <Avatar
    size={Avatar.sizes.medium}
    src="https://secure.gravatar.com/avatar/0f792a763ebf08411c7f566079e4adc7?s=400"
  />
  <Avatar
    size={Avatar.sizes.large}
    src="https://secure.gravatar.com/avatar/0f792a763ebf08411c7f566079e4adc7?s=400"
  />
  <Avatar
    size={Avatar.sizes.xLarge}
    src="https://secure.gravatar.com/avatar/0f792a763ebf08411c7f566079e4adc7?s=400"
  />
</>`}
      </CodeBlock>

      <SectionHeading>Default with initials</SectionHeading>
      <P>
        An avatar with a visual image is preferred. In cases where the image is
        unavailable or loading, initials of the person pictured will be
        displayed. Always provide the <code>name</code> prop as a fallback.
      </P>
      <CodeBlock live>
        {`<>
  <Avatar name="Alan Turing" />
  <Avatar name="Grace Hopper" />
  <Avatar name="Tim Berners-Lee" />
</>`}
      </CodeBlock>
    </Content>
  </Chrome>
)
