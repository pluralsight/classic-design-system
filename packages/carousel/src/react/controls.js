import { compose, css } from 'glamor'
import React from 'react'
import PropTypes from 'prop-types'

import filterReactProps from '@pluralsight/ps-design-system-filter-react-props'
import Halo from '@pluralsight/ps-design-system-halo'
import {
  CaretLeftIcon,
  CaretRightIcon,
  sizes as iconSizes
} from '@pluralsight/ps-design-system-icon'
import { useTheme } from '@pluralsight/ps-design-system-theme'

import stylesheet from '../css/index.js'
import { combineFns, toValues } from '../js/utils.js'
import * as vars from '../vars/index.js'

import CarouselContext from './context.js'

const styles = {
  controls: () => css(stylesheet['.psds-carousel__controls']),
  control: (_, { direction }) =>
    compose(
      css(stylesheet['.psds-carousel__controls__control']),
      css(stylesheet[`.psds-carousel__controls__control--${direction}`])
    ),
  controlButton: (themeName, { direction }) =>
    compose(
      css(stylesheet['.psds-carousel__controls__control__button']),
      css(
        stylesheet[
          `.psds-carousel__controls__control__button.psds-theme--${themeName}`
        ]
      )
    )
}

export const Controls = React.forwardRef((props, ref) => {
  const context = React.useContext(CarouselContext)

  return (
    <ul
      aria-controls={context.id}
      aria-label="carousel controls"
      ref={ref}
      {...styles.controls()}
      {...props}
    />
  )
})

export function Control(props) {
  const context = React.useContext(CarouselContext)
  const themeName = useTheme()

  const { activePage, pageCount, next, prev } = context

  const isPrev = props.direction === Control.directions.prev
  const visible = isPrev ? activePage > 0 : activePage !== pageCount - 1

  const IconCaret = isPrev ? CaretLeftIcon : CaretRightIcon
  const handleClick = combineFns(isPrev ? prev : next, props.onClick)

  return (
    <li
      {...styles.control(themeName, props)}
      {...(!visible && { hidden: true })}
      {...filterReactProps(props, { tagName: 'li' })}
      onClick={handleClick}
    >
      <Halo shape={Halo.shapes.pill}>
        <button
          aria-label={isPrev ? 'previous' : 'next'}
          {...styles.controlButton(themeName, props)}
          {...(!visible && { tabIndex: -1 })}
        >
          <IconCaret aria-hidden size={iconSizes.medium} />
        </button>
      </Halo>
    </li>
  )
}

Control.directions = vars.controlDirections

Control.propTypes = {
  onClick: PropTypes.func,
  direction: PropTypes.oneOf(toValues(Control.directions)).isRequired
}
