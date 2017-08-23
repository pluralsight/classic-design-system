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
  PageHeading
} from '../../src/ui'

export default _ =>
  <Chrome>
    <Content title="Text">

      <PageHeading>Text</PageHeading>

      <P>Install the component dependency:</P>
      <Code language="bash">
        npm install @pluralsight/ps-design-system-text --save-dev
      </Code>

      <P>Include a React component in your project:</P>
      <Code language="javascript">
        import * as Text from '@pluralsight/ps-design-system-text/react'
      </Code>

      <Heading size="large"><h2>Heading styles</h2></Heading>

      <P>
        Heading styles compose complimentary typography attributes for
        simplified
        implementation. Try to use common heading styles when possible.
      </P>

      <Example.React
        orient="vertical"
        includes={{ Text }}
        codes={[
          `
<Text.Heading size="xxLarge">
  <h2>XX Large</h2>
</Text.Heading>
`,
          `
<Text.Heading size="large">
  <h2>Large</h2>
</Text.Heading>
`,
          `
<Text.Heading size="medium">
  <h2>Medium</h2>
</Text.Heading>
`,
          `
<Text.Heading size="smallCaps">
  <h2>Small Caps</h2>
</Text.Heading>
`
        ]}
      />

      <Heading size="large">
        <h2>Body text</h2>
      </Heading>

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

      <Heading size="large"><h2>List</h2></Heading>

      <P>
        Nothing fancy, just simple lists. You’ll know when you need them.
      </P>

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
    </Content>
  </Chrome>
