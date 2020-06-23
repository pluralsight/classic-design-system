import { css } from 'glamor'
import PropTypes from 'prop-types'
import React from 'react'

import stylesheet from '../css/index.js'

const styles = {
  icon: () => css(stylesheet['.psds-navitem__horz-icon']),
  label: () => css(stylesheet['.psds-navitem__horz-label']),
  layout: () => css(stylesheet['.psds-navitem__horz-layout'])
}

export function HorzIcon(props) {
  return props.icon ? <span className={styles.icon()}>{props.icon}</span> : null
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

export function HorzLayout(props) {
  return <span className={styles.layout()}>{props.children}</span>
}
HorzLayout.propTypes = {
  children: PropTypes.node
}
