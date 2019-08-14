import React from 'react'

import { Chrome, Content, Doc, PageHeading } from '../../src/ui/index.js'

export default _ => (
  <Chrome>
    <Content title="Components">
      <PageHeading>Step-by-step Components</PageHeading>
      <Doc>{`

## Before you start

Please collaborate with the Design System team in [#design-system-help](slack://channel?team=pluralsight&id=design-system-help) on the whats, whys, and hows of your component.  The [Contribute Code](/contribute/code) doc has some relevant insights into how and why we collaborate.

## Create your component

1. From the project root run \`npm run component:create\`
1. Write your component.  Copy conventions you see in other components.  TODO: list some of these conventions somewhere. :)
1. Commit to a feature branch.  (An [example commit](https://github.com/pluralsight/design-system/commit/ec0fc78ecc6ebf9f91056e59c581bfaaee8ee7cd) of a new component)
1. Send up the [Pull Request](https://github.com/pluralsight/design-system/pulls).  Include relevant details in the PR template on Github.

## Create your documentation

1. Once merge is done or imminent, create a site reference page for your component. (An [example commit](https://github.com/pluralsight/design-system/commit/f3dd67ca2dc2e0fc938785cc062ae0b23bee0d62) of a site reference page)
1. Add your new component package dependency to the site's \`packages/site/package.json\`.
1. Change directory into the Design System root directory and run \`npm run bootstrap\` to setup local symlinks for your component's dependency for the site.
1. By creating the \`packages/site/pages/components/mycomponent.js\` file.
1. Add this \`/components/mycomponent\` path to \`packages/site/next.config.js\`.
1. Add this \`/components/mycomponent\` path to the \`packages/site/src/ui/side-nav.js\` UI.
1. In your reference page, implement the PropTypes table and examples for each public API prop on your component.  Use other component reference pages as examples.

There's probably more important and helpful steps that we could include here.  Please add to this list and PR it as you have your own experience creating new components for the Design System.
`}</Doc>
    </Content>
  </Chrome>
)
