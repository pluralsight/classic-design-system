import { graphql } from 'gatsby'
import { MDXRenderer } from 'gatsby-plugin-mdx'
import React from 'react'
import { Helmet } from 'react-helmet'

import { MDXProvider } from '../components/mdx'
import favicon from './favicon.png'
import { Frame } from '../components/frame'
import { SideNav } from '../components/side-nav'

export const query = graphql`
  query($slug: String!) {
    mdx(fields: { slug: { eq: $slug } }) {
      body
      frontmatter {
        name
        route
      }
      fields {
        slug
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
      frontmatter?: { name?: string }
      headings: {
        value: string
        depth: number
      }[]
    }
  }
}
const Page: React.FC<PageProps> = props => {
  const name = props.data.mdx.frontmatter?.name
  const title = `${name ? name + ' | ' : ''}Pluralsight Design System`

  return (
    <MDXProvider>
      <Helmet title={title}>
        <link rel="shortcut icon" type="image/png" href={favicon} />
      </Helmet>
      <Frame aside={<SideNav />}>
        <MDXRenderer>{props.data.mdx.body}</MDXRenderer>
      </Frame>
    </MDXProvider>
  )
}

export default Page
