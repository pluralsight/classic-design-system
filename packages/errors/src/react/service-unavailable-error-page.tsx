import React from 'react'

import ErrorPage from './error-page'

const ServiceUnavailableErrorPage: React.FC = () => (
  <ErrorPage
    iconId="cloud"
    text="Unfortunately the site is currently unavailable. We expect everything back in order shortly. Sorry for the inconvenience."
    code="503"
  />
)

export default ServiceUnavailableErrorPage
