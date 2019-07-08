import * as glamor from 'glamor'
import React from 'react'
import PropTypes from 'prop-types'

import filterReactProps from '@pluralsight/ps-design-system-filter-react-props'

import css from '../css/index.js'
import { chunk } from '../js/utils.js'
import * as vars from '../vars/index.js'

import CarouselContext from './context.js'
import { Controls, Control } from './controls.js'
import useResizeObserver from './use-resize-observer.js'

const styles = {
  carousel: () => glamor.css(css['.psds-carousel']),
  pages: () => glamor.css(css['.psds-carousel__pages']),
  page: () => glamor.css(css['.psds-carousel__page']),
  item: () => glamor.css(css['.psds-carousel__item'])
}

export default function Carousel({ controls, size, ...props }) {
  const { ref, width } = useResizeObserver()

  const constraints = vars.constraints[size]
  const perPage = calcItemsPerPage(constraints, width)

  const childArr = React.Children.toArray(props.children)
  const pages = chunk(childArr, perPage).map(page => insertShims(page, perPage))

  const { ref: pagesRef, next, prev, offset } = usePager(pages, [width])

  return (
    <CarouselContext.Provider value={{ next, prev, offset }}>
      <div {...styles.carousel()} {...filterReactProps(props)} ref={ref}>
        {controls}

        <div {...styles.pages()} ref={pagesRef}>
          {pages.map((items, i) => (
            <Page key={i}>
              {items.map((item, j) => (
                <Item key={j}>{item}</Item>
              ))}
            </Page>
          ))}
        </div>
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
  controls: <Controls />,
  size: Carousel.sizes.narrow
}

function calcItemsPerPage(constraints, width) {
  const minItemSize = constraints.minWidth + constraints.gutter
  const perPage = Math.floor(width / (minItemSize - constraints.gutter))

  return perPage <= 0 ? 1 : perPage
}

function insertShims(page, perPage) {
  if (page.length >= perPage) return page

  return page.concat(new Array(perPage - page.length).fill(<ItemShim />))
}

function usePager(pages, runOnChange = []) {
  const [activePage, setActivePage] = React.useState(0)
  const [offset, setOffset] = React.useState(0)

  const ref = React.useRef()

  React.useEffect(() => {
    const { current: parentEl } = ref
    const nextPageEl = parentEl.children[activePage]

    // NOTE: this is to fix storyshots.
    // TODO: find out why it's this is undefined in tests
    if (!nextPageEl) return

    setOffset(parentEl.offsetLeft - nextPageEl.offsetLeft)
  }, [activePage, ...runOnChange])

  const next = () => {
    const nextPage = activePage + 1
    if (nextPage > pages.length - 1) return

    setActivePage(nextPage)
  }

  const prev = () => {
    const nextPage = activePage - 1
    if (nextPage < 0) return

    setActivePage(nextPage)
  }
  return { ref, next, prev, offset, activePage }
}

function Item(props) {
  return <div {...styles.item()} {...props} />
}

function ItemShim() {
  return null
}

function Page(props) {
  const { offset } = React.useContext(CarouselContext)

  return (
    <div
      {...styles.page()}
      {...glamor.css({ transform: `translate3d(${offset}px, 0, 0)` })}
      {...props}
    />
  )
}
