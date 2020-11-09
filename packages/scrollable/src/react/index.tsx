import { canUseDOM } from 'exenv'
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
import PropTypes from 'prop-types'

import filterReactProps from '@pluralsight/ps-design-system-filter-react-props'
import {
  combineFns,
  shallowCompare,
  useResizeObserver
} from '@pluralsight/ps-design-system-util'

import stylesheet from '../css/index.js'

const styles = {
  outer: () =>
    compose(
      css(stylesheet['.psds-scrollable__outer']),
      media('not print', stylesheet['.psds-scrollable__outer--screen'])
    ),

  inner: () => css(stylesheet['.psds-scrollable__inner']),

  content: () => css(stylesheet['.psds-scrollable__content']),

  handle: (_props, { grabbed }) =>
    compose(
      css(stylesheet['.psds-scrollable__handle']),
      grabbed && css(stylesheet['.psds-scrollable__handle--grabbed'])
    )
}

const BLANK_IMAGE = canUseDOM ? new Image(0, 0) : {}
// prettier-ignore
BLANK_IMAGE.src = 'data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7';

function areEqualProps(prevProps, nextProps) {
  const changed = shallowCompare(prevProps, nextProps)
  return !changed
}

const Scrollable = forwardRef((props, forwardedRef) => {
  const { contentAs, ...rest } = props

  const ref = useRef()
  useImperativeHandle(forwardedRef, () => ref.current)

  const dragPreview = useRef(BLANK_IMAGE)

  const [hidden, setHidden] = useState(true)
  const [pageY, setPageY] = useState(0)
  const [offset, setOffset] = useState('0%')
  const [scrollRatio, setScrollRatio] = useState(0)

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

  function onHandleDrag(evt) {
    const nextPageY = evt.pageY
    if (nextPageY <= 0) return

    const content = ref.current
    const delta = evt.pageY - pageY

    setPageY(nextPageY)
    content.scrollTop += delta / scrollRatio
  }

  function onHandleDragEnd(_evt) {
    setPageY(0)
  }

  function onHandleDragStart(evt) {
    if (evt && evt.dataTransfer && evt.dataTransfer.setDragImage) {
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
        <Content as={contentAs} onScroll={updateDimensions} ref={ref}>
          {props.children}
        </Content>
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
})

Scrollable.propTypes = {
  children: PropTypes.node,
  contentAs: PropTypes.elementType
}

const Outer = React.memo(function OuterComp(props) {
  return <div {...styles.outer()} {...filterReactProps(props)} />
}, areEqualProps)

const Inner = React.memo(function InnerComp(props) {
  return <div {...styles.inner()} {...props} />
}, areEqualProps)

const Content = forwardRef((props, forwardedRef) => {
  const { as: Tag = 'div', ...rest } = props

  const ref = useRef()
  useImperativeHandle(forwardedRef, () => ref.current)

  return <Tag ref={ref} {...styles.content()} {...rest} />
})

Content.propTypes = {
  as: PropTypes.elementType
}

function Handle(props) {
  const [grabbed, setGrabbed] = useState(false)

  const onDragEnd = combineFns(() => {
    setGrabbed(false)
  }, props.onDragEnd)

  const onDragStart = combineFns(() => {
    setGrabbed(true)
  }, props.onDragStart)

  return (
    <div
      {...styles.handle(props, { grabbed })}
      {...props}
      onDragEnd={onDragEnd}
      onDragStart={onDragStart}
    />
  )
}

Handle.propTypes = {
  draggable: PropTypes.bool.isRequired,
  onDrag: PropTypes.func,
  onDragEnd: PropTypes.func,
  onDragStart: PropTypes.func
}

Scrollable.displayName = 'Scrollable'

Outer.displayName = 'Scrollable.Outer'
Inner.displayName = 'Scrollable.Inner'
Content.displayName = 'Scrollable.Content'
Handle.displayName = 'Scrollable.Handle'

export default Scrollable
