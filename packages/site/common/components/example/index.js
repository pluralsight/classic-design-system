import PropTypes from 'prop-types'
import React from 'react'
import ReactDOMServer from 'react-dom/server'
import styleable from 'react-styleable'

import css from './index.css'
import SrcSwitcher from './src-switcher'

const rmCssModuleHashes = src => src.replace(/___\S{5}/g, '')

const toHtml = reactElement => ReactDOMServer.renderToStaticMarkup(reactElement)

const renderSrc = (component, permutation) =>
  rmCssModuleHashes(toHtml(React.cloneElement(component, permutation)))

class Example extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      src: renderSrc(this.props.component, {})
    }
    this.handleOutputClick = this.handleOutputClick.bind(this)
  }
  handleOutputClick(permutation) {
    this.setState({ src: renderSrc(this.props.component, permutation) })
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
          {this.state.src}
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
