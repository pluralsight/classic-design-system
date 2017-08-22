import core from '@pluralsight/ps-design-system-core'

import { Chrome, Code, Content, Doc, Heading, P } from '../src/ui'

export default _ =>
  <Chrome>
    <Content title="Install">
      <Heading size="xxLarge">
        <h1>Install FTW!</h1>
      </Heading>
      <Doc>{`
## Use Core

First install the dependency:

\`\`\`bash
npm install @pluralsight/ps-design-system-core --save-dev
\`\`\`

Core design elements are represented as a set of variables.  We recommend you use either the JavaScript variables or the CSS variables.

See individual reference pages for usage examples.

For build support, consult the [CSS Build docs](/core/build).

For usage details, see the [Core Usage docs](/core/usage).

## Use Components

Each component is installed separately.  JavaScript is prebuilt as Node modules.  Assets are inlined.  Find and use what you need.  For example:

\`\`\`bash
npm install @pluralsight/ps-design-system-button --save-dev
\`\`\`

See individual reference pages for usage examples.

For full, working project examples, see the [examples on github](https://github.com/pluralsight/design-system/tree/master/examples).
`}</Doc>
    </Content>
  </Chrome>
