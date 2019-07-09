import { action } from '@storybook/addon-actions'
import addons from '@storybook/addons'
import React from 'react'
import { storiesOf } from '@storybook/react'
import themeDecorator from '@pluralsight/ps-design-system-storybook-addon-theme'

import Breadcrumb from '../index.js'

storiesOf('normal', module)
  .addDecorator(themeDecorator(addons))
  .add('looks great', _ => <Breadcrumb>All the things</Breadcrumb>)

storiesOf('disabled', module)
  .addDecorator(themeDecorator(addons))
  .add('disabled', _ => (
    <Breadcrumb onClick={action('should never click')} disabled>
      Disabled
    </Breadcrumb>
  ))

storiesOf('as link', module)
  .addDecorator(themeDecorator(addons))
  .add('hrefs', _ => (
    <Breadcrumb href="https://duckduckgo.com">Click as link</Breadcrumb>
  ))

storiesOf('with onClick', module)
  .addDecorator(themeDecorator(addons))
  .add('clicks once', _ => (
    <Breadcrumb onClick={action('click count')}>Clicks once</Breadcrumb>
  ))
