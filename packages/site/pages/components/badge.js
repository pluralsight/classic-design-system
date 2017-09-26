import Badge from '@pluralsight/ps-design-system-badge/react'

import {
  Chrome,
  Code,
  Content,
  Example,
  Heading,
  Link,
  P,
  PageHeading,
  SectionHeading,
  withServerProps
} from '../../src/ui'

export default withServerProps(_ => (
  <Chrome>
    <Content title="Badge">
      <PageHeading beta packageName="badge">
        Badge
      </PageHeading>

      <P>Install the component dependency:</P>
      <Code language="bash">
        npm install @pluralsight/ps-design-system-badge
      </Code>

      <P>Include a React component in your project:</P>
      <Code language="javascript">
        import Badge from '@pluralsight/ps-design-system-badge/react'
      </Code>

      <SectionHeading>Appearance</SectionHeading>
      <P>In either solid or stroked styles.</P>
      <Example.React
        includes={{ Badge }}
        codes={[`<Badge>Badge</Badge>`].concat(
          Object.keys(Badge.appearances).map(
            a => `<Badge appearance={Badge.appearances.${a}}>Badge</Badge>`
          )
        )}
      />

      <SectionHeading>Colors</SectionHeading>
      <P>Colors come from the Design System. Semantics come from your heart.</P>
      <Example.React
        includes={{ Badge }}
        codes={Object.keys(Badge.colors).map(
          color => `<Badge color={Badge.colors.${color}}>Badge</Badge>`
        )}
      />
    </Content>
  </Chrome>
))
