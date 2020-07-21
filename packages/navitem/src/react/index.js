import React from 'react'
import PropTypes from 'prop-types'

import { alignments } from '../vars/index.js'
import { HorzLayout } from './horz.js'
import { VertLayout } from './vert.js'

const NavItem = React.forwardRef((props, forwardedRef) => {
  const { alignment, ...rest } = props
  return props.alignment === 'vertical' ? (
    <VertLayout ref={forwardedRef} {...rest} />
  ) : (
    <HorzLayout ref={forwardedRef} {...rest} />
  )
})
NavItem.displayName = 'NavItem'
NavItem.propTypes = {
  alignment: PropTypes.oneOf(Object.keys(alignments).map(k => alignments[k])),
  bar: PropTypes.element,
  children: PropTypes.node,
  href: PropTypes.string,
  icon: PropTypes.element,
  menu: PropTypes.node,
  selected: PropTypes.bool
}
NavItem.defaultProps = {
  alignment: 'horizontal',
  selected: false
}
NavItem.alignments = alignments

export default NavItem
