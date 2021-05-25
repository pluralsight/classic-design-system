import React from 'react'
import {
  useUniqueId,
  ValueOf,
  HTMLPropsFor,
  useCloseOnDocumentEvents,
  canUseDOM
} from '@pluralsight/ps-design-system-util'

import { useMenuRef, handleMenuKeyDownEvents } from './menuKeyEvents'
import * as vars from '../vars/index'

export const useActive = (
  ref: React.MutableRefObject<HTMLLIElement | undefined>
) => {
  const [active, setActive] = React.useState(false)
  const handleActiveState = React.useCallback(() => {
    ref.current && setActive(document.activeElement === ref.current)
  }, [ref, setActive])
  React.useEffect(() => {
    handleActiveState()
  }, [handleActiveState])
  return {
    active,
    handleActiveState: handleActiveState as React.FocusEventHandler
  }
}

interface SelectedItem {
  value: React.ReactText
  label: React.ReactText
}

export interface UseListboxProps
  extends Omit<HTMLPropsFor<'button'>, 'onChange' | 'value'> {
  disabled?: boolean
  error?: boolean
  onChange?: (
    evt: React.MouseEvent | React.KeyboardEvent,
    value: SelectedItem
  ) => void
  onClick?: (e: React.MouseEvent | React.KeyboardEvent) => void
  placeholder?: string
  size?: ValueOf<typeof vars.sizes>
  'data-testid'?: string
  value?: SelectedItem
  labelId?: string
  mountOpen?: boolean
}

const sortListboxProps = ({
  disabled,
  error,
  onChange,
  onClick,
  placeholder = '',
  size,
  value = {
    label: placeholder,
    value: ''
  },
  labelId,
  'data-testid': dataTestId,
  mountOpen = false,
  ...rest
}: UseListboxProps) => ({
  button: {
    disabled,
    error,
    size,
    ...rest
  },
  hook: {
    value,
    onChange,
    onClick,
    placeholder,
    dataTestId,
    labelId,
    mountOpen
  },
  selected: {
    placeholder
  }
})

export const useListbox = (
  props: UseListboxProps,
  forwardedRef?: React.Ref<HTMLButtonElement>
) => {
  const { hook, ...rest } = sortListboxProps(props)
  const uid = useUniqueId()
  const buttonId = `select-button-${hook.dataTestId || uid}`
  const menuId = `select-menu-${hook.dataTestId || uid}`
  const [isOpen, setOpen] = React.useState<boolean>(hook.mountOpen)

  const [selectedItem, setSelectedItem] = React.useState<SelectedItem>(
    hook.value
  )

  function handleButtonEvent(evt: React.MouseEvent | React.KeyboardEvent) {
    if (
      evt.type === 'click' ||
      (evt.type === 'keydown' &&
        'key' in evt &&
        ['Enter', 'ArrowDown', 'ArrowUp', ' '].includes(evt.key))
    ) {
      evt.preventDefault()
      evt.stopPropagation()

      const newOpen = !isOpen
      setOpen(newOpen)
      if (typeof hook.onClick === 'function') hook.onClick(evt)
    }
  }

  function handleMenuItemClick(
    evt: React.MouseEvent,
    selectedItem: SelectedItem
  ) {
    setSelectedItem(selectedItem)

    setOpen(false)
    if (typeof hook.onChange === 'function') hook.onChange(evt, selectedItem)
    if (buttonRef.current) {
      buttonRef.current.focus()
    }
  }

  const buttonRef = React.useRef<HTMLButtonElement>(null)
  React.useImperativeHandle(
    forwardedRef,
    () => (buttonRef.current as unknown) as HTMLButtonElement
  )
  const menuRef = useMenuRef()
  const closeMenu = () => {
    if (isOpen && buttonRef.current) {
      buttonRef.current.focus()
    }
    setOpen(false)
  }
  React.useEffect(() => {
    function handleEscape(evt: KeyboardEvent) {
      if (evt.key === 'Escape') {
        setOpen(false)
        buttonRef.current?.focus()
      }
    }

    if (canUseDOM() && isOpen) {
      document.addEventListener('keydown', handleEscape, false)

      return () => {
        document.removeEventListener('keydown', handleEscape, false)
      }
    }
  }, [isOpen])

  useCloseOnDocumentEvents(menuRef, closeMenu)
  return {
    buttonProps: {
      ...rest.button,
      id: buttonId,
      // eslint-disable-next-line @typescript-eslint/prefer-as-const
      'aria-haspopup': 'listbox' as 'listbox',
      'aria-labelledby': [buttonId, hook.labelId].filter(Boolean).join(' '),
      ref: buttonRef,
      isOpen,
      onClick: handleButtonEvent,
      onKeyDown: handleButtonEvent
    },
    menuProps: {
      role: 'listbox',
      useActive,
      optionRole: 'option',
      'aria-labelledby': buttonId,
      id: menuId,
      onClick: handleMenuItemClick,
      selectedItem,
      ref: menuRef,
      onKeyDown: handleMenuKeyDownEvents
    },
    selectedProps: {
      ...rest.selected,
      selectedItem
    },
    isOpen,
    dataOptionLabel: {
      'data-option-label': ''
    }
  }
}
