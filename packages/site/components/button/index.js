import React from 'react'
import styleable from 'react-styleable'

import { Code, CodeOutput, Example, Heading, P } from '../../common/components'
import css from './index.css'

import Button from '@pluralsight/ds-button'
import srcCss from '!!raw-loader!postcss-loader!./src.css'
import srcHtml
  from '!!raw-loader!react-html-loader!babel-loader!@pluralsight/ds-button'
import srcJs from '!!raw-loader!./src.js'
import srcJsOutput from './src.js'

export default styleable(css)(props => {
  return (
    <div className={props.css.root}>
      <Heading.Xxl>Buttons</Heading.Xxl>

      <Heading.Large>Button appearance</Heading.Large>

      <Example
        component={<Button>Click here</Button>}
        name="Button"
        permutations={[{ appearance: 'stroke' }, { appearance: 'flat' }]}
      />

      <Code lang="html">{srcHtml}</Code>
      <Code lang="css">{srcCss}</Code>
      <Code lang="html">{srcJs}</Code>
      <CodeOutput>{srcJsOutput}</CodeOutput>
    </div>
  )
})
