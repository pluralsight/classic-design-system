import Link from '@pluralsight/ps-design-system-link/react'
import { NavLink } from 'react-router-dom'
import React from 'react'

export default class extends React.Component {
  render() {
    return (
      <Link {...this.props}>
        {/^http/.test(this.props.href)
          ? <a href={this.props.href}>{this.props.children}</a>
          : <NavLink to={this.props.href}>{this.props.children}</NavLink>}
      </Link>
    )
  }
}
