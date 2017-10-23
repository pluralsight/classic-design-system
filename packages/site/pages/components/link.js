import Link from '@pluralsight/ps-design-system-link/react'

import {
  Chrome,
  Code,
  Content,
  Example,
  P,
  PageHeading,
  SectionHeading,
  withServerProps
} from '../../src/ui'

export default withServerProps(_ => (
  <Chrome>
    <Content title="Link">
      <PageHeading packageName="link">Link</PageHeading>

      <P>Install the component dependency:</P>
      <Code language="bash">
        npm install @pluralsight/ps-design-system-link
      </Code>

      <P>Include a React component in your project:</P>
      <Code language="javascript">
        import Link from '@pluralsight/ps-design-system-link/react'
      </Code>

      <SectionHeading>Inline links</SectionHeading>
      <P>
        Links are used to embed actions or pathways to more information within a
        sentence.
      </P>
      <P>
        The Link component simply styles the child element that you pass to it.
        You bring all your own semantics or links that support client-side
        routing.
      </P>
      <Example.React
        orient="vertical"
        includes={{ Link }}
        codes={[
          `
<p>
  Lorem ipsum dolor sit amet <Link><a href="https://duckduckgo.com">basic link</a></Link> nisi ut aliquip ex ea commodo consequat.
</p>
`,

          `
<p>
  Lorem ipsum dolor sit amet <Link appearance={Link.appearances.subtle}><a href="https://duckduckgo.com">subtle link</a></Link> nisi ut aliquip ex ea commodo consequat.
</p>
`
        ]}
      />
    </Content>
  </Chrome>
))
