import PropTypes from 'prop-types'
import React from 'react'
import shave from 'shave'

import core from '@pluralsight/ps-design-system-core'
import filterReactProps from '@pluralsight/ps-design-system-filter-react-props'

class Shave extends React.Component {
  constructor(props) {
    super(props)

    this.elRef = React.createRef()

    this.reset = this.reset.bind(this)
    this.truncate = this.truncate.bind(this)
  }

  componentDidMount() {
    window.addEventListener('resize', this.truncate)
    this.truncate()
  }

  componentWillUpdate() {
    this.reset()
  }

  componentDidUpdate() {
    this.truncate()
  }

  componentWillUnmount() {
    this.reset()
    window.removeEventListener('resize', this.truncate)
  }

  reset() {
    this.elRef.current.innerHTML = this.props.children
  }

  truncate() {
    const maxHeight = this.props.lineHeight * this.props.lines
    shave(this.elRef.current, maxHeight, { character: this.props.character })
  }

  render() {
    return <div ref={this.elRef} {...filterReactProps(this.props)} />
  }
}

Shave.defaultProps = {
  character: '&hellip;',
  lineHeight: parseInt(core.type.lineHeightStandard, 10),
  lines: 3
}

Shave.propTypes = {
  character: PropTypes.string,
  children: PropTypes.string.isRequired,
  lineHeight: PropTypes.number,
  lines: PropTypes.number
}

export default Shave
