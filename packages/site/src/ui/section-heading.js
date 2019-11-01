import * as core from '@pluralsight/ps-design-system-core'
import PropTypes from 'prop-types'
import React from 'react'

import Heading from './heading.js'
import { addHeading } from './content.js'

const formatId = href =>
  href
    .toLowerCase()
    .split(' ')
    .join('-')
const formatHref = href => '#' + formatId(href)

export default class SectionHeading extends React.Component {
  constructor(props) {
    super(props)
    this.el = React.createRef()
  }
  componentDidMount() {
    const href = formatHref(this.props.children)
    addHeading(this.props.children, href)
    if (
      // eslint-disable-next-line eqeqeq
      typeof window != 'undefined' &&
      window.location.hash === href &&
      this.el &&
      this.el.current
    ) {
      this.el.current.focus()
      setTimeout(_ => this.el.current.scrollIntoView(), 1)
    }
  }
  render() {
    return (
      <div>
        <Heading size={Heading.sizes.large}>
          <h2>
            <a
              id={formatId(this.props.children)}
              className="link"
              href={formatHref(this.props.children)}
              ref={this.el}
            >
              {this.props.children}
            </a>
          </h2>
        </Heading>
        <style jsx>{`
          .link {
            color: currentColor;
            text-decoration: none;
          }
          .link:focus {
            background: ${core.colors.gradientHorz};
            color: ${core.colors.white};
            outline: none;
          }
        `}</style>
      </div>
    )
  }
}
SectionHeading.propTypes = {
  children: PropTypes.node
}
