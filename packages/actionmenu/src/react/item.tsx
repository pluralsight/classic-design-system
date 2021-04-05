import {
  HTMLPropsFor,
  RefFor,
  ValueOf
} from '@pluralsight/ps-design-system-util'
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
  }: Pick<BaseItemProps, 'active' | 'disabled'>) =>
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

interface BaseItemProps {
  active?: boolean
  className?: string
  disabled?: boolean
  nested?: React.ReactNode
  onClick?: (event: React.MouseEvent, value?: React.ReactText) => void
  origin?: ValueOf<typeof origins>
  value?: React.ReactText
}

interface AnchorProps
  extends BaseItemProps,
    Omit<HTMLPropsFor<'a'>, 'onClick' | 'ref'> {
  ref?: RefFor<'li'>
  tagName?: 'a'
}
interface ButtonProps
  extends BaseItemProps,
    Omit<HTMLPropsFor<'button'>, 'onClick' | 'ref' | 'value'> {
  ref?: RefFor<'li'>
  tagName: 'button'
}

type ItemProps = AnchorProps | ButtonProps
type ItemComponent = React.ForwardRefExoticComponent<unknown> & {
  (props: AnchorProps, ref?: RefFor<'li'>): JSX.Element
  (props: ButtonProps, ref?: RefFor<'li'>): JSX.Element
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
      tagName = tagNames.a,
      value,
      ...rest
    } = props

    const { onClickContext, onClose, originContext } = React.useContext(
      ActionMenuContext
    )

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

    const handleArrowLeft: React.KeyboardEventHandler<HTMLUListElement> = evt => {
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

    const isAnchor = tagName === 'a'

    const Wrapper: React.FC = wrapperProps =>
      isAnchor ? (
        <a
          onClick={handleClick as React.MouseEventHandler<HTMLAnchorElement>}
          role="menuitem"
          aria-disabled={Boolean(disabled)}
          {...(rest as HTMLPropsFor<'a'>)}
          {...wrapperProps}
        />
      ) : (
        <button
          disabled={disabled}
          onClick={handleClick as React.MouseEventHandler<HTMLButtonElement>}
          role="menuitem"
          {...(rest as HTMLPropsFor<'button'>)}
          {...wrapperProps}
        />
      )

    return (
      <li
        {...styles.itemContainer({ active, disabled })}
        data-disabled={disabled}
        onKeyDown={handleKeyDown}
        onMouseOut={handleMouseOut}
        onMouseOver={handleMouseOver}
        ref={ref}
        role="none"
        tabIndex={!disabled ? -1 : undefined}
      >
        <Wrapper {...styles.item({ hasSubMenu })} aria-haspopup={!!nested}>
          <span className={className} {...styles.inner()}>
            {children}
            {hasSubMenu && <Arrow />}
          </span>
        </Wrapper>

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
) as ItemComponent

Item.displayName = 'ActionMenu.Item'
