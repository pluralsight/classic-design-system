// NOTE: proptypes linking Item is done in index.js to avoid circular menu-item dependency
/* eslint react/prop-types: 0 */

import { css, compose } from 'glamor'
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

const styles = ({ origin }) =>
  compose(
    css(stylesheet['.psds-actionmenu']),
    css(stylesheet[`.psds-actionmenu--origin-${origin}`]),
    css(stylesheet['.psds-actionmenu__animation']({ slide }))
  )
export const ActionMenuContext = createContext()

export const ActionMenu = React.forwardRef(
  ({ onClick, onClose, children, origin, ...props }, forwardedRef) => {
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
        {...styles({ origin })}
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

ActionMenu.displayName = 'ActionMenu.Menu'
