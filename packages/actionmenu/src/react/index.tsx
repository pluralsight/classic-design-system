import {
  HTMLPropsFor,
  RefForwardingComponent,
  ValueOf,
  handleMenuKeyDownEvents,
  handleMenuKeyUpEvents,
  useCloseOnDocumentEvents,
  useMenuRef
} from '@pluralsight/ps-design-system-util'
import { css, compose, keyframes } from 'glamor'
import React from 'react'

import { ActionMenuContext } from './context'
import stylesheet from '../css/index'
import { Divider } from './divider'
import { Ellipsis } from './ellipsis'
import { Item } from './item'
import { Icon } from './icon'
import * as vars from '../vars/index'

const slide = keyframes(
  stylesheet['@keyframes psds-actionmenu__keyframes__slide']
)

const styles = ({ origin }: { origin?: ValueOf<typeof vars.origins> }) =>
  compose(
    css(stylesheet['.psds-actionmenu']),
    css(stylesheet[`.psds-actionmenu--origin-${origin}`]),
    css(stylesheet['.psds-actionmenu__animation']({ slide }))
  )

// eslint-disable-next-line @typescript-eslint/no-empty-function
const noop = () => {}

interface ActionMenuStatics {
  Divider: typeof Divider
  Ellipsis: typeof Ellipsis
  Icon: typeof Icon
  Item: typeof Item
  origins: typeof vars.origins
  tagName: typeof vars.tagName
  useMenuRef: typeof useMenuRef
}
interface ActionMenuProps extends Omit<HTMLPropsFor<'ul'>, 'onClick'> {
  onClick?: (evt: React.MouseEvent, value?: React.ReactText) => void
  onClose?: () => void
  origin?: ValueOf<typeof vars.origins>
}
type ActionMenuComponent = RefForwardingComponent<
  ActionMenuProps,
  HTMLUListElement,
  ActionMenuStatics
>
export const ActionMenu = React.forwardRef<HTMLUListElement, ActionMenuProps>(
  (
    {
      onClose = noop,
      origin = vars.origins.topLeft,
      onClick,
      children,
      ...rest
    },
    forwardedRef
  ) => {
    const ref = React.useRef<HTMLUListElement | null>(null)
    React.useImperativeHandle<HTMLUListElement | null, HTMLUListElement | null>(
      forwardedRef,
      () => ref.current
    )

    useCloseOnDocumentEvents<HTMLUListElement>(ref, onClose)

    const handleKeyDown: React.KeyboardEventHandler<HTMLUListElement> = evt => {
      handleMenuKeyDownEvents(evt)
      if (evt.key === 'Escape') onClose()
    }

    return (
      <ul
        {...styles({ origin })}
        ref={ref}
        onKeyDown={handleKeyDown}
        onKeyUp={handleMenuKeyUpEvents}
        role="menu"
        {...rest}
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

ActionMenu.Ellipsis = Ellipsis
ActionMenu.Icon = Icon
ActionMenu.Item = Item
ActionMenu.Divider = Divider
ActionMenu.origins = vars.origins
ActionMenu.tagName = vars.tagName

ActionMenu.useMenuRef = useMenuRef
export const origins = vars.origins

export default ActionMenu
