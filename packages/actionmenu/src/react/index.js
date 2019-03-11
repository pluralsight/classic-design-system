import { elementOfType } from '@pluralsight/ps-design-system-prop-types'
import filterReactProps from '@pluralsight/ps-design-system-filter-react-props'
import * as glamor from 'glamor'
import * as iconVars from '@pluralsight/ps-design-system-icon/vars'
import PropTypes from 'prop-types'
import React from 'react'

import { calcNextIndex } from '../js/index.js'
import css from '../css/index.js'
import * as vars from '../vars/index.js'

import Arrow from './arrow.js'

const slide = glamor.css.keyframes(
  css['@keyframes psds-actionmenu__keyframes__slide']
)
const styles = {
  arrow: ({ _isKeyboarding }) =>
    glamor.css(css['.psds-actionmenu__item__arrow']),
  divider: () => glamor.css(css['.psds-actionmenu__divider']),
  menu: props =>
    glamor.css(
      css['.psds-actionmenu']({ slide }),
      css[`.psds-actionmenu--origin-${props.origin}`],
      props.css
    ),
  item: ({ _isKeyboarding, disabled, icon, isActive, nested }) =>
    glamor.css(
      css['.psds-actionmenu__item'],
      _isKeyboarding
        ? !disabled && {
            ':focus': css['.psds-actionmenu__item--focus-keyboard'],
            ':focus div': css['.psds-actionmenu__item__arrow--focus-keyboard']
          }
        : !disabled && {
            ':focus': css['.psds-actionmenu__item:focus'],
            ':hover': css['.psds-actionmenu__item--link'],
            ':active': css['.psds-actionmenu__item--link'],
            ':visited': css['.psds-actionmenu__item--link']
          },
      icon ? css['.psds-actionmenu__item--icon'] : null,
      nested ? css['.psds-actionmenu__item--nested'] : null,
      isActive ? css['.psds-actionmenu__item--isActive'] : null,
      disabled && css['.psds-actionmenu__item--disabled']
    )
}

class ActionMenu extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      activeIndex: props.shouldFocusOnMount
        ? calcNextIndex(
            React.Children.map(this.props.children, c => c.props),
            1,
            -1
          )
        : -1,
      activeDirection: 'down',
      isKeyboarding: props.isKeyboarding
    }
    this.handleKeyDown = this.handleKeyDown.bind(this)
    this.handleDividerFocus = this.handleDividerFocus.bind(this)
    this.focusItemAtIndex = this.focusItemAtIndex.bind(this)
    this.focusItemAtIndexWithMouse = this.focusItemAtIndexWithMouse.bind(this)
  }
  handleKeyDown(evt) {
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
  focusItemAtIndexWithMouse(i) {
    this.focusItemAtIndex(i)
    this.setState({ isKeyboarding: false })
  }
  navigateOut(evt) {
    evt.stopPropagation()
    evt.preventDefault()
    if (typeof this.props.onClose === 'function') this.props.onClose()
  }
  navigate(direction, evt) {
    evt.stopPropagation()
    evt.preventDefault()
    const activeIndex = calcNextIndex(
      React.Children.map(this.props.children, c => c.props),
      direction === 'down' ? 1 : -1,
      this.state.activeIndex
    )

    this.setState({
      activeIndex,
      activeDirection: direction,
      isKeyboarding: true
    })
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
    const { ref: innerRef, ...rest } = this.props

    return (
      <Menu
        {...rest}
        innerRef={innerRef}
        onKeyDown={this.handleKeyDown}
        role="menu"
      >
        {React.Children.map(this.props.children, (child, i) =>
          React.cloneElement(child, {
            isActive: i === this.state.activeIndex,
            shouldFocusOnMount: this.props.shouldFocusOnMount,
            _i: i,
            _isKeyboarding: this.state.isKeyboarding,
            _onItemFocus: this.focusItemAtIndex,
            _onDividerFocus: this.handleDividerFocus,
            _onMouseOver: this.focusItemAtIndexWithMouse,
            _origin: this.props.origin
          })
        )}
      </Menu>
    )
  }
}
ActionMenu.displayName = 'ActionMenu'

const ItemIcon = props => {
  return (
    <div {...glamor.css(css['.psds-actionmenu__item__icon'])}>
      {React.cloneElement(props.children, { size: iconVars.sizes.medium })}
    </div>
  )
}
ItemIcon.propTypes = {
  children: PropTypes.element // Icon
}

