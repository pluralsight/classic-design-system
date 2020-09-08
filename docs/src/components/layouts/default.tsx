import Link from '@pluralsight/ps-design-system-link'
import * as Text from '@pluralsight/ps-design-system-text'
import React from 'react'
import { MDXProvider } from '@mdx-js/react'

import { Frame } from '../frame'
import components from '../mdx-components'
import { SideNav } from '../side-nav'

const DefaultLayout: React.FC = (props) => {
  const { children } = props

  return (
    <MDXProvider components={components}>
      <Frame aside={<SideNav />}>{children}</Frame>
    </MDXProvider>
  )
}

export default DefaultLayout
