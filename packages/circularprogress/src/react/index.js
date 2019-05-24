import * as glamor from 'glamor'
import PropTypes from 'prop-types'
import React from 'react'
import { useTheme } from '@pluralsight/ps-design-system-theme/react'

import css from '../css/index.js'
import * as vars from '../vars/index.js'

const radius = vars.style.width / 2 - vars.style.strokeWidth / 2
const circumference = 2 * Math.PI * radius
const spin = glamor.css.keyframes({
  to: {
    transform: 'rotate(270deg)'
  }
})

const styles = {
  circularprogress: ({ size }) =>
    glamor.css(css[`.psds-circularprogress--size-${size}`]),
  svg: ({ value }) =>
    glamor.css({
      ...css['.psds-circularprogress__svg'],
      ...(typeof value === 'undefined'
        ? css['.psds-circularprogress__svg--no-value']({ spin })
        : null)
    }),
  bg: ({ themeName }) =>
    glamor.css({
      ...css['.psds-circularprogress__bg'],
      ...css[`.psds-circularprogress__bg.psds-theme--${themeName}`]
    }),
  fg: ({ themeName }) =>
    glamor.css({
      ...css[`.psds-circularprogress__fg`],
      ...css[`.psds-circularprogress__fg.psds-theme--${themeName}`]
    })
}

const CircularProgress = (props, context) => {
  const themeName = useTheme()
  const allProps = { ...props, themeName }

  const value = typeof allProps.value === 'undefined' ? 25 : allProps.value
  const dashOffset = ((100 - value) / 100) * circumference

  return React.createElement(
    'div',
    {
      ...styles.circularprogress(allProps),
      ...(props.style ? { style: props.style } : null),
      ...(props.className ? { className: props.className } : null)
    },
    <svg
      {...styles.svg(allProps)}
      viewBox={`0 0 ${vars.style.width} ${vars.style.width}`}
      version="1.1"
      xmlns="http://www.w3.org/2000/svg"
    >
      <circle r={radius} cx="24" cy="24" {...styles.bg(allProps)} />
      <circle
        r={radius}
        cx="24"
        cy="24"
        {...styles.fg(allProps)}
        strokeDasharray={`${circumference} ${circumference}`}
        strokeDashoffset={dashOffset}
      />
    </svg>
  )
}

CircularProgress.propTypes = {
  className: PropTypes.string,
  size: PropTypes.oneOf(Object.keys(vars.sizes)),
  style: PropTypes.object,
  value: PropTypes.number
}
CircularProgress.defaultProps = {
  size: vars.sizes.medium
}
CircularProgress.contextTypes = {
  themeName: PropTypes.string
}

CircularProgress.sizes = vars.sizes
export const sizes = vars.sizes

export default CircularProgress
