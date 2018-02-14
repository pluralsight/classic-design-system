import core from '@pluralsight/ps-design-system-core'
import * as glamor from 'glamor'
import glamorous from 'glamorous'
import Icon from '@pluralsight/ps-design-system-icon/react'
import PropTypes from 'prop-types'
import React from 'react'

import Arrow from './arrow'
import css from '../css'
import * as vars from '../vars'

const Item = glamorous.button(
  css['.psds-actionmenu__item'],
  ({ iconId }) => (iconId ? css['.psds-actionmenu__item--iconId'] : null),
  ({ nested }) => (nested ? css['.psds-actionmenu__item--nested'] : null),
  ({ isActive }) => (isActive ? css['.psds-actionmenu__item--isActive'] : null)
)

const IconComponent = props => (
  <div {...glamor.css(css['.psds-actionmenu__item__icon'])}>
    <Icon id={props.iconId} size={Icon.sizes.medium} />
  </div>
)

const NestedArrow = _ => (
  <div {...glamor.css(css['.psds-actionmenu__item__arrow'])}>
    <Arrow />
  </div>
)

const calcNestedMenuPosition = (menuWidth, origin) =>
  ({
    topLeft: {
      left: menuWidth + vars.style.nestedMenuHorzOverlap,
      top: `calc(-1 * ${vars.style.menuPaddingVert})`
    },
    topRight: {
      right: menuWidth + vars.style.nestedMenuHorzOverlap,
      top: `calc(-1 * ${vars.style.menuPaddingVert})`
    },
    bottomRight: {
      right: menuWidth + vars.style.nestedMenuHorzOverlap,
      bottom: `calc(-1 * ${vars.style.menuPaddingVert})`
    },
    bottomLeft: {
      left: menuWidth + vars.style.nestedMenuHorzOverlap,
      bottom: `calc(-1 * ${vars.style.menuPaddingVert})`
    }
  }[origin])

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
    if (this.props.isActive && this.props.shouldFocusOnMount) this.item.focus()
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
          css: calcNestedMenuPosition(
            this.item.getBoundingClientRect().width,
            this.props._origin
          ),
          onClose: this.handleNestedClose,
          origin: this.props._origin,
          shouldFocusOnMount: this.props.shouldFocusOnMount
        })
      : null
  }
  render() {
    return (
      <div {...glamor.css(css['.psds-actionmenu__item-container'])}>
        <Item
          aria-haspopup={!!this.props.nested}
          css={this.props.css}
          className={this.props.className}
          iconId={this.props.iconId}
          isActive={this.props.isActive}
          innerRef={el => (this.item = el)}
          nested={this.props.nested}
          onClick={this.props.onClick}
          onKeyDown={this.handleKeyDown}
          onMouseOver={this.handleMouseOver}
          role="menuitem"
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
  _onMouseOver: PropTypes.func,
  _origin: PropTypes.oneOf(Object.keys(vars.origins))
}

const Divider = glamorous.div(css['.psds-actionmenu__divider'])

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

const Overlay = props => (
  <div
    {...glamor.css(css['.psds-actionmenu__overlay'])}
    onClick={props.onClick}
  />
)

const slide = glamor.css.keyframes(
  css['@keyframes psds-actionmenu__keyframes__slide']
)

const Menu = glamorous.div(
  css['.psds-actionmenu']({ slide }),
  ({ origin }) => css[`.psds-actionmenu--origin-${origin}`]
)

// TODO: rm
const calcMenuStyle = origin =>
  ({
    topLeft: {
      left: 0,
      top: 0
    },
    topRight: {
      right: 0,
      top: 0
    },
    bottomRight: {
      bottom: 0,
      right: 0
    },
    bottomLeft: {
      left: 0,
      bottom: 0
    }
  }[origin])

class ActionMenuComponent extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      activeIndex: 0,
      activeDirection: 'down'
    }
    this.handleKeyDown = this.handleKeyDown.bind(this)
    this.handleKeyUp = this.handleKeyUp.bind(this)
    this.handleDividerFocus = this.handleDividerFocus.bind(this)
    this.handleItemMouseOver = this.handleItemMouseOver.bind(this)
  }
  handleKeyDown(evt) {
    if (evt.key === 'ArrowLeft' || evt.key === 'Escape') {
      evt.stopPropagation()
      evt.preventDefault()
      if (typeof this.props.onClose === 'function') this.props.onClose()
    } else if (
      evt.key === 'ArrowDown' ||
      (evt.key === 'Tab' && !this.isShifting)
    ) {
      evt.stopPropagation()
      evt.preventDefault()
      const newIndex = this.state.activeIndex + 1
      const itemsCount = React.Children.count(this.props.children)
      const activeIndex = newIndex > itemsCount - 1 ? itemsCount - 1 : newIndex
      this.setState({ activeIndex, activeDirection: 'down' })
    } else if (
      evt.key === 'ArrowUp' ||
      (evt.key === 'Tab' && this.isShifting)
    ) {
      evt.stopPropagation()
      evt.preventDefault()
      const newIndex = this.state.activeIndex - 1
      const activeIndex = newIndex <= 0 ? 0 : newIndex
      this.setState({ activeIndex, activeDirection: 'up' })
    }
    if (this.isShifting || evt.key === 'Shift') this.isShifting = true
  }
  handleKeyUp(evt) {
    if (evt.key === 'Shift') this.isShifting = false
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
      <Menu
        css={this.props.css}
        className={this.props.className}
        onKeyDown={this.handleKeyDown}
        onKeyUp={this.handleKeyUp}
        origin={this.props.origin}
        innerRef={this.props.ref}
        role="menu"
      >
        {React.Children.map(this.props.children, (child, i) =>
          React.cloneElement(child, {
            isActive: i === this.state.activeIndex,
            shouldFocusOnMount: this.props.shouldFocusOnMount,
            _i: i,
            _onFocus: this.handleDividerFocus,
            _onMouseOver: this.handleItemMouseOver,
            _origin: this.props.origin
          })
        )}
      </Menu>
    )
  }
}
ActionMenuComponent.displayName = 'ActionMenu'

ActionMenuComponent.Item = ItemComponent
ActionMenuComponent.Divider = DividerComponent
ActionMenuComponent.Overlay = Overlay
ActionMenuComponent.origins = vars.origins
ActionMenuComponent.propTypes = {
  onClose: PropTypes.func,
  origin: PropTypes.oneOf(Object.keys(vars.origins)),
  shouldFocusOnMount: PropTypes.bool
}
ActionMenuComponent.defaultProps = {
  origin: vars.origins.topLeft,
  shouldFocusOnMount: true
}

export const origins = vars.origins

export default ActionMenuComponent
