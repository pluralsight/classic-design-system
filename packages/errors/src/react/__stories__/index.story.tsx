import React from 'react'
import { storiesOf } from '@storybook/react'

import {
  ForbiddenErrorPage,
  NotFoundErrorPage,
  InternalServerErrorPage,
  ServiceUnavailableErrorPage
} from '..'

storiesOf('pages', module)
  .add(`403`, () => <ForbiddenErrorPage />)
  .add(`404`, () => <NotFoundErrorPage />)
  .add(`500`, () => <InternalServerErrorPage />)
  .add(`503`, () => <ServiceUnavailableErrorPage />)
