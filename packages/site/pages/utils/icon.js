import React from 'react'
import {
  Chrome,
  Content,
  Doc,
  PageHeading,
  P,
  Code,
  SectionHeading
} from '../../src/ui/index.js'

export default _ => (
  <Chrome>
    <Content title="Icon Cli">
      <PageHeading packageName="icon">Icon Cli</PageHeading>
      <SectionHeading>Installation</SectionHeading>
      <P>Install the util:</P>
      <Code language="bash">
        npm install @pluralsight/ps-design-system-icon
      </Code>

      <P>Flags:</P>
      <Doc>
        {`- **Source dir**: \`--src| -s\`
- **Destination dir**: \`--dest| -d\`
- **Extension**: \`default(dist.js)\``}
      </Doc>

      <P>package.json config:</P>
      <Code language="json">
        {`{
  "scripts": {
    "build:icons": "npx psds-icon -s src/ -d dest/ -e dist.js"
  }
}`}
      </Code>

      <SectionHeading>Formating</SectionHeading>
      <P>
        Icons must be monochromatic and their filenames dash-cased. Flattening
        SVGs before usage is recommended.
      </P>
      <P>Formating svg files(dash-cased.svg):</P>
      <Doc>
        {`- **viewbox**: \`0 0 24 24\`
- **role**: \`img\`
- **aria-label**: \`iconname icon\`

\`\`\`svg
<svg role="img" aria-label="check icon" viewBox="0 0 24 24">
  <path d="M9.59 14.58l-3.17-3.17L5 12.82l4.59 4.59 10-10L18.18 6" />
</svg>
\`\`\`
`}
      </Doc>

      <SectionHeading>Usage</SectionHeading>
      <P>Import your custom icons:</P>
      <Code language="javascript">
        {`import {Youricon} from './dest/index.js'`}
      </Code>
    </Content>
  </Chrome>
)
