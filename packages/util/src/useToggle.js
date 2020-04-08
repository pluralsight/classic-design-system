import { useState } from 'react'

export const useToggle = ({ isOpen, onToggle } = {}) => {
  const [_isOpen, setOpen] = useState(false)
  return {
    ...(isOpen !== undefined
      ? { isOpen, onToggle }
      : { isOpen: _isOpen, onToggle: () => setOpen(!_isOpen) })
  }
}
