import Row from '@pluralsight/ps-design-system-row/react'
import React from 'react'
import styleable from 'react-styleable'

import { Code } from '../../common/components'
import css from './stack.module.css'

export default styleable(css)(props =>
  <div className={props.css.stack}>
    <Row
      title="Advanced TypeScript"
      progress={0}
      image={
        <Row.Image src="http://lorempixel.com/output/people-q-c-300-200-4.jpg" />
      }
      metadata1={['Brice Wilson', 'Advanced']}
      metadata2={['0m watched']}
    />
    <Row
      title="Getting Started with Reactive Programming Using RxJS"
      progress={20}
      image={
        <Row.Image src="http://lorempixel.com/output/people-q-c-300-200-2.jpg" />
      }
      metadata1={['Scott Allen', 'Intermediate']}
      metadata2={['23m watched']}
    />
    <Row
      title="Building a JavaScript Development Environment"
      progress={67}
      image={
        <Row.Image src="http://lorempixel.com/output/people-q-c-300-200-7.jpg" />
      }
      metadata1={['Cory House', 'Intermediate']}
      metadata2={['3 hr 23m watched']}
    />
    <Row
      title="Webpack Fundamentals"
      progress={100}
      metadata1={['Joe Eames', 'Intermediate']}
      metadata2={['90m watched']}
      image={
        <Row.Image src="http://lorempixel.com/output/people-q-c-300-200-5.jpg" />
      }
    />
    <Code lang="css">
      {`@import "@pluralsight/ps-design-system-core";

.stack {
  width: 75%;
  padding: var(--psLayoutSpacingMedium);
  background: var(--psColorsGray06);
}
`}
    </Code>
  </div>
)
