import React, { HTMLAttributes } from 'react'

import ErrorPage from './error-page'

interface ForbiddenErrorPageProps extends HTMLAttributes<HTMLAnchorElement> {
  href?: string
}
const ForbiddenErrorPage: React.FC<ForbiddenErrorPageProps> = ({
  href = 'https://help.pluralsight.com/help/contact-us'
}) => (
  <ErrorPage
    iconId="eyeball"
    text="You are not authorized to view this page. Try contacting support or reaching out to your plan administrator."
    code="403"
    href={href}
  />
)

export default ForbiddenErrorPage
