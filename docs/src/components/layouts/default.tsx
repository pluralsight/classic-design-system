import React from 'react'
import { MDXProvider } from '@mdx-js/react'

import Frame from '../frame'

const shortcodes = {}

const DefaultLayout: React.FC = (props) => {
  const { children } = props

  return (
    <MDXProvider components={shortcodes}>
      <Frame>{children}</Frame>
    </MDXProvider>
  )
}

export default DefaultLayout
