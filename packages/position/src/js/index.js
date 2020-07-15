const defaultOptions = { bufferWidth: 12 }

const clipAdjust = {
  above: ({ x, y, elRect, targetRect, opts }) => [
    [0, x, window.innerWidth - elRect.width].sort((a, b) => a - b)[1],
    y < 0 ? targetRect.bottom + opts.bufferWidth : y
  ],
  below: ({ x, y, elRect, targetRect, opts }) => [
    [0, x, window.innerWidth - elRect.width].sort((a, b) => a - b)[1],
    y > window.innerHeight + window.pageYOffset
      ? targetRect.top - (elRect.height + opts.bufferWidth)
      : y
  ],
  leftOf: ({ x, y, elRect, targetRect, opts }) => [
    x < 0 ? targetRect.right + opts.bufferWidth : x,
    [0, y, window.innerHeight + window.pageYOffset - elRect.height].sort(
      (a, b) => a - b
    )[1]
  ],
  rightOf: ({ x, y, elRect, targetRect, opts }) => [
    x > window.innerWidth
      ? targetRect.left - elRect.width - opts.bufferWidth
      : x,
    [0, y, window.innerHeight + window.pageYOffset - elRect.height].sort(
      (a, b) => a - b
    )[1]
  ]
}

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
      return formatOutputAsStyles(
        ...clipAdjust.above({ x, y, targetRect, elRect, opts })
      )
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

      return formatOutputAsStyles(
        ...clipAdjust.above({ x, y, targetRect, elRect, opts })
      )
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

      return formatOutputAsStyles(
        ...clipAdjust.above({ x, y, targetRect, elRect, opts })
      )
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
      return formatOutputAsStyles(
        ...clipAdjust.rightOf({ x, y, targetRect, elRect, opts })
      )
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

      return formatOutputAsStyles(
        ...clipAdjust.below({ x, y, targetRect, elRect, opts })
      )
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
      const elRect = el.getBoundingClientRect()
      const x = window.pageXOffset + targetRect.left
      const y =
        window.pageYOffset +
        targetRect.top +
        targetRect.height +
        opts.bufferWidth

      return formatOutputAsStyles(
        ...clipAdjust.below({ x, y, targetRect, elRect, opts })
      )
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

      return formatOutputAsStyles(
        ...clipAdjust.below({ x, y, targetRect, elRect, opts })
      )
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
      return formatOutputAsStyles(
        ...clipAdjust.leftOf({ x, y, targetRect, elRect, opts })
      )
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
