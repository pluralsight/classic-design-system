import core from '@pluralsight/ps-design-system-core'
import Markdown from 'react-markdown'
import React from 'react'
import styleable from 'react-styleable'
import { Redirect } from 'react-router-dom'

import CodeMirrorCss from '../../vendor/codemirror-css'
import CodeMirrorTheme from '../../vendor/codemirror-theme-monokai-sublime-css'

let CodeMirror
let codemirrorLoaded = false
if (typeof window !== 'undefined' && typeof window.navigator !== 'undefined') {
  CodeMirror = require('codemirror')
  require('codemirror/mode/javascript/javascript')
  codemirrorLoaded = true
}

export default class Doc extends React.Component {
  constructor(props) {
    super(props)
    this.state = {}
    this.handleLinkClick = this.handleLinkClick.bind(this)
  }
  componentDidMount() {
    if (codemirrorLoaded) {
      // TODO: keep to context of component
      document.querySelectorAll('.markdown pre code').forEach(node =>
        CodeMirror(el => node.parentNode.replaceChild(el, node), {
          mode: 'javascript',
          theme: 'monokai-sublime',
          readOnly: true,
          value: node.innerText.trim()
        })
      )
    }
    this.links = document.querySelectorAll('.markdown a')
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
      : <div className="markdown">
          <CodeMirrorCss />
          <CodeMirrorTheme />
          <Markdown source={this.props.children} />
          <style jsx>{`
            /* NOTE: this is the tradeoff for being able to write markdown docs.
  We get the nice flow of prose in markdown, but we have to deal with
  styling the generated HTML by duplicating component styles (like heading)
  here. */
            .markdown {
            }
            .markdown :global(h1) {
              font-size: ${core.type.fontSizeXXLarge};
              letter-spacing: ${core.type.letterSpacingXXLarge};
              font-weight: ${core.type.fontWeightLight};
              margin: ${core.layout.spacingXXLarge} 0;
            }
            .markdown :global(h2) {
              font-size: ${core.type.fontSizeLarge};
              letter-spacing: ${core.type.letterSpacingLarge};
              font-weight: ${core.type.fontWeightBook};
              margin: ${core.layout.spacingXLarge} 0 ${core.layout
            .spacingSmall} 0;
            }
            .markdown :global(h3) {
              font-size: ${core.type.fontSizeMedium};
              letter-spacing: ${core.type.letterSpacingMedium};
              font-weight: ${core.type.fontWeightBook};
              margin: ${core.layout.spacingXLarge} 0 ${core.layout
            .spacingSmall} 0;
            }
            .markdown :global(pre:not(.CodeMirror-line)) {
              padding: ${core.layout.spacingLarge};
              background: ${core.colors.gray04};
              color: ${core.colors.white};
              margin: ${core.layout.spacingSmall} 0;
            }
            .markdown :global(.CodeMirror) {
              background: none;
            }
            .markdown :global(.CodeMirror),
            .markdown :global(.CodeMirror-scroll) {
              height: auto;
            }
            .markdown :global(p) {
              color: ${core.colors.gray04};
              font-size: ${core.type.fontSizeSmall};
              margin: ${core.layout.spacingSmall} 0;
              line-height: ${core.type.lineHeightStandard};
            }
            .markdown :global(a) {
              color: ${core.colors.orange};
              text-decoration: none;
            }
            .markdown :global(a):hover {
              text-decoration: underline;
            }
          `}</style>
        </div>
  }
}
