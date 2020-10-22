import React from 'react'
import { storiesOf } from '@storybook/react'

import {
  ForbiddenErrorPage,
  NotFoundErrorPage,
  InternalServerErrorPage,
  ServiceUnavailableErrorPage
} from '../index.js'

storiesOf('pages', module)
  .add(`403`, _ => <ForbiddenErrorPage />)
  .add(`404`, _ => <NotFoundErrorPage />)
  .add(`500`, _ => <InternalServerErrorPage />)
  .add(`503`, _ => <ServiceUnavailableErrorPage />)
