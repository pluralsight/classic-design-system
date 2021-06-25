import Button from '@pluralsight/ps-design-system-button'
import { ValueOf } from '@pluralsight/ps-design-system-util'
import React from 'react'

import ErrorPage from './error-page'
import { codes } from './codes'
import { sizes } from '../vars/index'

const Action = ({
  href = 'https://help.pluralsight.com/help/contact-us'
}: {
  href?: string
}) => <Button href={href}>Contact support</Button>

export default ErrorPage

export const subComponents = ({
  heading,
  caption,
  errorCode
}: {
  heading: string
  caption: string
  errorCode: string
}) => ({
  illustration: <ErrorPage.Illustration />,
  heading: <ErrorPage.Heading>{heading}</ErrorPage.Heading>,
  caption: <ErrorPage.Caption>{caption} </ErrorPage.Caption>,
  errorCode: <ErrorPage.ErrorCode>{errorCode}</ErrorPage.ErrorCode>
})

interface ErrorPageProps
  extends React.DetailedHTMLProps<
    React.AnchorHTMLAttributes<HTMLAnchorElement>,
    HTMLAnchorElement
  > {
  size: ValueOf<typeof ErrorPage.sizes>
}

interface ErrorPageStatics {
  sizes: typeof sizes
}

export const ForbiddenErrorPage: React.FC<ErrorPageProps> &
  ErrorPageStatics = ({ href, size }) => (
  <ErrorPage
    {...subComponents(codes[403])}
    actions={<Action href={href} />}
    size={size}
  />
)

ForbiddenErrorPage.sizes = sizes

export const NotFoundErrorPage: React.FC<ErrorPageProps> & ErrorPageStatics = ({
  href,
  size
}) => (
  <ErrorPage
    {...subComponents(codes[404])}
    actions={<Action href={href} />}
    size={size}
  />
)

NotFoundErrorPage.sizes = sizes

export const InternalServerErrorPage: React.FC<ErrorPageProps> &
  ErrorPageStatics = ({ href, size }) => (
  <ErrorPage
    {...subComponents(codes[500])}
    actions={<Action href={href} />}
    size={size}
  />
)
InternalServerErrorPage.sizes = sizes

export const ServiceUnavailableErrorPage: React.FC<ErrorPageProps> &
  ErrorPageStatics = ({ size }) => (
  <ErrorPage {...subComponents(codes[503])} size={size} />
)
ServiceUnavailableErrorPage.sizes = sizes

export const GatewayTimeoutErrorPage: React.FC<ErrorPageProps> &
  ErrorPageStatics = ({ href, size }) => (
  <ErrorPage
    {...subComponents(codes[504])}
    actions={<Action href={href} />}
    size={size}
  />
)
GatewayTimeoutErrorPage.sizes = sizes
