import addons from '@storybook/addons'
import core from '@pluralsight/ps-design-system-core'
import React from 'react'
import { storiesOf } from '@storybook/react'
import themeDecorator from '@pluralsight/ps-design-system-storybook-addon-theme'

import { PageHeadingLayout } from '../react'

const pageHeadingLayoutStory = storiesOf('default', module)
  .addDecorator(themeDecorator(addons))
  .add('page header', _ => (
    <PageHeadingLayout heading={<h2>My Page</h2>}>My content</PageHeadingLayout>
  ))
