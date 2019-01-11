import PropTypes from 'prop-types'
import React from 'react'
import ResizeObserverAPI from 'resize-observer-polyfill'

const isBrowser = typeof window !== 'undefined'

class ResizeObserver extends React.PureComponent {
  constructor(props) {
    super(props)

    this.handleResize = this.handleResize.bind(this)
    this.handleResizedObserved = this.handleResizedObserved.bind(this)

    this.container = React.createRef()
    this.observer = new ResizeObserverAPI(this.handleResizedObserved)

    this.animationId = null
    this.state = { width: undefined, height: undefined }
  }

  get node() {
    const { current: node } = this.container
    return node
  }

  componentDidMount() {
    if (this.node) this.observer.observe(this.node)
  }

  componentWillUnmount() {
    if (this.node) this.observer.unobserve(this.node)
    if (this.animationId) window.cancelAnimationFrame(this.animationId)
  }

  // TODO: throttle
  handleResize(contentRect) {
    const { width, height } = contentRect
    this.setState({ width, height })
  }

  handleResizedObserved(entries) {
    if (!isBrowser) return

    const { contentRect } = entries[0]

    this.animationId = window.requestAnimationFrame(() =>
      this.handleResize(contentRect)
    )
  }

  render() {
    return <div ref={this.container}>{this.props.children(this.state)}</div>
  }
}

ResizeObserver.propTypes = {
  children: PropTypes.func.isRequired
}

export default ResizeObserver
