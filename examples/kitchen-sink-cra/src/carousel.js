import Card from '@pluralsight/ps-design-system-card'
import Carousel from '@pluralsight/ps-design-system-carousel'
import React from 'react'

function Example() {
  return (
    <>
      <Carousel size={Carousel.sizes.narrow}>
        {MOCK_DATA.courses.map((course) => (
          <Card
            key={course.id}
            image={
              <Card.Image src="https://picsum.photos/seed/picsum/540/360" />
            }
            metadata1={[course.author, course.level]}
            progress={randomInt()}
            title="asdf"
          />
        ))}
      </Carousel>

      <br />

      <Carousel size={Carousel.sizes.wide}>
        {MOCK_DATA.courses.map((course) => (
          <Card
            key={course.id}
            image={
              <Card.Image src="https://picsum.photos/seed/picsum/540/360" />
            }
            metadata1={[course.author, course.level]}
            progress={randomInt()}
            title="asdf"
          />
        ))}
      </Carousel>
    </>
  )
}

export default Example

const randomInt = (max = 100) => Math.floor(Math.random() * Math.floor(max))

const MOCK_DATA = {
  courses: [
    {
      author: 'Jim Cooper',
      id: '1',
      level: 'Intermediate',
      title: 'Vue.js Fundamentals',
    },
    {
      author: 'Mark Heath',
      id: '2',
      level: 'Intermediate',
      title: 'Azure Functions Fundamentals',
    },
  ],
}
