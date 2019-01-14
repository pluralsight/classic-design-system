import PropTypes from 'prop-types'
import React from 'react'
import ResizeObserverAPI from 'resize-observer-polyfill'

const isBrowser = typeof window !== 'undefined'

function debounce(delay, fn) {
  let timerId

  return function(...args) {
    if (timerId) clearTimeout(timerId)

    timerId = setTimeout(() => {
      fn(...args)
      timerId = null
    }, delay)
  }
}

class ResizeObserver extends React.PureComponent {
  constructor(props) {
    super(props)

    this.handleResize = this.handleResize.bind(this)
    this.handleResizedObserved = debounce(
      props.debounceDelay,
      this.handleResizedObserved.bind(this)
    )

    this.animationId = null
    this.container = React.createRef()
    this.observer = new ResizeObserverAPI(this.handleResizedObserved)

    this.state = { width: undefined, height: undefined }
  }

  get node() {
    return this.container.current
  }

  componentDidMount() {
    if (this.node) this.observer.observe(this.node)
  }

  componentWillUnmount() {
    if (this.node) this.observer.unobserve(this.node)
    if (this.animationId) window.cancelAnimationFrame(this.animationId)
  }

  handleResize({ width, height }) {
    const { observeHeight, observeWidth } = this.props

    this.setState(prevState => ({
      width: observeWidth ? width : prevState.width,
      height: observeHeight ? height : prevState.height
    }))
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

ResizeObserver.defaultProps = {
  debounceDelay: 200,
  observeHeight: true,
  observeWidth: true
}

ResizeObserver.propTypes = {
  children: PropTypes.func.isRequired,
  debounceDelay: PropTypes.number,
  observeHeight: PropTypes.bool,
  observeWidth: PropTypes.bool
}

export default ResizeObserver
