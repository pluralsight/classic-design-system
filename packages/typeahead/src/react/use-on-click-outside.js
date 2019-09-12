import React from 'react'

export default function useOnClickOutside(ref, handler) {
  React.useEffect(
    function bindEvents() {
      function handleMouseDown(evt) {
        if (!ref.current || ref.current.contains(evt.target)) return
        handler(evt)
      }

      document.addEventListener('mousedown', handleMouseDown)
      document.addEventListener('touchstart', handleMouseDown)

      return function unbindEvents() {
        document.addEventListener('mousedown', handleMouseDown)
        document.addEventListener('touchstart', handleMouseDown)
      }
    },
    [ref, handler]
  )
}
