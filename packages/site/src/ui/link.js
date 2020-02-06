import NextLink from 'next/link.js'
import PropTypes from 'prop-types'
import React from 'react'

import DSLink from '@pluralsight/ps-design-system-link'

// TODO: consolidate text-link.js usages into this
// TODO: make handle activeClassName-type thing
const Link = React.forwardRef((props, ref) => {
  function handleClick(evt) {
    if (document)
      document.body.scrollTop = document.documentElement.scrollTop = 0
    if (typeof props.onClick === 'function') props.onClick(evt)
  }

  return /^http/.test(props.href) ? (
    <DSLink appearance={props.appearance}>
      <a {...props} href={props.href} ref={ref}>
        {props.children}
      </a>
    </DSLink>
  ) : (
    <NextLink href={props.href}>
      <DSLink appearance={props.appearance}>
        <a {...props} onClick={handleClick} ref={ref}>
          {props.children}
        </a>
      </DSLink>
    </NextLink>
  )
})

Link.appearances = DSLink.appearances
Link.displayName = 'Link'

Link.propTypes = {
  appearance: PropTypes.oneOf(
    Object.keys(DSLink.appearances).map(k => DSLink.appearances[k])
  ),
  children: PropTypes.node,
  href: PropTypes.string,
  onClick: PropTypes.func
}

export default Link
