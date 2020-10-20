/* eslint-disable react/jsx-handler-names */
import { compose, css } from 'glamor'
import React, { cloneElement } from 'react'
import PropTypes from 'prop-types'

import filterReactProps from '@pluralsight/ps-design-system-filter-react-props'

import stylesheet from '../css/index.js'
import { calcItemsPerPage, isLeftArrow, isRightArrow } from '../js/index.js'
import { chunk, isFunction, pick } from '../js/utils.js'
import * as vars from '../vars/index.js'

import CarouselContext from './context.js'
import { Control } from './control.js'

import useResizeObserver from './use-resize-observer.js'
import useSwipe from './use-swipe.js'
import useUniqueId from './use-unique-id.js'

const styles = {
  carousel: (props, { ready }) =>
    compose(
      css(stylesheet['.psds-carousel']),
      ready && css(stylesheet['.psds-carousel--ready'])
    ),
  pages: props => compose(css(stylesheet['.psds-carousel__pages'])),
  page: props =>
    compose(
      css(stylesheet['.psds-carousel__page']),
      props.isActivePage && css(stylesheet['.psds-carousel__page--active'])
    ),
  instructions: () => css(stylesheet['.psds-carousel__instructions']),
  item: () => css(stylesheet['.psds-carousel__item'])
}

export default function Carousel({ controlPrev, controlNext, size, ...props }) {
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
  const [transitioning, setTransitioning] = React.useState(false)
  const contextValue = {
    ...pick(pager, ['activePage', 'next', 'offset', 'prev']),
    id,
    pageCount,
    perPage,
    transitioning,
    setTransitioning
  }

  return (
    <CarouselContext.Provider value={contextValue}>
      <div
        {...styles.carousel(props, { ready })}
        {...filterReactProps(props)}
        ref={ref}
      >
        {controlPrev}
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
          {pages.map((items, pageIndex) => {
            const isActivePage = pager.activePage === pageIndex

            return (
              <Page
                key={pageIndex}
                isActivePage={isActivePage}
                pageIndex={pageIndex}
                paged={pager.paged}
              >
                {items.map((item, itemIndex) => {
                  const wrapped = isOfComponentType(item, Item)
                  if (!wrapped) item = <Item key={itemIndex}>{item}</Item>

                  return cloneElement(item, {
                    key: itemIndex,
                    ...(itemIndex === 0 && isActivePage && { tabIndex: -1 }),
                    isActivePage,
                    itemIndex,
                    itemsPerPage: perPage,
                    pageCount,
                    pageIndex
                  })
                })}
              </Page>
            )
          })}
        </Pages>
        {controlNext}
        <Instructions />
      </div>
    </CarouselContext.Provider>
  )
}

function Item({ children, ...props }) {
  return (
    <li {...styles.item()} {...filterReactProps(props)}>
      {isFunction(children)
        ? children({
            isActivePage: props.isActivePage,
            itemIndex: props.itemIndex,
            itemsPerPage: props.itemsPerPage,
            pageCount: props.pageCount,
            pageIndex: props.pageIndex
          })
        : children}
    </li>
  )
}

Item.propTypes = {
  children: PropTypes.oneOfType([PropTypes.func, PropTypes.node]),
  isActivePage: PropTypes.bool,
  itemIndex: PropTypes.number,
  itemsPerPage: PropTypes.number,
  pageCount: PropTypes.number,
  pageIndex: PropTypes.number
}

Carousel.Control = Control
Carousel.Control.displayName = 'Carousel.Control'

Carousel.Item = Item
Carousel.Item.displayName = 'Carousel.Item'

Carousel.sizes = vars.sizes

Carousel.propTypes = {
  controlPrev: PropTypes.node,
  controlNext: PropTypes.node,
  children: PropTypes.node.isRequired,
  size: PropTypes.oneOf(Object.keys(Carousel.sizes))
}
Carousel.defaultProps = {
  controlPrev: <Control direction={Control.directions.prev} />,
  controlNext: <Control direction={Control.directions.next} />,
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

const Pages = React.forwardRef((props, ref) => {
  const context = React.useContext(CarouselContext)

  useSwipe(ref, {
    onSwipeLeft: props.onSwipeLeft,
    onSwipeRight: props.onSwipeRight
  })

  return (
    <div
      aria-describedby={`${context.id}__instructions`}
      aria-label="carousel"
      id={context.id}
      ref={ref}
      role="region"
      {...styles.pages(props)}
      {...filterReactProps(props)}
    />
  )
})

Pages.displayName = 'Carousel.Pages'

Pages.propTypes = {
  onSwipeLeft: PropTypes.func.isRequired,
  onSwipeRight: PropTypes.func.isRequired
}

const Page = props => {
  const ref = React.useRef()

  const { children, isActivePage, paged, ...rest } = props
  const { offset, transitioning, setTransitioning } = React.useContext(
    CarouselContext
  )
  React.useEffect(() => {
    if (paged && isActivePage) {
      const page = ref.current
      const focusFirstChild = e => {
        setTransitioning(false)
        e.target === page && page.firstElementChild.focus()
      }
      page.addEventListener('transitionend', focusFirstChild)
    }
  }, [isActivePage, paged])
  return (
    <ul
      ref={ref}
      {...styles.page(props)}
      {...css({ transform: `translate3d(${offset}px, 0, 0)` })}
      {...filterReactProps(rest)}
      {...(!isActivePage && {
        hidden: true,
        style: { visibility: transitioning ? 'visible' : 'hidden' }
      })}
    >
      {children}
    </ul>
  )
}
Pages.displayName = 'Carousel.Page'
Page.propTypes = {
  children: PropTypes.node,
  paged: PropTypes.bool,
  isActivePage: PropTypes.bool
}

Page.propTypes = {
  isActivePage: PropTypes.bool.isRequired
}

function insertEmptyItems(page, perPage) {
  if (page.length >= perPage) return page

  return page.concat(new Array(perPage - page.length).fill(null))
}

function isOfComponentType(instance, el) {
  return instance && instance.type.displayName === el.displayName
}

function usePager(pageCount, additionalSideEffectTriggers = []) {
  const [activePage, setActivePage] = React.useState(0)
  const [offset, setOffset] = React.useState(0)
  const [paged, setPaged] = React.useState(false)
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
    setPaged(true)
  }

  const prev = () => {
    const nextPage = activePage - 1
    if (nextPage < 0) return

    setActivePage(nextPage)
    setPaged(true)
  }

  return {
    activePage,
    next,
    offset,
    prev,
    ref,
    paged
  }
}
