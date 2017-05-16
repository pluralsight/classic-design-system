import PropTypes from 'prop-types'
import React from 'react'
import ReactDOMServer from 'react-dom/server'
import styleable from 'react-styleable'

import css from './index.css'
import SrcSwitcher from './src-switcher'

const rmCssModuleHashes = src => src.replace(/___\S{5}/g, '')

const toHtml = reactElement => ReactDOMServer.renderToStaticMarkup(reactElement)

const renderHtmlSrc = (component, permutation) =>
  rmCssModuleHashes(toHtml(React.cloneElement(component, permutation)))

const renderAttributes = permutation =>
  Object.keys(permutation).reduce((acc, key) => {
    acc += ` ${key}="${permutation[key]}"`
    return acc
  }, '')

const renderReactSrc = (name, children, permutation) =>
  `<${name}${renderAttributes(permutation)}>${children}</${name}>`

class Example extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      htmlSrc: renderHtmlSrc(this.props.component, {}),
      reactSrc: renderReactSrc(
        this.props.name,
        this.props.component.props.children,
        {}
      )
    }
    this.handleOutputClick = this.handleOutputClick.bind(this)
  }
  handleOutputClick(permutation) {
    this.setState({
      htmlSrc: renderHtmlSrc(this.props.component, permutation),
      reactSrc: renderReactSrc(
        this.props.name,
        this.props.component.props.children,
        permutation
      )
    })
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
          <div className={this.props.css.html}>
            {this.state.htmlSrc}
          </div>
          <div className={this.props.css.react}>
            {this.state.reactSrc}
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
