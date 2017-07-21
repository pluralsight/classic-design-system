import 'codemirror/lib/codemirror.css'
import CodeMirror from 'react-codemirror'
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
  })

const evalSrc = compiled => eval(compiled)

const renderOutput = (evaled, el) => ReactDOM.render(evaled, el)

const unmountOutput = el => ReactDOM.unmountComponentAtNode(el)

class ReactExample extends React.Component {
  constructor(props) {
    super(props)
    this.state = { code: props.code, error: null }
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
  handleCodeChange(code) {
    this.setState({ code })
  }
  renderError() {}
  renderOutput() {
    unmountOutput(this.outputEl)
    try {
      const compiled = compileSrc(this.state.code)
      const evaled = evalSrc(compiled)
      renderOutput(evaled, this.outputEl)
    } catch (err) {
      unmountOutput(this.outputEl)
      this.setState({ error: err.toString() })
    }
  }
  renderSrc() {
    const options = { mode: 'javascript' }
    return (
      <CodeMirror
        value={this.state.code}
        onChange={this.handleCodeChange}
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
        <div ref={el => (this.outputEl = el)} />
        {this.renderError()}
        <div className={this.props.css.src}>
          <div className={this.props.css.srcOptions}>
            {this.renderSrc()}
          </div>
        </div>
      </div>
    )
  }
}
ReactExample.propTypes = {}
ReactExample.defaultProps = {
  name: 'Component',
  orient: 'horizontal',
  permutations: [{}]
}

export default styleable(css)(ReactExample)
