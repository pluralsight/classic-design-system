import filterReactProps from '@pluralsight/ps-design-system-filter-react-props'
import * as glamor from 'glamor'
import Icon from '@pluralsight/ps-design-system-icon/react'
import PropTypes from 'prop-types'
import React, { useState, useEffect } from 'react'
import {
  names as themeNames,
  withTheme
} from '@pluralsight/ps-design-system-theme/react'

import css from '../css/index.js'
import Collapsible from './collapsible.js'

if (typeof window !== 'undefined') require('element-closest')

const styles = {
  drawer: themeName => glamor.css(css[`.psds-drawer.psds-theme--${themeName}`]),
  base: isOpen =>
    glamor.css(
      css['.psds-drawer__base'],
      isOpen && css['.psds-drawer__base--isOpen']
    ),
  panel: ({ isOpen, themeName }) =>
    glamor.css(
      css['.psds-drawer__panel'],
      isOpen && css[`.psds-drawer__panel.psds-theme--${themeName}`]
    ),
  panelContent: () => glamor.css(css[`.psds-drawer__panel-content`]),
  rotatable: isRotated =>
    glamor.css(
      css['.psds-drawer__rotatable'],
      isRotated && css['.psds-drawer__rotatable--isOpen']
    ),
  toggleButtonContainer: () =>
    glamor.css(css[`.psds-drawer__toggle-button-container`]),
  toggleButton: themeName =>
    glamor.css(
      css[`.psds-drawer__toggle-button`],
      css[`.psds-drawer__toggle-button.psds-theme--${themeName}`]
    )
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
              <Icon id={Icon.ids.caretDown} />
            </div>
          </button>
        </div>
      </div>
      <div {...styles.panel({ themeName, open })}>
        <Collapsible isOpen={open}>{children}</Collapsible>
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
