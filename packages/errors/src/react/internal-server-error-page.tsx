import React, { HTMLAttributes } from 'react'

import ErrorPage from './error-page'

interface InternalServerErrorPageProps
  extends HTMLAttributes<HTMLAnchorElement> {
  href?: string
}

const InternalServerErrorPage: React.FC<InternalServerErrorPageProps> = ({
  href = 'https://help.pluralsight.com/help/contact-us'
}) => (
  <ErrorPage
    iconId="cloud"
    text="Something unexpected has happened. Please try again. If you continue to experience problems, let us know."
    code="500"
    href={href}
  />
)

export default InternalServerErrorPage
