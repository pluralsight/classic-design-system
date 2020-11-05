import { CaretDownIcon } from '@pluralsight/ps-design-system-icon'
import { css } from 'glamor'
import PropTypes from 'prop-types'
import React from 'react'

import { Bar, Button } from './common.js'
import stylesheet from '../css/index.js'

const styles = {
  container: () => css(stylesheet['.psds-navitem__horz-container']),
  caret: () => css(stylesheet['.psds-navitem__horz-caret']),
  icon: props =>
    css(
      stylesheet['.psds-navitem__horz-icon'],
      !props.children && stylesheet['.psds-navitem__horz-icon--icon-only']
    ),
  label: () => css(stylesheet['.psds-navitem__horz-label']),
  layout: props =>
    css(
      stylesheet['.psds-navitem__horz-layout'],
      props.menu && stylesheet['.psds-navitem__horz-layout--menu']
    )
}

export function HorzContainer(props) {
  return <span className={styles.container(props)}>{props.children}</span>
}
HorzContainer.displayName = 'NavItem.HorzContainer'
HorzContainer.propTypes = {
  children: PropTypes.node
}

export function HorzCaret(props) {
  return props.menu ? (
    <span className={styles.caret()}>
      <CaretDownIcon size={CaretDownIcon.sizes.small} />
    </span>
  ) : null
}
HorzCaret.displayName = 'NavItem.HorzCaret'
HorzCaret.propTypes = {
  menu: PropTypes.bool
}

export function HorzIcon(props) {
  return props.icon ? <span {...styles.icon(props)}>{props.icon}</span> : null
}
HorzIcon.displayName = 'NavItem.HorzIcon'
HorzIcon.propTypes = {
  icon: PropTypes.element
}

export function HorzLabel(props) {
  return props.children ? (
    <span className={styles.label()}>{props.children}</span>
  ) : null
}
HorzLabel.displayName = 'NavItem.HorzLabel'
HorzLabel.propTypes = {
  children: PropTypes.node
}

export const HorzLayout = React.forwardRef((props, forwardedRef) => (
  <HorzContainer>
    <Button {...props} ref={forwardedRef}>
      <span className={styles.layout(props)}>
        <HorzIcon {...props} />
        <HorzLabel {...props} />
        <HorzCaret {...props} />
      </span>
    </Button>
    <Bar {...props} />
  </HorzContainer>
))
HorzLayout.displayName = 'NavItem.HorzLayout'
HorzLayout.propTypes = {
  children: PropTypes.node
}
