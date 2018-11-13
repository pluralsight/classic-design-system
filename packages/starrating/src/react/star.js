import * as glamor from 'glamor'
import PropTypes from 'prop-types'
import React from 'react'

import Icon from '@pluralsight/ps-design-system-icon/react'

import withDefaultTheme from './with-default-theme'

import css, { BASE_CLASSNAME } from '../css'

const APPEARANCES = {
  empty: 'empty',
  half: 'half',
  full: 'full'
}

const styles = {
  star: props =>
    glamor.css(
      css[`${BASE_CLASSNAME}__star`],
      css[`${BASE_CLASSNAME}__star--theme-${props.themeName}`],
      props.active && css[`${BASE_CLASSNAME}__star--active`],
      props.interactive && css[`${BASE_CLASSNAME}__star--interactive`]
    )
}

const HalfStarIcon = props => (
  <Icon {...props}>
    <svg
      role="img"
      aria-label="star half icon"
      viewBox="0 0 24 24"
      xmlns="http://www.w3.org/2000/svg"
    >
      <defs>
        <symbol id="star">
          <path d="M7.71590761,13.8522772 L2.25298114,9.9052852 C2.0291483,9.74356485 1.97879619,9.43101223 2.14051654,9.2071794 C2.23452325,9.07706721 2.38528246,9 2.54580174,9 L9.32999992,9 L11.5259342,2.42042174 C11.6133563,2.15848284 11.8965694,2.01700903 12.1585083,2.10443114 C12.3076212,2.15419757 12.4246481,2.2711924 12.4744554,2.42029163 L14.6724396,9 L21.4541983,9 C21.7303406,9 21.9541983,9.22385763 21.9541983,9.5 C21.9541983,9.66051929 21.877131,9.81127849 21.7470189,9.9052852 L16.2840924,13.8522772 L18.5094075,20.5282225 C18.5967314,20.7901941 18.4551514,21.0733541 18.1931797,21.160678 C18.0405447,21.2115563 17.8727519,21.1858764 17.7423206,21.091676 L12.0021534,16.9459997 L6.25731585,21.0924971 C6.03340576,21.2541105 5.72087724,21.203609 5.55926386,20.9796989 C5.46513169,20.8492818 5.43948525,20.6815443 5.49034729,20.5289581 L7.71590761,13.8522772 Z" />
        </symbol>

        <mask id="maskHalf">
          <rect width="50%" height="100%" fill="white" />
        </mask>
      </defs>

      <use xlinkHref="#star" style={{ opacity: 0.5 }} />
      <use xlinkHref="#star" mask="url(#maskHalf)" />
    </svg>
  </Icon>
)

class Star extends React.PureComponent {
  constructor(props) {
    super(props)

    this.handleClicked = this.handleClicked.bind(this)
    this.handleMouseEnter = this.handleMouseEnter.bind(this)
    this.handleMouseLeave = this.handleMouseLeave.bind(this)
  }

  handleClicked(event) {
    const { onClick, index } = this.props
    if (onClick) onClick(index, event)
  }

  handleMouseEnter(event) {
    const { onMouseEnter, index } = this.props
    if (onMouseEnter) onMouseEnter(index, event)
  }

  handleMouseLeave(event) {
    const { onMouseLeave, index } = this.props
    if (onMouseLeave) onMouseLeave(index, event)
  }

  get label() {
    const value = this.props.index + 1
    return `Rate ${value} Star${value > 1 ? 's' : ''}`
  }

  render() {
    const {
      active,
      appearance,
      index,
      interactive,
      size,
      themeName,
      ...filteredProps
    } = this.props

    const { label } = this
    const Tag = interactive ? 'button' : 'span'

    return (
      <Tag
        {...styles.star(this.props)}
        {...filteredProps}
        aria-label={label}
        title={label}
        onClick={this.handleClicked}
        onMouseEnter={this.handleMouseEnter}
        onMouseLeave={this.handleMouseLeave}
      >
        {appearance === 'full' && <Icon id={Icon.ids.starFill} size={size} />}
        {appearance === 'empty' && <Icon id={Icon.ids.star} size={size} />}
        {appearance === 'half' && <HalfStarIcon size={size} />}
      </Tag>
    )
  }
}
Star.propTypes = {
  active: PropTypes.bool.isRequired,
  appearance: PropTypes.oneOf(Object.values(APPEARANCES)).isRequired,
  index: PropTypes.number.isRequired,
  interactive: PropTypes.bool,
  onClick: PropTypes.func,
  onMouseEnter: PropTypes.func,
  onMouseLeave: PropTypes.func
}

Star.defaultProps = {
  interactive: false,
  size: Icon.sizes.xsmall
}

Star.appearances = APPEARANCES

export default withDefaultTheme(Star)