const NestedArrow = props => (
  <div {...styles.arrow(props)}>
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

class Item extends React.Component {
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
    if (!this.props.disabled) {
      if (this.props.nested) this.setState({ isNestedRendered: true })
      this.props._onMouseOver(this.props._i)
    }
  }
  handleMouseOut() {
    if (!this.props.disabled) {
      if (this.props.nested) this.setState({ isNestedRendered: false })
    }
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
          isKeyboarding: this.props._isKeyboarding,
          onClose: this.handleNestedClose,
          origin: this.props._origin,
          shouldFocusOnMount: this.props.shouldFocusOnMount
        })
      : null
  }
  render() {
    const tagName = this.props.href ? 'a' : 'button'
    const { href, icon, ...potentialValidHtmlProps } = this.props
    return (
      <div {...glamor.css(css['.psds-actionmenu__item-container'])}>
        {React.createElement(
          tagName,
          {
            ...filterReactProps(potentialValidHtmlProps, { tagName }),
            'aria-haspopup': !!this.props.nested,
            ...(!this.props.disabled ? { href: this.props.href } : null),
            ref: el => (this.item = el),
            onClick: this.props.onClick,
            onKeyDown: this.handleKeyDown,
            onMouseOver: this.handleMouseOver,
            ...(!this.props.disabled ? { onFocus: this.handleFocus } : null),
            role: 'menuitem',
            ...styles.item(this.props),
            tabIndex: this.props.disabled ? '-1' : '0'
          },
          this.props.icon && <ItemIcon>{this.props.icon}</ItemIcon>,
          this.props.children,
          this.props.nested && (
            <NestedArrow _isKeyboarding={this.props._isKeyboarding} />
          )
        )}
        {this.renderNested()}
      </div>
    )
  }
}
Item.displayName = 'ActionMenu.Item'
Item.propTypes = {
  children: PropTypes.node,
  disabled: PropTypes.bool,
  href: PropTypes.string,
  icon: PropTypes.node,
  isActive: PropTypes.bool,
  nested: elementOfType(ActionMenu),
  onClick: PropTypes.func,
  shouldFocusOnMount: PropTypes.bool,
  _i: PropTypes.number,
  _isKeyboarding: PropTypes.bool,
  _onMouseOver: PropTypes.func,
  _onItemFocus: PropTypes.func,
  _origin: PropTypes.oneOf(Object.keys(vars.origins).map(k => vars.origins[k]))
}

class Divider extends React.Component {
  componentDidMount() {
    if (this.props.isActive) this.props._onDividerFocus()
  }
  componentDidUpdate() {
    if (this.props.isActive) this.props._onDividerFocus()
  }
  render() {
    return (
      <div
        {...styles.divider(this.props)}
        tabIndex="-1"
        {...filterReactProps(this.props)}
      />
    )
  }
}
Divider.propTypes = {
  _onDividerFocus: PropTypes.func,
  isActive: PropTypes.bool
}

const Overlay = props => (
  <div
    {...glamor.css(css['.psds-actionmenu__overlay'])}
    onClick={props.onClick}
  />
)
Overlay.propTypes = {
  onClick: PropTypes.func
}

const Menu = props => (
  <div {...styles.menu(props)} {...filterReactProps(props)} />
)

ActionMenu.Item = Item
ActionMenu.Divider = Divider
ActionMenu.Overlay = Overlay
ActionMenu.origins = vars.origins
ActionMenu.propTypes = {
  children: PropTypes.oneOfType([
    elementOfType(Item),
    elementOfType(Divider),
    PropTypes.arrayOf(
      PropTypes.oneOfType([elementOfType(Item), elementOfType(Divider)])
    )
  ]),
  isKeyboarding: PropTypes.bool,
  onClose: PropTypes.func,
  origin: PropTypes.oneOf(Object.keys(vars.origins).map(k => vars.origins[k])),
  ref: PropTypes.func,
  shouldFocusOnMount: PropTypes.bool
}
ActionMenu.defaultProps = {
  isKeyboarding: false,
  origin: vars.origins.topLeft,
  shouldFocusOnMount: true
}

export const origins = vars.origins

export default ActionMenu
