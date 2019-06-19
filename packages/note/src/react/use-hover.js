import { useEffect, useRef, useState } from 'react'

export default function useHover() {
  const [isHovered, setIsHovered] = useState(false)
  const ref = useRef(null)

  const handleMouseOver = () => setIsHovered(true)
  const handleMouseOut = () => setIsHovered(false)

  useEffect(
    function setup() {
      const node = ref.current

      if (!node) return

      node.addEventListener('mouseover', handleMouseOver)
      node.addEventListener('mouseout', handleMouseOut)

      return function teardown() {
        node.removeEventListener('mouseover', handleMouseOver)
        node.removeEventListener('mouseout', handleMouseOut)
      }
    },
    []
  )

  return { ref, isHovered }
}
