import { elementOfType } from '@pluralsight/ps-design-system-prop-types'
import PropTypes from 'prop-types'

import ActionMenu from './menu.js'
import Divider from './divider.js'
import Item from './item.js'
import Overlay from './overlay.js'
import * as vars from '../vars/index.js'

ActionMenu.Item = Item
ActionMenu.Divider = Divider
ActionMenu.Overlay = Overlay
ActionMenu.origins = vars.origins

ActionMenu.displayName = 'ActionMenu'

ActionMenu.propTypes = {
  children: PropTypes.oneOfType([
    elementOfType(Item),
    elementOfType(Divider),
    PropTypes.arrayOf(
      PropTypes.oneOfType([elementOfType(Item), elementOfType(Divider)])
    )
  ]),
  isKeyboarding: PropTypes.bool,
  onClose: PropTypes.func,
  onChange: PropTypes.func,
  origin: PropTypes.oneOf(Object.keys(vars.origins).map(k => vars.origins[k])),
  shouldFocusOnMount: PropTypes.bool
}
ActionMenu.defaultProps = {
  isKeyboarding: false,
  origin: vars.origins.topLeft,
  shouldFocusOnMount: true
}

export const origins = vars.origins

export default ActionMenu
