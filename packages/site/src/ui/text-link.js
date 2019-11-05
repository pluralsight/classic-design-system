import Link from '@pluralsight/ps-design-system-link'
import NextLink from 'next/link.js'
import PropTypes from 'prop-types'
import React from 'react'

const TextLink = React.forwardRef((props, ref) =>
  /^http/.test(props.href) ? (
    <Link>
      <a {...props} href={props.href} ref={ref}>
        {props.children}
      </a>
    </Link>
  ) : (
    <NextLink href={props.href}>
      <Link>
        <a ref={ref} {...props}>
          {props.children}
        </a>
      </Link>
    </NextLink>
  )
)
TextLink.propTypes = {
  children: PropTypes.node,
  href: PropTypes.string
}
export default TextLink
