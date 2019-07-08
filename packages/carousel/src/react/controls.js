import * as glamor from 'glamor'
import React, { Fragment } from 'react'
import PropTypes from 'prop-types'

import filterReactProps from '@pluralsight/ps-design-system-filter-react-props'
import { useTheme } from '@pluralsight/ps-design-system-theme/react'

import css from '../css/index.js'
import { combineFns } from '../js/utils.js'

import CarouselContext from './context.js'

const styles = {
  controls: () => glamor.css(css['.psds-carousel__controls']),
  control: (themeName, { direction }) =>
    glamor.compose(
      glamor.css(css['.psds-carousel__controls__control']),
      glamor.css(css[`.psds-carousel__controls__control--${direction}`])
    )
}

export const Controls = props => (
  <div {...styles.controls()} {...filterReactProps(props)} />
)
Controls.propTypes = {
  children: PropTypes.node.isRequired // TODO: better validator
}

export const Control = props => {
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
