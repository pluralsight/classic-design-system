import { compose, css } from 'glamor'
import PropTypes from 'prop-types'
import React from 'react'

import filterReactProps from '@pluralsight/ps-design-system-filter-react-props'
import ScreenReaderOnly from '@pluralsight/ps-design-system-screenreaderonly'
import { useTheme } from '@pluralsight/ps-design-system-theme'

import stylesheet from '../css/index.js'
import * as vars from '../vars/index.js'

const radius = vars.style.width / 2 - vars.style.strokeWidth / 2
const circumference = 2 * Math.PI * radius
const spin = css.keyframes({
  to: {
    transform: 'rotate(270deg)'
  }
})

const styles = {
  circularprogress: (themeName, { size }) =>
    css(stylesheet[`.psds-circularprogress--size-${size}`]),

  svg: (themeName, { value }) => {
    const noValue = typeof value === 'undefined'

    return compose(
      css(stylesheet['.psds-circularprogress__svg']),
      noValue &&
        css(stylesheet['.psds-circularprogress__svg--no-value']({ spin }))
    )
  },

  bg: themeName =>
    compose(
      css(stylesheet['.psds-circularprogress__bg']),
      css(stylesheet[`.psds-circularprogress__bg.psds-theme--${themeName}`])
    ),

  fg: themeName =>
    compose(
      css(stylesheet['.psds-circularprogress__fg']),
      css(stylesheet[`.psds-circularprogress__fg.psds-theme--${themeName}`])
    )
}

const CircularProgress = React.forwardRef((props, ref) => {
  const themeName = useTheme()

  const isIndeterminate = typeof props.value === 'undefined'
  const value = isIndeterminate ? 25 : props.value
  const dashOffset = ((100 - value) / 100) * circumference

  return (
    <div
      ref={ref}
      {...styles.circularprogress(themeName, props)}
      {...filterReactProps(props)}
    >
      <ScreenReaderOnly role="region" aria-live="off">
        {isIndeterminate ? 'Loading...' : `${value}% complete`}
      </ScreenReaderOnly>
      <svg
        {...styles.svg(themeName, props)}
        viewBox={`0 0 ${vars.style.width} ${vars.style.width}`}
        version="1.1"
        xmlns="http://www.w3.org/2000/svg"
      >
        <circle r={radius} cx="24" cy="24" {...styles.bg(themeName, props)} />
        <circle
          r={radius}
          cx="24"
          cy="24"
          {...styles.fg(themeName, props)}
          strokeDasharray={`${circumference} ${circumference}`}
          strokeDashoffset={dashOffset}
        />
      </svg>
    </div>
  )
})

CircularProgress.propTypes = {
  className: PropTypes.string,
  size: PropTypes.oneOf(Object.keys(vars.sizes)),
  style: PropTypes.object,
  value: PropTypes.number
}
CircularProgress.defaultProps = {
  size: vars.sizes.medium
}

CircularProgress.sizes = vars.sizes
export const sizes = vars.sizes

export default CircularProgress
