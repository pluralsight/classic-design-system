import filterReactProps from '@pluralsight/ps-design-system-filter-react-props'
import Halo from '@pluralsight/ps-design-system-halo'
import { stylesFor } from '@pluralsight/ps-design-system-util'
import { css } from 'glamor'
import PropTypes from 'prop-types'
import React from 'react'

import { alignments } from '../vars/index.js'
import stylesheet from '../css/index.js'

const styles = {
  bar: props =>
    css(
      stylesheet['.psds-navitem__bar'],
      stylesheet[
        `.psds-navitem__${
          props.alignment === alignments.vertical ? 'vert' : 'horz'
        }-bar`
      ],
      props.selected && stylesheet['.psds-navitem__bar--selected'],
      stylesFor('navitem__bar', props),
      props.selected && stylesFor('navitem__bar--selected', props)
    ),
  button: props =>
    css(
      stylesheet['.psds-navitem__button'],
      props.selected && stylesheet['.psds-navitem__button--selected']
    )
}

export function Bar(props) {
  return <div className={styles.bar(props)} />
}
Bar.propTypes = {
  alignment: PropTypes.oneOf(Object.keys(alignments).map(k => alignments[k])), // eslint-disable-line react/no-unused-prop-types
  selected: PropTypes.bool // eslint-disable-line react/no-unused-prop-types
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
Button.displayName = 'NavItem.Button'
Button.propTypes = {
  children: PropTypes.node,
  href: PropTypes.string
}
