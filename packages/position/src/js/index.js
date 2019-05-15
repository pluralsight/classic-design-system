const defaultOptions = { bufferWidth: 12 }

export function relativeTo(target, options) {
  if (!target) throw new TypeError('relative element required')

  const opts = { ...options, ...defaultOptions }
  const bufferWidth = opts.bufferWidth
  const targetRect = target.getBoundingClientRect()

  return {
    styleAbove(el) {
      if (!el) return
      const elRect = el.getBoundingClientRect()
      const x =
        window.pageXOffset +
        targetRect.left +
        targetRect.width / 2 -
        elRect.width / 2
      const y =
        window.pageYOffset + targetRect.top - elRect.height - bufferWidth
      return formatOutputAsStyles(x, y)
    },
    styleRightOf(el) {
      if (!el) return
      const elRect = el.getBoundingClientRect()
      const x =
        window.pageXOffset + targetRect.left + targetRect.width + bufferWidth
      const y =
        window.pageYOffset +
        targetRect.top +
        targetRect.height / 2 -
        elRect.height / 2
      return formatOutputAsStyles(x, y)
    },
    styleBelow(el) {
      if (!el) return
      const elRect = el.getBoundingClientRect()
      const x =
        window.pageXOffset +
        targetRect.left +
        targetRect.width / 2 -
        elRect.width / 2
      const y =
        window.pageYOffset + targetRect.top + targetRect.height + bufferWidth
      return formatOutputAsStyles(x, y)
    },
    styleLeftOf(el) {
      if (!el) return
      const elRect = el.getBoundingClientRect()
      const x =
        window.pageXOffset + targetRect.left - elRect.width - bufferWidth
      const y =
        window.pageYOffset +
        targetRect.top +
        targetRect.height / 2 -
        elRect.height / 2
      return formatOutputAsStyles(x, y)
    }
  }
}

function formatOutputAsStyles(x, y) {
  return {
    position: 'absolute',
    left: x + 'px',
    top: y + 'px'
  }
}
