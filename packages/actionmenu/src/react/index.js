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

const itemHoverStyles = {
  background: core.colors.bone
  // '> ul': {
  //   display: 'inline-block'
  // }
}

const Item = glamorous.button({
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
  background: 'none',
  border: 'none',
  padding: `0 ${core.layout.spacingMedium}`,
  // '> ul': {
  //   display: 'none'
  // },
  ':hover': itemHoverStyles,
  ':focus': itemHoverStyles,
  ':active': itemHoverStyles
})

// const ItemChildrenButton = glamorous.button({
//   flexGrow: 1,
//   padding: 0,
//   whiteSpace: 'nowrap',
//   overflow: 'hidden',
//   textOverflow: 'ellipsis',
//   textAlign: 'left',
//   lineHeight: core.type.lineHeightExtra,
//   fontWeight: core.type.fontWeightMedium,
//   cursor: 'pointer',
//   background: 'none',
//   border: 'none'
// })

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
  }
  componentDidMount() {
    if (this.props.isActive) this.item.focus()
  }
  handleKeyDown(evt) {
    if (evt.key === 'ArrowRight') {
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
  renderNested() {
    return this.state.isNestedRendered
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
      // ...(this.props.nested ? { tabIndex: 0 } : {})
    }
    return (
      <div>
        <Item
          {...filteredProps}
          onClick={this.props.onClick}
          onKeyDown={this.handleKeyDown}
          innerRef={el => (this.item = el)}
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
ItemComponent.propTypes = {
  iconId: PropTypes.oneOf(Object.keys(Icon.ids)),
  nested: PropTypes.element // ActionMenu
}

const Divider = glamorous.div({
  height: '1px',
  width: '100%',
  backgroundColor: core.colors.gray01,
  margin: `${core.layout.spacingTiny} 0`
})

class ActionMenuComponent extends React.Component {
  constructor(props) {
    super(props)
    this.handleKeyDown = this.handleKeyDown.bind(this)
  }
  handleKeyDown(evt) {
    if (evt.key === 'ArrowLeft') {
      evt.stopPropagation()
      evt.preventDefault()
      if (typeof this.props.onClose === 'function') this.props.onClose()
    }
  }
  render() {
    return (
      <Menu
        css={this.props.css}
        className={this.props.className}
        onKeyDown={this.handleKeyDown}
      >
        {React.Children.map(this.props.children, (child, i) =>
          React.cloneElement(child, {
            isActive: i === 0
          })
        )}
      </Menu>
    )
  }
}
ActionMenuComponent.displayName = 'ActionMenu'

ActionMenuComponent.Item = sizeMe({ monitorWidth: true })(ItemComponent)
ActionMenuComponent.Divider = Divider
ActionMenuComponent.origins = origins
ActionMenuComponent.propTypes = {
  onClose: PropTypes.func,
  origin: PropTypes.oneOf(Object.keys(origins))
}
ActionMenuComponent.defaultProps = {
  origin: origins.topLeft
}

export default ActionMenuComponent
