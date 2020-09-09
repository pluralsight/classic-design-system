// NOTE: proptypes linking Item is done in index.js to avoid circular menu-item dependency
/* eslint react/prop-types: 0 */

import { css, compose } from 'glamor'
import filterReactProps from '@pluralsight/ps-design-system-filter-react-props'
import React, { createContext, useImperativeHandle } from 'react'
import {
  useMenuRef,
  handleMenuKeyDownEvents,
  handleMenuKeyUpEvents,
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
    const fallbackRef = React.useRef()
    const ref = forwardedRef || fallbackRef
    useCloseOnDocumentEvents(ref, onClose)

    const handleKeyDown = e => {
      handleMenuKeyDownEvents(e)
      if (e.key === 'Escape') {
        onClose()
      }
    }

    return (
      <ul
        {...styles({ origin })}
        ref={ref}
        onKeyDown={handleKeyDown}
        onKeyUp={handleMenuKeyUpEvents}
        role="menu"
        {...filterReactProps(props)}
      >
        <ActionMenuContext.Provider
          value={{ onClickContext: onClick, onClose, originContext: origin }}
        >
          {children}
        </ActionMenuContext.Provider>
      </ul>
    )
  }
)

ActionMenu.displayName = 'ActionMenu.Menu'
