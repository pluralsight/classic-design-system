import PropTypes from 'prop-types'

import { ActionMenu } from './menu.js'
import { Divider } from './divider.js'
import { Item } from './item.js'
import { Ellipsis } from './ellipsis.js'
import { Icon } from './icon.js'
import { useMenuRef } from '@pluralsight/ps-design-system-util'
import * as vars from '../vars/index.js'

ActionMenu.Ellipsis = Ellipsis
ActionMenu.Icon = Icon
ActionMenu.Item = Item
ActionMenu.Divider = Divider
ActionMenu.origins = vars.origins
ActionMenu.tagName = vars.tagName
ActionMenu.defaultProps = {
  onClose: () => {},
  origin: vars.origins.topLeft
}
ActionMenu.useMenuRef = useMenuRef
export const origins = vars.origins

export default ActionMenu
