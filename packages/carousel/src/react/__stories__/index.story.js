import { storiesOf } from '@storybook/react'

import * as glamor from 'glamor'
import React, { Fragment } from 'react'
import PropTypes from 'prop-types'

import ActionMenu from '@pluralsight/ps-design-system-actionmenu/react'
import Card from '@pluralsight/ps-design-system-card/react'

import Carousel from '../index.js'

const MockCard = props => (
  <Card
    title={
      <Card.TextLink>
        <a href="#">
          <Card.Title>{props.titleText}</Card.Title>
        </a>
      </Card.TextLink>
    }
    image={
      <Card.Image src={`//picsum.photos/680/320?image=42&gravity=north`} />
    }
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
    {...glamor.css({
      alignItems: 'center',
      background: 'pink',
      display: 'flex',
      height: '150px',
      justifyContent: 'center',
      position: 'relative'
    })}
    data-testid="mock-item"
    {...props}
  />
)

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
        <Fragment>
          <Carousel>
            {new Array(count).fill(null).map((_, index) => (
              <MockItem key={index}>item: {index + 1}</MockItem>
            ))}
          </Carousel>

          <div
            {...glamor.css({
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
        </Fragment>
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

const cardStories = storiesOf('Carousel/with Card', module)

Object.values(Carousel.sizes).forEach(size => {
  cardStories.add(size, _ => (
    <Fragment>
      <Carousel size={size}>
        <MockCard metadata1={longStringsMetaData} titleText="Title Here" />

        {new Array(13).fill(null).map((_, index) => (
          <MockCard key={index} titleText={`Card ${index}`} />
        ))}
      </Carousel>
    </Fragment>
  ))
})

storiesOf('Carousel/with ActionMenu', module).add('positioned child', () => (
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
