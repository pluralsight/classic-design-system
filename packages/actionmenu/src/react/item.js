import { compose, css } from 'glamor'
import PropTypes from 'prop-types'
import React, { useState, useRef, forwardRef, useImperativeHandle } from 'react'

import { calcNestedMenuPosition } from '../js/index.js'
import filterReactProps from '@pluralsight/ps-design-system-filter-react-props'

import stylesheet from '../css/index.js'

import Arrow from './arrow.js'
const slide = css.keyframes(
  stylesheet['@keyframes psds-actionmenu__keyframes__slide']
)
const styles = {
  itemContainer: ({ disabled }) =>
    compose(
      css(stylesheet['.psds-actionmenu__item-container']),
      disabled && css(stylesheet['.psds-actionmenu__item--disabled'])
    ),
  item: ({ disabled, hasSubMenu }) =>
    compose(
      css(stylesheet['.psds-actionmenu__item']),
      css({
        ':focus': stylesheet['.psds-actionmenu__item--focus-keyboard'],
        ':focus div':
          stylesheet['.psds-actionmenu__item__arrow--focus-keyboard']
      }),
      hasSubMenu && css(stylesheet['.psds-actionmenu__item--nested'])
    ),
  inner: _ => css(stylesheet['.psds-actionmenu__item-inner']),
  nested: _ =>
    compose(
      css(stylesheet['.psds-actionmenu']({ slide })),
      css(stylesheet['.psds-actionmenu__nested'])
    ),
  textOnly: _ => css(stylesheet['.psds-actionmenu__text-only'])
}

const Item = forwardRef(
  (
    { disabled, nested, origin, href, value, className, children, ...rest },
    forwardedRef
  ) => {
    const ref = useRef()
    const subMenuRef = useRef()
    useImperativeHandle(forwardedRef, () => ref.current)
    const TagName = href ? 'a' : 'button'
    const [open, setOpen] = useState(false)
    const hasSubMenu = Boolean(nested)
    const handleMouseOver = e => {
      hasSubMenu && setOpen(true)
    }
    const handleMouseOut = e => {
      hasSubMenu && setOpen(false)
    }
    const handleArrowRight = e => {
      if (e.key === 'ArrowRight' && hasSubMenu) {
        setOpen(true)
        e.stopPropagation()
      }
    }
    const handleArrowLeft = e => {
      if (e.key === 'ArrowLeft' && hasSubMenu) {
        setOpen(false)
        e.stopPropagation()
      }
    }
    const subMenuAlignment = ref.current
      ? calcNestedMenuPosition(
          ref.current.getBoundingClientRect(),
          subMenuRef.current.getBoundingClientRect(),
          origin
        )
      : {}
    return (
      <li
        {...styles.itemContainer({ disabled })}
        role="none"
        ref={ref}
        disabled={disabled}
        tabIndex={!disabled ? '-1' : undefined}
        onKeyDown={handleArrowRight}
        onMouseOver={handleMouseOver}
        onMouseOut={handleMouseOut}
      >
        <TagName
          {...filterReactProps(rest, { tagName: TagName })}
          {...styles.item({ disabled, hasSubMenu })}
          aria-haspopup={!!nested}
          role="menuitem"
          value={!href && value}
          disabled={disabled}
          tabIndex="-1"
        >
          <div className={className} {...styles.inner()}>
            {typeof children === 'string' ? (
              <span {...styles.textOnly()}>{children}</span>
            ) : (
              children
            )}
            {hasSubMenu && <Arrow />}
          </div>
        </TagName>

        <ul
          {...styles.nested()}
          role="menu"
          aria-expanded={open}
          ref={subMenuRef}
          onKeyDown={handleArrowLeft}
          style={{ ...subMenuAlignment }}
        >
          {!disabled && nested}
        </ul>
      </li>
    )
  }
)

Item.displayName = 'ActionMenu.Item'
Item.propTypes = {
  children: PropTypes.node,
  disabled: PropTypes.bool,
  href: PropTypes.string,
  className: PropTypes.string,
  origin: PropTypes.string,
  nested: PropTypes.oneOfType([
    PropTypes.node,
    PropTypes.arrayOf(PropTypes.node)
  ]),
  value: PropTypes.oneOfType([PropTypes.string, PropTypes.number])
}

export default Item
