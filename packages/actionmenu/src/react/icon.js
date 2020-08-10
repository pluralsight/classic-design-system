import { css } from 'glamor'
import React from 'react'
import PropTypes from 'prop-types'
import stylesheet from '../css/index.js'
import filterReactProps from '@pluralsight/ps-design-system-filter-react-props'

const styles = ({ marginLeft, marginRight }) =>
  css(
    stylesheet[`.psds-actionmenu__icon`],
    marginRight && stylesheet[`.psds-actionmenu__icon-right`],
    marginLeft && stylesheet[`.psds-actionmenu__icon-left`]
  )

export const Icon = ({ marginLeft, marginRight, ...props }) => (
  <span {...filterReactProps(props)} {...styles({ marginLeft, marginRight })} />
)

Icon.displayName = 'ActionMenu.Icon'
Icon.propTypes = {
  marginRight: PropTypes.bool,
  marginLeft: PropTypes.bool
}
