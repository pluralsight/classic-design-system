import core from '@pluralsight/ps-design-system-core'
import * as glamor from 'glamor'
import glamorous from 'glamorous'
import Icon from '@pluralsight/ps-design-system-icon/react'
import PropTypes from 'prop-types'
import React from 'react'

import Arrow from './arrow'
import css from '../css'
import * as vars from '../vars'

const styles = {
  item: ({ icon, isActive, nested }) =>
    glamor.css(
      css['.psds-actionmenu__item'],
      {
        ':focus': css['.psds-actionmenu__item:focus'],
        ':hover': css['.psds-actionmenu__item--link'],
        ':active': css['.psds-actionmenu__item--link'],
        ':visited': css['.psds-actionmenu__item--link']
      },
      icon ? css['.psds-actionmenu__item--icon'] : null,
      nested ? css['.psds-actionmenu__item--nested'] : null,
      isActive ? css['.psds-actionmenu__item--isActive'] : null
    )
}

const IconComponent = props => {
  return (
    <div {...glamor.css(css['.psds-actionmenu__item__icon'])}>
      {React.cloneElement(props.children, { size: Icon.sizes.medium })}
    </div>
  )
}

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
    this.handleFocus = this.handleFocus.bind(this)
  }
  componentDidMount() {
    if (this.props.isActive && this.props.shouldFocusOnMount) this.item.focus()
  }
  componentDidUpdate(prevProps) {
    if (
      !prevProps.isActive &&
      this.props.isActive &&
      !this.state.isNestedRendered
    )
      this.item.focus()
  }
  handleKeyDown(evt) {
    if (
      (evt.key === 'ArrowRight' || evt.key === ' ' || evt.key === 'Enter') &&
      this.props.nested
    ) {
      evt.stopPropagation()
      evt.preventDefault()
      this.setState({ isNestedRendered: true })
    }
  }
  handleNestedClose() {
    this.setState({ isNestedRendered: false })
    this.item.focus()
  }
  handleMouseOver() {
    if (this.props.nested) this.setState({ isNestedRendered: true })
    this.props._onMouseOver(this.props._i)
  }
  handleMouseOut() {
    if (this.props.nested) this.setState({ isNestedRendered: false })
  }
  handleFocus() {
    this.props._onItemFocus(this.props._i)
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
        {React.createElement(
          this.props.href ? 'a' : 'button',
          {
            'aria-haspopup': !!this.props.nested,
            ...(this.props.css ? { css: this.props.css } : null),
            ...(this.props.className
              ? { className: this.props.className }
              : null),
            ...(this.props.style ? { style: this.props.style } : null),
            ...(this.props.href ? { href: this.props.href } : null),
            ref: el => (this.item = el),
            onClick: this.props.onClick,
            onKeyDown: this.handleKeyDown,
            onMouseOver: this.handleMouseOver,
            onFocus: this.handleFocus,
            role: 'menuitem',
            ...styles.item(this.props)
          },
          this.props.icon && <IconComponent>{this.props.icon}</IconComponent>,
          this.props.children,
          this.props.nested && <NestedArrow />
        )}
        {this.renderNested()}
      </div>
    )
  }
}
ItemComponent.displayName = 'ActionMenu.Item'
ItemComponent.propTypes = {
  href: PropTypes.string,
  icon: PropTypes.node,
  isActive: PropTypes.bool,
  nested: PropTypes.element, // ActionMenu
  onClick: PropTypes.func,
  _onMouseOver: PropTypes.func,
  _onItemFocus: PropTypes.func,
  _origin: PropTypes.oneOf(Object.keys(vars.origins))
}

const Divider = glamorous.div(css['.psds-actionmenu__divider'])

class DividerComponent extends React.Component {
  componentDidMount() {
    if (this.props.isActive) this.props._onDividerFocus()
  }
  componentDidUpdate() {
    if (this.props.isActive) this.props._onDividerFocus()
  }
  render() {
    return <Divider tabIndex="-1" />
  }
}
DividerComponent.propTypes = {
  _onDividerFocus: PropTypes.func
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
      activeIndex: props.shouldFocusOnMount ? 0 : -1,
      activeDirection: 'down'
    }
    this.handleKeyDown = this.handleKeyDown.bind(this)
    this.handleDividerFocus = this.handleDividerFocus.bind(this)
    this.focusItemAtIndex = this.focusItemAtIndex.bind(this)
  }
  handleKeyDown(evt) {
    console.log('actionmenu key', evt.key)
    if (evt.key === 'ArrowLeft' || evt.key === 'Escape') {
      this.navigateOut(evt)
    } else if (evt.key === 'ArrowDown') {
      this.navigate('down', evt)
    } else if (evt.key === 'ArrowUp') {
      this.navigate('up', evt)
    } else if (evt.key === 'Tab') {
      this.navigateTab(evt)
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
  focusItemAtIndex(i) {
    this.setState({ activeIndex: i })
  }
  navigateOut(evt) {
    evt.stopPropagation()
    evt.preventDefault()
    if (typeof this.props.onClose === 'function') this.props.onClose()
  }
  navigate(direction, evt) {
    evt.stopPropagation()
    evt.preventDefault()
    const newIndex = this.state.activeIndex + (direction === 'up' ? -1 : 1)
    const lastIndex = React.Children.count(this.props.children) - 1
    const activeIndex = newIndex > lastIndex ? lastIndex : newIndex
    this.setState({ activeIndex, activeDirection: direction })
  }
  navigateTab(evt) {
    const direction = evt.shiftKey ? 'up' : 'down'
    const { activeIndex } = this.state
    const lastIndex = React.Children.count(this.props.children) - 1
    const atEdge =
      (direction === 'up' && activeIndex === 0) ||
      (direction === 'down' && activeIndex === lastIndex)

    if (atEdge) {
      this.navigateOut(evt)
    } else {
      this.navigate(direction, evt)
    }
  }
  render() {
    return (
      <Menu
        css={this.props.css}
        className={this.props.className}
        onKeyDown={this.handleKeyDown}
        origin={this.props.origin}
        innerRef={this.props.ref}
        role="menu"
        onClick={this.props.onClick}
        style={this.props.style}
      >
        {React.Children.map(this.props.children, (child, i) =>
          React.cloneElement(child, {
            isActive: i === this.state.activeIndex,
            shouldFocusOnMount: this.props.shouldFocusOnMount,
            _i: i,
            _onItemFocus: this.focusItemAtIndex,
            _onDividerFocus: this.handleDividerFocus,
            _onMouseOver: this.focusItemAtIndex,
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
