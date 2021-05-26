import Halo from '../../halo'
import { CaretLeftIcon, CaretRightIcon, sizes as iconSizes } from '../../icon'
import { themeNames, useTheme } from '../../theme'
import { HTMLPropsFor, ValueOf, combineFns } from '../../util'
import glamorDefault, * as glamorExports from 'glamor'
import React from 'react'

import CarouselContext from './context'
import stylesheet from '../css/index'
import * as vars from '../vars/index'

const glamor = glamorDefault || glamorExports

const styles = {
  control: (direction: ValueOf<typeof vars.controlDirections>) =>
    glamor.compose(
      glamor.css(stylesheet['.psds-carousel__controls__control']),
      glamor.css(stylesheet[`.psds-carousel__controls__control--${direction}`])
    ),
  controlButton: (themeName: ValueOf<typeof themeNames>) =>
    glamor.compose(
      glamor.css(stylesheet['.psds-carousel__controls__control__button']),
      glamor.css(
        stylesheet[
          `.psds-carousel__controls__control__button.psds-theme--${themeName}`
        ]
      )
    )
}

interface ControlProps extends Omit<HTMLPropsFor<'button'>, 'onClick'> {
  direction: ValueOf<typeof vars.controlDirections>
  onClick?: (evt?: React.MouseEvent) => void
}
interface ControlStatics {
  directions: typeof vars.controlDirections
}
type ControlComponent = React.FC<ControlProps> & ControlStatics
export const Control: ControlComponent = props => {
  const { direction, onClick, ...rest } = props
  const context = React.useContext(CarouselContext)
  const themeName = useTheme()

  const {
    activePage = 0,
    pageCount = 0,
    next,
    prev,
    setTransitioning
  } = context

  const isPrev = direction === Control.directions.prev
  const visible = isPrev ? activePage > 0 : activePage !== pageCount - 1

  const IconCaret = isPrev ? CaretLeftIcon : CaretRightIcon
  const handleClick = combineFns(isPrev ? prev : next, onClick, () =>
    setTransitioning(true)
  )
  const scr = `get ${isPrev ? 'previous' : 'next'} carousel page`

  return (
    <div
      data-testid="carousel control"
      {...styles.control(props.direction)}
      {...(!visible && { hidden: true })}
    >
      <Halo shape={Halo.shapes.pill}>
        <button
          {...rest}
          onClick={handleClick}
          aria-label={scr}
          {...styles.controlButton(themeName)}
          {...(!visible && { tabIndex: -1 })}
        >
          <IconCaret aria-hidden size={iconSizes.medium} />
        </button>
      </Halo>
    </div>
  )
}
Control.displayName = 'Carousel.Control'

Control.directions = vars.controlDirections
