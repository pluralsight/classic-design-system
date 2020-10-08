import filterReactProps from '@pluralsight/ps-design-system-filter-react-props'
import { StyleAttribute, compose, css } from 'glamor'
import React, {
  HTMLAttributes,
  KeyboardEventHandler,
  MouseEventHandler,
  useState,
  useRef,
  forwardRef,
  useImperativeHandle,
  useContext
} from 'react'

import * as stylesheet from '../css'
import { tagName } from '../vars'

import { ActionMenuContext } from './context'
import { Arrow } from './arrow'

type StyleFn = (obj?: unknown) => StyleAttribute

const styles: { [name: string]: StyleFn } = {
  itemContainer: ({ disabled }: { disabled: boolean }) =>
    compose(
      css(stylesheet['.psds-actionmenu__item-container']),
      disabled && css(stylesheet['.psds-actionmenu__item--disabled'])
    ),
  item: ({ hasSubMenu }: { hasSubMenu: boolean }) =>
    compose(
      css(stylesheet['.psds-actionmenu__item']),
      css({
        ':focus': stylesheet['.psds-actionmenu__item--focus-keyboard'],
        ':focus div':
          stylesheet['.psds-actionmenu__item__arrow--focus-keyboard']
      }),
      hasSubMenu && css(stylesheet['.psds-actionmenu__item--nested'])
    ),
  inner: () => css(stylesheet['.psds-actionmenu__item-inner']),
  nested: ({ origin }: { origin: string }) =>
    compose(
      css(stylesheet['.psds-actionmenu']),
      css(stylesheet['.psds-actionmenu__nested']),
      css(
        stylesheet[`.psds-actionmenu__nested.psds-actionmenu--origin-${origin}`]
      )
    ),
  textOnly: () => css(stylesheet['.psds-actionmenu__text-only'])
}

interface ItemProps extends Omit<HTMLAttributes<HTMLLIElement>, 'onClick'> {
  className?: string
  disabled?: boolean
  href?: string
  nested?: React.ReactNode
  onClick?: (event: React.MouseEvent, value: string | number) => void
  origin?: string
  tagName?: string
  value?: string | number
}
export const Item = forwardRef<HTMLLIElement, ItemProps>(
  (props, forwardedRef) => {
    const {
      children,
      className,
      disabled,
      nested,
      onClick,
      origin,
      tagName: TagName = tagName.a,
      value,
      ...rest
    } = props

    const { onClickContext, onClose, originContext } = useContext(
      ActionMenuContext
    )

    const ref = useRef()
    useImperativeHandle(forwardedRef, () => ref.current)

    const subMenuRef = useRef()

    const [open, setOpen] = useState(false)
    const hasSubMenu = Boolean(nested)

    const handleMouseOver: MouseEventHandler<HTMLLIElement> = () => {
      hasSubMenu && setOpen(true)
    }

    const handleMouseOut: MouseEventHandler<HTMLLIElement> = () => {
      hasSubMenu && setOpen(false)
    }

    const handleKeyDown: KeyboardEventHandler<HTMLLIElement> = evt => {
      if (evt.key === 'ArrowRight' && hasSubMenu) {
        setOpen(true)
        evt.stopPropagation()
      }

      if (evt.key === 'Enter' || evt.key === 'Space') {
        const target = evt.target as HTMLUListElement
        const firstEl = target.firstElementChild as HTMLLIElement
        firstEl.click()
      }

      evt.preventDefault()
    }
    const handleArrowLeft: KeyboardEventHandler<HTMLUListElement> = evt => {
      if (evt.key === 'ArrowLeft' && hasSubMenu) {
        setOpen(false)
        evt.stopPropagation()
      }
    }
    const handleClick: MouseEventHandler<HTMLLIElement> = evt => {
      onClick && onClick(evt, value)
      onClickContext && onClickContext(evt, value)
      onClose && onClose(evt, value) // : e.currentTarget.parentNode.focus()
    }

    return (
      <li
        {...styles.itemContainer({ disabled })}
        data-disabled={disabled}
        onKeyDown={handleKeyDown}
        onMouseOut={handleMouseOut}
        onMouseOver={handleMouseOver}
        ref={ref}
        role="none"
        tabIndex={!disabled ? -1 : undefined}
      >
        <TagName
          {...filterReactProps(rest, { tagName: TagName })}
          {...styles.item({ hasSubMenu })}
          aria-haspopup={!!nested}
          disabled={disabled}
          onClick={!hasSubMenu ? handleClick : undefined}
          role="menuitem"
        >
          <div className={className} {...styles.inner()}>
            {children}
            {hasSubMenu && <Arrow />}
          </div>
        </TagName>

        <ul
          {...styles.nested({ origin: origin || originContext })}
          aria-expanded={open}
          onKeyDown={handleArrowLeft}
          ref={subMenuRef}
          role="menu"
        >
          {!disabled && nested}
        </ul>
      </li>
    )
  }
)

Item.displayName = 'ActionMenu.Item'
