import { css } from 'glamor'
import filterReactProps from '@pluralsight/ps-design-system-filter-react-props'
import PropTypes from 'prop-types'
import React from 'react'

import stylesheet from '../css/index.js'

const styles = {
  divider: () => css(stylesheet['.psds-actionmenu__divider'])
}

const Divider = props => {
  React.useEffect(() => {
    if (props.isActive) props._onDividerFocus()
  })

  return <div {...styles.divider(props)} {...filterReactProps(props)} />
}
Divider.propTypes = {
  _onDividerFocus: PropTypes.func,
  isActive: PropTypes.bool
}
Divider.defaultProps = {
  tabIndex: '-1'
}

export default Divider
