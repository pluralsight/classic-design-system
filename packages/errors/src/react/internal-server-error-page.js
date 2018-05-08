import PropTypes from 'prop-types'
import React from 'react'

import ErrorPage from './error-page'

const InternalServerErrorPage = props => (
  <ErrorPage
    iconId="cloud"
    text="Something unexpected has happened. Please try again. If you continue to experience problems, let us know."
    code="500"
    href={props.href || 'https://help.pluralsight.com/help/contact-us'}
  />
)
InternalServerErrorPage.propTypes = {
  href: PropTypes.string
}

export default InternalServerErrorPage
