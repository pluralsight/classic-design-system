import PropTypes from 'prop-types'
import React from 'react'

import * as vars from '../vars'

export { default as withDefaultTheme } from './with-default-theme'

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
  children: PropTypes.any,
  name: PropTypes.oneOf(Object.keys(vars.names)).isRequired
}
Theme.defaultProps = {
  name: vars.defaultName
}

Theme.names = vars.names
Theme.defaultName = vars.defaultName

export const defaultName = vars.defaultName
export const names = vars.names

export default Theme
