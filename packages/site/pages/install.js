import Badge from '@pluralsight/ps-design-system-badge/react'
import core from '@pluralsight/ps-design-system-core'

import {
  Chrome,
  Code,
  Content,
  Doc,
  P,
  PageHeading,
  TextLink,
  withServerProps
} from '../src/ui'

export default withServerProps(_ => (
  <Chrome>
    <Content title="Install">
      <PageHeading>Install FTW!</PageHeading>
      <Doc>{`
## Normalize

Use of the Core or Components requires the existence of the Design System normalize stylesheet on the page.  Install with:

\`\`\`bash
npm install @pluralsight/ps-design-system-normalize
\`\`\`

Include this vanilla CSS in your application in a method appropriate for your project. For usage options, follow the [Core Usage docs](/core/usage) patterns.

## Use Core

### Step 1: Install Core

First install the dependency:

\`\`\`bash
npm install @pluralsight/ps-design-system-core
\`\`\`

Core design elements are not Components.  Rather they are represented as a set of variables.

### Step 2: Configure Core

If you write your CSS in JavaScript, no additional configuration is required.  Otherwise choose how to integrate the Core variables into your CSS build process.  We recommend using PostCSS.

Install any required plugins you don't have yet for PostCSS:

\`\`\`bash
npm install postcss-cssnext postcss-import
\`\`\`

Adjust your \`postcss.config.js\` to include the required plugins:

\`\`\`bash
module.exports = {
  plugins: {
    'postcss-import': {},
    'postcss-cssnext': { browsers: ['Last 2 versions', 'IE >= 10'] }
  }
}
\`\`\`

`}</Doc>
      <P>
        <Badge color={Badge.colors.yellow}>Important</Badge> See the{' '}
        <TextLink href="/core/build">CSS Build docs</TextLink> for other CSS
        tech config options if the above doesn't apply.
      </P>
      <Doc>{`

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
))
