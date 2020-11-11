import * as React from 'react'
import {
  canUseDOM,
  cloneElementWithRef,
  createUniversalPortal
} from '@pluralsight/ps-design-system-util'

import * as positionFns from '../js'
import useOnWindowResize from './use-on-window-resize'
import useOnWindowScroll from './use-on-window-scroll'

export const Above = React.forwardRef<
  HTMLElement,
  Omit<PositionProps, 'position'>
>((props, ref) => {
  return <Position position={positionFns.above} ref={ref} {...props} />
})
Above.displayName = 'Above'

export const AboveLeft = React.forwardRef<
  HTMLElement,
  Omit<PositionProps, 'position'>
>((props, ref) => {
  return <Position position={positionFns.aboveLeft} ref={ref} {...props} />
})
AboveLeft.displayName = 'AboveLeft'

export const AboveRight = React.forwardRef<
  HTMLElement,
  Omit<PositionProps, 'position'>
>((props, ref) => {
  return <Position position={positionFns.aboveRight} ref={ref} {...props} />
})
AboveRight.displayName = 'AboveRight'

export const Below = React.forwardRef<
  HTMLElement,
  Omit<PositionProps, 'position'>
>((props, ref) => {
  return <Position position={positionFns.below} ref={ref} {...props} />
})
Below.displayName = 'Below'

export const BelowLeft = React.forwardRef<
  HTMLElement,
  Omit<PositionProps, 'position'>
>((props, ref) => {
  return <Position position={positionFns.belowLeft} ref={ref} {...props} />
})
BelowLeft.displayName = 'BelowLeft'

export const BelowRight = React.forwardRef<
  HTMLElement,
  Omit<PositionProps, 'position'>
>((props, ref) => {
  return <Position position={positionFns.belowRight} ref={ref} {...props} />
})
BelowRight.displayName = 'BelowRight'

export const RightOf = React.forwardRef<
  HTMLElement,
  Omit<PositionProps, 'position'>
>((props, ref) => {
  return <Position position={positionFns.rightOf} ref={ref} {...props} />
})
RightOf.displayName = 'RightOf'

export const LeftOf = React.forwardRef<
  HTMLElement,
  Omit<PositionProps, 'position'>
>((props, ref) => {
  return <Position position={positionFns.leftOf} ref={ref} {...props} />
})
LeftOf.displayName = 'LeftOf'

interface ShowProps {
  ref?: React.RefObject<HTMLElement>
  style?: React.CSSProperties
}
interface PositionProps {
  children: React.FunctionComponentElement<unknown>
  inNode?: HTMLElement
  position: positionFns.PositionFunction
  show: React.FunctionComponentElement<ShowProps>
  target?: HTMLElement | React.RefObject<HTMLElement>
  when?: boolean
}
const Position = React.forwardRef<HTMLElement, PositionProps>(
  (props, forwardedRef) => {
    const { target, position: positionFn } = props
    const inNode = props.inNode || (canUseDOM() ? document.body : undefined)
    const when = typeof props.when === 'boolean' ? props.when : true

    const [shownOnce, setShownOnce] = React.useState(false)
    const [style, setStyle] = React.useState<
      Partial<positionFns.PositionStyle>
    >({
      position: 'absolute'
    })

    const ref = React.useRef<HTMLElement>()
    /* eslint-disable-next-line @typescript-eslint/no-unnecessary-type-assertion */
    React.useImperativeHandle(forwardedRef, () => ref.current as HTMLElement)

    const child = React.Children.only(
      props.children as React.FunctionComponentElement<unknown>
    )
    const innerRef = React.useRef<HTMLElement>()
    const showRef = props.show.ref || innerRef
    const showEl = cloneElementWithRef(
      (props.show as unknown) as React.ReactHTMLElement<HTMLElement>,
      innerRef,
      {
        style: { ...props.show.props.style, ...style }
      }
    )

    const updateStyle = React.useCallback(() => {
      const targetNode =
        target instanceof HTMLElement
          ? target
          : target !== undefined
          ? target.current
          : ref.current
      if (!showRef.current || !targetNode) return

      const nextStyle = positionFn(targetNode).styleFor(showRef.current)
      setStyle(nextStyle)
      setShownOnce(true)
    }, [positionFn, target, showRef.current])

    useOnWindowResize(_evt => updateStyle())
    useOnWindowScroll(evt => {
      const isInner =
        !showRef.current || showRef.current.contains(evt.target as Node)
      if (isInner) return

      updateStyle()
    })
    React.useEffect(() => {
      if (!when) return
      const timerId = delayUntilNextTick(() => updateStyle())

      return () => clearTimeout(timerId)
    }, [updateStyle, when])

    return (
      <>
        {target
          ? child
          : cloneElementWithRef<React.HTMLAttributes<HTMLElement>, HTMLElement>(
              child as any,
              ref,
              {}
            )}

        {createUniversalPortal(
          <div style={{ visibility: shownOnce ? 'visible' : 'hidden' }}>
            {when && showEl}
          </div>,
          inNode
        )}
      </>
    )
  }
)

function delayUntilNextTick(fn: () => void) {
  // eslint-disable-next-line
  return setTimeout(fn, 1)
}
