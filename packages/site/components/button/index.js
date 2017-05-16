import React from 'react'
import styleable from 'react-styleable'

import { Example, Heading } from '../../common/components'
import css from './index.css'

import Button from '@pluralsight/ds-button'

export default styleable(css)(props => {
  return (
    <div className={props.css.root}>
      <Heading.Xxl>Buttons</Heading.Xxl>

      <Heading.Large>Button appearance</Heading.Large>

      <Example
        component={<Button>Click me</Button>}
        name="Button"
        permutations={[{}, { appearance: 'stroke' }, { appearance: 'flat' }]}
      />

      <Example
        component={<Button>Click me</Button>}
        name="Button"
        permutations={[
          { size: 'large' },
          { size: 'medium' },
          { size: 'small' }
        ]}
      />
    </div>
  )
})
