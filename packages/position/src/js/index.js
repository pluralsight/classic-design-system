// styleAbove(el)
// styleLeftOf(relativeEl)
// styleRightOf(relativeEl, el)

const defaultOptions = { bufferWidth: 12 }

export function styleBelow(relativeEl, el, options) {
  if (!relativeEl || !el) return

  const opts = { ...options, ...defaultOptions }
  const relativeElRect = relativeEl.getBoundingClientRect()
  const elRect = el.getBoundingClientRect()

  const scrollLeft = window.pageXOffset
  const scrollTop = window.pageYOffset

  const relativeElCenterLeft = relativeElRect.left + relativeElRect.width / 2

  const elLeft = scrollLeft + relativeElCenterLeft - elRect.width / 2
  const elTop =
    scrollTop + relativeElRect.top + relativeElRect.height + opts.bufferWidth

  return {
    position: 'absolute',
    top: elTop + 'px',
    left: elLeft + 'px'
  }
}
