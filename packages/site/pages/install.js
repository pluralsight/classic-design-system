import React from 'react'

import Badge from '@pluralsight/ps-design-system-badge'

import {
  Chrome,
  Content,
  Doc,
  P,
  PageHeading,
  TextLink
} from '../src/ui/index.js'

export default _ => (
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


## JavaScript Environment Requirements

Many components in the the Design System depend on features in more modern versions of ecmascript(es6 and es7). Older browsers and devices that we support do not provide these natively (e.g. IE 11) so you'll need to include a global polyfill in your bundled application, such as \`core-js\` or \`babel-polyfill\`.

To explore features by version you can visit the [ECMAScript Compatibility Table](https://kangax.github.io/compat-table/es6/).

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
npm install postcss-preset-env postcss-import
\`\`\`

Adjust your \`postcss.config.js\` to include the required plugins:

\`\`\`bash
module.exports = {
  plugins: {
    'postcss-import': {},
    'postcss-preset-env': { browsers: ['Last 2 versions', 'IE >= 11'] }
  }
}
\`\`\`

`}</Doc>
      <P>
        <Badge color={Badge.colors.yellow}>Important</Badge> See the{' '}
        <TextLink href="/config">CSS config docs</TextLink> for other CSS tech
        config options if the above doesn't apply.
      </P>
      <Doc>{`

For usage details, see the [Core Usage docs](/core/usage).

## Use Components

[glamor](https://github.com/threepointone/glamor) needs to be installed exactly once per application that uses these components:

\`\`\`bash
npm install glamor
\`\`\`

All components support theming and have a peer dependency on the Theme package. Install with:

\`\`\`bash
npm install @pluralsight/ps-design-system-theme
\`\`\`

`}</Doc>
      <P>
        <Badge color={Badge.colors.yellow}>Note</Badge> Some components
        currently have FeatureFlags as another peer dependency. If you see an
        expected warning in npm installs, add this package:
      </P>
      <Doc>{`
\`\`\`bash
npm install @pluralsight/ps-design-system-featureflags
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
)
