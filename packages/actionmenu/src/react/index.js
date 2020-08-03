import { elementOfType } from '@pluralsight/ps-design-system-prop-types'

import PropTypes from 'prop-types'

import ActionMenu from './menu.js'
import Divider from './divider.js'
import Item from './item.js'

import * as vars from '../vars/index.js'

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
  onClose: PropTypes.func
}
ActionMenu.defaultProps = {
  onClose: () => {}
}
export const origins = vars.origins

export default ActionMenu
