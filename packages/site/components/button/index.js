import React from 'react'
import styleable from 'react-styleable'

import Button from '@pluralsight/ds-button'
import { Code, CodeOutput } from '../../common/components'
import css from './index.css'
import srcCss from '!!raw-loader!postcss-loader!./src.css'
import srcJs from '!!raw-loader!@pluralsight/ds-button'
import srcHtml
  from '!!raw-loader!react-html-loader!babel-loader!@pluralsight/ds-button'

const jsUsage = `
  <Button>react docs</Button>
`

export default styleable(css)(props => (
  <div className={props.css.root}>
    <Code lang="html">{srcHtml}</Code>
    <Code lang="css">{srcCss}</Code>
    <Code lang="html">{jsUsage}</Code>
    <CodeOutput>{jsUsage}</CodeOutput>
  </div>
))
