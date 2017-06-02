import React from 'react'
import styleable from 'react-styleable'

import css from './vert-gradient.module.css'

const VertGradient = styleable(css)(props =>
  <div
    className={props.css.root}
    style={{
      background: `linear-gradient(to bottom, #${props.start}, #${props.stop})`
    }}
  >
    <div className={props.css.start}>{props.start}</div>
    <div className={props.css.var}>psColorsGradientVert</div>
    <div className={props.css.stop}>{props.stop}</div>
  </div>
)

import PropTypes from 'prop-types'
VertGradient.propTypes = {
  start: PropTypes.string.isRequired,
  stop: PropTypes.string.isRequired
}

export default VertGradient
