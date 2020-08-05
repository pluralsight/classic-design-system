import { compose, css } from 'glamor'
import PropTypes from 'prop-types'
import React, {
  useState,
  useRef,
  forwardRef,
  useImperativeHandle,
  createRef
} from 'react'

import { elementOfType } from '@pluralsight/ps-design-system-prop-types'
import filterReactProps from '@pluralsight/ps-design-system-filter-react-props'

import stylesheet from '../css/index.js'

import Arrow from './arrow.js'
const slide = css.keyframes(
  stylesheet['@keyframes psds-actionmenu__keyframes__slide']
)
const styles = {
  itemContainer: () => css(stylesheet['.psds-actionmenu__item-container']),
  item: ({ disabled, hasSubMenu }) =>
    compose(
      css(stylesheet['.psds-actionmenu__item']),
      css({
        ':focus': stylesheet['.psds-actionmenu__item--focus-keyboard'],
        ':focus div':
          stylesheet['.psds-actionmenu__item__arrow--focus-keyboard']
      }),
      hasSubMenu && css(stylesheet['.psds-actionmenu__item--nested']),
      disabled && css(stylesheet['.psds-actionmenu__item--disabled'])
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
    { disabled, subMenuItems, href, value, className, children, ...rest },
    forwardedRef
  ) => {
    const ref = useRef()
    // const subMenuRef = useRef()
    useImperativeHandle(forwardedRef, () => ref.current)
    const TagName = href ? 'a' : 'button'
    // const [open, setOpen] = useState(false)
    const hasSubMenu = Boolean(subMenuItems)
    // const handleMouseOver = e => {
    //   hasSubMenu && setOpen(true)
    // }
    // const handleMouseOut = e => {
    //   hasSubMenu && setOpen(false)
    // }
    // const handlerKeyDown = e => {
    //   e.key === 'ArrowRight' && hasSubMenu && setOpen(true)
    // }
    // const handleBlur = e => {
    //   // console.log(e.target.closest('ul').innerText, subMenuRef.current)
    //   if (
    //     [...subMenuRef.current.querySelectorAll('* > li')].includes(e.target)
    //   ) {
    //     setOpen(false)
    //   }
    // }
    return (
      <li {...styles.itemContainer()} role="none" ref={ref} tabIndex="-1">
        <TagName
          {...filterReactProps(rest, { tagName: TagName })}
          {...styles.item({ disabled, hasSubMenu })}
          aria-haspopup={!!subMenuItems}
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

        <ul {...styles.nested()} role="menu">
          {!disabled && subMenuItems}
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
  subMenuItems: PropTypes.oneOfType([
    PropTypes.node,
    PropTypes.arrayOf(PropTypes.node)
  ]),
  value: PropTypes.oneOfType([PropTypes.string, PropTypes.number])
}

export default Item
