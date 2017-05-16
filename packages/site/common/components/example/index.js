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

const highlight = el => hljs.highlightBlock(el)

class Example extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      htmlSrc: renderHtmlSrc(this.props.component, this.props.permutations[0]),
      reactSrc: renderReactSrc(
        this.props.name,
        this.props.component.props.children,
        this.props.permutations[0]
      )
    }
    this.handleOutputClick = this.handleOutputClick.bind(this)
  }
  componentDidMount() {
    ;[this.htmlEl, this.reactEl].forEach(highlight)
  }
  componentDidUpdate() {
    ;[this.htmlEl, this.reactEl].forEach(highlight)
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
    return props.permutations.map((p, i) =>
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
          <pre className={this.props.css.srcOptions}>
            <code
              className={'language-html hljs html ' + this.props.css.html}
              ref={el => (this.htmlEl = el)}
            >
              {this.state.htmlSrc}
            </code>
            <code
              className={
                'language-html hljs javascript ' + this.props.css.react
              }
              ref={el => (this.reactEl = el)}
            >
              {this.state.reactSrc}
            </code>
          </pre>
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
