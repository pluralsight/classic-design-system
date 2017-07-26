import Link from '@pluralsight/ps-design-system-link/react'
import { NavLink } from 'react-router-dom'
import React from 'react'

export default props =>
  <Link {...props}>
    {/^http/.test(props.href)
      ? <a href={props.href}>{props.children}</a>
      : <NavLink to={props.href}>{props.children}</NavLink>}
  </Link>
