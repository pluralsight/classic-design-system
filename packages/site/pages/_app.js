import React from 'react'
import PropTypes from 'prop-types'
import { MDXProvider } from '@mdx-js/react'

import { Heading } from '@pluralsight/ps-design-system-text'

import {
  Code,
  Chrome,
  Content,
  P,
  PageHeading,
  TextLink
} from '../src/ui/index.js'

const mdComponents = {
  a: TextLink,
  code: Code,
  h1: PageHeading,
  h2: props => (
    <Heading size={Heading.sizes.large}>
      <h2 {...props} />
    </Heading>
  ),
  h3: props => (
    <Heading size={Heading.sizes.medium}>
      <h3 {...props} />
    </Heading>
  ),
  h4: props => (
    <Heading size={Heading.sizes.medium}>
      <h4 {...props} />
    </Heading>
  ),
  p: P
}

const App = ({ Component, pageProps }) => (
  <Chrome>
    <Content>
      <MDXProvider components={mdComponents}>
        <Component {...pageProps} />
      </MDXProvider>
    </Content>
  </Chrome>
)

App.propTypes = {
  Component: PropTypes.func.isRequired,
  pageProps: PropTypes.any
}

export default App
