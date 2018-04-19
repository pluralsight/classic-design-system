import Collapsible from './collapsible'
import core from '@pluralsight/ps-design-system-core'
import glamorous, { Div } from 'glamorous'
import { transparentize } from 'polished'
import Icon, {
  sizes as iconSizes
} from '@pluralsight/ps-design-system-icon/react'
import { names as themeNames } from '@pluralsight/ps-design-system-theme/react'
import PropTypes from 'prop-types'
import React from 'react'

import css from '../css'

if (typeof window !== 'undefined') require('element-closest')

const { gray01, gray02, gray03, gray04, gray06, white } = core.colors

const DrawerRoot = glamorous.div(
  ({ themeName }) => css[`.psds-drawer.psds-theme--${themeName}`]
)

const DrawerBase = glamorous.div(
  {
    ...css['.psds-drawer__base'],
    ':hover': css['.psds-drawer__base:hover']
  },
  ({ isOpen }) =>
    isOpen
      ? {
          ...css['.psds-drawer__base--isOpen'],
          ':hover': css['.psds-drawer__base--isOpen:hover']
        }
      : {}
)

const DrawerPanel = glamorous.div(
  css['.psds-drawer__panel'],
  ({ isOpen, themeName }) =>
    isOpen ? css[`.psds-drawer__panel.psds-theme--${themeName}`] : {}
)

const DrawerPanelContent = glamorous.div(css['.psds-drawer__panel-content'])

const ToggleButtonContainer = glamorous.div(
  css['.psds-drawer__toggle-button-container']
)

const ToggleButton = glamorous.button(
  css['.psds-drawer__toggle-button'],
  ({ themeName }) => ({
    ...css[`.psds-drawer__toggle-button.psds-theme--${themeName}`],
    ':hover': css[`.psds-drawer__toggle-button.psds-theme--${themeName}:hover`],
    ':active':
      css[`.psds-drawer__toggle-button.psds-theme--${themeName}:active`]
  })
)

const Rotatable = glamorous.div(
  css['.psds-drawer__rotatable'],
  ({ isRotated }) => (isRotated ? css['.psds-drawer__rotatable--isOpen'] : {})
)

class Drawer extends React.Component {
  constructor(props) {
    super(props)
    this.state = { isOpen: this.props.startOpen }
  }

  get isControlledByProps() {
    return this.props.isOpen !== undefined && this.props.isOpen !== null
  }
  get isOpen() {
    return this.isControlledByProps ? this.props.isOpen : this.state.isOpen
  }

  isClickOnDrawerBase(evt) {
    return !evt.target.closest('a, button')
  }
  handleClick = evt => {
    if (this.isClickOnDrawerBase(evt)) this.toggle()
  }
  toggle = () => {
    const isOpen = !this.isOpen

    if (this.props.onToggle) this.props.onToggle(isOpen)

    if (!this.isControlledByProps) this.setState({ isOpen })
  }

  render() {
    const { isOpen, context: { themeName } } = this
    const ariaLabel = isOpen ? 'Collapse' : 'Expand'

    return (
      <DrawerRoot themeName={themeName}>
        <DrawerBase isOpen={isOpen} onClick={this.handleClick}>
          <DrawerPanelContent themeName={themeName}>
            {this.props.base}
          </DrawerPanelContent>
          <ToggleButtonContainer>
            <ToggleButton onClick={this.toggle} themeName={themeName}>
              <Rotatable isRotated={isOpen} aria-label={ariaLabel}>
                <Icon id={Icon.ids.caretDown} />
              </Rotatable>
            </ToggleButton>
          </ToggleButtonContainer>
        </DrawerBase>
        <DrawerPanel isOpen={isOpen} themeName={themeName}>
          <Collapsible isOpen={isOpen}>{this.props.children}</Collapsible>
        </DrawerPanel>
      </DrawerRoot>
    )
  }
}

Drawer.displayName = 'Drawer'

Drawer.propTypes = {
  children: PropTypes.node.isRequired,
  base: PropTypes.node.isRequired,
  isOpen: PropTypes.bool,
  onToggle: PropTypes.func,
  startOpen: PropTypes.bool
}

Drawer.defaultProps = {
  startOpen: false
}

Drawer.contextTypes = {
  themeName: PropTypes.string
}

export default Drawer
