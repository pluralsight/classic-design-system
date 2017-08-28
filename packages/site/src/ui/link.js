import Link from 'next/link'
import React from 'react'

// TODO: make handle activeClassName-type thing
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
    return /^http/.test(this.props.href)
      ? <a {...this.props} href={this.props.href}>{this.props.children}</a>
      : <Link href={this.props.href}>
          <a {...this.props} onClick={this.handleClick}>
            {this.props.children}
          </a>
        </Link>
  }
}
