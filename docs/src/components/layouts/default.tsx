import React from 'react'
import { MDXProvider } from '@mdx-js/react'

import { Frame } from '../frame'
import { SideNav } from '../side-nav'

const shortcodes = {}

const DefaultLayout: React.FC = (props) => {
  const { children } = props

  return (
    <MDXProvider components={shortcodes}>
      <Frame aside={<SideNav />}>{children}</Frame>
    </MDXProvider>
  )
}

export default DefaultLayout
