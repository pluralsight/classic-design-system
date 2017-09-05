import core from '@pluralsight/ps-design-system-core'
import glamorous, { Div } from 'glamorous'
import Icon from '@pluralsight/ps-design-system-icon/react'
import PropTypes from 'prop-types'
import React from 'react'
import sizeMe from 'react-sizeme'

import Arrow from './arrow'

const origins = {
  topLeft: 'topLeft',
  topRight: 'topRight',
  bottomRight: 'bottomRight',
  bottomLeft: 'bottomLeft'
}

const menuPaddingVert = core.layout.spacingTiny
const nestedMenuHorzOverlap = 0 // 3

const Item = glamorous.button(
  {
    display: 'flex',
    width: '100%',
    alignItems: 'center',
    lineHeight: core.type.lineHeightExtra,
    fontWeight: core.type.fontWeightMedium,
    whiteSpace: 'nowrap',
    overflow: 'hidden',
    textOverflow: 'ellipsis',
    textAlign: 'left',
    cursor: 'pointer',
    border: 'none',
    padding: `0 ${core.layout.spacingMedium}`
  },
  ({ isActive }) =>
    isActive
      ? {
          background: core.colors.bone,
          outline: 'none'
        }
      : { background: 'none' }
)

const IconComponent = props =>
  <Div
    display="inline-flex"
    alignItems="center"
    marginRight={core.layout.spacingXSmall}
  >
    <Icon id={props.iconId} size={Icon.sizes.small} />
  </Div>

const NestedArrow = _ =>
  <Div marginLeft="auto" paddingLeft={core.layout.spacingXSmall}>
    <Arrow />
  </Div>

class ItemComponent extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      isNestedRendered: false
    }
    this.handleKeyDown = this.handleKeyDown.bind(this)
    this.handleNestedClose = this.handleNestedClose.bind(this)
    this.handleMouseOver = this.handleMouseOver.bind(this)
    this.handleMouseOut = this.handleMouseOut.bind(this)
  }
  componentDidMount() {
    if (this.props.isActive) this.item.focus()
  }
  componentDidUpdate() {
    if (this.props.isActive) {
      this.item.focus()
    }
  }
  handleKeyDown(evt) {
    if (evt.key === 'ArrowRight' || evt.key === ' ' || evt.key === 'Enter') {
      evt.stopPropagation()
      evt.preventDefault()
      if (this.props.nested) {
        this.setState({ isNestedRendered: true })
      }
    }
  }
  handleNestedClose() {
    this.setState({ isNestedRendered: false })
    this.item.focus()
  }
  handleMouseOver() {
    this.setState({ isNestedRendered: true })
    this.props._onMouseOver(this.props._i)
  }
  handleMouseOut() {
    this.setState({ isNestedRendered: false })
  }
  renderNested() {
    return this.state.isNestedRendered &&
      this.props.nested &&
      this.props.isActive
      ? React.cloneElement(this.props.nested, {
          css: {
            left: this.props.size.width + nestedMenuHorzOverlap,
            top: `calc(-1 * ${menuPaddingVert})`
          },
          onClose: this.handleNestedClose
        })
      : null
  }
  render() {
    const filteredProps = {
      css: this.props.css,
      className: this.props.className,
      iconId: this.props.iconId
    }
    return (
      <div>
        <Item
          {...filteredProps}
          isActive={this.props.isActive}
          innerRef={el => (this.item = el)}
          onClick={this.props.onClick}
          onKeyDown={this.handleKeyDown}
          onMouseOver={this.handleMouseOver}
        >
          {this.props.iconId && <IconComponent iconId={this.props.iconId} />}
          {this.props.children}
          {this.props.nested && <NestedArrow />}
        </Item>
        {this.renderNested()}
      </div>
    )
  }
}
ItemComponent.displayName = 'ActionMenu.Item'
ItemComponent.propTypes = {
  iconId: PropTypes.oneOf(Object.keys(Icon.ids)),
  isActive: PropTypes.bool,
  nested: PropTypes.element, // ActionMenu
  _onMouseOver: PropTypes.func
}

