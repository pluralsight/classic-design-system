import filterReactProps from '@pluralsight/ps-design-system-filter-react-props'
import * as glamor from 'glamor'
import Icon from '@pluralsight/ps-design-system-icon/react'
import PropTypes from 'prop-types'
import React from 'react'
import {
  names as themeNames,
  withTheme
} from '@pluralsight/ps-design-system-theme/react'

import css from '../css/index.js'
import Collapsible from './collapsible.js'

if (typeof window !== 'undefined') require('element-closest')

const styles = {
  drawer: ({ themeName }) =>
    glamor.css(css[`.psds-drawer.psds-theme--${themeName}`]),
  base: ({ isOpen }) =>
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
  rotatable: ({ isRotated }) =>
    glamor.css(
      css['.psds-drawer__rotatable'],
      isRotated && css['.psds-drawer__rotatable--isOpen']
    ),
  toggleButtonContainer: () =>
    glamor.css(css[`.psds-drawer__toggle-button-container`]),
  toggleButton: ({ themeName }) =>
    glamor.css(
      css[`.psds-drawer__toggle-button`],
      css[`.psds-drawer__toggle-button.psds-theme--${themeName}`]
    )
}

const DrawerBase = props => (
  <div {...styles.base(props)} {...filterReactProps(props)} />
)

const DrawerPanel = props => (
  <div {...styles.panel(props)} {...filterReactProps(props)} />
)

const DrawerPanelContent = props => (
  <div {...styles.panelContent(props)} {...filterReactProps(props)} />
)

const ToggleButtonContainer = props => (
  <div {...styles.toggleButtonContainer(props)} {...filterReactProps(props)} />
)

const ToggleButton = props => (
  <button
    {...styles.toggleButton(props)}
    {...filterReactProps(props, { tagName: 'button' })}
  />
)

const Rotatable = props => (
  <div {...styles.rotatable(props)} {...filterReactProps(props)} />
)

class Drawer extends React.Component {
  constructor(props) {
    super(props)

    this.handleClick = this.handleClick.bind(this)
    this.toggle = this.toggle.bind(this)

    this.state = { isOpen: this.props.startOpen }
  }

  get isControlledByProps() {
    return this.props.isOpen !== undefined && this.props.isOpen !== null
  }

  get isOpen() {
    return this.isControlledByProps ? this.props.isOpen : this.state.isOpen
  }

  getButtonAriaLabel() {
    const { toggleButtonAriaLabel } = this.props
    const prefix = this.isOpen ? 'Collapse' : 'Expand'
    return toggleButtonAriaLabel ? `${prefix} ${toggleButtonAriaLabel}` : prefix
  }

  isClickOnDrawerBase(evt) {
    return !evt.target.closest('a, button')
  }

  handleClick(evt) {
    if (this.isClickOnDrawerBase(evt)) this.toggle(evt)
  }

  toggle(evt) {
    const isOpen = !this.isOpen

    if (this.props.onToggle) this.props.onToggle(isOpen, evt)

    if (!this.isControlledByProps) this.setState({ isOpen })
  }

  render() {
    const { themeName } = this.props
    const { handleClick, isOpen } = this

    const ariaLabel = this.getButtonAriaLabel()

    return (
      <div {...styles.drawer(this.props)} {...filterReactProps(this.props)}>
        <DrawerBase isOpen={isOpen} onClick={handleClick}>
          <DrawerPanelContent themeName={themeName}>
            {this.props.base}
          </DrawerPanelContent>

          <ToggleButtonContainer>
            <ToggleButton
              onClick={this.toggle}
              themeName={themeName}
              aria-label={ariaLabel}
            >
              <Rotatable isRotated={isOpen}>
                <Icon id={Icon.ids.caretDown} />
              </Rotatable>
            </ToggleButton>
          </ToggleButtonContainer>
        </DrawerBase>

        <DrawerPanel isOpen={isOpen} themeName={themeName}>
          <Collapsible isOpen={isOpen}>{this.props.children}</Collapsible>
        </DrawerPanel>
      </div>
    )
  }
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
