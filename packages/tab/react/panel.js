import React from 'react'
import styleable from 'react-styleable'
import util from '@pluralsight/ps-design-system-util'

export const propDefs = {
  labelledBy: {
    type: 'string',
    required: true
  }
}

const rmSystemProps = props => {
  const { css, ...rest } = props
  return rest
}

const Panel = props =>
  <div role="tabpanel" aria-labelledby={props.label} {...rmSystemProps(props)}>
    {props.children}
  </div>

Panel.propTypes = util.propDefs.generatePropTypes(propDefs)
Panel.defaultProps = util.propDefs.generateDefaultProps(propDefs)

export default styleable()(Panel)
