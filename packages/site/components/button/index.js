import React from 'react'
import styleable from 'react-styleable'

import Button from '@pluralsight/ds-button'
import { Code } from '../../common/components'
import css from './index.css'
import html
  from '!!raw-loader!react-html-loader!babel-loader!@pluralsight/ds-button'

export default styleable(css)(props => (
  <div className={props.css.root}>
    <div>Button docs <Button>react docs</Button></div>
    <Code lang="html">{html}</Code>
  </div>
))
