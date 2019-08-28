import React from 'react'

const FOCUSABLE_SELECTORS = [
  '[contenteditable]:not([contenteditable="false"])',
  '[tabindex]',
  'a[href]',
  'audio[controls]',
  'button',
  'iframe',
  'input',
  'select',
  'textarea',
  'video[controls]'
]

const defaultOptions = {
  autofocus: true,
  returnFocus: true,
  trapped: true
}

export default function useFocusManager(ref, _options) {
  const opts = { ...defaultOptions, ..._options }

  const prevActiveElRef = React.useRef()
  React.useEffect(() => {
    prevActiveElRef.current = document.activeElement
  }, [])

  const [node, setNode] = React.useState(null)
  React.useEffect(() => {
    setNode(ref.current)
  }, [ref])

  const [focusableNodes, setFocusableEls] = React.useState([])
  const firstNode = React.useMemo(() => focusableNodes[0], [focusableNodes])
  const lastNode = React.useMemo(
    () => focusableNodes[focusableNodes.length - 1],
    [focusableNodes]
  )

  React.useEffect(() => {
    if (focusableNodes.length === 0) ref.current.setAttribute('tabindex', 0)
    else ref.current.removeAttribute('tabindex')
  }, [focusableNodes, ref])

  React.useEffect(() => {
    const nextEls = getFocusableChildNodes(node)
    setFocusableEls(nextEls)
  }, [node])

  React.useEffect(() => {
    if (!opts.autofocus) return

    const toFocus = firstNode || ref.current
    toFocus.focus()
  }, [firstNode, opts.autofocus, ref])

  const handleKeyDown = React.useCallback(
    evt => {
      if (!isTab(evt)) return

      const { activeElement: curActive } = document

      const reverse = withShift(evt)
      if (curActive === firstNode && reverse) {
        lastNode.focus()
        evt.preventDefault()
        evt.stopPropagation()
      } else if (curActive === lastNode && !reverse) {
        firstNode.focus()
        evt.preventDefault()
        evt.stopPropagation()
      }
    },
    [firstNode, lastNode]
  )
  React.useEffect(
    function bind() {
      if (!opts.trapped) return

      window.addEventListener('keydown', handleKeyDown)

      return function unbind() {
        window.removeEventListener('keydown', handleKeyDown)
      }
    },
    [handleKeyDown, opts, opts.trapped]
  )

  React.useEffect(() => {
    if (!opts.returnFocus) return

    return function returnFocusWhenUnmounted() {
      if (prevActiveElRef.current) prevActiveElRef.current.focus()
    }
  }, [opts.returnFocus])
}

function hasNegativeTabIndex(el) {
  return el.getAttribute('tabindex') && el.getAttribute('tabindex') < 0
}

function withShift(evt) {
  return evt.shiftKey
}

function isTab(evt) {
  return evt.key === 'Tab'
}

function getFocusableChildNodes(el) {
  if (!el) return []

  const selectAll = FOCUSABLE_SELECTORS.join(',')
  const nodelist = el.querySelectorAll(selectAll)

  return Array.from(nodelist || []).filter(node => !hasNegativeTabIndex(node))
}
