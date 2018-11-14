import * as glamor from 'glamor'
import PropTypes from 'prop-types'
import React from 'react'

import Icon from '@pluralsight/ps-design-system-icon/react'
import { withTheme } from '@pluralsight/ps-design-system-theme/react'

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
    ),
  halfStarSecondary: props =>
    glamor.css(
      css[`${BASE_CLASSNAME}__star__half__secondary`],
      css[`${BASE_CLASSNAME}__star__half__secondary--theme-${props.themeName}`]
    )
}

const HalfStarIcon = props => {
  const { themeName, ...filteredProps } = props

  return (
    <Icon {...filteredProps}>
      <svg
        role="img"
        aria-label="star half icon"
        viewBox="0 0 24 24"
        xmlns="http://www.w3.org/2000/svg"
      >
        <defs>
          <symbol id="psds-starrating__half-star__star">
            <path d="M7.71590761,13.8522772 L2.25298114,9.9052852 C2.0291483,9.74356485 1.97879619,9.43101223 2.14051654,9.2071794 C2.23452325,9.07706721 2.38528246,9 2.54580174,9 L9.32999992,9 L11.5259342,2.42042174 C11.6133563,2.15848284 11.8965694,2.01700903 12.1585083,2.10443114 C12.3076212,2.15419757 12.4246481,2.2711924 12.4744554,2.42029163 L14.6724396,9 L21.4541983,9 C21.7303406,9 21.9541983,9.22385763 21.9541983,9.5 C21.9541983,9.66051929 21.877131,9.81127849 21.7470189,9.9052852 L16.2840924,13.8522772 L18.5094075,20.5282225 C18.5967314,20.7901941 18.4551514,21.0733541 18.1931797,21.160678 C18.0405447,21.2115563 17.8727519,21.1858764 17.7423206,21.091676 L12.0021534,16.9459997 L6.25731585,21.0924971 C6.03340576,21.2541105 5.72087724,21.203609 5.55926386,20.9796989 C5.46513169,20.8492818 5.43948525,20.6815443 5.49034729,20.5289581 L7.71590761,13.8522772 Z" />
          </symbol>

          <mask id="psds-starrating__half-star__maskHalf">
            <rect width="50%" height="100%" fill="white" />
          </mask>
        </defs>

        <use
          href="#psds-starrating__half-star__star"
          {...styles.halfStarSecondary(props)}
        />
        <use
          href="#psds-starrating__half-star__star"
          mask="url(#psds-starrating__half-star__maskHalf)"
        />
      </svg>
    </Icon>
  )
}

HalfStarIcon.propTypes = {
  themeName: PropTypes.string.isRequired
}

class Star extends React.PureComponent {
  constructor(props) {
    super(props)

    this.handleClicked = this.handleClicked.bind(this)
    this.handleEnter = this.handleEnter.bind(this)
    this.handleLeave = this.handleLeave.bind(this)
  }

  handleClicked(event) {
    const { onClick, index } = this.props
    if (onClick) onClick(index, event)
  }

  handleEnter(event) {
    const { onEnter, index } = this.props
    if (onEnter) onEnter(index, event)
  }

  handleLeave(event) {
    const { onLeave, index } = this.props
    if (onLeave) onLeave(index, event)
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
      onEnter,
      onLeave,
      size,
      themeName,
      ...filteredProps
    } = this.props

    const Tag = interactive ? 'button' : 'span'

    return (
      <Tag
        {...styles.star(this.props)}
        {...filteredProps}
        aria-label={this.label}
        title={this.label}
        onBlur={this.handleLeave}
        onClick={this.handleClicked}
        onFocus={this.handleEnter}
        onMouseEnter={this.handleEnter}
        onMouseLeave={this.handleLeave}
      >
        {appearance === APPEARANCES.full && (
          <Icon id={Icon.ids.starFill} size={size} />
        )}

        {appearance === APPEARANCES.empty && (
          <Icon id={Icon.ids.star} size={size} />
        )}

        {appearance === APPEARANCES.half && (
          <HalfStarIcon size={size} themeName={themeName} />
        )}
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
  onEnter: PropTypes.func,
  onLeave: PropTypes.func,
  themeName: PropTypes.string
}

Star.defaultProps = {
  interactive: false,
  size: Icon.sizes.xsmall
}

Star.appearances = APPEARANCES

export default withTheme(Star)
