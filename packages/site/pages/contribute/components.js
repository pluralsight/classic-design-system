import core from '@pluralsight/ps-design-system-core'

import {
  Chrome,
  Content,
  Doc,
  P,
  PageHeading,
  withServerProps
} from '../../src/ui'

export default withServerProps(_ => (
  <Chrome>
    <Content title="Components">
      <PageHeading>Step-by-step Components</PageHeading>
      <Doc>{`

## Before you start

Please collaborate with the Design System team in [#design-system-dev](slack://channel?team=pluralsight&id=design-system-dev) on the whats, whys, and hows of your component.  The [Contribute Code](/contribute/code) doc has some relevant insights into how and why we collaborate.

## Create your component

1. Go to [\`packages/\` directory](https://github.com/pluralsight/design-system/tree/master/packages) and copy the directory of a recently-built, pre-existing component.  Many of the setup defaults will simply copy over to your new component.
1. Edit the \`package.json\` of the new component.  Change the \`name\` to the appropriate one-word suffix (eg, "actionmenu" for "@pluralsight/ps-design-system-actionmenu").  Set the \`version\` to "1.0.0".  Update the \`description\`.  Remove any unused \`dependencies\`.  Do not add \`peerDependencies\`.
1. Setup Babel dependencies.  Setup \`.babelrc\` Most components are the same in this regard, but there are slight differences.  \`babel-preset-env\`, \`babel-preset-react\`, and \`babel-preset-stage-2\` are standard.  Don't change the stage.
1. Setup storybook dependencies.  Use storybook for component visual and interactive development.
1. Setup test dependencies.  Use [jest](https://facebook.github.io/jest/).  Use snapshot testing for component ui tests.  Use the [StoryShots](https://github.com/storybooks/storybook/tree/master/addons/storyshots) addon that generates snapshots from Storybook stories.  Create other unit tests for major logic.
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
))
