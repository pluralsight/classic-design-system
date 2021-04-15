import Banner from '@pluralsight/ps-design-system-banner'
import React from 'react'

function Example() {
  return (
    <>
      <Banner color={Banner.colors.blue}>This is a blue message</Banner>
      <Banner color={Banner.colors.green}>This is a green message</Banner>
      <Banner color={Banner.colors.yellow}>This is a yellow message</Banner>
      <Banner color={Banner.colors.red}>This is a red message</Banner>
    </>
  )
}

export default Example
