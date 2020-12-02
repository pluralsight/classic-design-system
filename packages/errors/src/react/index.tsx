import React from 'react'
import Button from '@pluralsight/ps-design-system-button'
import { HTMLPropsFor, ValueOf } from '@pluralsight/ps-design-system-util'
import { codes, illustrationNames } from '../vars'
import ErrorPage from './error-page'

const Action: React.FC<HTMLPropsFor<'a'>> = ({
  href = 'https://help.pluralsight.com/help/contact-us'
}) => <Button href={href}>Contact support</Button>

export default ErrorPage

export const subComponents = ({
  illustration,
  heading,
  caption,
  errorCode
}: {
  illustration: ValueOf<typeof illustrationNames>
  heading: string
  caption: string
  errorCode: string
}) => ({
  illustration: <ErrorPage.Illustration name={illustration} />,
  heading: <ErrorPage.Heading>{heading}</ErrorPage.Heading>,
  caption: <ErrorPage.Caption>{caption} </ErrorPage.Caption>,
  errorCode: <ErrorPage.ErrorCode>{errorCode}</ErrorPage.ErrorCode>
})

interface ErrorPageProps extends HTMLPropsFor<'a'> {
  size: ValueOf<typeof ErrorPage.sizes>
}

export const ForbiddenErrorPage: React.FC<ErrorPageProps> = ({
  href,
  size
}) => (
  <ErrorPage
    {...subComponents(codes[403])}
    actions={<Action href={href} />}
    size={size}
  />
)

export const NotFoundErrorPage: React.FC<ErrorPageProps> = ({ href, size }) => (
  <ErrorPage
    {...subComponents(codes[404])}
    actions={<Action href={href} />}
    size={size}
  />
)

export const InternalServerErrorPage: React.FC<ErrorPageProps> = ({
  href,
  size
}) => (
  <ErrorPage
    {...subComponents(codes[500])}
    actions={<Action href={href} />}
    size={size}
  />
)

export const ServiceUnavailableErrorPage: React.FC<ErrorPageProps> = ({
  size
}) => <ErrorPage {...subComponents(codes[503])} size={size} />

export const GatewayTimeoutErrorPage: React.FC<ErrorPageProps> = ({
  href,
  size
}) => (
  <ErrorPage
    {...subComponents(codes[504])}
    actions={<Action href={href} />}
    size={size}
  />
)
