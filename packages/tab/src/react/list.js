import { motion } from '@pluralsight/ps-design-system-core'
import filterReactProps from '@pluralsight/ps-design-system-filter-react-props'
import * as glamor from 'glamor'
import {
  CaretRightIcon,
  CaretLeftIcon
} from '@pluralsight/ps-design-system-icon'
import PropTypes from 'prop-types'
import React from 'react'
import { useTheme } from '@pluralsight/ps-design-system-theme'

import css from '../css/index.js'
import useResizeObserver from './use-resize-observer.js'

const slideAnimationLength = parseInt(motion.speedFast) + 10

const styles = {
  list: ({ themeName }) =>
    glamor.css(
      css['.psds-tab__list'],
      css[`.psds-tab__list.psds-theme--${themeName}`]
    ),
  overflowButton: ({ position, themeName }) =>
    glamor.css(
      css['.psds-tab__overflow-button'],
      css[`.psds-tab__overflow-button--${position}`],
      css[`.psds-tab__overflow-button.psds-theme--${themeName}`],
      css[`.psds-tab__overflow-button--${position}.psds-theme--${themeName}`]
    ),
  overflowButtonIcon: () => glamor.css(css['.psds-tab__overflow-button__icon']),
  slider: () => glamor.css(css['.psds-tab__slider'])
}

function List(props) {
  const themeName = useTheme()
  const allProps = {
    ...props,
    themeName
  }
  const { ref: listRef, width: listWidth } = useResizeObserver()
  const sliderRef = React.useRef()
  const [isRenderedOnce, setRenderedOnce] = React.useState(false)
  const [overflows, setOverflows] = React.useState({
    toLeft: false,
    toRight: false
  })
  const [xOffset, setXOffset] = React.useState(0)
  const [sliderWidth, setSliderWidth] = React.useState(0)
  const activeIndexFromProps = findActiveIndex(allProps.children)
  const [activeIndex, setActiveIndex] = React.useState(
    activeIndexFromProps > -1 ? activeIndexFromProps : 0
  )
  const itemRefs = React.useMemo(
    _ => React.Children.map(allProps.children, () => React.createRef()) || [],
    [allProps.children]
  )

  React.useEffect(
    function calcSliderWidth() {
      if (itemRefs)
        setSliderWidth(
          itemRefs.reduce((totalWidth, ref) => totalWidth + getWidth(ref), 0)
        )
    },
    [itemRefs]
  )

  React.useEffect(
    function ensureActiveItemOnscreen() {
      if (!isRenderedOnce) {
        const itemRightX = getRightX(itemRefs[activeIndex])
        const listRightX = getRightX(listRef)
        const isItemOffscreen = itemRightX > listRightX
        if (isItemOffscreen) {
          setXOffset(-1 * (itemRightX - listRightX))
        }
        setRenderedOnce(true)
      }
    },
    [activeIndex, isRenderedOnce, itemRefs, listRef]
  )

  React.useEffect(
    function setActiveIndexFromProps() {
      if (activeIndex !== activeIndexFromProps && activeIndexFromProps !== -1)
        setActiveIndex(activeIndexFromProps)
    },
    [activeIndex, activeIndexFromProps]
  )

  React.useEffect(() => {
    function calcOverflow() {
      const toRight = sliderWidth + xOffset > listWidth

      const listLeftX = getLeftX(listRef)
      const sliderLeftX = getLeftX(sliderRef)
      const toLeft = sliderLeftX + xOffset < listLeftX

      setOverflows({
        toLeft,
        toRight
      })
    }

    const timer = setTimeout(calcOverflow, slideAnimationLength)

    return () => {
      clearTimeout(timer)
    }
  }, [listRef, sliderRef, xOffset, listWidth, sliderWidth])

  React.useEffect(() => {
    listWidth >= listRef.current.scrollWidth && setXOffset(0)
  }, [listWidth, listRef])

  function handleListItemClick(i, originalOnClick, evt) {
    setActiveIndex(i)
    if (typeof originalOnClick === 'function') originalOnClick(i, evt)
  }

  function handleKeyDown(evt) {
    if (evt.key !== 'ArrowRight' && evt.key !== 'ArrowLeft') return

    evt.stopPropagation()
    evt.preventDefault()
    const delta = evt.key === 'ArrowRight' ? 1 : -1
    const nextRef = itemRefs[activeIndex + delta]

    if (nextRef && nextRef.current) {
      if (delta === 1) {
        const itemRightX = getRightX(nextRef)
        const listRightX = getRightX(listRef)
        const isOffscreenRight = itemRightX > listRightX
        if (isOffscreenRight) {
          setXOffset(xOffset - (itemRightX - listRightX))
        }
      } else {
        const itemLeftX = getLeftX(nextRef)
        const listLeftX = getLeftX(listRef)
        const isOffscreenLeft = itemLeftX < listLeftX
        if (isOffscreenLeft) {
          setXOffset(xOffset - itemLeftX)
        }
      }

      setTimeout(() => {
        if (nextRef && nextRef.current) {
          nextRef.current.focus()
          nextRef.current.click()
        }
      }, slideAnimationLength)
    }
  }

  function handlePageLeft(evt) {
    evt.preventDefault()
    const offscreenLeftWidth = getLeftX(listRef) - getLeftX(sliderRef)
    const smallestNeededWidth = Math.min(listWidth, offscreenLeftWidth)
    const lesserXOffset = Math.min(xOffset + smallestNeededWidth, 0)
    setXOffset(lesserXOffset)
  }

  function handlePageRight(evt) {
    evt.preventDefault()
    const maxXOffset = -1 * sliderWidth + listWidth
    const furtherXOffset = Math.max(xOffset - listWidth, maxXOffset)
    setXOffset(furtherXOffset)
  }

  const { children, ...rest } = allProps
  const listProps = {
    ...rest,
    role: 'tablist',
    onKeyDown: handleKeyDown,
    tabIndex: '0'
  }
  return (
    <div
      {...filterReactProps(listProps)}
      {...styles.list(listProps)}
      ref={listRef}
    >
      {overflows.toLeft && (
        <OverflowButton position="left" onClick={handlePageLeft} />
      )}
      <div
        {...styles.slider(rest)}
        ref={sliderRef}
        style={styleForXOffset(xOffset)}
      >
        {React.Children.map(
          allProps.children,
          (comp, i) =>
            comp &&
            React.cloneElement(comp, {
              active: activeIndex === i,
              key: comp.id,
              onClick: evt => handleListItemClick(i, comp.props.onClick, evt),
              ref: itemRefs[i]
            })
        )}
      </div>
      {overflows.toRight && (
        <OverflowButton position="right" onClick={handlePageRight} />
      )}
    </div>
  )
}

