import React from 'react'

import ActionMenu from '@pluralsight/ps-design-system-actionmenu'
import Avatar from '@pluralsight/ps-design-system-avatar/react.js'
import { BelowRight } from '@pluralsight/ps-design-system-position/react.js'
import Card from '@pluralsight/ps-design-system-card/react.js'
import Carousel from '@pluralsight/ps-design-system-carousel/react.js'
import Icon from '@pluralsight/ps-design-system-icon/react.js'
import Note from '@pluralsight/ps-design-system-note/react.js'
import Text from '@pluralsight/ps-design-system-text/react.js'

import {
  Chrome,
  Code,
  Content,
  Example,
  Guideline,
  Intro,
  Link,
  P,
  PageHeading,
  PropTypes,
  SectionHeading
} from '../../src/ui/index.js'

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

export default _ => (
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
          ],
          'Carousel.Controls': [
            PropTypes.row([
              'children',
              <span>
                <code>node</code>
              </span>,
              true,
              null
            ])
          ],
          'Carousel.Control': [
            PropTypes.row([
              'direction',
              PropTypes.union(Carousel.Control.directions),
              true,
              null,
              <span>
                (from <code>Carousel.Control.directions</code>)
              </span>
            ])
          ],
          'Carousel.Item': [
            PropTypes.row([
              'children',
              <span>
                <code>node</code>
                {' | '}
                <code>() => node</code>
              </span>,
              true,
              null,
              'render prop used to access item and page metadata'
            ])
          ]
        }}
      />

      <SectionHeading>Auto paging</SectionHeading>
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

      <SectionHeading>Using portals</SectionHeading>
      <P>
        If there are any UI elements that need to appear in the same visual
        space as the carousel container, they will need to be rendered outside
        the <Text.Code>Carousel</Text.Code> DOM. This is because the Carousel
        container solution requires being styled{' '}
        <Text.Code>overflow: hidden</Text.Code>. A{' '}
        <Link href="https://reactjs.org/docs/portals.html">React Portal</Link>{' '}
        is a great solution. A common example could be an{' '}
        <Text.Code>ActionMenu</Text.Code> rendered from a{' '}
        <Text.Code>Card</Text.Code>. Here is some example code:
      </P>
      <PortalExample />

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

      <SectionHeading>Access to page and item metadata</SectionHeading>
      <P>
        If you need additional metadata about the carousel and its items you can
        get it with this one simple trick.
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
<Carousel size={Carousel.sizes.wide}>
  {new Array(9).fill(null).map((_, index) => (
    <Carousel.Item key={index}>
      {data => (
        <div>
          <pre>{JSON.stringify(data, null, 2)}</pre>
        </div>
      )}
    </Carousel.Item>
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
)

function PortalExample() {
  return (
    <Example.React
      themeToggle
      includes={{
        ActionMenu,
        BelowRight,
        Carousel,
        Card,
        data: MOCK_DATA,
        Icon,
        Toggle
      }}
      outputStyle={{ paddingBottom: '96px' }}
      codes={[
        `<Carousel size={Carousel.sizes.wide}>
  {data.courses.map(course => (
    <Toggle>
      {({ active, toggle }) => (
        <Card
          key={course.id}
          image={<Card.Image src={course.image} />}
          metadata1={[course.author, course.level]}
          title={<Card.Title>{course.title}</Card.Title>}
          actionBarVisible
          actionBar={[
            <BelowRight
              inNode={typeof document !== 'undefined' && document.body}
              when={active}
              show={
                <ActionMenu onClose={toggle}>
                  <ActionMenu.Item>Useless item</ActionMenu.Item>
                  <ActionMenu.Item>Useless item</ActionMenu.Item>
                  <ActionMenu.Item>Useless item</ActionMenu.Item>
                  <ActionMenu.Item>Useless item</ActionMenu.Item>
                  <ActionMenu.Item>Useless item</ActionMenu.Item>
                  <ActionMenu.Item>Useless item</ActionMenu.Item>
                  <ActionMenu.Item>Useless item</ActionMenu.Item>
                  <ActionMenu.Item>Useless item</ActionMenu.Item>
                </ActionMenu>
              }
              key="a"
            >
              <Card.Action
                title="See more"
                icon={<Icon id={Icon.ids.more} />}
                onClick={toggle}
              />
            </BelowRight>
          ]}
        />
      )}
    </Toggle>
  ))}
</Carousel>`
      ]}
    />
  )
}

function Toggle(props) {
  const [active, setActive] = React.useState(
    typeof props.active === 'undefined' ? !!props.startActive : !!props.active
  )

  function toggle() {
    setActive(!active)
  }

  return props.children({ active, toggle })
}
