import { compose, css } from 'glamor'
import PropTypes from 'prop-types'
import React from 'react'

import { elementOfType } from '@pluralsight/ps-design-system-prop-types'
import filterReactProps from '@pluralsight/ps-design-system-filter-react-props'

import { calcNestedMenuPosition } from '../js/index.js'
import stylesheet from '../css/index.js'
import * as vars from '../vars/index.js'

import ActionMenu from './menu.js'
import Arrow from './arrow.js'
import ItemIcon from './item-icon.js'

const styles = {
  itemContainer: () => css(stylesheet['.psds-actionmenu__item-container']),
  item: ({ _isKeyboarding, disabled, icon, isActive, nested }) => {
    const focused = _isKeyboarding && !disabled

    return compose(
      css(stylesheet['.psds-actionmenu__item']),
      focused &&
        css({
          ':focus': stylesheet['.psds-actionmenu__item--focus-keyboard'],
          ':focus div':
            stylesheet['.psds-actionmenu__item__arrow--focus-keyboard']
        }),
      icon && css(stylesheet['.psds-actionmenu__item--icon']),
      nested && css(stylesheet['.psds-actionmenu__item--nested']),
      isActive && css(stylesheet['.psds-actionmenu__item--isActive']),
      disabled && css(stylesheet['.psds-actionmenu__item--disabled'])
    )
  },
  inner: _ => css(stylesheet['.psds-actionmenu__item-inner'])
}

export default function Item(props) {
  const { icon, isActive, ...rest } = props
  const TagName = props.href ? 'a' : 'button'
  const prevIsActive = usePrevious(isActive)

  const itemRef = React.useRef()
  const [isNestedRendered, setIsNestedRendered] = React.useState(false)

  React.useEffect(() => {
    if (isActive && props.shouldFocusOnMount) {
      delayUntilNextTick(_ => itemRef.current && itemRef.current.focus())
    }
  }, [isActive, props.shouldFocusOnMount])

  React.useEffect(() => {
    if (!prevIsActive && isActive && !isNestedRendered) {
      delayUntilNextTick(_ => itemRef.current && itemRef.current.focus())
    }
  }, [isActive, isNestedRendered, prevIsActive])

  function handleFocus(evt) {
    delayUntilNextTick(_ => props._onItemFocus(props._i))
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
      style: calcNestedMenuPosition(
        itemRef.current.getBoundingClientRect().width,
        props._origin
      ),
      isKeyboarding: props._isKeyboarding,
      onClose: handleNestedClose,
      onChange: props._onChange,
      origin: props._origin,
      _isNested: true
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

        <span {...styles.inner()}>{props.children}</span>

        {props.nested && <Arrow _isKeyboarding={props._isKeyboarding} />}
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

function usePrevious(value) {
  const ref = React.useRef()

  React.useEffect(() => {
    ref.current = value
  }, [value])

  return ref.current
}

function delayUntilNextTick(fn) {
  setTimeout(fn, 0)
}
