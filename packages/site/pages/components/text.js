import core from '@pluralsight/ps-design-system-core'
import Text from '@pluralsight/ps-design-system-text/react'

import {
  Chrome,
  Code,
  Content,
  Example,
  Heading,
  Link,
  P,
  PageHeading,
  PropTypes,
  SectionHeading,
  withServerProps
} from '../../src/ui'

export default withServerProps(_ => (
  <Chrome>
    <Content title="Text">
      <PageHeading packageName="text">Text</PageHeading>

      <P>Install the component dependency:</P>
      <Code language="bash">
        npm install @pluralsight/ps-design-system-text
      </Code>

      <P>Include a React component in your project:</P>
      <Code language="javascript">
        import * as Text from '@pluralsight/ps-design-system-text/react'
      </Code>

      <SectionHeading>Heading</SectionHeading>
      <P>
        Heading styles compose complimentary typography attributes for
        simplified implementation. Try to use common heading styles when
        possible.
      </P>
      <Example.React
        orient="vertical"
        includes={{ Text }}
        codes={Object.keys(Text.Heading.sizes).map(
          s =>
            `
<Text.Heading size={Text.Heading.sizes.${s}}>
  <h2>${s}</h2>
</Text.Heading>
`
        )}
      />
      <PropTypes
        title="Text.Heading PropTypes"
        props={[
          PropTypes.row([
            'size',
            PropTypes.union(Text.Heading.sizes),
            null,
            <code>large</code>,
            <span>
              size and style of heading (from <code>Text.Heading.sizes</code>)
            </span>
          ])
        ]}
      />

      <SectionHeading>Body text</SectionHeading>
      <P>Try to use common paragraph style when possible.</P>
      <Example.React
        includes={{ Text }}
        codes={[
          `
<Text.P>
  Paragraph - Lorem ipsum dolor sit amet adipisicing elit, sed do
  eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
  minim veniam, quis nostrud exercitation nisi ut aliquip ex ea commodo
  consequat.Lorem ipsum dolor sit amet consectetur adipisicing elit, sed
  do eiusmod tempor incididunt ut labore et dolore magna aliqua.
</Text.P>
      `
        ]}
        orient="vertical"
      />

      <SectionHeading>List</SectionHeading>
      <P>Nothing fancy, just simple lists. You’ll know when you need them.</P>
      <Example.React
        includes={{ Text }}
        codes={[
          `
<Text.List>
  <Text.List.Item>apple</Text.List.Item>
  <Text.List.Item>orange</Text.List.Item>
  <Text.List.Item>banana</Text.List.Item>
  <Text.List.Item>strawberry</Text.List.Item>
  <Text.List.Item>papaya</Text.List.Item>
</Text.List>
`,
          `
<Text.List type="bulleted">
  <Text.List.Item>apple</Text.List.Item>
  <Text.List.Item>orange</Text.List.Item>
  <Text.List.Item>banana</Text.List.Item>
  <Text.List.Item>strawberry</Text.List.Item>
  <Text.List.Item>papaya</Text.List.Item>
</Text.List>
`,
          `
<Text.List type="numbered">
  <Text.List.Item>apple</Text.List.Item>
  <Text.List.Item>orange</Text.List.Item>
  <Text.List.Item>banana</Text.List.Item>
  <Text.List.Item>strawberry</Text.List.Item>
  <Text.List.Item>papaya</Text.List.Item>
</Text.List>
`
        ]}
      />

      <PropTypes
        title="Text.List PropTypes"
        props={[
          PropTypes.row([
            'type',
            PropTypes.union(Text.List.types),
            null,
            'no bullets',
            'semantics and bullet styles'
          ])
        ]}
      />
    </Content>
  </Chrome>
))