const Divider = glamorous.div({
  height: '1px',
  width: '100%',
  backgroundColor: core.colors.gray01,
  margin: `${core.layout.spacingTiny} 0`
})

class DividerComponent extends React.Component {
  componentDidMount() {
    if (this.props.isActive) this.props._onFocus()
  }
  componentDidUpdate() {
    if (this.props.isActive) this.props._onFocus()
  }
  render() {
    return <Divider tabIndex="-1" />
  }
}
DividerComponent.propTypes = {
  _onFocus: PropTypes.func
}

const Overlay = props =>
  <Div
    position="fixed"
    height="100vh"
    width="100vw"
    top="0"
    left="0"
    onClick={props.onClick}
  />

const Menu = glamorous.div({
  position: 'absolute',
  display: 'inline-block',
  marginLeft: 0,
  background: core.colors.white,
  borderRadius: '2px',
  padding: `${menuPaddingVert} 0`,
  minWidth: '160px',
  maxWidth: '320px',
  // overflow: 'hidden',
  listStyle: 'none',
  boxShadow: `0 2px 4px rgba(0, 0, 0, 0.5)`,
  fontSize: core.type.fontSizeSmall
})

class ActionMenuComponent extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      activeIndex: 0,
      activeDirection: 'down'
    }
    this.handleKeyDown = this.handleKeyDown.bind(this)
    this.handleDividerFocus = this.handleDividerFocus.bind(this)
    this.handleItemMouseOver = this.handleItemMouseOver.bind(this)
  }
  handleKeyDown(evt) {
    if (evt.key === 'ArrowLeft' || evt.key === 'Escape') {
      evt.stopPropagation()
      evt.preventDefault()
      if (typeof this.props.onClose === 'function') this.props.onClose()
    } else if (evt.key === 'ArrowDown') {
      evt.stopPropagation()
      evt.preventDefault()
      const newIndex = this.state.activeIndex + 1
      const itemsCount = React.Children.count(this.props.children)
      const activeIndex = newIndex > itemsCount - 1 ? itemsCount - 1 : newIndex
      this.setState({ activeIndex, activeDirection: 'down' })
    } else if (evt.key === 'ArrowUp') {
      evt.stopPropagation()
      evt.preventDefault()
      const newIndex = this.state.activeIndex - 1
      const activeIndex = newIndex <= 0 ? 0 : newIndex
      this.setState({ activeIndex, activeDirection: 'up' })
    }
  }
  // TODO: figure out a better way to do this -- count children, determine placement of divider,
  handleDividerFocus() {
    if (this.state.activeDirection === 'down') {
      const newIndex = this.state.activeIndex + 1
      const itemsCount = React.Children.count(this.props.children)
      const activeIndex = newIndex > itemsCount - 1 ? itemsCount - 1 : newIndex
      this.setState({ activeIndex, activeDirection: 'down' })
    } else if (this.state.activeDirection === 'up') {
      const newIndex = this.state.activeIndex - 1
      const activeIndex = newIndex <= 0 ? 0 : newIndex
      this.setState({ activeIndex, activeDirection: 'up' })
    }
  }
  handleItemMouseOver(i) {
    this.setState({ activeIndex: i })
  }
  render() {
    return (
      <div>
        <Menu
          css={this.props.css}
          className={this.props.className}
          onKeyDown={this.handleKeyDown}
        >
          {React.Children.map(this.props.children, (child, i) =>
            React.cloneElement(child, {
              isActive: i === this.state.activeIndex,
              _i: i,
              _onFocus: this.handleDividerFocus,
              _onMouseOver: this.handleItemMouseOver
            })
          )}
        </Menu>
      </div>
    )
  }
}
ActionMenuComponent.displayName = 'ActionMenu'

ActionMenuComponent.Item = sizeMe({ monitorWidth: true })(ItemComponent)
ActionMenuComponent.Divider = DividerComponent
ActionMenuComponent.Overlay = Overlay
ActionMenuComponent.origins = origins
ActionMenuComponent.propTypes = {
  onClose: PropTypes.func,
  origin: PropTypes.oneOf(Object.keys(origins))
}
ActionMenuComponent.defaultProps = {
  origin: origins.topLeft
}

export default ActionMenuComponent
