/* eslint-disable react/jsx-handler-names */
import {
  combineFns,
  HTMLPropsFor,
  ValueOf,
  useResizeObserver
} from '@pluralsight/ps-design-system-util'
import glamorDefault, * as glamorExports from 'glamor'
import React from 'react'

import CarouselContext from './context'
import { Control } from './control'
import stylesheet from '../css/index'
import {
  calcItemWidth,
  calcItemsPerPage,
  calcStageOffsetBackward,
  calcStageOffsetForPageAt,
  calcStageOffsetForward,
  calculateLeftMostVisibleIndex,
  isLeftArrow,
  isRightArrow
} from '../js'
import useSwipe, { UseSwipeOpts } from './use-swipe'
import * as vars from '../vars/index'

const glamor = glamorDefault || glamorExports

const styles = {
  carousel: () => glamor.css(stylesheet['.psds-carousel']),
  track: () => glamor.css(stylesheet['.psds-carousel__track']),
  stage: (ready: boolean) =>
    glamor.compose(
      glamor.css(stylesheet['.psds-carousel__stage']),
      ready && glamor.css(stylesheet['.psds-carousel__stage--ready'])
    ),
  item: () => glamor.css(stylesheet['.psds-carousel__item'])
}

interface CarouselProps extends HTMLPropsFor<'div'> {
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
  const ref = React.useRef<HTMLDivElement>(null)
  const { width } = useResizeObserver(ref)
  const [activeIndex, setActiveIndex] = React.useState<number>(0)
  const [stageOffset, setStageOffset] = React.useState<number>(0)

  controlPrev = controlPrev || <Control direction={Control.directions.prev} />
  controlNext = controlNext || <Control direction={Control.directions.next} />
  size = size || Carousel.sizes.narrow

  const ready = !!width && width > 0
  const stageRef = React.createRef<HTMLDivElement>()
  const perPage = calcItemsPerPage(size, width)
  const itemWidth = calcItemWidth(size, width)
  const numItems = React.Children.count(children)
  const leftMostVisibleIndex = calculateLeftMostVisibleIndex(
    itemWidth,
    stageOffset
  )

  const next = () => {
    scroll(
      calcStageOffsetForPageAt(
        itemWidth,
        Math.min(leftMostVisibleIndex + perPage, numItems - perPage)
      )
    )
  }

  const prev = () => {
    scroll(
      calcStageOffsetForPageAt(
        itemWidth,
        Math.max(leftMostVisibleIndex - perPage, 0)
      )
    )
  }

  const isPrevVisible = leftMostVisibleIndex > 0
  const isNextVisible = leftMostVisibleIndex < numItems - perPage

  const context = {
    next,
    prev,
    isNextVisible,
    isPrevVisible,
    itemWidth: calcItemWidth(size, width)
  }

  const handleItemFocus = (index: number) => (_evt: React.FocusEvent) => {
    if (index !== activeIndex) {
      setActiveIndex(index)
      if (index >= leftMostVisibleIndex + perPage) {
        scroll(calcStageOffsetForward(perPage, itemWidth, index))
      } else if (index < leftMostVisibleIndex) {
        scroll(calcStageOffsetBackward(itemWidth, index))
      }
    }
  }

  const scroll = (offset: number) => {
    setStageOffset(offset)
    stageRef.current?.scroll({ left: offset, behavior: 'smooth' })
  }

  const handleTrackKeyDown = (evt: React.KeyboardEvent) => {
    if (isLeftArrow(evt))
      scroll(calcStageOffsetBackward(itemWidth, activeIndex - 1))
    if (isRightArrow(evt))
      scroll(calcStageOffsetForward(perPage, itemWidth, activeIndex + 1))
  }

  return (
    <CarouselContext.Provider value={context}>
      <div {...styles.carousel()} {...rest} ref={ref}>
        {controlPrev}
        <div {...styles.stage(ready)} ref={stageRef}>
          <Track
            onKeyDown={handleTrackKeyDown}
            onSwipeLeft={next}
            onSwipeRight={prev}
          >
            {React.Children.map(
              children,
              (child, index) =>
                React.isValidElement(child) &&
                React.cloneElement<ItemProps>(child, {
                  _onFocus: handleItemFocus(index)
                })
            )}
          </Track>
        </div>
        {controlNext}
      </div>
    </CarouselContext.Provider>
  )
}
export default Carousel
Carousel.Control = Control
Carousel.sizes = vars.sizes

interface ItemProps extends HTMLPropsFor<'li'> {
  _onFocus?: (evt: React.FocusEvent) => void
}

export const Item: React.FC<ItemProps> = props => {
  const { _onFocus, onFocus, style, ...rest } = props
  const context = React.useContext(CarouselContext)
  const widthStyle = { ...style, flexBasis: context.itemWidth + 'px' }
  const handleFocus = combineFns(onFocus, _onFocus)
  return (
    <li
      {...styles.item()}
      {...rest}
      onFocus={handleFocus}
      style={widthStyle}
    ></li>
  )
}
Item.displayName = 'Carousel.Item'
Carousel.Item = Item

interface TrackProps
  extends HTMLPropsFor<'ul'>,
    Required<Pick<UseSwipeOpts, 'onSwipeLeft' | 'onSwipeRight'>> {}
const Track: React.FC<TrackProps> = props => {
  const ref = React.createRef<HTMLUListElement>()
  const { onSwipeLeft, onSwipeRight, ...rest } = props

  useSwipe(ref as React.MutableRefObject<HTMLUListElement>, {
    onSwipeLeft: onSwipeLeft,
    onSwipeRight: onSwipeRight
  })

  return <ul {...rest} ref={ref} {...styles.track()} />
}
Track.displayName = 'Carousel.Track'
