import Link from 'next/link'
import React from 'react'

// TODO: make handle activeClassName-type thing
export default props =>
  /^http/.test(props.href)
    ? <a {...props} href={props.href}>{props.children}</a>
    : <Link href={props.href}><a {...props}>{props.children}</a></Link>
