import hljs from 'highlightjs'
import Markdown from 'react-markdown'
import React from 'react'
import styleable from 'react-styleable'

import css from './index.module.css'

class Doc extends React.Component {
  componentDidMount() {
    document
      .querySelectorAll('.' + this.props.css.root + ' pre code')
      .forEach(node => hljs.highlightBlock(node))
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
