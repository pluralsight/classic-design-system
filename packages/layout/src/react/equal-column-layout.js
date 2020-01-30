import { compose, css, media } from 'glamor'
import PropTypes from 'prop-types'
import React from 'react'

import { equalColumnLayout as vars } from '../vars/index.js'
import { equalColumnLayoutCSS as stylesheet } from '../css/index.js'

const styleLayout = props => css(stylesheet['.psds-equal-column-layout'])

const styleColumn = props => {
  const label = 'psds-equal-column-layout__column'
  const count = `${label}--count-${props.count}`

  return compose(
    css(stylesheet[`.${label}`]),
    css(stylesheet[`.${count}`]),

    media(
      '(min-width: 769px)',
      css(stylesheet['@media (min-width: 769px)'][`.${count}`])
    )
  )
}

const rmNonHtmlProps = props => {
  const { count, ...rest } = props
  return rest
}

function EqualColumnLayout(props) {
  const useCustomMarkup = React.Children.count(props.children) === 1
  const parentProps = {
    ...styleLayout(props),
    ...rmNonHtmlProps(props)
  }
  const children = React.Children.map(
    useCustomMarkup ? props.children.props.children : props.children,
    child => React.cloneElement(child, styleColumn(props))
  )
  return useCustomMarkup ? (
    React.cloneElement(props.children, parentProps, children)
  ) : (
    <div {...parentProps}>{children}</div>
  )
}
EqualColumnLayout.displayName = 'EqualColumnLayout'
EqualColumnLayout.counts = vars.counts
EqualColumnLayout.propTypes = {
  children: PropTypes.any,
  count: PropTypes.oneOf(Object.keys(vars.counts).map(key => vars.counts[key]))
}
EqualColumnLayout.defaultProps = {
  count: vars.counts.four
}

export const counts = vars.counts
export default EqualColumnLayout
