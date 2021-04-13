import Row from '@pluralsight/ps-design-system-row'
import React from 'react'

function Example() {
  return (
    <>
      <Row
        size={Row.sizes.medium}
        title="Medium Row"
        metadata1={['Jim Cooper']}
        image={
          <Row.Image src="https://pluralsight.imgix.net/course-images/angular-2-getting-started-update-v1.jpg" />
        }
      />
      <Row
        size={Row.sizes.small}
        title="Small Row"
        metadata1={['Jim Cooper']}
        image={
          <Row.Image src="https://pluralsight.imgix.net/course-images/angular-2-getting-started-update-v1.jpg" />
        }
      />
    </>
  )
}
export default Example
