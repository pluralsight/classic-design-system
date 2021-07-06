interface StyleOptions {
  bufferWidth: number
  allowOffscreen?: boolean
}
const defaultOptions: StyleOptions = { bufferWidth: 12, allowOffscreen: false }

interface ClipAdjusterProps {
  x: number
  y: number
  elRect: DOMRect
  targetRect: DOMRect
  opts: StyleOptions
}
type ClipAdjustment = [number, number]
type ClipAdjuster = (
  props: ClipAdjusterProps,
  allowOffscreen?: boolean
) => ClipAdjustment
const clipAdjust: {
  above: ClipAdjuster
  below: ClipAdjuster
  leftOf: ClipAdjuster
  rightOf: ClipAdjuster
} = {
  above: ({
    x,
    y,
    elRect,
    targetRect,
    opts: { bufferWidth, allowOffscreen }
  }) => [
    [0, x, !allowOffscreen ? window.innerWidth - elRect.width : x].sort(
      (a, b) => a - b
    )[1],
    y < 0 && !allowOffscreen ? targetRect.bottom + bufferWidth : y
  ],
  below: ({
    x,
    y,
    elRect,
    targetRect,
    opts: { bufferWidth, allowOffscreen }
  }) => [
    [0, x, !allowOffscreen ? window.innerWidth - elRect.width : x].sort(
      (a, b) => a - b
    )[1],
    y > window.innerHeight + window.pageYOffset && !allowOffscreen
      ? targetRect.top - (elRect.height + bufferWidth)
      : y
  ],
  leftOf: ({
    x,
    y,
    elRect,
    targetRect,
    opts: { bufferWidth, allowOffscreen }
  }) => [
    x < 0 && !allowOffscreen ? targetRect.right + bufferWidth : x,
    [
      0,
      y,
      !allowOffscreen
        ? window.innerHeight + window.pageYOffset - elRect.height
        : y
    ].sort((a, b) => a - b)[1]
  ],
  rightOf: ({
    x,
    y,
    elRect,
    targetRect,
    opts: { bufferWidth, allowOffscreen }
  }) => [
    x > window.innerWidth && !allowOffscreen
      ? targetRect.left - elRect.width - bufferWidth
      : x,
    [
      0,
      y,
      !allowOffscreen
        ? window.innerHeight + window.pageYOffset - elRect.height
        : y
    ].sort((a, b) => a - b)[1]
  ]
}

export type PositionFunction = (
  target: HTMLElement
) => {
  styleFor: (
    el: HTMLElement | undefined,
    options?: Partial<StyleOptions>
  ) => PositionStyle
}

export const above: PositionFunction = target => {
  return {
    styleFor(
      el: HTMLElement | undefined,
      options?: Partial<StyleOptions>
    ): PositionStyle {
      if (!el) return {}

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

export const aboveLeft: PositionFunction = target => {
  return {
    styleFor(
      el: HTMLElement | undefined,
      options?: Partial<StyleOptions>
    ): PositionStyle {
      if (!el) return {}

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

export const aboveRight: PositionFunction = target => {
  return {
    styleFor(
      el: HTMLElement | undefined,
      options?: Partial<StyleOptions>
    ): PositionStyle {
      if (!el) return {}

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

export const rightOf: PositionFunction = target => {
  return {
    styleFor(
      el: HTMLElement | undefined,
      options?: Partial<StyleOptions>
    ): PositionStyle {
      if (!el) return {}

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

export const below: PositionFunction = target => {
  return {
    styleFor(
      el: HTMLElement | undefined,
      options?: Partial<StyleOptions>
    ): PositionStyle {
      if (!el) return {}

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

export const belowLeft: PositionFunction = target => {
  return {
    styleFor(
      el: HTMLElement | undefined,
      options?: Partial<StyleOptions>
    ): PositionStyle {
      if (!el) return {}

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

export const belowRight: PositionFunction = target => {
  return {
    styleFor(
      el: HTMLElement | undefined,
      options?: Partial<StyleOptions>
    ): PositionStyle {
      if (!el) return {}

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

export const leftOf: PositionFunction = target => {
  if (!target) throw new TypeError('target element required')

  return {
    styleFor(
      el: HTMLElement | undefined,
      options?: Partial<StyleOptions>
    ): PositionStyle {
      if (!el) return {}

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

function overrideDefaultOpts(
  opts: Partial<StyleOptions> | undefined
): StyleOptions {
  return { ...defaultOptions, ...opts }
}

export type PositionStyle = Pick<
  React.CSSProperties,
  'position' | 'left' | 'top'
>
function formatOutputAsStyles(x: number, y: number): PositionStyle {
  return {
    position: 'absolute',
    left: x.toString() + 'px',
    top: y.toString() + 'px'
  }
}
