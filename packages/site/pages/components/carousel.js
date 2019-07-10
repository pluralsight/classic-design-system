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
        includes={{
          Carousel,
          Card,
          data: {
            courses: [
              {
                author: 'Jim Cooper',
                id: '1',
                image: '/static/img/course1.jpg',
                level: 'Advanced',
                title: 'Why JS is the Best'
              },
              {
                author: 'Jim Cooper',
                id: '2',
                image: '/static/img/course1.jpg',
                level: 'Advanced',
                title: 'Why JS is the Best'
              },
              {
                author: 'Jim Cooper',
                id: '3',
                image: '/static/img/course1.jpg',
                level: 'Advanced',
                title: 'Why JS is the Best'
              },
              {
                author: 'Jim Cooper',
                id: '4',
                image: '/static/img/course1.jpg',
                level: 'Advanced',
                title: 'Why JS is the Best'
              },
              {
                author: 'Jim Cooper',
                id: '5',
                image: '/static/img/course1.jpg',
                level: 'Advanced',
                title: 'Why JS is the Best'
              },
              {
                author: 'Jim Cooper',
                id: '6',
                image: '/static/img/course1.jpg',
                level: 'Advanced',
                title: 'Why JS is the Best'
              },
              {
                author: 'Jim Cooper',
                id: '7',
                image: '/static/img/course1.jpg',
                level: 'Advanced',
                title: 'Why JS is the Best'
              },
              {
                author: 'Jim Cooper',
                id: '8',
                image: '/static/img/course1.jpg',
                level: 'Advanced',
                title: 'Why JS is the Best'
              },
              {
                author: 'Jim Cooper',
                id: '9',
                image: '/static/img/course1.jpg',
                level: 'Advanced',
                title: 'Why JS is the Best'
              }
            ]
          }
        }}
        codes={[
          `
<Carousel >
  {data.courses.map(course => (
    <Card
      key={course.id}
      image={<Card.Image src={course.image} />}
      metadata1={[course.author, course.level]}
      title={<Card.Title>{course.title}</Card.Title>}
    />
  ))}
</Carousel>
`
        ]}
      />
    </Content>
  </Chrome>
))
