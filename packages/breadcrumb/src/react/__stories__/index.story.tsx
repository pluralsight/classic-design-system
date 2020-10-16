import { action } from '@storybook/addon-actions'
import { storiesOf } from '@storybook/react'
import React from 'react'

import Breadcrumb from '..'

storiesOf('normal', module).add('looks great', () => (
  <Breadcrumb>All the things</Breadcrumb>
))

storiesOf('disabled', module).add('disabled', () => (
  <Breadcrumb onClick={action('should never click')} disabled>
    Disabled
  </Breadcrumb>
))

storiesOf('as link', module).add('hrefs', () => (
  <Breadcrumb href="https://duckduckgo.com">Click as link</Breadcrumb>
))

storiesOf('with onClick', module).add('clicks once', () => (
  <Breadcrumb onClick={action('click count')}>Clicks once</Breadcrumb>
))
