import PropTypes from 'prop-types'
import React from 'react'
import styleable from 'react-styleable'

import css from './index.css'
import SrcSwitcher from './src-switcher'

class Example extends React.Component {
  handleOutputClick(permutation, evt) {
    console.log('permutation', permutation)
    console.log('evt', evt)
  }
  renderOutputs(props) {
    return [{}, ...props.permutations].map((p, i) =>
      React.cloneElement(props.component, {
        key: i,
        ...p,
        onClick: this.handleOutputClick.bind(this, p)
      })
    )
  }
  render() {
    return (
      <div className={this.props.css.root}>
        <div className={this.props.css.output}>
          {this.renderOutputs(this.props)}
        </div>
        <div className={this.props.css.src}>
          <SrcSwitcher />
          {this.props.src}
        </div>
      </div>
    )
  }
}
Example.propTypes = {
  component: PropTypes.element.isRequired,
  permutations: PropTypes.arrayOf(PropTypes.object)
}
Example.defaultProps = {
  permutations: [{}]
}

export default styleable(css)(Example)
