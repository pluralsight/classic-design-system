import React from 'react'

import Avatar from '@pluralsight/ps-design-system-avatar/react'
import Card from '@pluralsight/ps-design-system-card/react'
import Carousel from '@pluralsight/ps-design-system-carousel/react'
import Note from '@pluralsight/ps-design-system-note/react'

import {
  Chrome,
  Code,
  Content,
  Example,
  Guideline,
  Intro,
  P,
  PageHeading,
  PropTypes,
  SectionHeading,
  withServerProps
} from '../../src/ui'

const MOCK_DATA = {
  courses: [
    {
      author: 'Jim Cooper',
      id: '1',
      image: '/static/img/course1.jpg',
      level: 'Intermediate',
      title: 'Vue.js Fundamentals'
    },
    {
      author: 'Mark Heath',
      id: '2',
      image: '/static/img/course2.jpg',
      level: 'Intermediate',
      title: 'Azure Functions Fundamentals'
    },
    {
      author: 'Kyle Simpson',
      id: '3',
      image: '/static/img/course3.jpg',
      level: 'Advanced',
      title: 'Advanced JavaScript'
    },
    {
      author: 'Mark Zamoyta',
      id: '4',
      image: '/static/img/course4.jpg',
      level: 'Advanced',
      title: 'Rapid JavaScript Training'
    },
    {
      author: 'Dan Wahlin',
      id: '5',
      image: '/static/img/course3.jpg',
      level: 'Advanced',
      title: 'Structuring JavaScript Code'
    },
    {
      author: 'Jim Cooper',
      id: '6',
      image: '/static/img/course1.jpg',
      level: 'Advanced',
      title: 'JavaScript Objects and PropTypes'
    },
    {
      author: 'Jim Cooper',
      id: '11',
      image: '/static/img/course1.jpg',
      level: 'Intermediate',
      title: 'Vue.js Fundamentals'
    },
    {
      author: 'Mark Heath',
      id: '12',
      image: '/static/img/course2.jpg',
      level: 'Intermediate',
      title: 'Azure Functions Fundamentals'
    },
    {
      author: 'Kyle Simpson',
      id: '13',
      image: '/static/img/course3.jpg',
      level: 'Advanced',
      title: 'Advanced JavaScript'
    },
    {
      author: 'Mark Zamoyta',
      id: '14',
      image: '/static/img/course4.jpg',
      level: 'Advanced',
      title: 'Rapid JavaScript Training'
    },
    {
      author: 'Dan Wahlin',
      id: '15',
      image: '/static/img/course3.jpg',
      level: 'Advanced',
      title: 'Structuring JavaScript Code'
    },
    {
      author: 'Jim Cooper',
      id: '16',
      image: '/static/img/course1.jpg',
      level: 'Advanced',
      title: 'JavaScript Objects and PropTypes'
    },
    {
      author: 'Jim Cooper',
      id: '21',
      image: '/static/img/course1.jpg',
      level: 'Intermediate',
      title: 'Vue.js Fundamentals'
    },
    {
      author: 'Mark Heath',
      id: '22',
      image: '/static/img/course2.jpg',
      level: 'Intermediate',
      title: 'Azure Functions Fundamentals'
    },
    {
      author: 'Kyle Simpson',
      id: '23',
      image: '/static/img/course3.jpg',
      level: 'Advanced',
      title: 'Advanced JavaScript'
    },
    {
      author: 'Mark Zamoyta',
      id: '24',
      image: '/static/img/course4.jpg',
      level: 'Advanced',
      title: 'Rapid JavaScript Training'
    },
    {
      author: 'Dan Wahlin',
      id: '25',
      image: '/static/img/course3.jpg',
      level: 'Advanced',
      title: 'Structuring JavaScript Code'
    },
    {
      author: 'Jim Cooper',
      id: '26',
      image: '/static/img/course1.jpg',
      level: 'Advanced',
      title: 'JavaScript Objects and PropTypes'
    }
  ]
}

