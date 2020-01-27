import { compose, css } from 'glamor'
import PropTypes from 'prop-types'
import React, { useState, useEffect } from 'react'

import filterReactProps from '@pluralsight/ps-design-system-filter-react-props'
import { CaretDownIcon } from '@pluralsight/ps-design-system-icon'
import Collapsible from '@pluralsight/ps-design-system-collapsible'
import {
  names as themeNames,
  withTheme
} from '@pluralsight/ps-design-system-theme'

import stylesheet from '../css/index.js'

if (typeof window !== 'undefined') require('element-closest')

const styles = {
  drawer: themeName => css(stylesheet[`.psds-drawer.psds-theme--${themeName}`]),
  base: isOpen =>
    compose(
      css(stylesheet['.psds-drawer__base']),
      isOpen && css(stylesheet['.psds-drawer__base--isOpen'])
    ),
  panel: ({ themeName }) =>
    compose(
      css(stylesheet['.psds-drawer__panel']),
      css(stylesheet[`.psds-drawer__panel.psds-theme--${themeName}`])
    ),
  panelContent: () => css(stylesheet[`.psds-drawer__panel-content`]),
  rotatable: isRotated =>
    compose(
      css(stylesheet['.psds-drawer__rotatable']),
      isRotated && css(stylesheet['.psds-drawer__rotatable--isOpen'])
    ),
  toggleButtonContainer: () =>
    css(stylesheet[`.psds-drawer__toggle-button-container`]),
  toggleButton: themeName =>
    compose(
      css(stylesheet[`.psds-drawer__toggle-button`]),
      css(stylesheet[`.psds-drawer__toggle-button.psds-theme--${themeName}`])
    ),
  collapsible: () => css(stylesheet['.psds-drawer__collapsible'])
}
const Drawer = ({
  startOpen,
  isOpen,
  toggleButtonAriaLabel,
  themeName,
  children,
  onToggle,
  base,
  ...rest
}) => {
  const [openState, setOpenState] = useState(startOpen)
  const [controlled, setControlled] = useState()
  useEffect(() => {
    if (controlled !== undefined) {
      return
    }
    setControlled(isOpen !== undefined)
  }, [isOpen, controlled])
  const open = isOpen !== undefined ? isOpen : openState
  const getButtonAriaLabel = () => {
    const prefix = open ? 'Collapse' : 'Expand'
    return toggleButtonAriaLabel ? `${prefix} ${toggleButtonAriaLabel}` : prefix
  }

  const isClickOnDrawerBase = evt => !evt.target.closest('a, button')

  const toggle = evt => {
    const nextOpen = !open
    onToggle && onToggle(nextOpen, evt)
    !controlled && setOpenState(nextOpen)
  }

  const handleClick = evt => {
    isClickOnDrawerBase(evt) && toggle(evt)
  }

  return (
    <div {...styles.drawer(themeName)} {...filterReactProps(rest)}>
      <div {...styles.base(open)} onClick={handleClick}>
        <div {...styles.panelContent()}>{base}</div>
        <div {...styles.toggleButtonContainer()}>
          <button
            onClick={toggle}
            aria-label={getButtonAriaLabel()}
            {...styles.toggleButton(themeName)}
          >
            <div {...styles.rotatable(open)}>
              <CaretDownIcon />
            </div>
          </button>
        </div>
      </div>
      <div {...styles.panel({ themeName })}>
        <Collapsible isOpen={open} {...styles.collapsible()}>
          {children}
        </Collapsible>
      </div>
    </div>
  )
}

Drawer.displayName = 'Drawer'

Drawer.propTypes = {
  base: PropTypes.node.isRequired,
  children: PropTypes.node.isRequired,
  isOpen: PropTypes.bool,
  onToggle: PropTypes.func,
  startOpen: PropTypes.bool,
  themeName: PropTypes.oneOf(Object.values(themeNames)),
  toggleButtonAriaLabel: PropTypes.string
}

Drawer.defaultProps = {
  startOpen: false
}

export default withTheme(Drawer)
