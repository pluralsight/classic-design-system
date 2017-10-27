import Link from 'next/link'
import React from 'react'
import StyledLink from '@pluralsight/ps-design-system-link/react'

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
    return /^http/.test(this.props.href) ? (
      <StyledLink>
        <a {...this.props} href={this.props.href}>
          {this.props.children}
        </a>
      </StyledLink>
    ) : (
      <Link href={this.props.href}>
        <StyledLink>
          <a {...this.props} onClick={this.handleClick}>
            {this.props.children}
          </a>
        </StyledLink>
      </Link>
    )
  }
}
