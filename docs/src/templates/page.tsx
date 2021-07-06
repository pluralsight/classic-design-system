import { graphql } from 'gatsby'
import { MDXRenderer } from 'gatsby-plugin-mdx'
import React from 'react'
import { Helmet } from 'react-helmet'

import { MDXProvider } from '../components/mdx'
import favicon from './favicon.png'
import { Frame } from '../components/frame'
import { SideNav } from '../components/side-nav'
import { Heading, TableOfContents } from '../components/table-of-contents'

export const query = graphql`
  query ($slug: String!) {
    mdx(fields: { slug: { eq: $slug } }) {
      body
      frontmatter {
        name
        route
      }
      headings {
        value
        depth
      }
    }
  }
`

interface PageProps {
  data: {
    mdx: {
      body: string
      frontmatter?: FrontMatter
      headings: Heading[]
    }
  }
  location: {
    pathname: string
  }
  pageContext: {
    version: string
  }
}
interface FrontMatter {
  name?: string
}

const Page: React.FC<PageProps> = props => {
  const name = props.data.mdx.frontmatter?.name
  const title = `${name ? name + ' | ' : ''}Pluralsight Design System`
  const hasTableOfContents = !!props.data.mdx.body.match(
    /makeShortcode\("TableOfContents"\)/
  )

  return (
    <MDXProvider>
      <Helmet title={title}>
        <link rel="shortcut icon" type="image/png" href={favicon} />
      </Helmet>
      <Frame
        aside={<SideNav location={props.location} />}
        hasTableOfContents={hasTableOfContents}
      >
        <MDXRenderer
          headings={props.data.mdx.headings}
          version={props.pageContext.version}
        >
          {props.data.mdx.body}
        </MDXRenderer>
      </Frame>
    </MDXProvider>
  )
}

export default Page
