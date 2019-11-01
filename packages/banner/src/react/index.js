import { compose, css } from 'glamor'
import PropTypes from 'prop-types'
import React from 'react'

import BaseButton from '@pluralsight/ps-design-system-button'
import filterReactProps from '@pluralsight/ps-design-system-filter-react-props'
import Icon from '@pluralsight/ps-design-system-icon'

import stylesheet from '../css/index.js'
import * as vars from '../vars/index.js'

const styles = {
  banner: ({ color }) =>
    compose(
      css(stylesheet['.psds-banner']),
      css(stylesheet[`.psds-banner--color-${color}`])
    ),
  button: () => css(stylesheet['.psds-banner__button']),
  dismiss: () => css(stylesheet['.psds-banner__dismiss']),
  text: () => css(stylesheet['.psds-banner__text'])
}

const Banner = React.forwardRef((props, ref) => {
  const { onClick, ...rest } = props
  return (
    <div {...styles.banner(props)} {...filterReactProps(rest)} ref={ref}>
      <div {...styles.text(props)}>{props.children}</div>
      {props.onClick && (
        <button {...styles.dismiss(props)} onClick={onClick}>
          <Icon id={Icon.ids.close} />
        </button>
      )}
    </div>
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

const Button = React.forwardRef((props, forwardRef) => (
  <BaseButton
    {...styles.button()}
    {...props}
    ref={forwardRef}
    appearance={BaseButton.appearances.stroke}
    size={BaseButton.sizes.small}
    style={{ borderColor: 'currentColor', color: 'currentColor' }}
  />
))

Banner.Button = Button

Banner.colors = vars.colors
export const colors = vars.colors

export default Banner
