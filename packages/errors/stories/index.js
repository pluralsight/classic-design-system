import addons from '@storybook/addons'
import React from 'react'
import { storiesOf } from '@storybook/react'
import themeDecorator from '@pluralsight/ps-design-system-storybook-addon-theme'

import {
  ForbiddenErrorPage,
  NotFoundErrorPage,
  InternalServerErrorPage,
  ServiceUnavailableErrorPage
} from '../react'

const pagesStory = storiesOf('pages', module)
  .addDecorator(themeDecorator(addons))
  .add(`403`, _ => <ForbiddenErrorPage />)
  .add(`404`, _ => <NotFoundErrorPage />)
  .add(`500`, _ => <InternalServerErrorPage />)
  .add(`503`, _ => <ServiceUnavailableErrorPage />)
