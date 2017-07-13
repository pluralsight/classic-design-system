import classnames from 'classnames'
import React from 'react'
import styleable from 'react-styleable'

import css from './example.module.css'
import util from '@pluralsight/ps-design-system-util'

const dimension = side =>
  side === 'left' || side === 'right' ? 'width' : 'height'

const renderSingleLine = (props, side, i) => {
  const className = classnames({
    [props.css.lineSingleSide]: props.sides !== 'all',
    [props.css['line' + util.string.capitalize(side)]]: true
  })

  return (
    <div
      style={{ [dimension(side)]: props.width }}
      key={i}
      className={className}
    />
  )
}

const renderAllLines = props =>
  ['top', 'right', 'bottom', 'left'].map(renderSingleLine.bind(this, props))

const renderLines = props =>
  props.sides === 'all'
    ? renderAllLines(props)
    : renderSingleLine(props, props.sides)

const renderBorder = props =>
  props.sides === 'all'
    ? <div style={{ borderWidth: props.width }} className={props.css.border} />
    : null

const renderLabel = props =>
  props.label
    ? <div className={props.css.label}>
        {`${props.width}px - ${props.label}`}
      </div>
    : null

const Example = styleable(css)(props =>
  <div className={props.css.root}>
    <div className={props.css.box}>
      {renderBorder(props)}
      {renderLines(props)}
    </div>
    {renderLabel(props)}
  </div>
)

import PropTypes from 'prop-types'
Example.propTypes = {
  sides: PropTypes.oneOf(['all', 'top', 'right', 'bottom', 'left']),
  width: PropTypes.number.isRequired
}
Example.defaultProps = {
  sides: 'all'
}

export default Example
