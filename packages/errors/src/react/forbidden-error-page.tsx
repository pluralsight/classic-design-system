import { HTMLPropsFor } from '@pluralsight/ps-design-system-util'
import React from 'react'

import ErrorPage from './error-page'

const ForbiddenErrorPage: React.FC<HTMLPropsFor<'a'>> = ({
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
