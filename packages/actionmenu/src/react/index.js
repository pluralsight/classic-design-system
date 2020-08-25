import PropTypes from 'prop-types'

import { ActionMenu } from './menu.js'
import { Divider } from './divider.js'
import { Item } from './item.js'
import { Ellipsis } from './ellipsis.js'
import { Icon } from './icon.js'

import * as vars from '../vars/index.js'

ActionMenu.Ellipsis = Ellipsis
ActionMenu.Icon = Icon
ActionMenu.Item = Item
ActionMenu.Divider = Divider
ActionMenu.origins = vars.origins
ActionMenu.tagName = vars.tagName
ActionMenu.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.node,
    PropTypes.arrayOf(PropTypes.node)
  ]),
  onClose: PropTypes.func,
  origin: PropTypes.string,
  onClick: PropTypes.func
}
ActionMenu.defaultProps = {
  onClose: () => {},
  origin: vars.origins.topLeft
}

export const origins = vars.origins

export default ActionMenu
