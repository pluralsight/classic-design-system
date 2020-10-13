import { compose, css } from 'glamor'
import PropTypes from 'prop-types'
import React, { createContext, useContext } from 'react'

import BaseButton from '@pluralsight/ps-design-system-button'
import filterReactProps from '@pluralsight/ps-design-system-filter-react-props'
import { CloseIcon } from '@pluralsight/ps-design-system-icon'

import stylesheet from '../css/index.js'
import * as vars from '../vars/index.js'

const ColorContext = createContext()

const styles = {
  banner: ({ color }) =>
    compose(
      css(stylesheet['.psds-banner']),
      css(stylesheet[`.psds-banner--color-${color}`])
    ),
  button: ({ color }) =>
    compose(
      css(stylesheet['.psds-banner__button']),
      css(stylesheet[`.psds-banner__button--color-${color}`])
    ),
  dismiss: () => css(stylesheet['.psds-banner__dismiss']),
  text: () => css(stylesheet['.psds-banner__text'])
}

const Banner = React.forwardRef((props, ref) => {
  const { color, onClick, ...rest } = props

  return (
    <ColorContext.Provider value={color}>
      <div {...styles.banner(props)} {...filterReactProps(rest)} ref={ref}>
        <div {...styles.text(props)}>{props.children}</div>
        {props.onClick && (
          <button {...styles.dismiss(props)} onClick={onClick}>
            <CloseIcon />
          </button>
        )}
      </div>
    </ColorContext.Provider>
  )
})

Banner.displayName = 'Banner'

Banner.propTypes = {
  color: PropTypes.oneOf(Object.keys(vars.colors).map(key => vars.colors[key])),
  children: PropTypes.node.isRequired,
  onClick: PropTypes.func
}
Banner.defaultProps = {
  color: vars.colors.blue
}

const Button = React.forwardRef((props, forwardRef) => {
  const color = useContext(ColorContext)

  return (
    <BaseButton
      {...props}
      {...styles.button({ color })}
      ref={forwardRef}
      appearance={BaseButton.appearances.stroke}
      size={BaseButton.sizes.small}
    />
  )
})
Button.displayName = 'Button'

Banner.Button = Button

Banner.colors = vars.colors
export const colors = vars.colors

export default Banner
