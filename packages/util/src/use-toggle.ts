import React from 'react'

interface Options {
  isOpen?: boolean
  onToggle?: () => unknown
}

// eslint-ignore-next-line @typescript-eslint/no-empty-function
const noop = () => {}

export const useToggle = (opts: Options = {}) => {
  const { isOpen, onToggle = noop } = opts
  const [_isOpen, setOpen] = React.useState(false)
  return {
    ...(isOpen !== undefined
      ? { isOpen, onToggle }
      : { isOpen: _isOpen, onToggle: () => setOpen(!_isOpen) })
  }
}
