import { HTMLPropsFor } from '@pluralsight/ps-design-system-util'
import React from 'react'

import ErrorPage from './error-page'

interface NotFoundErrorPageProps extends HTMLPropsFor<'div'> {
  action?: string
}

const NotFoundErrorPage: React.FC<NotFoundErrorPageProps> = ({
  action = '/search'
}) => (
  <ErrorPage
    iconId="spyglass"
    text="Sorry, the page you are looking for cannot be found. Try checking the URL for errors or search our library."
    code="404"
    action={action}
  />
)

export default NotFoundErrorPage
