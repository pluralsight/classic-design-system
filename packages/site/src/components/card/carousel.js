import Card from '@pluralsight/ps-design-system-card/react'
import React from 'react'
import styleable from 'react-styleable'

import { Code } from '../../common/components'
import css from './carousel.module.css'

export default styleable(css)(props =>
  <div className={props.css.root}>
    <div className={props.css.carousel}>
      <div className={props.css.cardContainer}>
        <Card
          title="Advanced TypeScript"
          image={<img src="http://via.placeholder.com/350x150" />}
          metadata1={['Brice Wilson', 'Advanced']}
          metadata2={['0m watched']}
          size="small"
        />
      </div>
      <div className={props.css.cardContainer}>
        <Card
          title="Getting Started with Reactive Programming Using RxJS"
          image={<img src="http://via.placeholder.com/350x150" />}
          metadata1={['Scott Allen', 'Intermediate']}
          metadata2={['0m watched']}
          size="small"
        />
      </div>
      <div className={props.css.cardContainer}>
        <Card
          title="Building a JavaScript Development Environment"
          image={<img src="http://via.placeholder.com/350x150" />}
          metadata1={['Cory House', 'Intermediate']}
          metadata2={['0m watched']}
          size="small"
        />
      </div>
      <div className={props.css.cardContainer}>
        <Card
          title="Webpack Fundamentals"
          metadata1={['Joe Eames', 'Intermediate']}
          metadata2={['0m watched']}
          image={<img src="http://via.placeholder.com/350x150" />}
          size="small"
        />
      </div>
    </div>
    <Code lang="css">
      {`@import "@pluralsight/ps-design-system-core";

.carousel {
  width: 100%;
  display: flex;
  padding: var(--psLayoutSpacingMedium);
  background: var(--psColorsGray06);
}
.cardContainer {
  flex: 1;
}
.cardContainer + .cardContainer {
  margin-left: var(--psLayoutSpacingMedium);
}
`}
    </Code>
  </div>
)