List.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.element,
    PropTypes.arrayOf(PropTypes.element)
  ])
}

export default List

function OverflowButton(props) {
  const themeName = useTheme()
  const allProps = {
    ...props,
    themeName
  }
  return (
    <button {...styles.overflowButton(allProps)} tabIndex="-1" {...props}>
      <div {...styles.overflowButtonIcon()}>
        {allProps.position === 'right' ? <CaretRightIcon /> : <CaretLeftIcon />}
      </div>
    </button>
  )
}
OverflowButton.propTypes = {
  position: PropTypes.oneOf(['left', 'right'])
}

function styleForXOffset(xOffset) {
  return { transform: `translateX(${xOffset}px)` }
}

function getWidth(ref) {
  if (!(ref && ref.current)) return 0
  const rect = ref.current.getBoundingClientRect()
  return rect.width
}

function getLeftX(ref) {
  if (!(ref && ref.current)) return 0
  const rect = ref.current.getBoundingClientRect()
  return window.pageXOffset + rect.left
}

function getRightX(ref) {
  if (!(ref && ref.current)) return 0
  const rect = ref.current.getBoundingClientRect()
  return window.pageXOffset + rect.left + rect.width
}

function findActiveIndex(els) {
  return React.Children.toArray(els).findIndex(el => el && el.props.active)
}
