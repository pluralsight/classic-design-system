import CodeMirror from 'react-codemirror'
import 'codemirror/lib/codemirror.css'
import './codemirror-theme-monokai-sublime.css'

let modeLoaded = false
if (typeof window !== 'undefined' && typeof window.navigator !== 'undefined') {
  require('codemirror/mode/css/css')
  modeLoaded = true
}

import PropTypes from 'prop-types'
import React from 'react'
import styleable from 'react-styleable'

import css from './css-var.module.css'
import formatCssVars from './format-css-vars'

class CssVarExample extends React.Component {
  constructor(props) {
    super(props)
  }
  renderSrc() {
    const options = {
      readOnly: 'nocursor',
      theme: 'monokai-sublime'
    }
    if (modeLoaded) options.mode = 'css'
    return (
      <CodeMirror
        className={this.props.css.css}
        value={formatCssVars(this.props.attributes)}
        options={options}
      />
    )
  }
  render() {
    return (
      <div className={this.props.css.root}>
        <div className={this.props.css.output}>
          {this.props.output}
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
CssVarExample.propTypes = {
  output: PropTypes.element.isRequired,
  attributes: PropTypes.arrayOf(
    PropTypes.shape({
      varName: PropTypes.string.isRequired,
      attrName: PropTypes.string.isRequired
    })
  ).isRequired
}

export default styleable(css)(CssVarExample)
