import {
  HTMLPropsFor,
  createUniversalPortal,
  useCloseOnDocumentEvents
} from '@pluralsight/ps-design-system-util'
import React, {
  ReactText,
  forwardRef,
  useImperativeHandle,
  useContext,
  useRef
} from 'react'
import { css, keyframes } from 'glamor'

import stylesheet from '../css'
import { DropdownContext } from '../js'

const slide = keyframes(
  stylesheet['@keyframes psds-dropdown__menu__keyframes__slide']
)

const styles = {
  menuWrapper: () => css(stylesheet['.psds-dropdown__menu-wrapper']),
  menu: () =>
    css(
      stylesheet['.psds-dropdown__menu'],
      stylesheet['.psds-dropdown__menu__animation']({ slide })
    )
}

interface DropdownMenuProps extends HTMLPropsFor<'div'> {
  inNode?: HTMLElement
  isOpen: boolean
  menu: React.ReactNode
  menuId: string
  menuPosition: { top: number; left: number; width: number }
}

export const Menu = forwardRef<HTMLDivElement, DropdownMenuProps>(
  ({ inNode, isOpen, menu, menuId, menuPosition, ...rest }, forwardedRef) => {
    const context = useContext(DropdownContext)
    const ref = useRef<HTMLDivElement | null>(null)
    useImperativeHandle<HTMLDivElement | null, HTMLDivElement | null>(
      forwardedRef,
      () => ref.current
    )

    useCloseOnDocumentEvents<HTMLDivElement>(ref, context.onDocumentEvents)

    return (
      menu &&
      isOpen &&
      createUniversalPortal(
        <div {...styles.menuWrapper()} style={menuPosition}>
          <div
            {...styles.menu()}
            ref={ref}
            role="listbox"
            id={menuId}
            {...rest}
          >
            {menu}
          </div>
        </div>,
        inNode
      )
    )
  }
)

Menu.displayName = 'Dropdown.Menu'
Menu.defaultProps = {
  menu: <span />
}
