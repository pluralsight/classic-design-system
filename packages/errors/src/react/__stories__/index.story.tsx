import React from 'react'
import { storiesOf } from '@storybook/react'
import Button from '@pluralsight/ps-design-system-button'

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
Object.values(ErrorPage.sizes).forEach(size => {
  pages.add(`Custom: ${size}`, ()=> (
    <ErrorPage
    illustration={ <ErrorPage.Illustration /> }
    heading={ <ErrorPage.Heading>Heading goes here</ErrorPage.Heading> }
    caption={ <ErrorPage.Caption>Error caption goes here</ErrorPage.Caption> }
    errorCode={ <ErrorPage.ErrorCode>error code: ### </ErrorPage.ErrorCode>}
    actions={<Button href={'https://help.pluralsight.com/help/contact-us'}>Contact support</Button>}
      size={size}
    />
  ))
})
