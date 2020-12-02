import React from 'react'
import { storiesOf } from '@storybook/react'

import ErrorPage, {
  ForbiddenErrorPage,
  NotFoundErrorPage,
  InternalServerErrorPage,
  ServiceUnavailableErrorPage,
  GatewayTimeoutErrorPage,
} from '..'

const pages = storiesOf('pages', module)

Object.values(ErrorPage.sizes).forEach(size => {
  pages.add(`403: ${size}`, () => (
    <ForbiddenErrorPage size={size} />
  ))
})
Object.values(ErrorPage.sizes).forEach(size => {
  pages.add(`404: ${size}`, () => (
    <NotFoundErrorPage size={size} />
  ))
})
Object.values(ErrorPage.sizes).forEach(size => {
  pages.add(`500: ${size}`, () => (
    <InternalServerErrorPage size={size} />
  ))
})
Object.values(ErrorPage.sizes).forEach(size => {
  pages.add(`503: ${size}`, () => (
    <ServiceUnavailableErrorPage size={size} />
  ))
})
Object.values(ErrorPage.sizes).forEach(size => {
  pages.add(`504: ${size}`, () => (
    <GatewayTimeoutErrorPage size={size} />
  ))
})
