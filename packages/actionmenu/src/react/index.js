import { elementOfType } from '@pluralsight/ps-design-system-prop-types'

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
ActionMenu.propTypes = {
  children: PropTypes.oneOfType([
    elementOfType(Item),
    elementOfType(Divider),
    PropTypes.arrayOf(
      PropTypes.oneOfType([elementOfType(Item), elementOfType(Divider)])
    )
  ]),
  onClose: PropTypes.func,
  origin: PropTypes.string
}
ActionMenu.defaultProps = {
  onClose: () => {},
  origin: vars.origins.topRight
}

export const origins = vars.origins

export default ActionMenu
