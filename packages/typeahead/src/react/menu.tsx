import { CheckIcon } from '@pluralsight/ps-design-system-icon'
import { combineFns } from '@pluralsight/ps-design-system-util'
import { compose, css } from 'glamor'
import React, { forwardRef, useEffect, useMemo, useState } from 'react'

import stylesheet from '../css'

import { SuggestionOption } from './suggestion'

const styles = {
  menu: () => css(stylesheet['.psds-typeahead__menu']),
  menuItem: () => css(stylesheet['.psds-typeahead__menu__item']),
  menuItemLabel: () => css(stylesheet['.psds-typeahead__menu__item__label']),
  menuItemIcon: ({ selected }: { selected: boolean }) =>
    compose(
      css(stylesheet['.psds-typeahead__menu__item__icon']),
      selected && css(stylesheet['.psds-typeahead__menu__item__icon--selected'])
    )
}

type ButtonElProps = JSX.IntrinsicElements['button']
type DivElProps = JSX.IntrinsicElements['div']

interface SuggestionsMenuProps extends Omit<DivElProps, 'onChange'> {
  activeValue?: string
  onChange: (evt: React.MouseEvent<HTMLButtonElement>, value: string) => void
  onFocus?: React.FocusEventHandler<HTMLDivElement>
  onKeyDown?: React.KeyboardEventHandler<HTMLDivElement>
  suggestions: SuggestionOption[]
}

const SuggestionsMenu = forwardRef<HTMLDivElement, SuggestionsMenuProps>(
  (props, forwardedRef) => {
    const { activeValue, onChange, suggestions, ...rest } = props

    const ref = React.useRef<HTMLDivElement>(null)
    React.useImperativeHandle(
      forwardedRef,
      () => (ref.current as unknown) as HTMLDivElement
    )

    const [cursor, setCursor] = useState<number>()
    const itemCount = useMemo(() => suggestions.length, [suggestions])

    const resetCursor = () => setCursor(undefined)

    const first = () => setCursor(0)
    const last = () => setCursor(itemCount - 1)

    const next = () => {
      const nextCursor = (cursor || 0) + 1
      if (nextCursor > itemCount - 1) return
      setCursor(nextCursor)
    }
    const prev = () => {
      const nextCursor = (cursor || 0) - 1
      if (nextCursor < 0) return
      setCursor(nextCursor)
    }

    useEffect(() => {
      resetCursor()
    }, [itemCount])

    const selectItemNodes = () => {
      if (!ref.current) return []

      const nodeList = ref.current.querySelectorAll('button')
      return Array.from(nodeList)
    }

    useEffect(() => {
      if (!ref.current || typeof cursor !== 'number') return
      if (cursor < 0 || cursor > itemCount) return

      const nodes = selectItemNodes()
      const node = nodes[cursor]

      if (node) node.focus()
    }, [cursor, itemCount])

    const handleFocus = combineFns(evt => {
      if (!ref.current) return

      const target = evt.target as HTMLElement
      const nodes = selectItemNodes()
      const nextCursor = nodes.findIndex(n => n === target)

      setCursor(nextCursor)
    }, props.onFocus)

    const handleKeyDown = combineFns(evt => {
      const tab = evt.key === 'Tab'
      if (tab) return

      if (evt.key === 'ArrowDown') next()
      else if (evt.key === 'ArrowUp') prev()
      else if (evt.key === 'Home') first()
      else if (evt.key === 'End') last()

      evt.preventDefault()
    }, props.onKeyDown)

    const items = useMemo(() => {
      if (itemCount <= 0) return <MenuItem disabled>no results found</MenuItem>

      return suggestions.map(sug => (
        <MenuItem
          key={sug.index}
          onClick={evt => onChange(evt, sug.value)}
          selected={sug.value === activeValue}
          value={sug.value}
        >
          {sug.label}
        </MenuItem>
      ))
    }, [activeValue, itemCount, onChange, suggestions])

    return (
      <div
        ref={ref}
        role="menu"
        {...styles.menu()}
        {...rest}
        onFocus={handleFocus}
        onKeyDown={handleKeyDown}
      >
        {items}
      </div>
    )
  }
)

// eslint-disable-next-line
interface MenuItemProps extends ButtonElProps {
  selected?: boolean
}
const MenuItem: React.FC<MenuItemProps> = props => {
  const { children, selected = false, ...rest } = props

  return (
    <button {...rest} {...styles.menuItem()}>
      <span {...styles.menuItemLabel()}>{children}</span>
      <CheckIcon {...styles.menuItemIcon({ selected })} />
    </button>
  )
}

export default SuggestionsMenu
