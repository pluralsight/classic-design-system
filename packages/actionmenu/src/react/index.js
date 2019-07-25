import { elementOfType } from '@pluralsight/ps-design-system-prop-types'
import * as glamor from 'glamor'
import React from 'react'
import PropTypes from 'prop-types'

import filterReactProps from '@pluralsight/ps-design-system-filter-react-props'
import { vars as iconVars } from '@pluralsight/ps-design-system-icon'

import { calcNextIndex } from '../js/index.js'
import css from '../css/index.js'
import * as vars from '../vars/index.js'

import Arrow from './arrow.js'

const slide = glamor.css.keyframes(
  css['@keyframes psds-actionmenu__keyframes__slide']
)
const styles = {
  arrow: () => glamor.css(css['.psds-actionmenu__item__arrow']),
  divider: () => glamor.css(css['.psds-actionmenu__divider']),
  menu: props =>
    glamor.css(
      css['.psds-actionmenu']({ slide }),
      css[`.psds-actionmenu--origin-${props.origin}`],
      props.css
    ),
  overlay: () => glamor.css(css['.psds-actionmenu__overlay']),
  itemContainer: () => glamor.css(css['.psds-actionmenu__item-container']),
  itemIcon: () => glamor.css(css['.psds-actionmenu__item__icon']),
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

const ActionMenu = React.forwardRef((props, forwardedRef) => {
  const ref = forwardedRef || React.useRef()

  const initialIndex = props.shouldFocusOnMount
    ? calcNextIndex(React.Children.map(props.children, c => c.props), 1, -1)
    : -1
  const [activeIndex, setActiveIndex] = React.useState(initialIndex)

  const [activeDirection, setActiveDirection] = React.useState('down')

  const [isKeyboarding, setIsKeyboarding] = React.useState(props.isKeyboarding)

  function handleKeyDown(evt) {
    if (evt.key === 'ArrowLeft' || evt.key === 'Escape') {
      navigateOut(evt)
    } else if (evt.key === 'ArrowDown') {
      navigate(evt, 'down')
    } else if (evt.key === 'ArrowUp') {
      navigate(evt, 'up')
    } else if (evt.key === 'Tab') {
      navigateTab(evt)
    }
  }

  function handleDividerFocus() {
    if (activeDirection === 'down') {
      const newIndex = activeIndex + 1
      const itemsCount = React.Children.count(props.children)
      const nextActiveIndex =
        newIndex > itemsCount - 1 ? itemsCount - 1 : newIndex

      setActiveIndex(nextActiveIndex)
      setActiveDirection('down')
    } else if (activeDirection === 'up') {
      const newIndex = activeIndex - 1
      const nextActiveIndex = newIndex <= 0 ? 0 : newIndex

      setActiveIndex(nextActiveIndex)
      setActiveDirection('up')
    }
  }

  function focusItemAtIndex(index) {
    setActiveIndex(index)
  }

  function focusItemAtIndexWithMouse(index) {
    focusItemAtIndex(index)
    setIsKeyboarding(false)
  }

  function navigate(evt, direction) {
    evt.stopPropagation()
    evt.preventDefault()

    const nextActiveIndex = calcNextIndex(
      React.Children.map(props.children, c => c.props),
      direction === 'down' ? 1 : -1,
      activeIndex
    )

    setActiveDirection(direction)
    setActiveIndex(nextActiveIndex)
    setIsKeyboarding(true)
  }

  function navigateOut(evt) {
    evt.stopPropagation()
    evt.preventDefault()

    if (typeof props.onClose === 'function') props.onClose(evt)
  }

  function navigateTab(evt) {
    const direction = evt.shiftKey ? 'up' : 'down'
    const lastIndex = React.Children.count(props.children) - 1
    const atEdge =
      (direction === 'up' && activeIndex === 0) ||
      (direction === 'down' && activeIndex === lastIndex)

    if (atEdge) navigateOut(evt)
    else navigate(evt, direction)
  }

  function handleChange(evt, value, label) {
    if (typeof props.onChange === 'function') props.onChange(evt, value, label)
  }

  return (
    <Menu onKeyDown={handleKeyDown} ref={ref} role="menu" {...props}>
      {React.Children.map(props.children, (child, i) =>
        React.cloneElement(child, {
          isActive: i === activeIndex,
          shouldFocusOnMount: props.shouldFocusOnMount,

          _i: i,
          _isKeyboarding: isKeyboarding,
          _onDividerFocus: handleDividerFocus,
          _onItemFocus: focusItemAtIndex,
          _onMouseOver: focusItemAtIndexWithMouse,
          _onChange: handleChange,
          _origin: props.origin
        })
      )}
    </Menu>
  )
})
ActionMenu.displayName = 'ActionMenu'

const ItemIcon = props => {
  return (
    <div {...styles.itemIcon(props)}>
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

function usePrevious(value) {
  const ref = React.useRef()

  React.useEffect(() => {
    ref.current = value
  }, [value])

  return ref.current
}

const Item = props => {
  const { icon, isActive, ...rest } = props
  const TagName = props.href ? 'a' : 'button'
  const prevIsActive = usePrevious(isActive)

  const itemRef = React.useRef()
  const [isNestedRendered, setIsNestedRendered] = React.useState(false)

  React.useEffect(() => {
    if (isActive && props.shouldFocusOnMount) itemRef.current.focus()
  }, [isActive, props.shouldFocusOnMount])

  React.useEffect(() => {
    if (!prevIsActive && isActive && !isNestedRendered) {
      itemRef.current.focus()
    }
  }, [isActive, isNestedRendered, prevIsActive])

  function handleFocus(evt) {
    props._onItemFocus(props._i)
  }

  function handleKeyDown(evt) {
    if (evt.key === 'Enter') props._onChange(evt, props.value, props.children)

    if (
      (evt.key === 'ArrowRight' || evt.key === ' ' || evt.key === 'Enter') &&
      props.nested
    ) {
      evt.stopPropagation()
      evt.preventDefault()

      setIsNestedRendered(true)
    }
  }

  function handleMouseOver(evt) {
    if (!props.disabled) {
      if (props.nested) setIsNestedRendered(true)
      props._onMouseOver(props._i)
    }
  }

  function handleNestedClose(evt) {
    setIsNestedRendered(false)
    itemRef.current.focus()
  }

  function handleChange(evt) {
    props._onChange(evt, props.value, props.children)
    if (typeof props.onClick === 'function') props.onClick(evt)
  }

  const nestedMenu =
    isNestedRendered &&
    props.nested &&
    isActive &&
    React.cloneElement(props.nested, {
      css: calcNestedMenuPosition(
        itemRef.current.getBoundingClientRect().width,
        props._origin
      ),
      isKeyboarding: props._isKeyboarding,
      onClose: handleNestedClose,
      onChange: props._onChange,
      origin: props._origin
    })

  return (
    <div {...styles.itemContainer(props)}>
      <TagName
        {...filterReactProps(rest, { tagName: TagName })}
        {...styles.item(props)}
        aria-haspopup={!!props.nested}
        onClick={handleChange}
        onFocus={handleFocus}
        onKeyDown={handleKeyDown}
        onMouseOver={handleMouseOver}
        ref={itemRef}
        role="menuitem"
        tabIndex="0"
        {...(props.disabled && {
          href: undefined,
          onFocus: undefined,
          tabIndex: '-1'
        })}
      >
        {icon && <ItemIcon>{icon}</ItemIcon>}

        {props.children}

        {props.nested && <NestedArrow _isKeyboarding={props._isKeyboarding} />}
      </TagName>

      {nestedMenu}
    </div>
  )
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
  value: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  _i: PropTypes.number,
  _isKeyboarding: PropTypes.bool,
  _onItemFocus: PropTypes.func,
  _onMouseOver: PropTypes.func,
  _onChange: PropTypes.func,
  _origin: PropTypes.oneOf(Object.keys(vars.origins).map(k => vars.origins[k]))
}

const Divider = props => {
  React.useEffect(() => {
    if (props.isActive) props._onDividerFocus()
  })

  return <div {...styles.divider(props)} {...filterReactProps(props)} />
}
Divider.propTypes = {
  _onDividerFocus: PropTypes.func,
  isActive: PropTypes.bool
}
Divider.defaultProps = {
  tabIndex: '-1'
}

const Overlay = props => (
  <div {...styles.overlay(props)} onClick={props.onClick} />
)
Overlay.propTypes = {
  onClick: PropTypes.func
}

const Menu = React.forwardRef((props, ref) => (
  <div {...styles.menu(props)} {...filterReactProps(props)} ref={ref} />
))

ActionMenu.Item = Item
ActionMenu.Divider = Divider
ActionMenu.Overlay = Overlay

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
  onChange: PropTypes.func,
  origin: PropTypes.oneOf(Object.keys(vars.origins).map(k => vars.origins[k])),
  shouldFocusOnMount: PropTypes.bool
}
ActionMenu.defaultProps = {
  isKeyboarding: false,
  origin: vars.origins.topLeft,
  shouldFocusOnMount: true
}

ActionMenu.origins = vars.origins
export const origins = vars.origins

export default ActionMenu
