import { action } from '@storybook/addon-actions'
import addons from '@storybook/addons'
import core from '@pluralsight/ps-design-system-core'
import * as glamor from 'glamor'
import Icon from '@pluralsight/ps-design-system-icon/react'
import React from 'react'
import { storiesOf } from '@storybook/react'
import Theme from '@pluralsight/ps-design-system-theme/react'
import themeDecorator from '@pluralsight/ps-design-system-storybook-addon-theme'

import Breadcrumb from '../react'
const normalStory = storiesOf('normal', module)
  .addDecorator(themeDecorator(addons))
  .add('looks great', _ => <Breadcrumb>All the things</Breadcrumb>)

const disabledStory = storiesOf('disabled', module)
  .addDecorator(themeDecorator(addons))
  .add('disabled', _ => (
    <Breadcrumb onClick={action('should never click')} disabled>
      Disabled
    </Breadcrumb>
  ))

const asLink = storiesOf('as link', module)
  .addDecorator(themeDecorator(addons))
  .add('hrefs', _ => (
    <Breadcrumb href="https://duckduckgo.com">Click as link</Breadcrumb>
  ))

const onClickExample = storiesOf('with onClick', module)
  .addDecorator(themeDecorator(addons))
  .add('clicks once', _ => (
    <Breadcrumb
      onClick={action('click count')}
      icon={<Icon id={Icon.ids.check} />}
    >
      Clicks once
    </Breadcrumb>
  ))
