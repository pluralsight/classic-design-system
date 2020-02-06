import NextLink from 'next/link.js'
import PropTypes from 'prop-types'
import React, { forwardRef } from 'react'

import Link from '@pluralsight/ps-design-system-link'

const TextLink = forwardRef((props, ref) => {
  const { href, ...rest } = props

  const isExternal = /^http/.test(href)

  return isExternal ? (
    <Link>
      <a href={href} ref={ref} {...rest} />
    </Link>
  ) : (
    <NextLink href={href}>
      <Link>
        <a ref={ref} {...rest} />
      </Link>
    </NextLink>
  )
})

TextLink.displayName = 'TextLink'

TextLink.propTypes = {
  href: PropTypes.string
}

export default TextLink
