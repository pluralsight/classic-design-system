import {
  HTMLPropsFor,
  createUniversalPortal,
  useCloseOnDocumentEvents
} from '@pluralsight/ps-design-system-util'
import React, {
  ReactText,
  forwardRef,
  useImperativeHandle,
  useRef
} from 'react'
import { css, keyframes } from 'glamor'

import stylesheet from '../css'

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
  menuPosition: { top: number; left: number }
  // TODO: use/rm?
  onClose: () => void
  selectedItemId?: string
  // TODO: use and fix
  width: ReactText
}
export const Menu = forwardRef<HTMLDivElement, DropdownMenuProps>(
  (
    {
      inNode,
      isOpen,
      menu,
      menuId,
      menuPosition,
      onClick,
      onClose,
      selectedItemId,
      width,
      ...rest
    },
    forwardedRef
  ) => {
    const ref = useRef<HTMLDivElement | null>(null)
    useImperativeHandle<HTMLDivElement | null, HTMLDivElement | null>(
      forwardedRef,
      () => ref.current
    )

    useCloseOnDocumentEvents<HTMLDivElement>(ref, onClose)

    // TODO: ensure originContext usages get vars.origins.topLeft
    // TODO: refactor out menuWrapper?
    // TODO: remove onClick from ul?
    return (
      menu &&
      isOpen &&
      createUniversalPortal(
        <div {...styles.menuWrapper()} style={menuPosition}>
          <div
            {...styles.menu()}
            ref={ref}
            onClick={onClick}
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
