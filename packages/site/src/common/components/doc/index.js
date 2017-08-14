import 'codemirror/lib/codemirror.css'
import '../example/codemirror-theme-monokai-sublime.css'
import Markdown from 'react-markdown'
import React from 'react'
import styleable from 'react-styleable'

import css from './index.module.css'

let CodeMirror
let codemirrorLoaded = false
if (typeof window !== 'undefined' && typeof window.navigator !== 'undefined') {
  CodeMirror = require('codemirror')
  require('codemirror/mode/javascript/javascript')
  codemirrorLoaded = true
}

class Doc extends React.Component {
  componentDidMount() {
    if (codemirrorLoaded) {
      document
        .querySelectorAll('.' + this.props.css.root + ' pre code')
        .forEach(node =>
          CodeMirror(el => node.parentNode.replaceChild(el, node), {
            mode: 'javascript',
            theme: 'monokai-sublime',
            readOnly: 'nocursor',
            value: node.innerText.trim()
          })
        )
    }
  }
  shouldComponentUpdate() {
    return false
  }
  render() {
    return (
      <Markdown className={this.props.css.root} source={this.props.children} />
    )
  }
}
export default styleable(css)(Doc)
