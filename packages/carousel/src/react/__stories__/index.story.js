import { storiesOf } from '@storybook/react'

import { css } from 'glamor'
import React from 'react'
import PropTypes from 'prop-types'

import ActionMenu from '@pluralsight/ps-design-system-actionmenu'
import Card from '@pluralsight/ps-design-system-card'
import * as Icon from '@pluralsight/ps-design-system-icon'
import { BelowRight } from '@pluralsight/ps-design-system-position'

import Carousel from '../index.js'

const MockCard = props => (
  <Card
    title={
      <Card.TextLink>
        <a href="#" tabIndex={1}>
          <Card.Title>{props.titleText}</Card.Title>
        </a>
      </Card.TextLink>
    }
    actionBar={[
      <Card.Action
        key="bookmark"
        icon={<Icon.BookmarkIcon />}
        title="Bookmark"
      />
    ]}
    image={<Card.Image src="//picsum.photos/680/320?image=42&gravity=north" />}
    metadata1={[
      <Card.TextLink>
        <a href="#">meta</a>
      </Card.TextLink>
    ]}
    {...props}
  />
)
MockCard.propTypes = {
  titleText: PropTypes.string.isRequired
}

const longStringsMetaData = [
  'It is impossible to count the grand contributions of this great author',
  'Levels heretofore unknown in the battle for truth and knowledge',
  'A length of such amazing lengthitude so-as to blow the mind'
]

const MockItem = props => (
  <div
    {...css({
      alignItems: 'center',
      background: 'pink',
      display: 'flex',
      flexDirection: 'column',
      height: '150px',
      justifyContent: 'center',
      position: 'relative'
    })}
    data-testid="mock-item"
    {...props}
  >
    {' '}
    <button {...css({ flex: 'none' })}>Button: {props.children}</button>
    <p {...css({ width: '100%', textAlign: 'center', padding: 10 })}>
      non focusable /tabIndex text
    </p>
    <a href="https://duckduckgo.com/" {...css({ flex: 'none' })}>
      Link: {props.children}
    </a>{' '}
  </div>
)

MockItem.propTypes = {
  children: PropTypes.node
}

storiesOf('Carousel/items', module)
  .add('one item', _ => (
    <Carousel>
      <MockItem>just one item</MockItem>
    </Carousel>
  ))
  .add('two items', _ => (
    <Carousel>
      <MockItem>first item</MockItem>
      <MockItem>second item</MockItem>
    </Carousel>
  ))
  .add('many items', _ => (
    <Carousel>
      {new Array(21).fill(null).map((_, index) => (
        <MockItem key={index}>item: {index + 1}</MockItem>
      ))}
    </Carousel>
  ))
  .add('dynamic items', _ => {
    function DynamicItems() {
      const [count, updateCount] = React.useState(4)

      const add = () => updateCount(count + 1)
      const remove = () => updateCount(count - 1)

      return (
        <>
          <Carousel>
            {new Array(count).fill(null).map((_, index) => (
              <MockItem key={index}>item: {index + 1}</MockItem>
            ))}
          </Carousel>

          <div
            {...css({
              alignItems: 'center',
              display: 'flex',
              justifyContent: 'center',
              margin: '10px auto'
            })}
          >
            <button disabled={count <= 1} onClick={remove}>
              remove
            </button>

            <button onClick={add}>add</button>
          </div>
        </>
      )
    }

    return <DynamicItems />
  })

storiesOf('Carousel/controls', module).add('custom alignment', _ => (
  <Carousel
    controls={
      <Carousel.Controls>
        <Carousel.Control
          direction={Carousel.Control.directions.prev}
          style={{ top: '33%' }}
        />
        <Carousel.Control
          direction={Carousel.Control.directions.next}
          style={{ top: '33%' }}
        />
      </Carousel.Controls>
    }
  >
    {new Array(9).fill(null).map((_, index) => (
      <MockItem key={index}>item: {index + 1}</MockItem>
    ))}
  </Carousel>
))

const sizeStories = storiesOf('Carousel/size', module)

Object.values(Carousel.sizes).forEach(size => {
  sizeStories.add(size, _ => (
    <Carousel size={size}>
      {new Array(13).fill(null).map((_, index) => (
        <MockItem key={index}>item: {index + 1}</MockItem>
      ))}
    </Carousel>
  ))
})
storiesOf('Carousel/Item', module)
  .add('with child nodes', _ => (
    <Carousel size={Carousel.sizes.wide}>
      {new Array(9).fill(null).map((_, index) => (
        <Carousel.Item key={index}>
          <MockItem />
        </Carousel.Item>
      ))}
    </Carousel>
  ))
  .add('with render props', _ => (
    <Carousel size={Carousel.sizes.wide}>
      {new Array(9).fill(null).map((_, index) => (
        <Carousel.Item key={index}>
          {data => (
            <MockItem>
              <pre>{JSON.stringify(data, null, 2)}</pre>
            </MockItem>
          )}
        </Carousel.Item>
      ))}
    </Carousel>
  ))

const cardStories = storiesOf('Carousel/with Card', module)

