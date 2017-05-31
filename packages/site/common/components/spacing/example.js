import React from 'react'
import styleable from 'react-styleable'

import css from './example.module.css'
import util from '@pluralsight/ps-design-system-util'

const dimension = side =>
  side === 'left' || side === 'right' ? 'width' : 'height'

const renderSingleLine = (props, side, i = -1) => (
  <div
    style={{ [dimension(side)]: props.width }}
    key={i}
    className={props.css['line' + util.string.capitalize(side)]}
  />
)

const renderAllLines = props =>
  ['top', 'right', 'bottom', 'left'].map(renderSingleLine.bind(this, props))

const renderLines = props =>
  props.sides === 'all'
    ? renderAllLines(props)
    : renderSingleLine(props, props.side)

const renderBorder = props => (
  <div style={{ borderWidth: props.width }} className={props.css.border} />
)

const renderLabel = props =>
  props.label
    ? <div className={props.css.label}>
        {`${props.width}px - ${props.label}`}
      </div>
    : null

const Example = styleable(css)(props => (
  <div className={props.css.root}>
    <div className={props.css.box}>
      {renderBorder(props)}
      {renderLines(props)}
    </div>
    {renderLabel(props)}
  </div>
))

import PropTypes from 'prop-types'
Example.propTypes = {
  sides: PropTypes.oneOf(['all', 'top', 'right', 'bottom', 'left']),
  width: PropTypes.number.isRequired
}
Example.defaultProps = {
  sides: 'all'
}

export default Example
