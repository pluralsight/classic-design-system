import { CaretDownIcon } from '@pluralsight/ps-design-system-icon'
import {
  HTMLPropsFor,
  ValueOf,
  canUseDOM
} from '@pluralsight/ps-design-system-util'
import Collapsible from '@pluralsight/ps-design-system-collapsible'
import {
  names as themeNames,
  useTheme
} from '@pluralsight/ps-design-system-theme'
import { compose, css } from 'glamor'
import React, { useState, useEffect } from 'react'

import stylesheet from '../css'

if (canUseDOM()) require('element-closest')

const styles = {
  drawer: (themeName: ValueOf<typeof themeNames>) =>
    css(stylesheet[`.psds-drawer.psds-theme--${themeName}`]),
  base: ({ open }: { open: boolean }) =>
    compose(
      css(stylesheet['.psds-drawer__base']),
      open && css(stylesheet['.psds-drawer__base--isOpen'])
    ),
  panel: (themeName: ValueOf<typeof themeNames>) =>
    compose(
      css(stylesheet['.psds-drawer__panel']),
      css(stylesheet[`.psds-drawer__panel.psds-theme--${themeName}`])
    ),
  panelContent: () => css(stylesheet[`.psds-drawer__panel-content`]),
  rotatable: ({ open }: { open: boolean }) =>
    compose(
      css(stylesheet['.psds-drawer__rotatable']),
      open && css(stylesheet['.psds-drawer__rotatable--isOpen'])
    ),
  toggleButtonContainer: () =>
    css(stylesheet[`.psds-drawer__toggle-button-container`]),
  toggleButton: (themeName: ValueOf<typeof themeNames>) =>
    compose(
      css(stylesheet[`.psds-drawer__toggle-button`]),
      css(stylesheet[`.psds-drawer__toggle-button.psds-theme--${themeName}`])
    ),
  collapsible: () => css(stylesheet['.psds-drawer__collapsible'])
}

interface DrawerProps extends HTMLPropsFor<'div'> {
  base: React.ReactNode
  isOpen?: boolean
  onToggle?: (open: boolean, evt: React.MouseEvent) => void
  startOpen?: boolean
  toggleButtonAriaLabel?: string
}
const Drawer: React.FC<DrawerProps> = props => {
  const {
    base,
    children,
    isOpen,
    onToggle,
    toggleButtonAriaLabel,
    startOpen = false,
    ...rest
  } = props
  const themeName = useTheme()

  const [controlled, setControlled] = useState<boolean | undefined>(undefined)
  useEffect(() => {
    if (controlled !== undefined) return

    setControlled(isOpen !== undefined)
  }, [isOpen, controlled])

  const [openState, setOpenState] = useState(startOpen)
  const open = isOpen !== undefined ? isOpen : openState

  const getButtonAriaLabel = (): string => {
    const prefix = open ? 'Collapse' : 'Expand'
    return toggleButtonAriaLabel ? `${prefix} ${toggleButtonAriaLabel}` : prefix
  }

  const handleClick: React.MouseEventHandler<HTMLDivElement> = evt => {
    isClickOnDrawerBase(evt) && toggle(evt)
  }

  const isClickOnDrawerBase = (
    evt: React.MouseEvent<HTMLDivElement>
  ): boolean => {
    const target = evt.target as HTMLElement
    return !target.closest('a, button')
  }

  const toggle = (
    evt: React.MouseEvent<HTMLButtonElement | HTMLDivElement>
  ) => {
    const nextOpen = !open
    onToggle && onToggle(nextOpen, evt)
    !controlled && setOpenState(nextOpen)
  }

  return (
    <div {...styles.drawer(themeName)} {...rest}>
      <div {...styles.base({ open })} onClick={handleClick}>
        <div {...styles.panelContent()}>{base}</div>

        <div {...styles.toggleButtonContainer()}>
          <button
            aria-label={getButtonAriaLabel()}
            onClick={toggle}
            {...styles.toggleButton(themeName)}
          >
            <div {...styles.rotatable({ open })}>
              <CaretDownIcon />
            </div>
          </button>
        </div>
      </div>

      <div {...styles.panel(themeName)}>
        <Collapsible isOpen={open} {...styles.collapsible()}>
          {children}
        </Collapsible>
      </div>
    </div>
  )
}

export default Drawer
