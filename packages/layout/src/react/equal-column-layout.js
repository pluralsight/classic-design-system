import * as glamor from 'glamor'
import PropTypes from 'prop-types'
import React from 'react'

import { EqualColumnLayout as vars } from '../vars'
import { EqualColumnLayout as css } from '../css'

const styleLayout = props => glamor.css(css['.psds-equal-column-layout'])

const styleColumn = props =>
  glamor.css(
    css['.psds-equal-column-layout__column'],
    css[`.psds-equal-column-layout__column--count-${props.count}`],
    {
      '@media (min-width: 769px)':
        css['@media (min-width: 769px)'][
          `.psds-equal-column-layout__column--count-${props.count}`
        ]
    }
  )

const rmNonHtmlProps = props => {
  const { count, ...rest } = props
  return rest
}

const EqualColumnLayout = props => (
  <div {...styleLayout(props)} {...rmNonHtmlProps(props)}>
    {React.Children.map(props.children, child => (
      <div {...styleColumn(props)}>{child}</div>
    ))}
  </div>
)

EqualColumnLayout.displayName = 'EqualColumnLayout'

EqualColumnLayout.counts = vars.counts

EqualColumnLayout.propTypes = {
  count: PropTypes.oneOf(Object.keys(vars.counts).map(key => vars.counts[key]))
}
EqualColumnLayout.defaultProps = {
  count: vars.counts.four
}

export const counts = vars.counts
export default EqualColumnLayout
