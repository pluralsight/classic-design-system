interface StyleOptions {
  bufferWidth: number
}
const defaultOptions: StyleOptions = { bufferWidth: 12 }

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
  clipY?: boolean
) => ClipAdjustment
const clipAdjust: {
  above: ClipAdjuster
  below: ClipAdjuster
  leftOf: ClipAdjuster
  rightOf: ClipAdjuster
} = {
  above: ({ x, y, elRect, targetRect, opts }, clipY) => [
    [0, x, window.innerWidth - elRect.width].sort((a, b) => a - b)[1],
    y < 0 && !!clipY ? targetRect.bottom + opts.bufferWidth : y
  ],
  below: ({ x, y, elRect, targetRect, opts }, clipY) => [
    [0, x, window.innerWidth - elRect.width].sort((a, b) => a - b)[1],
    y > window.innerHeight + window.pageYOffset && !!clipY
      ? targetRect.top - (elRect.height + opts.bufferWidth)
      : y
  ],
  leftOf: ({ x, y, elRect, targetRect, opts }, clipY) => [
    x < 0 ? targetRect.right + opts.bufferWidth : x,
    [
      0,
      y,
      clipY ? window.innerHeight + window.pageYOffset - elRect.height : y
    ].sort((a, b) => a - b)[1]
  ],
  rightOf: ({ x, y, elRect, targetRect, opts }, clipY) => [
    x > window.innerWidth
      ? targetRect.left - elRect.width - opts.bufferWidth
      : x,
    [
      0,
      y,
      clipY ? window.innerHeight + window.pageYOffset - elRect.height : y
    ].sort((a, b) => a - b)[1]
  ]
}

export type PositionFunction = (
  target: HTMLElement,
  clipY?: boolean
) => {
  styleFor: (
    el: HTMLElement | undefined,
    options?: Partial<StyleOptions>
  ) => PositionStyle
}

export const above: PositionFunction = (target, clipY) => {
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
        ...clipAdjust.above({ x, y, targetRect, elRect, opts }, clipY)
      )
    }
  }
}

export const aboveLeft: PositionFunction = (target, clipY) => {
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
        ...clipAdjust.above({ x, y, targetRect, elRect, opts }, clipY)
      )
    }
  }
}

export const aboveRight: PositionFunction = (target, clipY) => {
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
        ...clipAdjust.above({ x, y, targetRect, elRect, opts }, clipY)
      )
    }
  }
}

export const rightOf: PositionFunction = (target, clipY) => {
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
        ...clipAdjust.rightOf({ x, y, targetRect, elRect, opts }, clipY)
      )
    }
  }
}

export const below: PositionFunction = (target, clipY) => {
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
        ...clipAdjust.below({ x, y, targetRect, elRect, opts }, clipY)
      )
    }
  }
}

export const belowLeft: PositionFunction = (target, clipY) => {
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
        ...clipAdjust.below({ x, y, targetRect, elRect, opts }, clipY)
      )
    }
  }
}

export const belowRight: PositionFunction = (target, clipY) => {
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
        ...clipAdjust.below({ x, y, targetRect, elRect, opts }, clipY)
      )
    }
  }
}

export const leftOf: PositionFunction = (target, clipY) => {
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
        ...clipAdjust.leftOf({ x, y, targetRect, elRect, opts }, clipY)
      )
    }
  }
}

function overrideDefaultOpts(
  opts: Partial<StyleOptions> | undefined
): StyleOptions {
  return { ...opts, ...defaultOptions }
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
