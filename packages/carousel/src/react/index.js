import { compose, css } from 'glamor'
import React from 'react'
import PropTypes from 'prop-types'

import filterReactProps from '@pluralsight/ps-design-system-filter-react-props'

import stylesheet from '../css/index.js'
import { chunk, pick } from '../js/utils.js'
import * as vars from '../vars/index.js'

import CarouselContext from './context.js'
import { Controls, Control } from './controls.js'
import useResizeObserver from './use-resize-observer.js'
import useSwipeEvents from './use-swipe-events.js'
import useUniqueId from './use-unique-id.js'

const styles = {
  carousel: ({ ready }) =>
    compose(
      css(stylesheet['.psds-carousel']),
      ready && css(stylesheet['.psds-carousel--ready'])
    ),
  pages: () => css(stylesheet['.psds-carousel__pages']),
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
  const pages = chunk(childArr, perPage).map(page => insertShims(page, perPage))
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
        {...styles.carousel({ ready })}
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
      <p>use your arrow keys for more</p>
    </div>
  )
}

function Item(props) {
  return <div {...styles.item()} {...props} />
}

const Pages = React.forwardRef((props, ref) => {
  const context = React.useContext(CarouselContext)
  const [swipeEvents] = useSwipeEvents(props)

  return (
    <ul
      aria-describedby={`${context.id}__instructions`}
      aria-label="carousel"
      id={context.id}
      ref={ref}
      role="region"
      tabIndex="0"
      {...styles.pages()}
      {...filterReactProps(props)}
      {...swipeEvents}
    />
  )
})

Pages.propTypes = {
  onSwipeLeft: PropTypes.func,
  onSwipeRight: PropTypes.func
}

function Page({ isActivePage, ...props }) {
  const { offset } = React.useContext(CarouselContext)

  return (
    <li
      {...styles.page()}
      {...css({ transform: `translate3d(${offset}px, 0, 0)` })}
      {...(!isActivePage && { 'aria-hidden': true, tabIndex: -1 })}
      {...props}
    />
  )
}

Page.propTypes = {
  isActivePage: PropTypes.bool.isRequired
}

function calcItemsPerPage(constraints, width) {
  const minItemSize = constraints.minWidth + constraints.gutter
  const perPage = Math.floor(width / (minItemSize - constraints.gutter))

  return perPage <= 0 ? 1 : perPage
}

function insertShims(page, perPage) {
  if (page.length >= perPage) return page

  return page.concat(new Array(perPage - page.length).fill(null))
}

const isLeftArrow = evt => evt.keyCode === 37

const isRightArrow = evt => evt.keyCode === 39

function usePager(pageCount, additionalSideEffectTriggers = []) {
  const [activePage, setActivePage] = React.useState(0)
  const [offset, setOffset] = React.useState(0)

  const ref = React.useRef()

  React.useEffect(() => {
    if (pageCount - 1 <= activePage) setActivePage(pageCount - 1)
  }, [activePage, pageCount])

  React.useEffect(() => {
    const nextPageEl = ref.current.childNodes[activePage]
    if (!nextPageEl) return

    const nextOffset = ref.current.offsetLeft - nextPageEl.offsetLeft

    setOffset(nextOffset)
  }, [activePage, pageCount, ...additionalSideEffectTriggers])

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
