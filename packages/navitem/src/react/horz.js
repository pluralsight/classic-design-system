import { css } from 'glamor'
import PropTypes from 'prop-types'
import React from 'react'

import stylesheet from '../css/index.js'

const styles = {
  icon: () => css(stylesheet['.psds-navitem__horz-icon']),
  label: () => css(stylesheet['.psds-navitem__horz-label'])
}

export function HorzIcon(props) {
  return <span className={styles.icon()}>{props.icon}</span>
}
HorzIcon.propTypes = {
  icon: PropTypes.element
}

export function HorzLabel(props) {
  return <span className={styles.label()}>{props.children}</span>
}
HorzLabel.propTypes = {
  children: PropTypes.node
}
