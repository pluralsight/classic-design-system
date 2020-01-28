import { css } from 'glamor'
import PropTypes from 'prop-types'
import React from 'react'

import stylesheet from '../css/index.js'

const styles = {
  layout: _ => css(stylesheet['.psds-form-vertical-layout']),
  child: _ => css(stylesheet['.psds-form-vertical-layout__child'])
}

const VerticalLayout = (props, context) => (
  <div {...styles.layout(props)}>
    {React.Children.map(props.children, (child, i) => (
      <div {...styles.child(props)}>
        {React.cloneElement(child, {
          style: { ...child.props.style, width: '100%', maxWidth: 'none' }
        })}
      </div>
    ))}
  </div>
)
VerticalLayout.displayName = 'VerticalLayout'
VerticalLayout.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.element,
    PropTypes.arrayOf(PropTypes.element)
  ])
}

export default VerticalLayout
