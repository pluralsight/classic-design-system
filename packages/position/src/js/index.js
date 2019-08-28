const defaultOptions = { bufferWidth: 12 }

export function above(target) {
  if (!target) throw new TypeError('target element required')

  return {
    styleFor(el, options) {
      if (!el) return

      const opts = overrideDefaultOpts(options)
      const targetRect = target.getBoundingClientRect()
      const elRect = el.getBoundingClientRect()
      const x =
        window.pageXOffset +
        targetRect.left +
        targetRect.width / 2 -
        elRect.width / 2
      const y =
        window.pageYOffset + targetRect.top - elRect.height - opts.bufferWidth
      return formatOutputAsStyles(x, y)
    }
  }
}

export function aboveLeft(target) {
  if (!target) throw new TypeError('target element required')

  return {
    styleFor(el, options) {
      if (!el) return

      const opts = overrideDefaultOpts(options)
      const targetRect = target.getBoundingClientRect()
      const elRect = el.getBoundingClientRect()
      const x = window.pageXOffset + targetRect.left
      const y =
        window.pageYOffset + targetRect.top - elRect.height - opts.bufferWidth

      return formatOutputAsStyles(x, y)
    }
  }
}

export function aboveRight(target) {
  if (!target) throw new TypeError('target element required')

  return {
    styleFor(el, options) {
      if (!el) return

      const opts = overrideDefaultOpts(options)
      const targetRect = target.getBoundingClientRect()
      const elRect = el.getBoundingClientRect()
      const x =
        window.pageXOffset + targetRect.left + targetRect.width - elRect.width
      const y =
        window.pageYOffset + targetRect.top - elRect.height - opts.bufferWidth

      return formatOutputAsStyles(x, y)
    }
  }
}

export function rightOf(target) {
  if (!target) throw new TypeError('target element required')

  return {
    styleFor(el, options) {
      if (!el) return

      const opts = overrideDefaultOpts(options)
      const targetRect = target.getBoundingClientRect()
      const elRect = el.getBoundingClientRect()
      const x =
        window.pageXOffset +
        targetRect.left +
        targetRect.width +
        opts.bufferWidth
      const y =
        window.pageYOffset +
        targetRect.top +
        targetRect.height / 2 -
        elRect.height / 2
      return formatOutputAsStyles(x, y)
    }
  }
}

export function below(target) {
  if (!target) throw new TypeError('target element required')

  return {
    styleFor(el, options) {
      if (!el) return

      const opts = overrideDefaultOpts(options)
      const targetRect = target.getBoundingClientRect()
      const elRect = el.getBoundingClientRect()
      const x =
        window.pageXOffset +
        targetRect.left +
        targetRect.width / 2 -
        elRect.width / 2
      const y =
        window.pageYOffset +
        targetRect.top +
        targetRect.height +
        opts.bufferWidth

      return formatOutputAsStyles(x, y)
    }
  }
}

export function belowLeft(target) {
  if (!target) throw new TypeError('target element required')

  return {
    styleFor(el, options) {
      if (!el) return

      const opts = overrideDefaultOpts(options)
      const targetRect = target.getBoundingClientRect()
      const x = window.pageXOffset + targetRect.left
      const y =
        window.pageYOffset +
        targetRect.top +
        targetRect.height +
        opts.bufferWidth

      return formatOutputAsStyles(x, y)
    }
  }
}

export function belowRight(target) {
  if (!target) throw new TypeError('target element required')

  return {
    styleFor(el, options) {
      if (!el) return

      const opts = overrideDefaultOpts(options)
      const targetRect = target.getBoundingClientRect()
      const elRect = el.getBoundingClientRect()
      const x =
        window.pageXOffset + targetRect.left + targetRect.width - elRect.width
      const y =
        window.pageYOffset +
        targetRect.top +
        targetRect.height +
        opts.bufferWidth

      return formatOutputAsStyles(x, y)
    }
  }
}

export function leftOf(target) {
  if (!target) throw new TypeError('target element required')

  return {
    styleFor(el, options) {
      if (!el) return

      const opts = overrideDefaultOpts(options)
      const targetRect = target.getBoundingClientRect()
      const elRect = el.getBoundingClientRect()
      const x =
        window.pageXOffset + targetRect.left - elRect.width - opts.bufferWidth
      const y =
        window.pageYOffset +
        targetRect.top +
        targetRect.height / 2 -
        elRect.height / 2
      return formatOutputAsStyles(x, y)
    }
  }
}

function overrideDefaultOpts(opts) {
  return { ...opts, ...defaultOptions }
}

function formatOutputAsStyles(x, y) {
  return {
    position: 'absolute',
    left: x + 'px',
    top: y + 'px'
  }
}
