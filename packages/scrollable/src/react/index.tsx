import {
  canUseDOM,
  combineFns,
  shallowCompare,
  useResizeObserver
} from '@pluralsight/ps-design-system-util'
import { compose, css, media } from 'glamor'
import React, {
  forwardRef,
  useCallback,
  useEffect,
  useImperativeHandle,
  useMemo,
  useState,
  useRef
} from 'react'

import stylesheet from '../css'

const styles = {
  outer: () =>
    compose(
      css(stylesheet['.psds-scrollable__outer']),
      media('not print', stylesheet['.psds-scrollable__outer--screen'])
    ),
  inner: () => css(stylesheet['.psds-scrollable__inner']),
  content: () => css(stylesheet['.psds-scrollable__content']),
  handle: (grabbed: boolean) =>
    compose(
      css(stylesheet['.psds-scrollable__handle']),
      grabbed && css(stylesheet['.psds-scrollable__handle--grabbed'])
    )
}

let BLANK_IMAGE: HTMLImageElement | undefined
if (canUseDOM()) {
  BLANK_IMAGE = new Image(0, 0)
  // prettier-ignore
  BLANK_IMAGE.src = 'data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7';
}

function areEqualProps(
  prevProps: Record<string, unknown>,
  nextProps: Record<string, unknown>
) {
  const changed = shallowCompare(prevProps, nextProps)
  return !changed
}

interface ScrollableProps extends React.HTMLAttributes<HTMLDivElement> {
  renderContent?: (
    props: renderContentProps,
    ref: React.RefCallback<HTMLElement>
  ) => React.ReactNode
}
const Scrollable = forwardRef<HTMLElement, ScrollableProps>(
  (props, forwardedRef) => {
    const { renderContent = defaultRenderContent, ...rest } = props

    const ref = useRef<HTMLElement>()
    /* eslint-disable-next-line @typescript-eslint/no-unnecessary-type-assertion */
    useImperativeHandle(forwardedRef, () => ref.current as HTMLElement)

    const dragPreview = useRef(BLANK_IMAGE)

    const [hidden, setHidden] = useState<boolean>(true)
    const [pageY, setPageY] = useState<number>(0)
    const [offset, setOffset] = useState<string>('0%')
    const [scrollRatio, setScrollRatio] = useState<number>(0)

    const updateDimensions = useCallback(() => {
      if (!ref.current) return
      const content = ref.current

      const nextTotalHeight = content.scrollHeight
      const nextOffset = (content.scrollTop / nextTotalHeight) * 100 + '%'
      const nextScrollRatio = content.clientHeight / nextTotalHeight
      const shouldHide = nextScrollRatio >= 1

      setHidden(shouldHide)
      setOffset(nextOffset)
      setScrollRatio(nextScrollRatio)
    }, [ref])

    useResizeObserver(ref, updateDimensions)

    // eslint-disable-next-line react-hooks/exhaustive-deps
    useEffect(() => updateDimensions(), [])

    function onHandleDrag(evt: React.DragEvent<HTMLDivElement>) {
      const nextPageY = evt.pageY
      if (nextPageY <= 0) return

      const content = ref.current
      if (!content) return
      const delta = evt.pageY - pageY

      setPageY(nextPageY)
      content.scrollTop += delta / scrollRatio
    }

    function onHandleDragEnd(_evt: React.DragEvent<HTMLDivElement>) {
      setPageY(0)
    }

    function onHandleDragStart(evt: React.DragEvent<HTMLDivElement>) {
      if (
        evt &&
        evt.dataTransfer &&
        evt.dataTransfer.setDragImage &&
        dragPreview.current
      ) {
        evt.dataTransfer.setDragImage(dragPreview.current, 0, 0)
      }

      setPageY(evt.pageY)
    }

    const styleOverride = useMemo(() => {
      const height = Math.max(scrollRatio * 100, 10) + '%'
      const visibility = hidden ? 'hidden' : 'initial'

      return css({ height, top: offset, visibility })
    }, [hidden, offset, scrollRatio])

    return (
      <Outer data-scrollable {...rest}>
        <Inner key="scrollable-wrapper">
          {renderContent(
            {
              children: props.children,
              onScroll: updateDimensions,
              ...styles.content()
            },
            (node: HTMLElement) => (ref.current = node)
          )}
        </Inner>

        <Handle
          draggable
          onDrag={onHandleDrag}
          onDragEnd={onHandleDragEnd}
          onDragStart={onHandleDragStart}
          {...styleOverride}
        />
      </Outer>
    )
  }
)
Scrollable.displayName = 'Scrollable'

export interface renderContentProps {
  /* [cssSelector: string]: string */
  children: React.ReactNode
  onScroll: React.UIEventHandler
}
const defaultRenderContent = (
  contentProps: renderContentProps,
  contentRef: React.RefCallback<HTMLElement>
) => <div {...contentProps} ref={contentRef} />

const Outer = React.memo<React.HTMLAttributes<HTMLDivElement>>(
  function OuterComp(props) {
    return <div {...styles.outer()} {...props} />
  },
  areEqualProps
)
Outer.displayName = 'Scrollable.Outer'

const Inner = React.memo<React.HTMLAttributes<HTMLDivElement>>(
  function InnerComp(props) {
    return <div {...styles.inner()} {...props} />
  },
  areEqualProps
)
Inner.displayName = 'Scrollable.Inner'

interface HandleProps {
  draggable: boolean
  onDrag?: React.DragEventHandler
  onDragEnd?: React.DragEventHandler
  onDragStart?: React.DragEventHandler
}
const Handle: React.FC<HandleProps> = props => {
  const [grabbed, setGrabbed] = useState<boolean>(false)

  const onDragEnd = combineFns<[React.DragEvent<HTMLDivElement>]>(() => {
    setGrabbed(false)
  }, props.onDragEnd)

  const onDragStart = combineFns<[React.DragEvent<HTMLDivElement>]>(() => {
    setGrabbed(true)
  }, props.onDragStart)

  return (
    <div
      {...styles.handle(grabbed)}
      {...props}
      onDragEnd={onDragEnd}
      onDragStart={onDragStart}
    />
  )
}
Handle.displayName = 'Scrollable.Handle'

export default Scrollable
