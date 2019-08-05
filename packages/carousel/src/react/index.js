import { compose, css } from 'glamor'
import React from 'react'
import { Transition } from 'react-transition-group'
import PropTypes from 'prop-types'

import filterReactProps from '@pluralsight/ps-design-system-filter-react-props'

import stylesheet from '../css/index.js'
import { calcItemsPerPage, isLeftArrow, isRightArrow } from '../js/index.js'
import { chunk, pick } from '../js/utils.js'
import * as vars from '../vars/index.js'

import CarouselContext from './context.js'
import { Controls, Control } from './controls.js'

import useResizeObserver from './use-resize-observer.js'
import useSwipe from './use-swipe.js'
import useUniqueId from './use-unique-id.js'

const TRANSITION_DURATION_MS = 500

const styles = {
  carousel: (props, { ready }) =>
    compose(
      css(stylesheet['.psds-carousel']),
      ready && css(stylesheet['.psds-carousel--ready'])
    ),
  pages: (props, { transitioning }) =>
    compose(
      css(stylesheet['.psds-carousel__pages']),
      transitioning && css(stylesheet['.psds-carousel__pages--transitioning'])
    ),
  page: () => css(stylesheet['.psds-carousel__page']),
  instructions: () => css(stylesheet['.psds-carousel__instructions']),
  item: () => css(stylesheet['.psds-carousel__item'])
}

export default function Carousel({ controls, size, ...props }) {
  const id = useUniqueId('carousel-')
  const { ref, width } = useResizeObserver()

  const constraints = vars.constraints[size]
  const perPage = calcItemsPerPage(constraints, width)

  const childArr = React.Children.toArray(props.children)
  const pages = chunk(childArr, perPage).map(page =>
    insertEmptyItems(page, perPage)
  )
  const pageCount = pages.length

  const pager = usePager(pageCount, [width])
  const ready = width && width > 0

  const contextValue = {
    ...pick(pager, ['activePage', 'next', 'offset', 'prev']),
    id,
    pageCount,
    perPage
  }

  return (
    <CarouselContext.Provider value={contextValue}>
      <div
        {...styles.carousel(props, { ready })}
        {...filterReactProps(props)}
        ref={ref}
      >
        <Pages
          ref={pager.ref}
          id={id}
          onKeyDown={evt => {
            if (isLeftArrow(evt)) pager.prev()
            if (isRightArrow(evt)) pager.next()
          }}
          onSwipeLeft={pager.next}
          onSwipeRight={pager.prev}
        >
          {pages.map((items, i) => (
            <Page key={i} isActivePage={pager.activePage === i}>
              {items.map((item, j) => (
                <Item key={j}>{item}</Item>
              ))}
            </Page>
          ))}
        </Pages>

        {controls}

        <Instructions />
      </div>
    </CarouselContext.Provider>
  )
}

Carousel.Controls = Controls
Carousel.Control = Control

Carousel.sizes = vars.sizes

Carousel.propTypes = {
  controls: PropTypes.node,
  children: PropTypes.node.isRequired,
  size: PropTypes.oneOf(Object.keys(Carousel.sizes))
}
Carousel.defaultProps = {
  controls: (
    <Controls>
      <Control direction={Control.directions.prev} />
      <Control direction={Control.directions.next} />
    </Controls>
  ),
  size: Carousel.sizes.narrow
}

function Instructions(props) {
  const context = React.useContext(CarouselContext)
  const id = `${context.id}__instructions`

  return (
    <div {...styles.instructions()} {...props} id={id}>
      <p>
        Currently on page {context.activePage + 1} of {context.pageCount}.
      </p>
      <p>Use left and right arrow keys for navigation.</p>
    </div>
  )
}

function Item(props) {
  return <div {...styles.item()} {...props} />
}

const Pages = React.forwardRef((props, ref) => {
  const context = React.useContext(CarouselContext)
  const prevActivePage = usePrevious(context.activePage)
  const [transitioning, setTransitioning] = React.useState(false)

  React.useEffect(() => {
    let timer
    const starting =
      prevActivePage !== undefined && prevActivePage !== context.activePage

    if (starting) {
      setTransitioning(true)
    } else {
      timer = setTimeout(() => {
        setTransitioning(false)
      }, TRANSITION_DURATION_MS)
    }

    return () => clearTimeout(timer)
  }, [context.activePage, prevActivePage])

  useSwipe(ref, {
    onSwipeLeft: props.onSwipeLeft,
    onSwipeRight: props.onSwipeRight
  })

  return (
    <ul
      aria-describedby={`${context.id}__instructions`}
      aria-label="carousel"
      id={context.id}
      ref={ref}
      role="region"
      tabIndex="0"
      {...styles.pages(props, { transitioning })}
      {...filterReactProps(props)}
    />
  )
})

Pages.propTypes = {
  onSwipeLeft: PropTypes.func.isRequired,
  onSwipeRight: PropTypes.func.isRequired
}

function Page({ isActivePage, ...props }) {
  const ref = React.useRef()
  const { offset } = React.useContext(CarouselContext)

  return (
    <li
      ref={ref}
      {...styles.page()}
      {...css({ transform: `translate3d(${offset}px, 0, 0)` })}
      {...props}
      {...(!isActivePage && { hidden: true, tabIndex: -1 })}
    >
      <Transition in={isActivePage} timeout={TRANSITION_DURATION_MS}>
        {state => {
          if (state === 'exited') return null
          return props.children
        }}
      </Transition>
    </li>
  )
}
Page.propTypes = {
  children: PropTypes.node,
  onKeyDown: PropTypes.func
}

Page.propTypes = {
  isActivePage: PropTypes.bool.isRequired
}

function insertEmptyItems(page, perPage) {
  if (page.length >= perPage) return page

  return page.concat(new Array(perPage - page.length).fill(null))
}

function usePager(pageCount, additionalSideEffectTriggers = []) {
  const [activePage, setActivePage] = React.useState(0)
  const [offset, setOffset] = React.useState(0)

  const ref = React.useRef()

  React.useEffect(
    function respondToActivePageRemoval() {
      if (pageCount - 1 <= activePage) setActivePage(pageCount - 1)
    },
    [activePage, pageCount]
  )

  React.useEffect(
    function updateOffset() {
      const activePageEl = ref.current.childNodes[activePage]
      if (!activePageEl) return

      const nextOffset = ref.current.offsetLeft - activePageEl.offsetLeft

      setOffset(nextOffset)
    },
    [activePage, pageCount, ...additionalSideEffectTriggers]
  )

  const next = () => {
    const nextPage = activePage + 1
    if (nextPage > pageCount - 1) return

    setActivePage(nextPage)
  }

  const prev = () => {
    const nextPage = activePage - 1
    if (nextPage < 0) return

    setActivePage(nextPage)
  }

  return {
    activePage,
    next,
    offset,
    prev,
    ref
  }
}

function usePrevious(value) {
  const ref = React.useRef()

  React.useEffect(() => {
    ref.current = value
  }, [value])

  return ref.current
}
