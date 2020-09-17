import React from 'react'

import { MDXProvider } from '../mdx'
import { Frame } from '../frame'
import { SideNav } from '../side-nav'

const DefaultLayout: React.FC = (props) => {
  const { children } = props

  return (
    <MDXProvider>
      <Frame aside={<SideNav />}>{children}</Frame>
    </MDXProvider>
  )
}

export default DefaultLayout
