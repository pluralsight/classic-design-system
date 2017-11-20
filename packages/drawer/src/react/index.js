import 'element-closest'
import Collapsible from './collapsible';
import core from '@pluralsight/ps-design-system-core'
import * as glamor from 'glamor'
import glamorous, { Div } from 'glamorous'
import { transparentize } from 'polished'
import Icon, { sizes as iconSizes } from '@pluralsight/ps-design-system-icon/react'
import { names as themeNames } from '@pluralsight/ps-design-system-theme/react'
import { bool, func, node, string } from 'prop-types'
import React from 'react'

const { gray01, gray02, gray03, gray04, gray06, white } = core.colors

const DrawerBase = glamorous.div(
  {
    position: 'relative',
    cursor: 'pointer',
    transition: `background ${core.motion.speedNormal}`,
    ':hover': {
      background: transparentize(0.9, gray02)
    }
  },
  ({ isOpen }) => isOpen
    ? {
      background: transparentize(0.8, gray02),
      ':hover': {
        background: transparentize(0.8, gray02)
      }
    }
    : {}
)

const DrawerPanel = glamorous.div(
  {
    background: transparentize(0.94, gray02),
    transition: `box-shadow ${core.motion.speedNormal}`
  },
  ({ isOpen, themeName }) =>(isOpen
    ? { boxShadow: `inset 0 1px 3px 0 rgba(0,0,0,${themeName === themeNames.dark ? '0.5' : '0.1'})` }
    : {}
  )
)

const RowContainerWrapper = glamorous.div(
  ({ themeName }) => ({
    borderTop: `1px solid ${themeName === themeNames.dark ? gray04 : gray01 }`
  })
)
const RowContainer = (props, context) => (
  <RowContainerWrapper themeName={context.themeName}>
    <Div marginTop={-1} padding={`0 57px 0 ${core.layout.spacingMedium}`}>
      {props.children}
    </Div>
  </RowContainerWrapper>
)
RowContainer.contextTypes = {
  themeName: string
}

const ToggleButtonContainer = glamorous.div({
  position: 'absolute',
  top: 0, right: core.layout.spacingMedium,
  bottom: 0,
  display: 'flex',
  alignItems: 'center'
})

const ToggleButton = glamorous.button(
  {
    height: 24,
    overflow: 'hidden',
    fontSize: core.type.fontSizeXSmall,
    padding: 0,
    cursor: 'pointer',
    border: 'none',
    background: 'none',
    transition: `all ${core.motion.speedNormal}`
  },
  ({ themeName }) => ({
    color:  themeName === themeNames.dark ? gray02 : gray03,
    ':hover, :active': {
      color: themeName === themeNames.dark ? white : gray06,
    }
  })
)

const RotatableIcon = glamorous(Icon)(
  { transition: `transform ${core.motion.speedNormal}` },
  ({ isRotated }) => (isRotated ? { transform: 'rotateZ(180deg)' } : {})
)

class Drawer extends React.Component {
  static displayName = 'Drawer'
  static propTypes = {
    children: node.isRequired,
    base: node.isRequired,
    isOpen: bool,
    onToggle: func
  }
  static contextTypes = {
    themeName: string
  }

  constructor(props) {
    super(props)
    this.state = { isOpen: false }
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
    if (this.isClickOnDrawerBase(evt))
      this.toggle()
  }
  toggle = () => {
    const isOpen = !this.isOpen

    if (this.props.onToggle)
      this.props.onToggle(isOpen)

    if (!this.isControlledByProps)
      this.setState({ isOpen })
  }

  render() {
    const { isOpen, context: { themeName } } = this
    return (
      <div>
        <DrawerBase isOpen={isOpen} onClick={this.handleClick}>
          {this.props.base}
          <ToggleButtonContainer>
            <ToggleButton onClick={this.toggle} themeName={themeName}>
              <RotatableIcon id="caretDown" isRotated={isOpen} />
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

Drawer.RowContainer = RowContainer

export default Drawer
