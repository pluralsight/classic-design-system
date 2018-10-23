import * as glamor from 'glamor'
import React from 'react'
import PropTypes from 'prop-types'

import css, { BASE_CLASS_NAME } from '../css'
import * as vars from '../vars'

import withDefaultTheme from './with-default-theme'

const styles = {
  halo: () => glamor.css({ ...css[BASE_CLASS_NAME] })
}

const Halo = props => {
  const { appearance, themeName, ...filteredProps } = props

  return <div {...styles.halo(props)} {...filteredProps} />
}

Halo.appearances = vars.appearances

Halo.defaultProps = {
  appearance: vars.appearances.primary
}

Halo.propTypes = {
  appearance: PropTypes.oneOf(Object.keys(vars.appearances)),
  themeName: PropTypes.string
}

export default withDefaultTheme(Halo)