Object.values(Carousel.sizes).forEach(size => {
  cardStories.add(size, _ => (
    <>
      <Carousel size={size}>
        <MockCard metadata1={longStringsMetaData} titleText="Title Here" />

        {new Array(13).fill(null).map((_, index) => (
          <MockCard key={index} titleText={`Card ${index}`} />
        ))}
      </Carousel>
    </>
  ))
})

storiesOf('Carousel/with ActionMenu', module)
  .add('positioned child', () => (
    <div style={{ border: '1px solid red', maxWidth: 400, padding: 10 }}>
      <Carousel size={Carousel.sizes.wide}>
        <MockItem>
          <ActionMenu style={{ left: 20, top: 20 }}>
            {new Array(8).fill(null).map((_, index) => (
              <ActionMenu.Item key={index}>item: {index}</ActionMenu.Item>
            ))}
          </ActionMenu>
        </MockItem>

        {new Array(13).fill(null).map((_, index) => (
          <MockItem key={index} />
        ))}
      </Carousel>
    </div>
  ))
  .add('in portal', () => {
    function PortalStory() {
      const [isOpen, setOpen] = React.useState(false)
      return (
        <div style={{ border: '1px solid red', maxWidth: 600, padding: 10 }}>
          <Carousel
            size={Carousel.sizes.wide}
            controls={
              <Carousel.Controls>
                <Carousel.Control
                  direction={Carousel.Control.directions.prev}
                  onClick={_ => setOpen(false)}
                />
                <Carousel.Control
                  direction={Carousel.Control.directions.next}
                  onClick={_ => setOpen(false)}
                />
              </Carousel.Controls>
            }
          >
            <MockCard
              actionBarVisible
              actionBar={[
                <BelowRight
                  inNode={document.body}
                  when={isOpen}
                  show={
                    <ActionMenu>
                      {new Array(8).fill(null).map((_, index) => (
                        <ActionMenu.Item key={index}>
                          item: {index}
                        </ActionMenu.Item>
                      ))}
                    </ActionMenu>
                  }
                  key="a"
                >
                  <Card.Action
                    title="asdf"
                    icon={<Icon.MoreIcon />}
                    onClick={_ => setOpen(!isOpen)}
                  />
                </BelowRight>
              ]}
              titleText="Yahoo"
            />
            {new Array(3).fill(null).map((_, index) => (
              <MockItem key={index} />
            ))}
          </Carousel>
        </div>
      )
    }
    return <PortalStory />
  })
  .add('perf: many cards in portals', () => {
    const MOCK_DATA = { courses: genData(40) }

    function genData(count) {
      return new Array(count).fill(null).map((_, i) => ({
        author: 'Some Author',
        id: i + 1,
        image: '//picsum.photos/680/320?image=42&gravity=north',
        level: 'Advanced',
        title: 'Some Title'
      }))
    }

    function PerfPortalStory() {
      const [courseIdForOpenMenu, openCourseMenu] = React.useState(-1)

      function handleClickMore(evt, courseId) {
        evt.preventDefault()
        console.log('click more', { courseId })
        if (courseId === courseIdForOpenMenu) {
          openCourseMenu(-1)
        } else {
          openCourseMenu(courseId)
        }
      }

      return (
        <div style={{ border: '1px solid red', maxWidth: 600, padding: 10 }}>
          <Carousel
            size={Carousel.sizes.wide}
            controls={
              <Carousel.Controls>
                <Carousel.Control
                  direction={Carousel.Control.directions.prev}
                  onClick={_ => openCourseMenu(-1)}
                />
                <Carousel.Control
                  direction={Carousel.Control.directions.next}
                  onClick={_ => openCourseMenu(-1)}
                />
              </Carousel.Controls>
            }
          >
            {MOCK_DATA.courses.map(course => (
              <Card
                key={course.id}
                image={<Card.Image src={course.image} />}
                metadata1={[course.author, course.level]}
                title={<Card.Title>{course.title}</Card.Title>}
                actionBarVisible
                actionBar={[
                  <BelowRight
                    inNode={typeof document !== 'undefined' && document.body}
                    when={course.id === courseIdForOpenMenu}
                    show={
                      <ActionMenu>
                        <ActionMenu.Item key={0}>Useless item</ActionMenu.Item>
                        <ActionMenu.Item key={1}>Useless item</ActionMenu.Item>
                        <ActionMenu.Item key={2}>Useless item</ActionMenu.Item>
                        <ActionMenu.Item key={3}>Useless item</ActionMenu.Item>
                        <ActionMenu.Item key={4}>Useless item</ActionMenu.Item>
                        <ActionMenu.Item key={5}>Useless item</ActionMenu.Item>
                        <ActionMenu.Item key={6}>Useless item</ActionMenu.Item>
                        <ActionMenu.Item key={7}>Useless item</ActionMenu.Item>
                      </ActionMenu>
                    }
                    key="a"
                  >
                    <Card.Action
                      title="See more"
                      icon={<Icon.MoreIcon />}
                      onClick={evt => handleClickMore(evt, course.id)}
                    />
                  </BelowRight>
                ]}
              />
            ))}
          </Carousel>
        </div>
      )
    }
    return <PerfPortalStory />
  })
