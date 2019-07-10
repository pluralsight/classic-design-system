import React from 'react'

import Card from '@pluralsight/ps-design-system-card/react'
import Carousel from '@pluralsight/ps-design-system-carousel/react'

import {
  Chrome,
  Code,
  Content,
  Example,
  Intro,
  P,
  PageHeading,
  PropTypes,
  SectionHeading,
  withServerProps
} from '../../src/ui'

export default withServerProps(_ => (
  <Chrome>
    <Content title="Carousel">
      <PageHeading packageName="carousel">Carousel</PageHeading>
      <Intro>TODO: intro here</Intro>
      <br />

      <P>Install the component dependency:</P>
      <Code language="bash">
        npm install @pluralsight/ps-design-system-carousel
      </Code>

      <P>Include a React component in your project:</P>
      <Code language="javascript">
        import Carousel from '@pluralsight/ps-design-system-carousel/react'
      </Code>

      <PropTypes
        props={{
          Carousel: [
            PropTypes.row([
              'children',
              <span>
                <code>node</code>[]
              </span>,
              true,
              null,
              'items to place in carousel'
            ]),
            PropTypes.row([
              'size',
              PropTypes.union(Carousel.sizes),
              null,
              <code>narrow</code>,
              'size of carousel items'
            ])
          ]
        }}
      />

      <SectionHeading>In-app example</SectionHeading>
      <P>TODO: intro here</P>
      <Example.React
        themeToggle
        themeName="light"
        includes={{ Carousel, Card }}
        codes={[
          `
// TODO: example here
          `
        ]}
      />
    </Content>
  </Chrome>
))
