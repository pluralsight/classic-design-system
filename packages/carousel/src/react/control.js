import * as glamor from 'glamor'
import React from 'react'
import PropTypes from 'prop-types'

import filterReactProps from '@pluralsight/ps-design-system-filter-react-props'
import Icon from '@pluralsight/ps-design-system-icon/react'
import { useTheme } from '@pluralsight/ps-design-system-theme/react'

import css from '../css/index.js'
import { combineFns } from '../js/utils.js'

import CarouselContext from './context.js'

const styles = {
  control: (themeName, { direction }) =>
    glamor.compose(
      glamor.css(css['.psds-carousel__controls__control']),
      glamor.css(
        css[`.psds-carousel__controls__control.psds-theme--${themeName}`]
      ),
      glamor.css(css[`.psds-carousel__controls__control--${direction}`])
    )
}

export default function Control(props) {
  const context = React.useContext(CarouselContext)
  const themeName = useTheme()

  const { activePage, pageCount, next, prev } = context

  const isPrev = props.direction === Control.directions.prev
  const visible = isPrev ? activePage > 0 : activePage !== pageCount - 1

  if (!visible) return null

  const iconId = isPrev ? Icon.ids.caretLeft : Icon.ids.caretRight
  const handleClick = combineFns(isPrev ? prev : next, props.onClick)

  return (
    <button
      {...styles.control(themeName, props)}
      {...filterReactProps(props, { tagName: 'button' })}
      onClick={handleClick}
    >
      <Icon id={iconId} size={Icon.sizes.medium} />
    </button>
  )
}

Control.directions = { prev: 'prev', next: 'next' }

Control.propTypes = {
  onClick: PropTypes.func,
  direction: PropTypes.oneOf(Object.keys(Control.directions)).isRequired
}
