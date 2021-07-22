import { RefFor, ValueOf } from '@pluralsight/ps-design-system-util'
import glamorDefault, * as glamorExports from 'glamor'
import React from 'react'

import stylesheet from '../css/index'
import { origins, tagName as tagNames } from '../vars/index'

import { ActionMenuContext } from './context'
import { Arrow } from './arrow'

const glamor = glamorDefault || glamorExports

const styles = {
  itemContainer: ({
    active,
    disabled
  }: Pick<ItemProps, 'active' | 'disabled'>) =>
    glamor.compose(
      glamor.css(stylesheet['.psds-actionmenu__item-container']),
      disabled && glamor.css(stylesheet['.psds-actionmenu__item--disabled']),
      active &&
        glamor.css(stylesheet['.psds-actionmenu__item-container--active'])
    ),
  item: ({ hasSubMenu }: { hasSubMenu: boolean }) =>
    glamor.compose(
      glamor.css(stylesheet['.psds-actionmenu__item']),
      hasSubMenu && glamor.css(stylesheet['.psds-actionmenu__item--nested'])
    ),
  inner: () => glamor.css(stylesheet['.psds-actionmenu__item-inner']),
  nested: ({ origin }: { origin?: ValueOf<typeof origins> }) =>
    glamor.compose(
      glamor.css(stylesheet['.psds-actionmenu']),
      glamor.css(stylesheet['.psds-actionmenu__nested']),
      glamor.css(
        stylesheet[`.psds-actionmenu__nested.psds-actionmenu--origin-${origin}`]
      )
    )
}

interface ItemProps extends React.HTMLAttributes<HTMLLIElement> {
  active?: boolean
  className?: string
  disabled?: boolean
  nested?: React.ReactNode
  onClick?: (event: React.MouseEvent, value?: React.ReactText) => void
  origin?: ValueOf<typeof origins>
  value?: React.ReactText
  ref?: RefFor<'li'>
  tagName?: 'a' | 'button'
  href?: string
  target?: string
  rel?: string
}

export const Item = React.forwardRef<HTMLLIElement, ItemProps>(
  (props, forwardedRef) => {
    const {
      active,
      children,
      className,
      disabled,
      nested,
      onClick,
      origin,
      tagName: Component = tagNames.a,
      value,
      ...rest
    } = props

    const { onClickContext, onClose, originContext } =
      React.useContext(ActionMenuContext)

    const ref = React.useRef<HTMLLIElement>(null)
    React.useImperativeHandle<HTMLLIElement | null, HTMLLIElement | null>(
      forwardedRef,
      () => ref.current
    )

    const subMenuRef = React.useRef<HTMLUListElement>(null)

    const [open, setOpen] = React.useState(false)
    const hasSubMenu = Boolean(nested)

    const handleKeyDown: React.KeyboardEventHandler<HTMLLIElement> = evt => {
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

    const handleMouseOut: React.MouseEventHandler<HTMLLIElement> = () => {
      hasSubMenu && setOpen(false)
    }

    const handleMouseOver: React.MouseEventHandler<HTMLLIElement> = () => {
      hasSubMenu && setOpen(true)
    }

    const handleArrowLeft: React.KeyboardEventHandler<HTMLUListElement> =
      evt => {
        if (evt.key === 'ArrowLeft' && hasSubMenu) {
          setOpen(false)
          evt.stopPropagation()
        }
      }

    const handleClick = (evt: React.MouseEvent) => {
      if (hasSubMenu) return

      onClick && onClick(evt, value)
      onClickContext && onClickContext(evt, value)
      onClose && onClose(evt, value) // : e.currentTarget.parentNode.focus()
    }

    return (
      <li
        {...styles.itemContainer({ active, disabled })}
        data-disabled={disabled}
        onKeyDown={handleKeyDown}
        onMouseOut={handleMouseOut}
        onMouseOver={handleMouseOver}
        ref={ref}
        role="menuitem"
        tabIndex={!disabled ? -1 : undefined}
      >
        <Component
          {...styles.item({ hasSubMenu })}
          aria-haspopup={!!nested}
          onClick={handleClick}
          aria-disabled={Boolean(disabled)}
          {...(Component === 'button' && { disabled })}
          {...(rest as React.HTMLAttributes<
            HTMLAnchorElement | HTMLButtonElement
          >)}
        >
          <span className={className} {...styles.inner()}>
            {children}
            {hasSubMenu && <Arrow />}
          </span>
        </Component>

        {nested && (
          <ul
            {...styles.nested({ origin: origin || originContext })}
            aria-expanded={open}
            onKeyDown={handleArrowLeft}
            ref={subMenuRef}
            role="menu"
          >
            {!disabled && nested}
          </ul>
        )}
      </li>
    )
  }
) as React.ForwardRefExoticComponent<ItemProps>

Item.displayName = 'ActionMenu.Item'
