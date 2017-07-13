import React from 'react'
import styleable from 'react-styleable'

import css from './swatch.module.css'

const Swatch = styleable(css)(props =>
  <div
    className={props.dark ? props.css.rootDark : props.css.rootLight}
    style={{ backgroundColor: '#' + props.hex }}
  >
    <div className={props.css.hex}>{props.hex}</div>
    <div className={props.css.var}>psColors{props.var}</div>
  </div>
)

import PropTypes from 'prop-types'
Swatch.propTypes = {
  dark: PropTypes.bool,
  hex: PropTypes.string.isRequired,
  var: PropTypes.string.isRequired
}
Swatch.defaultProps = {
  dark: true
}

export default Swatch
