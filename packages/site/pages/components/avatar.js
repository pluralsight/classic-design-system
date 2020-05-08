import Avatar from '@pluralsight/ps-design-system-avatar'
import React from 'react'

import * as core from '@pluralsight/ps-design-system-core'

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
      <SectionHeading>Sizes</SectionHeading>
      <P>
        Avatars are available in five sizes specified with the <code>size</code>{' '}
        prop.
      </P>
      <Example.React
        includes={{ Avatar }}
        outputStyle={{
          display: 'grid',
          gap: core.layout.spacingMedium,
          gridTemplateColumns: `auto auto auto auto auto`,
          alignItems: 'center'
        }}
        outputChildStyle={{ margin: 0 }}
        codes={[
          `<Avatar size="xLarge" name="Assis Silva" src="https://secure.gravatar.com/avatar/0f792a763ebf08411c7f566079e4adc7?s=400"  />`,
          `<Avatar size="large" name="Assis Silva" src="https://secure.gravatar.com/avatar/0f792a763ebf08411c7f566079e4adc7?s=400"  />`,
          `<Avatar size="medium" name="Assis Silva" src="https://secure.gravatar.com/avatar/0f792a763ebf08411c7f566079e4adc7?s=400"  />`,
          `<Avatar size="small" name="Assis Silva" src="https://secure.gravatar.com/avatar/0f792a763ebf08411c7f566079e4adc7?s=400"  />`,
          `<Avatar size="xSmall" name="Assis Silva" src="https://secure.gravatar.com/avatar/0f792a763ebf08411c7f566079e4adc7?s=400"  />`
        ]}
      />

      <SectionHeading>Fallback states</SectionHeading>
      <P>
        An avatar with an image is preferred. In cases where the image is
        unavailable or loading, the first initial of the person pictured will be
        displayed on a background of nine possible colors. Always provide the{' '}
        <code>name</code> prop as a fallback.
      </P>
      <Example.React
        includes={{ Avatar }}
        outputStyle={{
          display: 'grid',
          gap: core.layout.spacingMedium,
          gridTemplateColumns: `auto auto auto auto auto`,
          alignItems: 'center'
        }}
        outputChildStyle={{ margin: 0 }}
        codes={[
          `<Avatar size="medium" name="Vaughn Christensen" />`,
          `<Avatar size="medium" name="Brie Cowan" />`,
          `<Avatar size="medium" name="Darius Klein" />`,
          `<Avatar size="medium" name="Ronnie Lindsey" />`,
          `<Avatar size="medium" name="Michael Holden" />`,
          `<Avatar size="medium" name="Teresa Brewer" />`,
          `<Avatar size="medium" name="Jan Berg" />`,
          `<Avatar size="medium" name="Grant Knight" />`,
          `<Avatar size="medium" name="Penelope Taylor" />`,
          `<Avatar size="medium" name="" />`
        ]}
      />
    </Content>
  </Chrome>
)
