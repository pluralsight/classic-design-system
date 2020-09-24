import { MDXProvider as BaseProvider } from '@mdx-js/react'
import DSLink from '@pluralsight/ps-design-system-link'
import * as Text from '@pluralsight/ps-design-system-text'
import cx from 'classnames'
import { Link as GatsbyLink } from 'gatsby'
import React, { HTMLAttributes } from 'react'

import { CodeBlock } from '../code-block'

import * as styles from './index.module.css'

export const A: React.FC<HTMLAttributes<HTMLAnchorElement>> = props => {
  const isExternal = /http/.test(props.href)
  return (
    <DSLink>
      {isExternal ? (
        <a {...props} rel="noopener noreferrer" />
      ) : (
        <GatsbyLink {...props} to={props.href} />
      )}
    </DSLink>
  )
}

export const BlockQuote: React.FC<HTMLAttributes<HTMLQuoteElement>> = props => {
  const className = cx(styles.blockquote, props.className)

  return (
    <blockquote className={className}>
      <Text.P>{props.children}</Text.P>
    </blockquote>
  )
}

export const H1: React.FC<HTMLAttributes<HTMLHeadingElement>> = props => {
  const className = cx(styles.h1, props.className)

  return (
    <Text.Heading size={Text.Heading.sizes.xLarge} className={className}>
      <h1 {...props}>{props.children}</h1>
    </Text.Heading>
  )
}

export const H2: React.FC<HTMLAttributes<HTMLHeadingElement>> = props => {
  const className = cx(styles.h2, props.className)

  return (
    <Text.Heading size={Text.Heading.sizes.large} className={className}>
      <h2 {...props}>{props.children}</h2>
    </Text.Heading>
  )
}

export const H3: React.FC<HTMLAttributes<HTMLHeadingElement>> = props => {
  const className = cx(styles.h3, props.className)

  return (
    <Text.Heading size={Text.Heading.sizes.medium} className={className}>
      <h3 {...props}>{props.children}</h3>
    </Text.Heading>
  )
}

export const Ol: React.FC<HTMLAttributes<HTMLOListElement>> = props => (
  <Text.List type={Text.List.types.numbered} {...props} />
)

export const Ul: React.FC<HTMLAttributes<HTMLUListElement>> = props => (
  <Text.List type={Text.List.types.bulleted} {...props} />
)

const components = {
  a: A,
  blockquote: BlockQuote,
  code: CodeBlock,
  h1: H1,
  h2: H2,
  h3: H3,
  inlineCode: Text.Code,
  ol: Ol,
  p: Text.P,
  pre: props => <div {...props} />,
  ul: Ul
}

export const MDXProvider: React.FC = props => (
  <BaseProvider components={components}>{props.children}</BaseProvider>
)
