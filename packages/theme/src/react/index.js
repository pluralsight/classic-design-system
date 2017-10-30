import PropTypes from 'prop-types'
import React from 'react'

export const names = { dark: 'dark', light: 'light' }
export const defaultName = names.dark

class Theme extends React.Component {
  getChildContext() {
    return { themeName: this.props.name }
  }
  render() {
    return this.props.children
  }
}
Theme.childContextTypes = {
  themeName: PropTypes.string.isRequired
}
Theme.propTypes = {
  name: PropTypes.string.isRequired
}
Theme.defaultProps = {
  name: defaultName
}

Theme.names = names
Theme.defaultName = defaultName

export default Theme
