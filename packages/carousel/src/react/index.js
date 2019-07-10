import { compose, css } from 'glamor'
import React, { Fragment } from 'react'
import PropTypes from 'prop-types'

import filterReactProps from '@pluralsight/ps-design-system-filter-react-props'

import stylesheet from '../css/index.js'
import { chunk, pick } from '../js/utils.js'
import * as vars from '../vars/index.js'

import CarouselContext from './context.js'
import Control from './control.js'
import useResizeObserver from './use-resize-observer.js'

const styles = {
  carousel: ({ ready }) =>
    compose(
      css(stylesheet['.psds-carousel']),
      ready && css(stylesheet['.psds-carousel--ready'])
    ),
  pages: () => css(stylesheet['.psds-carousel__pages']),
  page: () => css(stylesheet['.psds-carousel__page']),
  item: () => css(stylesheet['.psds-carousel__item'])
}

export default function Carousel({ controls, size, ...props }) {
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
        <div {...styles.pages()} ref={pager.ref}>
          {pages.map((items, i) => (
            <Page key={i}>
              {items.map((item, j) => (
                <Item key={j}>{item}</Item>
              ))}
            </Page>
          ))}
        </div>

        {controls}
      </div>
    </CarouselContext.Provider>
  )
}

Carousel.Control = Control

Carousel.sizes = vars.sizes

Carousel.propTypes = {
  controls: PropTypes.node,
  children: PropTypes.node.isRequired,
  size: PropTypes.oneOf(Object.keys(Carousel.sizes))
}
Carousel.defaultProps = {
  controls: (
    <Fragment>
      <Control direction={Control.directions.prev} />
      <Control direction={Control.directions.next} />
    </Fragment>
  ),
  size: Carousel.sizes.narrow
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

function usePager(pageCount, additionalSideEffectTriggers = []) {
  const [activePage, setActivePage] = React.useState(0)
  const [offset, setOffset] = React.useState(0)

  const ref = React.useRef()

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

  React.useEffect(() => {
    const nextPageEl = ref.current.childNodes[activePage]
    const nextOffset = ref.current.offsetLeft - nextPageEl.offsetLeft

    setOffset(nextOffset)
  }, [activePage, pageCount, ...additionalSideEffectTriggers])

  return {
    activePage,
    next,
    offset,
    prev,
    ref
  }
}

function Item(props) {
  return <div data-testid="carousel__item" {...styles.item()} {...props} />
}

function Page(props) {
  const { offset } = React.useContext(CarouselContext)

  return (
    <div
      data-testid="carousel__page"
      {...styles.page()}
      {...css({ transform: `translate3d(${offset}px, 0, 0)` })}
      {...props}
    />
  )
}
