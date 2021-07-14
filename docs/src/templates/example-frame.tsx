import Theme from '@pluralsight/ps-design-system-theme'
import { graphql } from 'gatsby'
import { MDXRenderer } from 'gatsby-plugin-mdx'
import React from 'react'
import { Helmet } from 'react-helmet'

import { MDXProvider } from '../components/mdx'
import * as styles from './example-frame.module.css'

export const query = graphql`
  query ($slug: String!) {
    mdx(fields: { slug: { eq: $slug } }) {
      body
    }
  }
`

interface ExampleFrameProps {
  data: {
    mdx: {
      body: string
    }
  }
}

const ExampleFrame: React.FC<ExampleFrameProps> = props => {
  return (
    <MDXProvider>
      <Helmet>
        <script src="https://unpkg.com/iframe-resizer@4.2.11/js/iframeResizer.contentWindow.min.js" />
      </Helmet>

      <Theme name={Theme.names.light}>
        <div className={styles.example}>
          <MDXRenderer>{props.data.mdx.body}</MDXRenderer>
        </div>
      </Theme>
    </MDXProvider>
  )
}

export default ExampleFrame
