import * as core from '@pluralsight/ps-design-system-core'
import PropTypes from 'prop-types'
import React from 'react'
import Theme from '@pluralsight/ps-design-system-theme'

class Headings {
  constructor() {
    this.subscribers = []
    this.headings = []

    this.reset = this.reset.bind(this)
    this.add = this.add.bind(this)
    this.notifySubscribers = this.notifySubscribers.bind(this)
    this.subscribe = this.subscribe.bind(this)
    this.unsubscribe = this.unsubscribe.bind(this)
  }

  reset() {
    this.headings = []
  }

  add(label, href) {
    this.headings.push({ label, href })
    this.notifySubscribers()
  }

  notifySubscribers() {
    this.subscribers.forEach(fn => fn(this.headings))
  }

  subscribe(fn) {
    this.subscribers.push(fn)
  }

  unsubscribe(fn) {
    this.subscribers = this.subscribers.filter(f => f !== fn)
  }
}
const headings = new Headings()

export const withHeadings = WrappedComponent =>
  class extends React.Component {
    constructor(props) {
      super(props)
      this.state = { headings: [] }
      this.handleHeadingAdd = this.handleHeadingAdd.bind(this)
    }

    componentDidMount() {
      headings.subscribe(this.handleHeadingAdd)
    }

    componentWillUnmount() {
      headings.unsubscribe(this.handleHeadingAdd)
    }

    handleHeadingAdd(headings) {
      this.setState({ headings })
    }

    render() {
      return <WrappedComponent {...this.props} headings={this.state.headings} />
    }
  }

export const addHeading = headings.add

export default class Content extends React.Component {
  componentDidMount() {
    headings.reset()
  }

  render() {
    return (
      <div className="content">
        <Theme name={Theme.names.light}>
          <div>{this.props.children}</div>
        </Theme>
        <style jsx>{`
          .content {
            margin: 0 auto;
            width: 100%;
            padding: ${core.layout.spacingSmall} ${core.layout.spacingLarge}
              ${core.layout.spacingLarge} ${core.layout.spacingLarge};
          }
          @media screen and (min-width: 769px) {
            .content {
              max-width: 900px;
              min-width: 300px;
            }
          }
        `}</style>
      </div>
    )
  }
}
Content.propTypes = {
  children: PropTypes.node
}
