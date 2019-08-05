import { compose, css } from 'glamor'
import React, { cloneElement } from 'react'
import { Transition } from 'react-transition-group'
import PropTypes from 'prop-types'

import filterReactProps from '@pluralsight/ps-design-system-filter-react-props'

import stylesheet from '../css/index.js'
import { calcItemsPerPage, isLeftArrow, isRightArrow } from '../js/index.js'
import { chunk, isFunction, pick } from '../js/utils.js'
import * as vars from '../vars/index.js'

import CarouselContext from './context.js'
import { Controls, Control } from './controls.js'

import useResizeObserver from './use-resize-observer.js'
import useSwipe from './use-swipe.js'
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
          {pages.map((items, pageIndex) => {
            const isActivePage = pager.activePage === pageIndex

            return (
              <Page key={pageIndex} isActivePage={isActivePage}>
                {items.map((item, itemIndex) => {
                  const wrapped = isOfComponentType(item, Item)
                  if (!wrapped) item = <Item key={itemIndex}>{item}</Item>

                  return cloneElement(item, {
                    key: itemIndex,

                    isActivePage,
                    itemIndex,
                    pageCount,
                    pageIndex
                  })
                })}
              </Page>
            )
          })}
        </Pages>

        {controls}

        <Instructions />
      </div>
    </CarouselContext.Provider>
  )
}

function Item({ children, ...props }) {
  return (
    <div {...styles.item()} {...filterReactProps(props)}>
      {isFunction(children)
        ? children({
            isActivePage: props.isActivePage,
            itemIndex: props.itemIndex,
            pageCount: props.pageCount,
            pageIndex: props.pageIndex
          })
        : children}
    </div>
  )
}

Item.propTypes = {
  children: PropTypes.oneOfType([PropTypes.func, PropTypes.node]),
  isActivePage: PropTypes.bool,
  itemIndex: PropTypes.number,
  pageCount: PropTypes.number,
  pageIndex: PropTypes.number
}

Carousel.Controls = Controls
Carousel.Controls.displayName = 'Carousel.Controls'

Carousel.Control = Control
Carousel.Control.displayName = 'Carousel.Control'

Carousel.Item = Item
Carousel.Item.displayName = 'Carousel.Item'

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

const Pages = React.forwardRef((props, ref) => {
  const context = React.useContext(CarouselContext)

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
      {...styles.pages()}
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
      <Transition in={isActivePage} timeout={500}>
        {transitionState => {
          if (transitionState === 'exited') return null
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

function isOfComponentType(instance, el) {
  return instance && instance.type.displayName === el.displayName
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