const randomInt = (max = 100) => Math.floor(Math.random() * Math.floor(max))

function MockItem(props) {
  const style = {
    background: 'pink',
    height: '150px'
  }
  return <div {...props} style={style} />
}

export default withServerProps(_ => (
  <Chrome>
    <Content title="Carousel">
      <PageHeading packageName="carousel">Carousel</PageHeading>
      <Intro>
        Carousels are for displaying a related set of content items in a row.
        Items can be paged using the next/previous buttons or by a swipe
        gesture.
      </Intro>

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
      <P>The number and width of items are handled automatically.</P>

      <Example.React
        themeToggle
        includes={{
          Carousel,
          Card,
          data: MOCK_DATA,
          randomInt
        }}
        codes={[
          `
<Carousel>
  {data.courses.map(course => (
    <Card
      key={course.id}
      image={<Card.Image src={course.image} />}
      metadata1={[course.author, course.level]}
      progress={randomInt()}
      title={<Card.Title>{course.title}</Card.Title>}
    />
  ))}
</Carousel>
`
        ]}
      />

      <SectionHeading>Size</SectionHeading>
      <P>
        The size will adjust the min/max constraints of the individual items in
        the carousel.
      </P>

      <Example.React
        themeToggle
        includes={{
          Carousel,
          Card,
          data: MOCK_DATA,
          randomInt
        }}
        codes={[
          `
<Carousel size={Carousel.sizes.narrow}>
  {data.courses.slice(0,2).map(course => (
    <Card
      key={course.id}
      image={<Card.Image src={course.image} />}
      metadata1={[course.author, course.level]}
      progress={randomInt()}
      title={<Card.Title>{course.title}</Card.Title>}
    />
  ))}
</Carousel>

<br />

<Carousel size={Carousel.sizes.wide}>
  {data.courses.slice(0,2).map(course => (
    <Card
      key={course.id}
      image={<Card.Image src={course.image} />}
      metadata1={[course.author, course.level]}
      progress={randomInt()}
      title={<Card.Title>{course.title}</Card.Title>}
    />
  ))}
</Carousel>
`
        ]}
      />

      <SectionHeading>Guidelines</SectionHeading>
      <P>
        The height of the carousel adapts to the height of the content it
        contains, but the width of its children will be equalized, so make sure
        to use related content for children that are intended to be used at the
        same height and width.
      </P>
      <Guideline
        columnCount={1}
        do={
          <Carousel size={Carousel.sizes.wide}>
            <MockItem />
            <MockItem />
            <MockItem />
            <MockItem />
            <MockItem />
            <MockItem />
            <MockItem />
          </Carousel>
        }
        dont={
          <Carousel size={Carousel.sizes.wide}>
            <Note
              avatar={<Avatar name="Bob Ross" src="//picsum.photos/128" />}
              heading={'Note'}
              message={
                <p>
                  If these lines aren't straight, your water's going to run
                  right out of your painting and get your floor wet. At home you
                  have unlimited time. See there, told you that would be easy.
                  Decide where your cloud lives. Maybe he lives right in here.
                </p>
              }
              metadata={['meta first', 'meta second']}
            />

            <Avatar name="Avatar" />

            <Card
              image={<Card.Image src={'/static/img/course1.jpg'} />}
              title={<Card.Title>Card</Card.Title>}
            />

            <Avatar name="Avatar" />

            <Card
              image={<Card.Image src={'/static/img/course1.jpg'} />}
              title={<Card.Title>Card</Card.Title>}
            />

            <Note
              avatar={<Avatar name="Bob Ross" src="//picsum.photos/128" />}
              heading={'Note'}
              message={
                <p>
                  If these lines aren't straight, your water's going to run
                  right out of your painting and get your floor wet. At home you
                  have unlimited time. See there, told you that would be easy.
                  Decide where your cloud lives. Maybe he lives right in here.
                </p>
              }
              metadata={['meta first', 'meta second']}
            />
          </Carousel>
        }
      />
    </Content>
  </Chrome>
))
