import { css } from 'glamor'
import PropTypes from 'prop-types'
import React, { Children, isValidElement } from 'react'

import stylesheet from '../css/index.js'

const styles = {
  layout: _ => css(stylesheet['.psds-form-vertical-layout']),
  child: _ => css(stylesheet['.psds-form-vertical-layout__child'])
}

const VerticalLayout = props => {
  const children = Children.toArray(props.children).filter(child =>
    isValidElement(child)
  )

  return (
    <div {...styles.layout(props)}>
      {children.map((child, i) => (
        <div key={i} {...styles.child(props)}>
          {React.cloneElement(child, {
            style: { ...child.props.style, width: '100%', maxWidth: 'none' }
          })}
        </div>
      ))}
    </div>
  )
}

VerticalLayout.displayName = 'VerticalLayout'
VerticalLayout.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.element,
    PropTypes.arrayOf(PropTypes.element)
  ])
}

export default VerticalLayout
