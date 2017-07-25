import CodeMirror from 'react-codemirror'
import 'codemirror/lib/codemirror.css'
import './codemirror-theme-monokai-sublime.css'
import debounce from 'debounce'

let modeLoaded = false
if (typeof window !== 'undefined' && typeof window.navigator !== 'undefined') {
  require('codemirror/mode/javascript/javascript')
  modeLoaded = true
}

import Highlight from 'react-highlight'
import PropTypes from 'prop-types'
import React from 'react'
import ReactDOM from 'react-dom'
import styleable from 'react-styleable'
import { transform } from 'babel-standalone'

import css from './react.module.css'

const compileSrc = src =>
  transform(src, {
    presets: [
      'es2015', // TODO: replace with preset-env when supported
      'react',
      'stage-2'
    ]
  }).code

const formatSrc = code => code.trim()

const decorateSrc = (props, codes) => {
  let decorated = '<div>'

  codes.forEach(code => {
    decorated += `<div className="${props.css.outputChild}">${code}</div>`
  })

  decorated += '</div>'

  return decorated
}

const evalSrc = compiled => eval(compiled)

const renderOutput = (evaled, el) => ReactDOM.render(evaled, el)

const unmountOutput = el => ReactDOM.unmountComponentAtNode(el)

const getOutputClassName = props =>
  props.orient === 'vertical'
    ? props.css.outputVertical
    : props.css.outputHorizontal

class ReactExample extends React.Component {
  constructor(props) {
    super(props)
    this.state = { codes: props.codes, error: null }
    this.handleCodeChange = this.handleCodeChange.bind(this)
  }
  componentDidMount() {
    this.renderOutput()
  }
  componentDidUpdate(prevProps) {
    if (this.props.code !== prevProps.code) this.renderOutput()
  }
  componentWillUnmount() {
    unmountOutput(this.outputEl)
  }
  handleCodeChange(code, i) {
    const codes = [...this.state.codes]
    codes[i] = code
    this.setState(_ => ({ codes }), debounce(this.renderOutput, 200))
  }
  renderError() {}
  renderOutput() {
    unmountOutput(this.outputEl)
    this.setState(
      _ => ({ error: null }),
      _ => {
        try {
          const src = decorateSrc(this.props, this.state.codes)
          const compiled = compileSrc(src)
          const evaled = evalSrc(compiled)
          renderOutput(evaled, this.outputEl)
        } catch (err) {
          console.log('err', err)
          unmountOutput(this.outputEl)
          this.setState(_ => ({ error: err.toString() }))
        }
      }
    )
  }
  renderSrc() {
    const options = {
      theme: 'monokai-sublime'
    }
    if (modeLoaded) options.mode = 'javascript'
    return this.state.codes.map((code, i) =>
      <CodeMirror
        key={i}
        className={this.props.css.editor}
        value={formatSrc(code)}
        onChange={code => this.handleCodeChange(code, i)}
        options={options}
      />
    )
  }
  renderError() {
    return this.state.error
      ? <pre className={this.props.css.error}>{this.state.error}</pre>
      : null
  }
  render() {
    return (
      <div className={this.props.css.root}>
        {this.renderError()}
        <div className={getOutputClassName(this.props)}>
          <div ref={el => (this.outputEl = el)} />
        </div>
        <div className={this.props.css.src}>
          <div className={this.props.css.srcOptions}>
            {this.renderSrc()}
          </div>
        </div>
      </div>
    )
  }
}

ReactExample.propTypes = {
  codes: PropTypes.arrayOf(PropTypes.string)
}
ReactExample.defaultProps = {
  orient: 'horizontal'
}

export default styleable(css)(ReactExample)
