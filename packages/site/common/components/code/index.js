import React from 'react'
import { string } from 'prop-types'
import styleable from 'react-styleable'

import css from './index.css'

const Code = props => (
  <pre className={props.css.root}>
    <code className={`language-${props.lang} hljs ${props.lang}`}>
      {props.children}
    </code>
  </pre>
)

Code.propTypes = {
  lang: string
}

Code.defaultProps = {
  lang: 'javascript'
}

export default styleable(css)(Code)
