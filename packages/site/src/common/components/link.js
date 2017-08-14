import Link from '@pluralsight/ps-design-system-link/react'
import { NavLink } from 'react-router-dom'
import React from 'react'

export default class extends React.Component {
  constructor(props) {
    super(props)
    this.handleClick = this.handleClick.bind(this)
  }
  handleClick(evt) {
    if (document)
      document.body.scrollTop = document.documentElement.scrollTop = 0
    if (this.props.onClick) this.props.onClick(evt)
  }
  render() {
    return (
      <Link {...this.props} onClick={this.handleClick}>
        {/^http/.test(this.props.href)
          ? <a href={this.props.href}>{this.props.children}</a>
          : <NavLink to={this.props.href}>{this.props.children}</NavLink>}
      </Link>
    )
  }
}
