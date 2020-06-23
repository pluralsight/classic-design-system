import filterReactProps from '@pluralsight/ps-design-system-filter-react-props'
import Halo from '@pluralsight/ps-design-system-halo'
import { css } from 'glamor'
import PropTypes from 'prop-types'
import React from 'react'

import stylesheet from '../css/index.js'

const styles = {
  bar: props =>
    css(
      stylesheet['.psds-navitem__bar'],
      props.selected && stylesheet['.psds-navitem__bar--selected'],
      stylesFor('bar', props)
    ),
  button: props =>
    css(
      stylesheet['.psds-navitem__button'],
      props.selected && stylesheet['.psds-navitem__button--selected']
    ),
  container: () => css(stylesheet['.psds-navitem__container'])
}

export function Bar(props) {
  return <div className={styles.bar(props)} />
}
Bar.propTypes = {
  selected: PropTypes.bool
}

export const Button = React.forwardRef((props, forwardedRef) => {
  const tagName = props.href ? 'a' : 'button'

  const ref = React.useRef()
  React.useImperativeHandle(forwardedRef, () => ref.current)

  return (
    <Halo inline gapSize={Halo.gapSizes.small}>
      {React.createElement(
        tagName,
        {
          ...styles.button(props),
          ...filterReactProps(props, { tagName }),
          ref
        },
        props.children
      )}
    </Halo>
  )
})
Button.displayName = 'NavItemButton'
Button.propTypes = {
  children: PropTypes.node,
  href: PropTypes.string
}

export function Container(props) {
  return <span className={styles.container()}>{props.children}</span>
}
Container.propTypes = {
  children: PropTypes.node
}

export function stylesFor(elementId, props) {
  return ((props && props.styles) || {})[elementId]
}
