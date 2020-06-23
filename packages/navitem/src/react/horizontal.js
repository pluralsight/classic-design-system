import { css } from 'glamor'
import PropTypes from 'prop-types'
import React from 'react'

import stylesheet from '../css/index.js'

const styles = {
  icon: () => css(stylesheet['.psds-navitem__icon']),
  label: () => css(stylesheet['.psds-navitem__label'])
}

export function Icon(props) {
  return <span className={styles.icon()}>{props.icon}</span>
}
Icon.propTypes = {
  icon: PropTypes.element
}

export function Label(props) {
  return <span className={styles.label()}>{props.children}</span>
}
Label.propTypes = {
  children: PropTypes.node
}
