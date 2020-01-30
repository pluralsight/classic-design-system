import Link from '@pluralsight/ps-design-system-link'
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
    <Content title="Link">
      <PageHeading packageName="link">Link</PageHeading>

      <P>Install the component dependency:</P>
      <Code language="bash">
        npm install @pluralsight/ps-design-system-link
      </Code>

      <P>Include a React component in your project:</P>
      <Code language="javascript">
        import Link from '@pluralsight/ps-design-system-link'
      </Code>

      <PropTypes
        props={[
          PropTypes.row([
            'appearance',
            PropTypes.union(Link.appearances),
            null,
            <code>default</code>,
            <span>
              visual style (from <code>Link.appearances</code>)
            </span>
          ])
        ]}
      />

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
)
