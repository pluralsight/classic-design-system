import Highlight from 'react-highlight'
import PropTypes from 'prop-types'
import React from 'react'
import styleable from 'react-styleable'

import css from './react.module.css'
import formatReact from './format-react'
import formatReactToHtml from './format-react-to-html'
import SrcSwitcher from './src-switcher'

const filterNonExampleProps = permutation =>
  Object.keys(permutation).reduce((acc, key) => {
    if (!/^example/.test(key)) acc[key] = permutation[key]
    return acc
  }, {})

class Example extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      srcOption: 'react'
    }
    this.handleSrcOptionClick = this.handleSrcOptionClick.bind(this)
  }
  handleSrcOptionClick(srcOption) {
    this.setState({ srcOption })
  }
  renderOutputs(props) {
    return props.permutations.map((p, i) => (
      <div key={i} className={this.props.css.outputChild}>
        {React.cloneElement(props.component, filterNonExampleProps(p))}
      </div>
    ))
  }
  renderSrc() {
    if (this.state.srcOption === 'react') {
      return (
        <Highlight className={'html ' + this.props.css.react}>
          {formatReact(
            this.props.name,
            this.props.component.props.children,
            this.props.permutations
          )}
        </Highlight>
      )
    } else if (this.state.srcOption === 'html') {
      return (
        <Highlight className={'html ' + this.props.css.html}>
          {formatReactToHtml(this.props.component, this.props.permutations)}
        </Highlight>
      )
    }
  }
  render() {
    return (
      <div className={this.props.css.root}>
        <div className={this.props.css.output}>
          {this.renderOutputs(this.props)}
        </div>
        <div className={this.props.css.src}>
          <SrcSwitcher
            onClick={this.handleSrcOptionClick}
            value={this.state.srcOption}
          />
          <div className={this.props.css.srcOptions}>
            {this.renderSrc()}
          </div>
        </div>
      </div>
    )
  }
}
Example.propTypes = {
  component: PropTypes.element.isRequired,
  name: PropTypes.string,
  permutations: PropTypes.arrayOf(PropTypes.object)
}
Example.defaultProps = {
  name: 'Component',
  permutations: [{}]
}

export default styleable(css)(Example)
