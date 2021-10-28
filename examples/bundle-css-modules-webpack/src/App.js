import Avatar from '@pluralsight/ps-design-system-avatar'
import Button from '@pluralsight/ps-design-system-button'
import Card from '@pluralsight/ps-design-system-card'
import Carousel from '@pluralsight/ps-design-system-carousel'

import React, { useMemo } from 'react'

import styles from './App.css'

const randomInt = (max = 100) => Math.floor(Math.random() * Math.floor(max))

function CarouselExample() {
  const courses = useMemo(
    () => [
      {
        author: 'Jim Cooper',
        id: '1',
        level: 'Intermediate',
        title: 'Vue.js Fundamentals'
      },
      {
        author: 'Mark Heath',
        id: '2',
        level: 'Intermediate',
        title: 'Azure Functions Fundamentals'
      },
      {
        author: 'Kyle Simpson',
        id: '3',
        level: 'Advanced',
        title: 'Advanced JavaScript'
      },
      {
        author: 'Mark Zamoyta',
        id: '4',
        level: 'Advanced',
        title: 'Rapid JavaScript Training'
      },
      {
        author: 'Dan Wahlin',
        id: '5',
        level: 'Advanced',
        title: 'Structuring JavaScript Code'
      },
      {
        author: 'Jim Cooper',
        id: '6',
        level: 'Advanced',
        title: 'JavaScript Objects and PropTypes'
      },
      {
        author: 'Jim Cooper',
        id: '11',
        level: 'Intermediate',
        title: 'Vue.js Fundamentals'
      },
      {
        author: 'Mark Heath',
        id: '12',
        level: 'Intermediate',
        title: 'Azure Functions Fundamentals'
      },
      {
        author: 'Kyle Simpson',
        id: '13',
        level: 'Advanced',
        title: 'Advanced JavaScript'
      },
      {
        author: 'Mark Zamoyta',
        id: '14',
        level: 'Advanced',
        title: 'Rapid JavaScript Training'
      },
      {
        author: 'Dan Wahlin',
        id: '15',
        level: 'Advanced',
        title: 'Structuring JavaScript Code'
      },
      {
        author: 'Jim Cooper',
        id: '16',
        level: 'Advanced',
        title: 'JavaScript Objects and PropTypes'
      },
      {
        author: 'Jim Cooper',
        id: '21',
        level: 'Intermediate',
        title: 'Vue.js Fundamentals'
      },
      {
        author: 'Mark Heath',
        id: '22',
        level: 'Intermediate',
        title: 'Azure Functions Fundamentals'
      },
      {
        author: 'Kyle Simpson',
        id: '23',
        level: 'Advanced',
        title: 'Advanced JavaScript'
      },
      {
        author: 'Mark Zamoyta',
        id: '24',
        level: 'Advanced',
        title: 'Rapid JavaScript Training'
      },
      {
        author: 'Dan Wahlin',
        id: '25',
        level: 'Advanced',
        title: 'Structuring JavaScript Code'
      },
      {
        author: 'Jim Cooper',
        id: '26',
        level: 'Advanced',
        title: 'JavaScript Objects and PropTypes'
      }
    ],
    []
  )

  return (
    <div style={{ maxWidth: 1000, margin: 20 }}>
      <Carousel>
        {courses.map(course => (
          <Carousel.Item key={course.id}>
            <Card
              image={
                <Card.Image src="https://picsum.photos/seed/picsum/540/360" />
              }
              metadata1={[course.author, course.level]}
              progress={randomInt()}
              title={<Card.Title>{course.title}</Card.Title>}
            />
          </Carousel.Item>
        ))}
      </Carousel>
    </div>
  )
}

export default function App() {
  return (
    <div>
      <h2 className={styles.header}>Styled with CSS</h2>
      <p>Requires bundling, loader config for css</p>
      <Avatar name="Jake Trent" />
      <h2>Styled with CSS-in-JS</h2>
      <p>No css config required</p>
      <Button>Button that has CSS in JS</Button>

      <br />
      <CarouselExample />
    </div>
  )
}
