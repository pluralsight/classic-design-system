/* eslint-disable react/jsx-handler-names */
import {
  RefForwardingComponent,
  useResizeObserver,
  ValueOf
} from '@pluralsight/ps-design-system-util'
import { compose, css } from 'glamor'
import React, { cloneElement } from 'react'
import PropTypes from 'prop-types'

import stylesheet from '../css'
import { calcItemsPerPage, isLeftArrow, isRightArrow } from '../js'
import { chunk, pick } from '../js/utils'
import * as vars from '../vars'

import CarouselContext from './context'
import { Control } from './control'

import useSwipe, { UseSwipeOpts } from './use-swipe'
import useUniqueId from './use-unique-id'

const styles = {
  carousel: (ready: boolean) =>
    compose(
      css(stylesheet['.psds-carousel']),
      ready && css(stylesheet['.psds-carousel--ready'])
    ),
  pages: () => compose(css(stylesheet['.psds-carousel__pages'])),
  page: props =>
    compose(
      css(stylesheet['.psds-carousel__page']),
      props.isActivePage && css(stylesheet['.psds-carousel__page--active'])
    ),
  instructions: () => css(stylesheet['.psds-carousel__instructions']),
  item: () => css(stylesheet['.psds-carousel__item'])
}

interface CarouselProps extends React.HTMLAttributes<HTMLDivElement> {
  children: React.ReactNode
  controlPrev?: React.ReactNode
  controlNext?: React.ReactNode
  size?: ValueOf<typeof vars.sizes>
}
interface CarouselStatics {
  Control: typeof Control
  Item: typeof Item
  sizes: typeof vars.sizes
}
type CarouselComponent = React.FC<CarouselProps> & CarouselStatics

const Carousel: CarouselComponent = ({
  children,
  controlPrev,
  controlNext,
  size,
  ...rest
}) => {
  const id = useUniqueId('carousel-')
  const ref = React.useRef()
  const { width } = useResizeObserver(ref)

  controlPrev = controlPrev || <Control direction={Control.directions.prev} />
  controlNext = controlNext || <Control direction={Control.directions.next} />
  size = size || Carousel.sizes.narrow

  const constraints = vars.constraints[size]
  const perPage = calcItemsPerPage(constraints, width)

  const childArr = React.Children.toArray(children)
  const pages = chunk(childArr, perPage).map(page =>
    insertEmptyItems(page, perPage)
  )
  const pageCount = pages.length

  const pager = usePager(pageCount, [width])
  const ready = width && width > 0
  const [transitioning, setTransitioning] = React.useState<boolean>(false)
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
      <div {...styles.carousel(ready)} {...rest} ref={ref}>
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
export default Carousel
Carousel.Control = Control
Carousel.sizes = vars.sizes

interface InternalItemProps {
  isActivePage?: boolean
  itemIndex?: number
  itemsPerPage?: number
  pageCount?: number
  pageIndex?: number
}
interface ItemProps
  extends React.HTMLAttributes<HTMLLIElement>,
    InternalItemProps {}
const Item: React.FC<ItemProps> = props => {
  const {
    children,
    isActivePage,
    itemIndex,
    itemsPerPage,
    pageCount,
    pageIndex,
    ...rest
  } = props
  return (
    <li {...styles.item()} {...rest}>
      {typeof children === 'function'
        ? children({
            isActivePage,
            itemIndex,
            itemsPerPage,
            pageCount,
            pageIndex
          })
        : children}
    </li>
  )
}
Item.displayName = 'Carousel.Item'
Carousel.Item = Item

const Instructions: React.FC<React.HTMLAttributes<HTMLDivElement>> = props => {
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

interface PagesProps
  extends React.HTMLAttributes<HTMLDivElement>,
    Required<Pick<UseSwipeOpts, 'onSwipeLeft' | 'onSwipeRight'>> {}
interface PagesStatics {}
interface PagesComponent
  extends RefForwardingComponent<PagesProps, HTMLDivElement, PagesStatics> {}
const Pages = React.forwardRef((props, ref) => {
  const { onSwipeLeft, onSwipeRight, ...rest } = props
  const context = React.useContext(CarouselContext)

  useSwipe(ref, {
    onSwipeLeft: onSwipeLeft,
    onSwipeRight: onSwipeRight
  })

  return (
    <div
      aria-describedby={`${context.id}__instructions`}
      aria-label="carousel"
      id={context.id}
      ref={ref}
      role="region"
      {...styles.pages()}
      {...rest}
    />
  )
}) as PagesComponent
Pages.displayName = 'Carousel.Pages'

interface PageProps extends React.HTMLAttributes<HTMLUListElement> {
  // TODO: removing from usage. Ensure not needed
  // pageIndex: number
  paged?: boolean
  // TODO: is this actually required? proptypes are contradictory
  isActivePage?: boolean
}
const Page: React.FC<PageProps> = props => {
  const ref = React.useRef<HTMLUListElement>()

  const { children, isActivePage, paged, ...rest } = props
  const { offset, transitioning, setTransitioning } = React.useContext(
    CarouselContext
  )
  React.useEffect(() => {
    if (paged && isActivePage) {
      const page = ref.current
      const focusFirstChild = e => {
        setTransitioning(false)
        e.target === page && (page.firstElementChild as HTMLElement).focus()
      }
      page.addEventListener('transitionend', focusFirstChild)
    }
  }, [isActivePage, paged])
  return (
    <ul
      ref={ref}
      {...styles.page(props)}
      {...css({ transform: `translate3d(${offset}px, 0, 0)` })}
      {...rest}
      {...(!isActivePage && {
        hidden: true,
        style: { visibility: transitioning ? 'visible' : 'hidden' }
      })}
    >
      {children}
    </ul>
  )
}
Page.displayName = 'Carousel.Page'

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
  const ref = React.useRef<HTMLDivElement>()

  React.useEffect(
    function respondToActivePageRemoval() {
      if (pageCount - 1 <= activePage) setActivePage(pageCount - 1)
    },
    [activePage, pageCount]
  )

  React.useEffect(
    function updateOffset() {
      const activePageEl = ref.current.childNodes[activePage] as HTMLDivElement
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
