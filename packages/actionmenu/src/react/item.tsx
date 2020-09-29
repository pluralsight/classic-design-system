import { compose, css } from 'glamor'
import PropTypes from 'prop-types'
import React, {
  useState,
  useRef,
  forwardRef,
  useImperativeHandle,
  useContext,
  HTMLAttributes
} from 'react'

import filterReactProps from '@pluralsight/ps-design-system-filter-react-props'
import stylesheet from '../css/index.js'
import { tagName } from '../vars/index.js'
import { ActionMenuContext } from './menu.js'
import { Arrow } from './arrow.js'

const styles = {
  itemContainer: ({ disabled }: { disabled: boolean}) =>
    compose(
      css(stylesheet['.psds-actionmenu__item-container']),
      disabled && css(stylesheet['.psds-actionmenu__item--disabled'])
    ),
  item: ({ hasSubMenu }: { hasSubMenu: boolean}) =>
    compose(
      css(stylesheet['.psds-actionmenu__item']),
      css({
        ':focus': stylesheet['.psds-actionmenu__item--focus-keyboard'],
        ':focus div':
          stylesheet['.psds-actionmenu__item__arrow--focus-keyboard']
      }),
      hasSubMenu && css(stylesheet['.psds-actionmenu__item--nested'])
    ),
  inner:  () => css(stylesheet['.psds-actionmenu__item-inner']),
  nested: ({ origin }: { origin: string}) =>
    compose(
      css(stylesheet['.psds-actionmenu']),
      css(stylesheet['.psds-actionmenu__nested']),
      css(
        stylesheet[`.psds-actionmenu__nested.psds-actionmenu--origin-${origin}`]
      )
    ),
  textOnly: () => css(stylesheet['.psds-actionmenu__text-only'])
}

interface Props  {
  children: React.ReactNode;
  disabled: boolean;
  tagName: string;
  className: string;
  origin: string;
  onClick: (event: React.MouseEvent, value: string | number ) => void;
  nested: React.ReactNode | Array<React.ReactNode>;
  value: string | number;
}

export const Item: React.FC<Props> = forwardRef(
  (
    {
      disabled,
      nested,
      origin,
      value,
      className,
      children,
      onClick,
      tagName,
      ...rest
    },
    forwardedRef
  ) => {
    const { onClickContext, onClose, originContext } : { onClickContext : (e: Event, v: string | number) => void } = useContext(
      ActionMenuContext
    )
    const ref = useRef()
    const subMenuRef = useRef()
    useImperativeHandle(forwardedRef, () => ref.current)
    const TagName = tagName
    const [open, setOpen] = useState(false)
    const hasSubMenu = Boolean(nested)
    const handleMouseOver = e => {
      hasSubMenu && setOpen(true)
    }
    const handleMouseOut = e => {
      hasSubMenu && setOpen(false)
    }
    const handleKeyDown = e => {
      if (e.key === 'ArrowRight' && hasSubMenu) {
        setOpen(true)
        e.stopPropagation()
      }
      if (e.key === 'Enter' || e.key === 'Space') {
        e.target.firstElementChild.click()
      }
      e.preventDefault()
    }
    const handleArrowLeft = e => {
      if (e.key === 'ArrowLeft' && hasSubMenu) {
        setOpen(false)
        e.stopPropagation()
      }
    }
    const handleClick = e => {
      onClick && onClick(e, value)
      onClickContext && onClickContext(e, value)
      onClose && onClose(e, value) // : e.currentTarget.parentNode.focus()
    }
    return (
      <li
        {...styles.itemContainer({ disabled })}
        role="none"
        ref={ref}
        data-disabled={disabled}
        tabIndex={!disabled ? -1 : undefined}
        onKeyDown={handleKeyDown}
        onMouseOver={handleMouseOver}
        onMouseOut={handleMouseOut}
      >
        <TagName
          {...filterReactProps(rest, { tagName })}
          {...styles.item({ hasSubMenu })}
          aria-haspopup={!!nested}
          role="menuitem"
          disabled={disabled}
          onClick={!hasSubMenu ? handleClick : undefined}
        >
          <div className={className} {...styles.inner()}>
            {children}
            {hasSubMenu && <Arrow />}
          </div>
        </TagName>
        <ul
          {...styles.nested({ origin: origin || originContext })}
          role="menu"
          aria-expanded={open}
          ref={subMenuRef}
          onKeyDown={handleArrowLeft}
        >
          {!disabled && nested}
        </ul>
      </li>
    )
  }
)

Item.displayName = 'ActionMenu.Item'
Item.defaultProps = {
  tagName: tagName.a
}
Item.propTypes = {
  children: PropTypes.node,
  disabled: PropTypes.bool,
  tagName: PropTypes.string,
  className: PropTypes.string,
  origin: PropTypes.string,
  onClick: PropTypes.func,
  nested: PropTypes.oneOfType([
    PropTypes.node,
    PropTypes.arrayOf(PropTypes.node)
  ]),
  value: PropTypes.oneOfType([PropTypes.string, PropTypes.number])
}
