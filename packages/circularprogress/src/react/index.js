import core from '@pluralsight/ps-design-system-core'
import * as glamor from 'glamor'
import PropTypes from 'prop-types'
import React from 'react'
import { names as themeNames } from '@pluralsight/ps-design-system-theme/react'
import { transparentize } from 'polished'

const style = {
  width: 48,
  strokeWidth: 4
}
const radius = style.width / 2 - style.strokeWidth / 2
const circumference = 2 * Math.PI * radius
const spinAnimation = glamor.css.keyframes({
  to: {
    transform: 'rotate(270deg)'
  }
})

const css = {
  bg: ({ themeName }) =>
    glamor.css({
      fill: 'transparent',
      strokeWidth: `${style.strokeWidth}px`,
      stroke:
        themeName === themeNames.light
          ? transparentize(0.8, core.colors.gray04)
          : core.colors.gray04
    }),
  fg: ({ themeName }) =>
    glamor.css({
      fill: 'transparent',
      strokeWidth: `${style.strokeWidth}px`,
      stroke:
        themeName === themeNames.light ? core.colors.gray04 : core.colors.white,
      transition: 'stroke-dashoffset 1s'
    }),
  root: ({ size }) =>
    glamor.css(
      {
        [sizes.small]: {
          height: '24px',
          width: '24px'
        },
        [sizes.medium]: {
          height: '48px',
          width: '48px'
        }
      }[size]
    ),
  svg: ({ value }) =>
    glamor.css({
      transform: 'rotate(-90deg)',
      animation:
        typeof value === 'undefined'
          ? `${spinAnimation} 1s linear infinite`
          : ''
    })
}

export const sizes = {
  small: 'small',
  medium: 'medium'
}

const CircularProgress = (props, context) => {
  const allProps = { ...props, themeName: context.themeName }
  const value = typeof allProps.value === 'undefined' ? 25 : allProps.value
  const dashOffset = (100 - value) / 100 * circumference

  return (
    <div {...css.root(allProps)}>
      <svg
        {...css.svg(allProps)}
        viewBox={`0 0 ${style.width} ${style.width}`}
        version="1.1"
        xmlns="http://www.w3.org/2000/svg"
      >
        <circle r={radius} cx="24" cy="24" {...css.bg(allProps)} />
        <circle
          r={radius}
          cx="24"
          cy="24"
          {...css.fg(allProps)}
          strokeDasharray={`${circumference} ${circumference}`}
          strokeDashoffset={dashOffset}
        />
      </svg>
    </div>
  )
}

CircularProgress.propTypes = {
  size: PropTypes.oneOf(Object.keys(sizes)),
  value: PropTypes.number
}
CircularProgress.defaultProps = {
  size: sizes.medium
}
CircularProgress.contextTypes = {
  themeName: PropTypes.string
}

CircularProgress.sizes = sizes

export default CircularProgress
