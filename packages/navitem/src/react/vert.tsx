import { CaretDownIcon } from '@pluralsight/ps-design-system-icon'
import { css } from 'glamor'
import PropTypes from 'prop-types'
import React from 'react'

import { Bar, Button } from './common.js'
import stylesheet from '../css/index.js'

const styles = {
  container: () => css(stylesheet['.psds-navitem__vert-container']),
  caret: () => css(stylesheet['.psds-navitem__vert-caret']),
  icon: () => css(stylesheet['.psds-navitem__vert-icon']),
  label: () => css(stylesheet['.psds-navitem__vert-label']),
  layout: () => css(stylesheet['.psds-navitem__vert-layout'])
}

export function VertContainer(props) {
  return <span className={styles.container()}>{props.children}</span>
}
VertContainer.displayName = 'NavItem.VertContainer'
VertContainer.propTypes = {
  children: PropTypes.node
}

export function VertCaret(props) {
  return props.menu ? (
    <span className={styles.caret()}>
      <CaretDownIcon size={CaretDownIcon.sizes.small} />
    </span>
  ) : null
}
VertCaret.displayName = 'NavItem.VertCaret'
VertCaret.propTypes = {
  menu: PropTypes.bool
}

export function VertIcon(props) {
  return props.icon ? <span className={styles.icon()}>{props.icon}</span> : null
}
VertIcon.displayName = 'NavItem.VertIcon'
VertIcon.propTypes = {
  icon: PropTypes.element
}

export function VertLabel(props) {
  return <span className={styles.label()}>{props.children}</span>
}
VertLabel.displayName = 'NavItem.VertLabel'
VertLabel.propTypes = {
  children: PropTypes.node
}

export const VertLayout = React.forwardRef((props, forwardedRef) => (
  <VertContainer>
    <Button {...props} ref={forwardedRef}>
      <span className={styles.layout()}>
        <VertIcon {...props} />
        <VertLabel>{props.children}</VertLabel>
        <VertCaret {...props} />
      </span>
    </Button>
    <Bar {...props} />
  </VertContainer>
))
VertLayout.displayName = 'NavItem.VertLayout'
VertLayout.propTypes = {
  children: PropTypes.node
}
