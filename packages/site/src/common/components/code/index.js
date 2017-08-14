import CodeMirror from 'react-codemirror'
import 'codemirror/lib/codemirror.css'
import '../example/codemirror-theme-monokai-sublime.css'

let modeLoaded = false
if (typeof window !== 'undefined' && typeof window.navigator !== 'undefined') {
  require('codemirror/mode/javascript/javascript')
  require('codemirror/mode/css/css')
  modeLoaded = true
}

import React from 'react'
import { string } from 'prop-types'
import styleable from 'react-styleable'

import css from './index.module.css'

/* TODO: rename CodeBlock, do inline as Code*/
const Code = props => {
  const options = {
    readOnly: 'nocursor',
    theme: 'monokai-sublime'
  }
  if (modeLoaded) options.mode = props.lang

  return (
    <CodeMirror
      className={props.css.root}
      value={props.children}
      options={options}
    />
  )
}

Code.propTypes = {
  lang: string
}

Code.defaultProps = {
  lang: 'javascript'
}

export default styleable(css)(Code)
