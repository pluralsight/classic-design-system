import 'codemirror/lib/codemirror.css'
import '../example/codemirror-theme-monokai-sublime.css'
import Markdown from 'react-markdown'
import React from 'react'
import styleable from 'react-styleable'
import { Redirect } from 'react-router-dom'

import css from './index.module.css'

let CodeMirror
let codemirrorLoaded = false
if (typeof window !== 'undefined' && typeof window.navigator !== 'undefined') {
  CodeMirror = require('codemirror')
  require('codemirror/mode/javascript/javascript')
  codemirrorLoaded = true
}

class Doc extends React.Component {
  constructor(props) {
    super(props)
    this.state = {}
    this.handleLinkClick = this.handleLinkClick.bind(this)
  }
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

    this.links = document.querySelectorAll('.' + this.props.css.root + ' a')

    this.links.forEach(a => a.addEventListener('click', this.handleLinkClick))
  }
  componentWillUnmount() {
    this.links.forEach(a =>
      a.removeEventListener('click', this.handleLinkClick)
    )
  }
  shouldComponentUpdate(_, nextState) {
    return this.state.newHref !== nextState.newHref
  }
  handleLinkClick(evt) {
    const href = evt.target.getAttribute('href')
    if (/http/.test(href)) return

    evt.preventDefault()
    this.setState(_ => ({ newHref: href }))
  }
  render() {
    return this.state.newHref
      ? <Redirect push exact to={this.state.newHref} />
      : <Markdown
          className={this.props.css.root}
          source={this.props.children}
        />
  }
}
export default styleable(css)(Doc)
