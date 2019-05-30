import PropTypes from 'prop-types'
import React from 'react'

import ErrorPage from './error-page.js'

const ForbiddenErrorPage = props => (
  <ErrorPage
    iconId="eyeball"
    text="You are not authorized to view this page. Try contacting support or reaching out to your plan administrator."
    code="403"
    href={props.href || 'https://help.pluralsight.com/help/contact-us'}
  />
)
ForbiddenErrorPage.propTypes = {
  href: PropTypes.string
}

export default ForbiddenErrorPage
