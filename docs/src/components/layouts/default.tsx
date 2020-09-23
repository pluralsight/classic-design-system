import React from 'react'
import { Helmet } from 'react-helmet'

import { MDXProvider } from '../mdx'
import { Frame } from '../frame'
import { SideNav } from '../side-nav'

interface LayoutProps {
  pageContext: PageContext
}
interface PageContext {
  frontmatter?: FrontMatter
}
interface FrontMatter {
  name?: string
}

const DefaultLayout: React.FC<LayoutProps> = props => {
  const { children } = props

  const name = props.pageContext.frontmatter?.name
  const title = `${name ? name + ' | ' : ''}Pluralsight Design System`

  return (
    <MDXProvider>
      <Helmet title={title} />
      <Frame aside={<SideNav />}>{children}</Frame>
    </MDXProvider>
  )
}

export default DefaultLayout
