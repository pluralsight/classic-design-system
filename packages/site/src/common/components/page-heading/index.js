import Badge from '@pluralsight/ps-design-system-badge/react'
import core from '@pluralsight/ps-design-system-core'
import React from 'react'
import styleable from 'react-styleable'

import css from './index.module.css'
import Heading from '../heading'

const renderBeta = ({ beta }) =>
  beta
    ? <Badge
        css={{ marginLeft: core.layout.spacingLarge }}
        color={Badge.colors.blue}
      >
        Beta
      </Badge>
    : null

export default styleable(css)(props =>
  <Heading size="xxLarge" className={props.css.title}>
    <h1>
      {props.children}{renderBeta(props)}
    </h1>
  </Heading>
)
