import Halo from '@pluralsight/ps-design-system-halo'
import {
  CaretLeftIcon,
  CaretRightIcon,
  sizes as iconSizes
} from '@pluralsight/ps-design-system-icon'
import {
  names as themeNames,
  useTheme
} from '@pluralsight/ps-design-system-theme'
import {
  HTMLPropsFor,
  ValueOf,
  combineFns
} from '@pluralsight/ps-design-system-util'
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

  const isPrev = direction === Control.directions.prev
  const isVisible = isPrev ? context.isPrevVisible : context.isNextVisible
  const label = isPrev ? 'Previous items' : 'Next items'

  const IconCaret = isPrev ? CaretLeftIcon : CaretRightIcon
  const handleClick = combineFns(isPrev ? context.prev : context.next, onClick)

  return (
    <div
      data-testid="carousel control"
      {...styles.control(props.direction)}
      {...(!isVisible && { hidden: true })}
    >
      <Halo shape={Halo.shapes.pill}>
        <button
          {...rest}
          aria-label={label}
          onClick={handleClick}
          {...styles.controlButton(themeName)}
          {...(!isVisible && { tabIndex: -1 })}
        >
          <IconCaret aria-hidden size={iconSizes.medium} />
        </button>
      </Halo>
    </div>
  )
}
Control.displayName = 'Carousel.Control'

Control.directions = vars.controlDirections
