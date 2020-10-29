import { MDXProvider as BaseProvider } from '@mdx-js/react'
import * as Text from '@pluralsight/ps-design-system-text'
import React from 'react'

import { CodeBlock } from '../code-block'
import { Guideline } from '../guidelines/guideline'
import { Intro } from '../intro'
import { TableOfContents } from '../table-of-contents'
import * as Types from '../types'
import { Usage } from '../usage'

import { H1, H2, H3 } from './headings'
import { A } from './links'
import { Ol, Ul } from './lists'
import { BlockQuote } from './quotes'
import { P } from './paragraphs'

const components = {
  a: A,
  A,
  blockquote: BlockQuote,
  code: CodeBlock,
  Guideline,
  h1: H1,
  h2: H2,
  h3: H3,
  inlineCode: Text.Code,
  Intro,
  ol: Ol,
  p: P,
  pre: props => <div {...props} />,
  TableOfContents,
  TypesTable: Types.Table,
  TypesProp: Types.Prop,
  TypesEnum: Types.Enum,
  ul: Ul,
  Usage
}

export const MDXProvider: React.FC = props => (
  <BaseProvider components={components}>{props.children}</BaseProvider>
)
