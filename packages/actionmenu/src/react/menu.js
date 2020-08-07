// NOTE: proptypes linking Item is done in index.js to avoid circular menu-item dependency
/* eslint react/prop-types: 0 */

import { css } from 'glamor'
import filterReactProps from '@pluralsight/ps-design-system-filter-react-props'
import React, { useImperativeHandle, createContext } from 'react'
import {
  useMenuRef,
  handleMenuKeyEvents,
  useCloseOnDocumentEvents
} from '@pluralsight/ps-design-system-util'
import stylesheet from '../css/index.js'

const slide = css.keyframes(
  stylesheet['@keyframes psds-actionmenu__keyframes__slide']
)

const styles = {
  menu: _ => css(stylesheet['.psds-actionmenu']({ slide }))
}
export const ActionMenuContext = createContext()

const ActionMenu = React.forwardRef(
  ({ onClick, onClose, children, ...props }, forwardedRef) => {
    const ref = useMenuRef()
    useImperativeHandle(forwardedRef, () => ref.current)
    useCloseOnDocumentEvents(ref, onClose)
    const handleKeyUp = e => {
      handleMenuKeyEvents(e)
      if (e.key === 'Escape') {
        onClose()
      }
    }
    return (
      <ul
        {...styles.menu(props)}
        {...filterReactProps(props)}
        ref={ref}
        onKeyUp={handleKeyUp}
        role="menu"
      >
        <ActionMenuContext.Provider
          value={{ onClickContext: onClick, onClose }}
        >
          {children}
        </ActionMenuContext.Provider>
      </ul>
    )
  }
)

ActionMenu.displayName = 'ActionMenu'

export default ActionMenu
