import { css } from 'glamor'
import { vars as iconVars } from '@pluralsight/ps-design-system-icon'
import PropTypes from 'prop-types'
import React from 'react'

import stylesheet from '../css/index.js'

const styles = {
  itemIcon: () => css(stylesheet['.psds-actionmenu__item__icon'])
}

const ItemIcon = props => {
  return (
    <div {...styles.itemIcon(props)}>
      {React.cloneElement(props.children, { size: iconVars.sizes.medium })}
    </div>
  )
}
ItemIcon.propTypes = {
  // TODO: elementOfType
  children: PropTypes.element // Icon
}

export default ItemIcon
