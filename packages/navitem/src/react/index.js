import React from 'react'
import PropTypes from 'prop-types'

import { alignments } from '../vars/index.js'
import { Bar, Button, Container } from './common.js'
import { HorzLayout } from './horz.js'
import { VertLayout } from './vert.js'

const NavItem = React.forwardRef((props, forwardedRef) => {
  return (
    <Container>
      <Button {...props} ref={forwardedRef}>
        {props.alignment === 'vertical' ? (
          <VertLayout {...props} />
        ) : (
          <HorzLayout {...props} />
        )}
      </Button>
      <Bar {...props} />
    </Container>
  )
})
NavItem.displayName = 'NavItem'
NavItem.propTypes = {
  alignment: PropTypes.oneOf(Object.keys(alignments).map(k => alignments[k])),
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
