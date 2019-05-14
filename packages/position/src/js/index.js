// styleLeftOf(relativeEl)

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

export function styleAbove(relativeEl, el, options) {
  if (!relativeEl || !el) return

  const opts = { ...options, ...defaultOptions }
  const relativeElRect = relativeEl.getBoundingClientRect()
  const elRect = el.getBoundingClientRect()

  const scrollLeft = window.pageXOffset
  const scrollTop = window.pageYOffset

  const relativeElCenterLeft = relativeElRect.left + relativeElRect.width / 2

  const elLeft = scrollLeft + relativeElCenterLeft - elRect.width / 2

  // diff
  const elTop =
    scrollTop + relativeElRect.top - elRect.height - opts.bufferWidth

  return {
    position: 'absolute',
    top: elTop + 'px',
    left: elLeft + 'px'
  }
}

export function styleRightOf(relativeEl, el, options) {
  if (!relativeEl || !el) return

  const opts = { ...options, ...defaultOptions }
  const relativeElRect = relativeEl.getBoundingClientRect()
  const elRect = el.getBoundingClientRect()

  const scrollLeft = window.pageXOffset
  const scrollTop = window.pageYOffset

  // diff
  const relativeElVertCenter = relativeElRect.top + relativeElRect.height / 2

  // diff
  const elTop = scrollTop + relativeElVertCenter - elRect.height / 2

  // diff
  const elLeft =
    scrollLeft + relativeElRect.left + relativeElRect.width + opts.bufferWidth

  return {
    position: 'absolute',
    top: elTop + 'px',
    left: elLeft + 'px'
  }
}

export function styleLeftOf(relativeEl, el, options) {
  if (!relativeEl || !el) return

  const opts = { ...options, ...defaultOptions }
  const relativeElRect = relativeEl.getBoundingClientRect()
  const elRect = el.getBoundingClientRect()

  const scrollLeft = window.pageXOffset
  const scrollTop = window.pageYOffset

  // diff
  const relativeElVertCenter = relativeElRect.top + relativeElRect.height / 2

  // diff
  const elTop = scrollTop + relativeElVertCenter - elRect.height / 2

  // diff
  const elLeft =
    scrollLeft + relativeElRect.left - elRect.width - opts.bufferWidth

  return {
    position: 'absolute',
    top: elTop + 'px',
    left: elLeft + 'px'
  }
}
