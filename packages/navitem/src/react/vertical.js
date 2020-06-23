import { css } from 'glamor'
import PropTypes from 'prop-types'
import React from 'react'

import stylesheet from '../css/index.js'

const styles = {
  label: () => css(stylesheet['.psds-navitem__vertical-label'])
}

export function VerticalLabel(props) {
  return <span className={styles.label()}>{props.children}</span>
}
VerticalLabel.propTypes = {
  children: PropTypes.node
}
