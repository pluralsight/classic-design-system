import PropTypes from 'prop-types'
import React from 'react'

import ErrorPage from './error-page'

const NotFoundErrorPage = props => (
  <ErrorPage
    iconId="spyglass"
    text="Sorry, the page you are looking for cannot be found. Try checking the URL for errors or search our library."
    code="404"
    action={props.action || '/library/search'}
  />
)
NotFoundErrorPage.propTypes = {
  onSubmit: PropTypes.func
}

export default NotFoundErrorPage
