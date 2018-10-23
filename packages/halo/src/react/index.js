import * as glamor from 'glamor'
import PropTypes from 'prop-types'
import React from 'react'

import css, { BASE_CLASS_NAME } from '../css'
import * as vars from '../vars'

import withDefaultTheme from './with-default-theme'

const styles = {
  halo: props => {
    return glamor.css(
      css[BASE_CLASS_NAME],
      css[BASE_CLASS_NAME + `--${props.themeName}`],
      css[BASE_CLASS_NAME + `--${props.appearance}`],
      props.error && css[BASE_CLASS_NAME + '--error']
    )
  }
}

const Halo = props => {
  const { appearance, error, themeName, ...filteredProps } = props
  const classes = [String(styles.halo(props)), props.className].join(' ').trim()

  return <div {...filteredProps} className={classes} />
}

Halo.appearances = vars.appearances

Halo.defaultProps = {
  appearance: vars.appearances.default,
  className: ''
}

Halo.propTypes = {
  appearance: PropTypes.oneOf(Object.values(vars.appearances)),
  className: PropTypes.string,
  themeName: PropTypes.string
}

export default withDefaultTheme(Halo)
