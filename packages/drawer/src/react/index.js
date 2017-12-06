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

if (typeof window !== 'undefined') require('element-closest')

const { gray01, gray02, gray03, gray04, gray06, white } = core.colors
const CARET_AREA_WIDTH = 38

const DrawerBase = glamorous.div(
  {
    position: 'relative',
    paddingRight: CARET_AREA_WIDTH,
    cursor: 'pointer',
    transition: `background ${core.motion.speedNormal}`,
    ':hover': {
      background: transparentize(0.9, gray02)
    }
  },
  ({ isOpen }) =>
    isOpen
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
  ({ isOpen, themeName }) =>
    isOpen
      ? {
          boxShadow: `inset 0 1px 3px 0 rgba(0,0,0,${
            themeName === themeNames.light ? '0.1' : '0.5'
          })`
        }
      : {}
)

const DrawerPanelContent = glamorous.div(
  {
    marginRight: -CARET_AREA_WIDTH,
    paddingRight: CARET_AREA_WIDTH
  },
  ({ themeName }) => ({
    borderTop: `1px solid ${themeName === themeNames.light ? gray01 : gray04}`
  })
)

const ToggleButtonContainer = glamorous.div({
  position: 'absolute',
  top: 0,
  right: core.layout.spacingMedium,
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
    color: themeName === themeNames.light ? gray03 : gray02,
    ':hover, :active': {
      color: themeName === themeNames.light ? gray06 : white
    }
  })
)

const Rotatable = glamorous.div(
  {
    transition: `transform ${core.motion.speedNormal}`,
    lineHeight: 0
  },
  ({ isRotated }) => (isRotated ? { transform: 'rotateZ(180deg)' } : {})
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
    return (
      <div>
        <DrawerBase isOpen={isOpen} onClick={this.handleClick}>
          <DrawerPanelContent themeName={themeName}>
            <Div marginTop={-1} padding={`0 ${core.layout.spacingMedium}`}>
              {this.props.base}
            </Div>
          </DrawerPanelContent>
          <ToggleButtonContainer>
            <ToggleButton onClick={this.toggle} themeName={themeName}>
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
