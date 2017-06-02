import React from 'react'
import styleable from 'react-styleable'

import css from './horz-gradient.module.css'

const VertGradient = styleable(css)(props =>
  <div
    className={props.css.root}
    style={{
      background: `linear-gradient(to right, #${props.start}, #${props.stop})`
    }}
  >
    <div>
      <div className={props.css.start}>{props.start}</div>
      <div className={props.css.var}>psColorsGradientHorz</div>
    </div>
    <div className={props.css.stop}>{props.stop}</div>
  </div>
)

import PropTypes from 'prop-types'
VertGradient.propTypes = {
  start: PropTypes.string.isRequired,
  stop: PropTypes.string.isRequired
}

export default VertGradient
