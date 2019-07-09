import { css } from 'glamor'
import filterReactProps from '@pluralsight/ps-design-system-filter-react-props'
import Icon from '@pluralsight/ps-design-system-icon/react.js'
import PropTypes from 'prop-types'
import React from 'react'

import stylesheet from '../css/index.js'
import * as vars from '../vars/index.js'

const styles = {
  banner: ({ color }) =>
    css(stylesheet['.psds-banner'], stylesheet[`.psds-banner--color-${color}`]),
  dismiss: () => css(stylesheet['.psds-banner__dismiss']),
  text: () => css(stylesheet['.psds-banner__text'])
}

const Banner = props => {
  const { onClick, ...rest } = props
  return (
    <div {...styles.banner(props)} {...filterReactProps(rest)}>
      <div {...styles.text(props)}>{props.children}</div>
      {props.onClick && (
        <button {...styles.dismiss(props)} onClick={onClick}>
          <Icon id={Icon.ids.close} />
        </button>
      )}
    </div>
  )
}
Banner.displayName = 'Banner'
Banner.propTypes = {
  color: PropTypes.oneOf(Object.keys(vars.colors)),
  children: PropTypes.node.isRequired,
  onClick: PropTypes.func
}
Banner.defaultProps = {
  color: vars.colors.blue
}
Banner.colors = vars.colors

export const colors = vars.colors

export default Banner
