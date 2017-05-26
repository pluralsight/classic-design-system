import Highlight from 'react-highlight'
import PropTypes from 'prop-types'
import React from 'react'
import ReactDOMServer from 'react-dom/server'
import styleable from 'react-styleable'

import css from './index.module.css'
import SrcSwitcher from './src-switcher'
import util from '@pluralsight/ps-design-system-util'

const rmCssModuleHashes = src => src.replace(/___\S{5}/g, '')

const toHtml = reactElement => ReactDOMServer.renderToStaticMarkup(reactElement)

export const formatHtml = str => {
  if (!str) return ''

  const tabs = count => '  '.repeat(count)

  const formatTag = bit => '<' + bit + '>'

  const stripTag = bit => bit.replace(/^<?([^<>]+)>?$/, '$1')

  const isClosingTag = bit => bit[0] === '/'

  const isSelfClosingTag = bit => bit[bit.length - 1] === '/'

  const isTagClosingOverText = bit => bit.match(/<\//)

  let depth = 0
  return str.split('><').map(stripTag).reduce((html, bit) => {
    if (isClosingTag(bit)) {
      --depth
      html += '\n' + tabs(depth) + formatTag(bit)
    } else {
      html += (html ? '\n' : '') + tabs(depth) + formatTag(bit)

      if (!isSelfClosingTag(bit) && !isTagClosingOverText(bit)) ++depth
    }
    return html
  }, '')
}

const renderHtmlSrc = (component, permutation) =>
  formatHtml(
    rmCssModuleHashes(toHtml(React.cloneElement(component, permutation)))
  )

const renderHtmlSources = (component, permutations) =>
  permutations.map(p => renderHtmlSrc(component, p)).join('\n')

const renderReactProps = permutation =>
  Object.keys(permutation).reduce((acc, key) => {
    if (/^example/.test(key)) return acc

    const exampleKey = 'example' + util.string.capitalize(key)
    acc += ` ${key}=${permutation[exampleKey] ? permutation[exampleKey] : `"${permutation[key]}"`}`
    return acc
  }, '')

const renderReactImport = name =>
  `import ${name} from '@pluralsight/ps-${name.toLowerCase()}/react'\n\n`

const renderReactSrc = (name, children, permutation) =>
  `<${name}${renderReactProps(permutation)}>${children || ''}</${name}>\n`

const renderReactSources = (name, children, permutations) =>
  permutations.reduce(
    (acc, p) => (acc += renderReactSrc(name, children, p)),
    renderReactImport(name)
  )

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
          {renderReactSources(
            this.props.name,
            this.props.component.props.children,
            this.props.permutations
          )}
        </Highlight>
      )
    } else if (this.state.srcOption === 'html') {
      return (
        <Highlight className={'html ' + this.props.css.html}>
          {renderHtmlSources(this.props.component, this.props.permutations)}
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
