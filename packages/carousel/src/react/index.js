import * as glamor from 'glamor'
import React, { Fragment, useState } from 'react'
import PropTypes from 'prop-types'

import filterReactProps from '@pluralsight/ps-design-system-filter-react-props'
import { useTheme } from '@pluralsight/ps-design-system-theme/react'

import css from '../css/index.js'

const chunk = (arr, size) =>
  arr.reduce((acc, item, index) => {
    if (index % size === 0) acc.push([item])
    else acc[acc.length - 1].push(item)

    return acc
  }, [])

const combineFns = (...fns) => (...args) =>
  fns.filter(isFunction).forEach(fn => fn(...args))

const isFunction = fn => typeof fn === 'function'

const styles = {
  carousel: () => glamor.css(css['.psds-carousel']),
  controls: () => glamor.css(css['.psds-carousel__controls']),
  control: (themeName, { direction }) =>
    glamor.compose(
      glamor.css(css['.psds-carousel__controls__control']),
      glamor.css(css[`.psds-carousel__controls__control--${direction}`])
    ),
  pages: () => glamor.css(css['.psds-carousel__pages']),
  page: () => glamor.css(css['.psds-carousel__page']),
  item: () => glamor.css(css['.psds-carousel__item'])
}

const CarouselContext = React.createContext()

const Carousel = ({ controls, ...props }) => {
  const pagesRef = React.useRef()
  const [activePage, setActivePage] = useState(0)
  const [offset, setOffset] = useState(0)

  // TODO:
  //       - get item count
  //       - calc num of pages
  //       - shim missing els

  const perPage = 3
  const pages = chunk(React.Children.toArray(props.children), perPage)

  React.useEffect(() => {
    const { current: parentEl } = pagesRef
    const nextPageEl = parentEl.children[activePage]

    // NOTE: this is to fix storyshots. find out why it's undefined
    if (!nextPageEl) return

    setOffset(parentEl.offsetLeft - nextPageEl.offsetLeft)
  }, [activePage])

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

  return (
    <CarouselContext.Provider value={{ next, prev, offset }}>
      <div {...styles.carousel()} {...filterReactProps(props)}>
        {controls}

        <div {...styles.pages()} ref={pagesRef}>
          {pages.map((pageItems, pageIndex) => (
            <Page key={pageIndex}>
              {pageItems.map((item, itemIndex) => (
                <Item key={pageIndex + ':' + itemIndex}>{item}</Item>
              ))}
            </Page>
          ))}
        </div>
      </div>
    </CarouselContext.Provider>
  )
}

const Page = props => {
  const { offset } = React.useContext(CarouselContext)

  return (
    <div
      {...styles.page()}
      {...glamor.css({ transform: `translate3d(${offset}px, 0, 0)` })}
      {...props}
    />
  )
}

const Item = props => <div {...styles.item()} {...props} />

const Controls = props => (
  <div {...styles.controls()} {...filterReactProps(props)} />
)
Controls.propTypes = {
  children: PropTypes.node.isRequired // TODO: better validator
}

const Control = props => {
  const themeName = useTheme()
  const { next, prev } = React.useContext(CarouselContext)

  const handleClick = combineFns(
    props.direction === 'next' ? next : prev,
    props.onClick
  )

  return (
    <button
      {...styles.control(themeName, props)}
      {...filterReactProps(props, { tagName: 'button' })}
      onClick={handleClick}
    />
  )
}
Control.directions = { prev: 'prev', next: 'next' }
Control.propTypes = {
  onClick: PropTypes.func,
  direction: PropTypes.oneOf(Object.keys(Control.directions)).isRequired
}

Controls.defaultProps = {
  children: (
    <Fragment>
      <Control direction={Control.directions.prev} />
      <Control direction={Control.directions.next} />
    </Fragment>
  )
}

Carousel.Controls = Controls
Carousel.Control = Control

Carousel.propTypes = {
  controls: PropTypes.element, // TODO: better validator
  children: PropTypes.node.isRequired
}
Carousel.defaultProps = {
  controls: <Controls />
}

export default Carousel
