import React from 'react'
import styleable from 'react-styleable'

import { Code, Example, Heading, P } from '../../common/components'
import css from './index.css'

import Button from '@pluralsight/ps-button/react'

export default styleable(css)(props => {
  return (
    <div className={props.css.root}>
      <Heading.Xxl>Buttons</Heading.Xxl>

      <P>
        Include a React component in your project:
      </P>
      <Code language="javascript">
        import Button from '@pluralsight/ps-button/react'
      </Code>

      <Heading.Large>Button appearance</Heading.Large>
      <Example
        component={<Button>Click me</Button>}
        name="Button"
        permutations={[{}, { appearance: 'stroke' }, { appearance: 'flat' }]}
      />

      <Heading.Large>Button sizes</Heading.Large>
      <Example
        component={<Button>Click me</Button>}
        name="Button"
        permutations={[
          { size: 'large' },
          { size: 'medium' },
          { size: 'small' }
        ]}
      />

      <Heading.Large>Disabled button</Heading.Large>
      <Example
        component={<Button>Disabled button</Button>}
        name="Button"
        permutations={[
          { disabled: true },
          { disabled: true, appearance: 'flat' }
        ]}
      />
    </div>
  )
})
