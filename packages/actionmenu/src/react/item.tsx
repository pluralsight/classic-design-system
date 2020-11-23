import {
  HTMLPropsFor,
  RefFor,
  ValueOf
} from '@pluralsight/ps-design-system-util'
import { compose, css } from 'glamor'
import React, {
  ForwardRefExoticComponent,
  KeyboardEventHandler,
  MouseEvent,
  MouseEventHandler,
  ReactNode,
  ReactText,
  forwardRef,
  useContext,
  useImperativeHandle,
  useRef,
  useState
} from 'react'

import stylesheet from '../css'
import { origins, tagName as tagNames } from '../vars'

import { ActionMenuContext } from './context'
import { Arrow } from './arrow'

const styles = {
  itemContainer: ({
    active,
    disabled
  }: Pick<BaseItemProps, 'active' | 'disabled'>) =>
    compose(
      css(stylesheet['.psds-actionmenu__item-container']),
      disabled && css(stylesheet['.psds-actionmenu__item--disabled']),
      active && css(stylesheet['.psds-actionmenu__item-container--active'])
    ),
  item: ({ hasSubMenu }: { hasSubMenu: boolean }) =>
    compose(
      css(stylesheet['.psds-actionmenu__item']),
      hasSubMenu && css(stylesheet['.psds-actionmenu__item--nested'])
    ),
  inner: () => css(stylesheet['.psds-actionmenu__item-inner']),
  nested: ({ origin }: { origin?: ValueOf<typeof origins> }) =>
    compose(
      css(stylesheet['.psds-actionmenu']),
      css(stylesheet['.psds-actionmenu__nested']),
      css(
        stylesheet[`.psds-actionmenu__nested.psds-actionmenu--origin-${origin}`]
      )
    ),
  textOnly: () => css(stylesheet['.psds-actionmenu__text-only'])
}

interface BaseItemProps {
  active?: boolean
  className?: string
  disabled?: boolean
  nested?: ReactNode
  onClick?: (event: MouseEvent, value?: ReactText) => void
  origin?: ValueOf<typeof origins>
  value?: ReactText
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
type ItemComponent = ForwardRefExoticComponent<unknown> & {
  (props: AnchorProps, ref?: RefFor<'li'>): JSX.Element
  (props: ButtonProps, ref?: RefFor<'li'>): JSX.Element
}
export const Item = forwardRef<HTMLLIElement, ItemProps>(
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

    const { onClickContext, onClose, originContext } = useContext(
      ActionMenuContext
    )

    const ref = useRef<HTMLLIElement>(null)
    useImperativeHandle<HTMLLIElement | null, HTMLLIElement | null>(
      forwardedRef,
      () => ref.current
    )

    const subMenuRef = useRef<HTMLUListElement>(null)

    const [open, setOpen] = useState(false)
    const hasSubMenu = Boolean(nested)

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

    const handleMouseOut: MouseEventHandler<HTMLLIElement> = () => {
      hasSubMenu && setOpen(false)
    }

    const handleMouseOver: MouseEventHandler<HTMLLIElement> = () => {
      hasSubMenu && setOpen(true)
    }

    const handleArrowLeft: KeyboardEventHandler<HTMLUListElement> = evt => {
      if (evt.key === 'ArrowLeft' && hasSubMenu) {
        setOpen(false)
        evt.stopPropagation()
      }
    }

    const handleClick = (evt: MouseEvent) => {
      if (hasSubMenu) return

      onClick && onClick(evt, value)
      onClickContext && onClickContext(evt, value)
      onClose && onClose(evt, value) // : e.currentTarget.parentNode.focus()
    }

    const isAnchor = tagName === 'a'

    const Wrapper: React.FC = wrapperProps =>
      isAnchor ? (
        <a
          onClick={handleClick as MouseEventHandler<HTMLAnchorElement>}
          role="menuitem"
          {...(rest as HTMLPropsFor<'a'>)}
          {...wrapperProps}
        />
      ) : (
        <button
          disabled={disabled}
          onClick={handleClick as MouseEventHandler<HTMLButtonElement>}
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
