import { MDXProvider as BaseProvider } from '@mdx-js/react'
import Link from '@pluralsight/ps-design-system-link'
import * as Text from '@pluralsight/ps-design-system-text'
import React, { HTMLAttributes } from 'react'

const A: React.FC<HTMLAttributes<HTMLAnchorElement>> = (props) => (
  <Link>
    <a {...props} />
  </Link>
)

const H1: React.FC<HTMLAttributes<HTMLHeadingElement>> = (props) => (
  <Text.Heading size={Text.Heading.sizes.xLarge}>
    <h1 {...props}>{props.children}</h1>
  </Text.Heading>
)

const H2: React.FC<HTMLAttributes<HTMLHeadingElement>> = (props) => (
  <Text.Heading size={Text.Heading.sizes.xLarge}>
    <h2 {...props}>{props.children}</h2>
  </Text.Heading>
)

const H3: React.FC<HTMLAttributes<HTMLHeadingElement>> = (props) => (
  <Text.Heading size={Text.Heading.sizes.xLarge}>
    <h3 {...props}>{props.children}</h3>
  </Text.Heading>
)

const Ol: React.FC<HTMLAttributes<HTMLOListElement>> = (props) => (
  <Text.List type={Text.List.types.numbered} {...props} />
)

const Ul: React.FC<HTMLAttributes<HTMLUListElement>> = (props) => (
  <Text.List type={Text.List.types.bulleted} {...props} />
)

const components = {
  a: A,
  h1: H1,
  h2: H2,
  h3: H3,
  inlineCode: Text.Code,
  ol: Ol,
  p: Text.P,
  ul: Ul,
}

export const MDXProvider: React.FC = (props) => (
  <BaseProvider components={components}>{props.children}</BaseProvider>
)
