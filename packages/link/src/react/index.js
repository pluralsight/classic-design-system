import { css } from 'glamor'
import filterReactProps from '@pluralsight/ps-design-system-filter-react-props'
import PropTypes from 'prop-types'
import React from 'react'

import stylesheet from '../css/index.js'
import * as vars from '../vars/index.js'

const style = props =>
  css(
    {
      ':hover': stylesheet['.psds-link:hover']
    },
    stylesheet[`.psds-link--appearance-${props.appearance}`]
  )

const Link = React.forwardRef((props, forwardedRef) => {
  const ref = forwardedRef || React.useRef()

  let tagName = 'a'
  React.useEffect(_ => {
    if (ref.current && ref.current.tagName) tagName = ref.current.tagName
  })

  const { children, ...rest } = props
  return React.cloneElement(React.Children.only(props.children), {
    ...style(props),
    ...filterReactProps(rest, { tagName })
  })
})

Link.appearances = vars.appearances

Link.propTypes = {
  appearance: PropTypes.oneOf(Object.keys(vars.appearances)),
  children: PropTypes.element.isRequired
}
Link.defaultProps = {
  appearance: vars.appearances.default
}

export const appearances = vars.appearances

export default Link
