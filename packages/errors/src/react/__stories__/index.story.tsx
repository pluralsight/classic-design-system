import Button from '@pluralsight/ps-design-system-button'
import { Meta, Story } from '@storybook/react/types-6-0'
import { storiesOf } from '@storybook/react'
import React from 'react'

import ErrorPage, {
  ForbiddenErrorPage,
  NotFoundErrorPage,
  InternalServerErrorPage,
  ServiceUnavailableErrorPage,
  GatewayTimeoutErrorPage
} from '..'

export default {
  title: 'Components/Errors',
  component: ErrorPage
} as Meta

export const Sizes: Story = () => (
  <div
    style={{
      display: 'grid',
      gridTemplateColumns: '1fr 1fr',
      gap: '32px',
      justifyItems: 'center'
    }}
  >
    {Object.values(ErrorPage.sizes).map(size => (
      <h2 key={size}>{size}</h2>
    ))}
    {[
      ForbiddenErrorPage,
      NotFoundErrorPage,
      InternalServerErrorPage,
      ServiceUnavailableErrorPage,
      GatewayTimeoutErrorPage
    ].map((Page, i) =>
      Object.values(ErrorPage.sizes).map(size => (
        <Page size={size} key={i + size} />
      ))
    )}
  </div>
)

export const CustomErrorPage: Story = () => (
  <div
    style={{
      display: 'grid',
      gridTemplateColumns: '1fr 1fr',
      gap: '32px',
      justifyItems: 'center'
    }}
  >
    {Object.values(ErrorPage.sizes).map(size => (
      <ErrorPage
        key={size}
        illustration={<ErrorPage.Illustration />}
        heading={<ErrorPage.Heading>Heading goes here</ErrorPage.Heading>}
        caption={<ErrorPage.Caption>Error caption goes here</ErrorPage.Caption>}
        errorCode={<ErrorPage.ErrorCode>error code: ### </ErrorPage.ErrorCode>}
        actions={
          <Button href="https://help.pluralsight.com/help/contact-us">
            Contact support
          </Button>
        }
        size={size}
      />
    ))}
  </div>
)
