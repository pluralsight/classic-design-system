import { HTMLPropsFor } from '@pluralsight/ps-design-system-util'
import React from 'react'

import ErrorPage from './error-page'

const InternalServerErrorPage: React.FC<HTMLPropsFor<'a'>> = ({
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
