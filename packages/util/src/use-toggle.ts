import { useState } from 'react'

interface Options {
  isOpen?: boolean
  onToggle?: () => unknown
}

export const useToggle = (opts: Options = {}) => {
  const { isOpen, onToggle } = opts
  const [_isOpen, setOpen] = useState(false)
  return {
    ...(isOpen !== undefined
      ? { isOpen, onToggle }
      : { isOpen: _isOpen, onToggle: () => setOpen(!_isOpen) })
  }
}
