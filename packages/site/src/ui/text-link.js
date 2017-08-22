import Link from '@pluralsight/ps-design-system-link/react'
import NextLink from 'next/link'
import React from 'react'

// TODO: make handle activeClassName-type thing
export default props =>
  /^http/.test(props.href)
    ? <Link><a {...props} href={props.href}>{props.children}</a></Link>
    : <NextLink href={props.href}>
        <Link>
          <a {...props}>{props.children}</a>
        </Link>
      </NextLink>
