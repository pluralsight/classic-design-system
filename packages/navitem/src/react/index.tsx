import React from 'react'
import PropTypes from 'prop-types'

import { alignments } from '../vars/index.js'
import { HorzLayout } from './horz.js'
import { VertLayout } from './vert.js'

const NavItem = React.forwardRef((props, forwardedRef) => {
  return props.alignment === 'vertical' ? (
    <VertLayout ref={forwardedRef} {...props} />
  ) : (
    <HorzLayout ref={forwardedRef} {...props} />
  )
})
NavItem.displayName = 'NavItem'
NavItem.propTypes = {
  alignment: PropTypes.oneOf(Object.keys(alignments).map(k => alignments[k])),
  bar: PropTypes.element,
  children: PropTypes.node,
  href: PropTypes.string,
  icon: PropTypes.element,
  menu: PropTypes.bool,
  selected: PropTypes.bool,
  UNSAFE_stylesFor: PropTypes.object
}
NavItem.defaultProps = {
  alignment: 'horizontal',
  menu: false,
  selected: false
}
NavItem.alignments = alignments

export default NavItem
