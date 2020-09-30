import React, { HTMLAttributes } from 'react'
import { css, compose, keyframes } from 'glamor'
import {
  useMenuRef,
  handleMenuKeyDownEvents,
  handleMenuKeyUpEvents,
  useCloseOnDocumentEvents,
  RefForwardingComponent
} from '@pluralsight/ps-design-system-util'

import { ActionMenuContext } from './context'
import { Divider } from './divider'
import { Item } from './item'
import { Ellipsis } from './ellipsis'
import { Icon } from './icon'
import stylesheet from '../css/index'
import * as vars from '../vars/index'

const slide = keyframes(
  stylesheet['@keyframes psds-actionmenu__keyframes__slide']
)

const styles = ({ origin }) =>
  compose(
    css(stylesheet['.psds-actionmenu']),
    css(stylesheet[`.psds-actionmenu--origin-${origin}`]),
    css(stylesheet['.psds-actionmenu__animation']({ slide }))
  )

interface ActionMenuStatics {
  Divider: typeof Divider
  Item: typeof Item
  Ellipsis: typeof Ellipsis
  Icon: typeof Icon
  origins: typeof vars.origins
  tagName: typeof vars.tagName
  useMenuRef: typeof useMenuRef
}

interface Props extends HTMLAttributes<HTMLUListElement> {
  children: React.ReactNode | Array<React.ReactNode>
  onClose: () => void
  origin: string
  onClick: (Event) => void
}
interface ActionMenuComponent
  extends RefForwardingComponent<Props, HTMLUListElement, ActionMenuStatics> {}

export const ActionMenu = React.forwardRef<HTMLUListElement, Props>(
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
        {...props}
      >
        <ActionMenuContext.Provider
          value={{ onClickContext: onClick, onClose, originContext: origin }}
        >
          {children}
        </ActionMenuContext.Provider>
      </ul>
    )
  }
) as ActionMenuComponent

ActionMenu.displayName = 'ActionMenu.Menu'
ActionMenu.defaultProps = {
  onClose: () => {},
  origin: vars.origins.topLeft
}

ActionMenu.Ellipsis = Ellipsis
ActionMenu.Icon = Icon
ActionMenu.Item = Item
ActionMenu.Divider = Divider
ActionMenu.origins = vars.origins
ActionMenu.tagName = vars.tagName

ActionMenu.useMenuRef = useMenuRef
export const origins = vars.origins

export default ActionMenu
