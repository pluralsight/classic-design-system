import React from 'react'
import PropTypes from 'prop-types'

import { Bar, Button, Caret, Container } from './common.js'
import { HorzIcon, HorzLabel, HorzLayout } from './horz.js'

const NavItem = React.forwardRef((props, forwardedRef) => {
  return (
    <Container>
      <Button {...props} ref={forwardedRef}>
        <HorzLayout>
          <HorzIcon {...props} />
          <HorzLabel>{props.children}</HorzLabel>
          <Caret {...props} />
        </HorzLayout>
      </Button>
      <Bar {...props} />
    </Container>
  )
})
NavItem.displayName = 'NavItem'
NavItem.propTypes = {
  children: PropTypes.node,
  href: PropTypes.string,
  icon: PropTypes.element,
  menu: PropTypes.node,
  selected: PropTypes.bool
}
NavItem.defaultProps = {
  selected: false
}

export default NavItem
