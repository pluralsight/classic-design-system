import { CaretDownIcon } from '@pluralsight/ps-design-system-icon'
import { css } from 'glamor'
import PropTypes from 'prop-types'
import React from 'react'

import stylesheet from '../css/index.js'

const styles = {
  caret: () => css(stylesheet['.psds-navitem__vert-caret']),
  icon: () => css(stylesheet['.psds-navitem__vert-icon']),
  label: () => css(stylesheet['.psds-navitem__vert-label']),
  layout: () => css(stylesheet['.psds-navitem__vert-layout'])
}

export function VertCaret(props) {
  return props.menu ? (
    <span className={styles.caret()}>
      <CaretDownIcon size={CaretDownIcon.sizes.small} />
    </span>
  ) : null
}
VertCaret.propTypes = {
  menu: PropTypes.element
}

export function VertIcon(props) {
  return props.icon ? <span className={styles.icon()}>{props.icon}</span> : null
}
VertIcon.propTypes = {
  icon: PropTypes.element
}

export function VertLabel(props) {
  return <span className={styles.label()}>{props.children}</span>
}
VertLabel.propTypes = {
  children: PropTypes.node
}

export function VertLayout(props) {
  return (
    <span className={styles.layout()}>
      <VertIcon {...props} />
      <VertLabel>{props.children}</VertLabel>
      <VertCaret {...props} />
    </span>
  )
}
VertLayout.propTypes = {
  children: PropTypes.node
}
