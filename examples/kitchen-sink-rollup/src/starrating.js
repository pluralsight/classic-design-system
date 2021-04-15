import StarRating from '@pluralsight/ps-design-system-starrating'
import React from 'react'

function Example() {
  return (
    <>
      <StarRating />
      <StarRating value={3} />
      <StarRating value={3.4} />
      <StarRating value={3.5} />
      <StarRating value={3.9} />
      <StarRating value={4} />
    </>
  )
}

export default Example
