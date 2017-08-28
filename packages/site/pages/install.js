import core from '@pluralsight/ps-design-system-core'

import { Chrome, Code, Content, Doc, Heading, P } from '../src/ui'

export default _ =>
  <Chrome>
    <Content title="Install">
      <Heading size="xxLarge">
        <h1>Install FTW!</h1>
      </Heading>
      <Doc>{`
## Normalize

Use of the Core or Components requires the existence of the Design System normalize stylesheet on the page.  Install with:

\`\`\`bash
npm install @pluralsight/ps-design-system-normalize
\`\`\`

Include this vanilla CSS in your application in a method appropriate for your project. For usage options, follow the [Core Usage docs](/core/usage) patterns.

## Use Core

First install the dependency:

\`\`\`bash
npm install @pluralsight/ps-design-system-core
\`\`\`

Core design elements are represented as a set of variables.  We recommend you use either the JavaScript variables or the CSS variables.

See individual reference pages for usage examples.

For build support, consult the [CSS Build docs](/core/build).

For usage details, see the [Core Usage docs](/core/usage).

## Use Components

Most components use [glamorous](https://github.com/paypal/glamorous), which has a peerDependency on [glamor](https://github.com/threepointone/glamor).  It needs to be installed exactly once per application that uses these components:

\`\`\`bash
npm install glamor
\`\`\`

Each component is installed separately.  The JavaScript is prebuilt Node modules.  Assets are inlined.  Find and use what you need.  For example:

\`\`\`bash
npm install @pluralsight/ps-design-system-button
\`\`\`

See individual reference pages for usage examples.

For full, working project examples, see [github](https://github.com/pluralsight/design-system/tree/master/examples).
`}</Doc>
    </Content>
  </Chrome>
