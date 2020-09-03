import Link from '@pluralsight/ps-design-system-link'
import * as Text from '@pluralsight/ps-design-system-text'
import React from 'react'

function H1(props) {
  return (
    <Text.Heading size={Text.Heading.sizes.xLarge}>
      <h1>{props.children}</h1>
    </Text.Heading>
  )
}

function H2(props) {
  return (
    <Text.Heading size={Text.Heading.sizes.large}>
      <h2>{props.children}</h2>
    </Text.Heading>
  )
}

function H3(props) {
  return (
    <Text.Heading size={Text.Heading.sizes.medium}>
      <h3>{props.children}</h3>
    </Text.Heading>
  )
}

function Ol(props) {
  return <Text.List type={Text.List.types.numbered}>{props.children}</Text.List>
}

function Ul(props) {
  return <Text.List type={Text.List.types.bulleted}>{props.children}</Text.List>
}

function A(props) {
  return (
    <Link>
      <a href={props.href}>{props.children}</a>
    </Link>
  )
}

export default {
  a: A,
  h1: H1,
  h2: H2,
  h3: H3,
  p: Text.P,
  ol: Ol,
  ul: Ul,
  inlineCode: Text.Code,
}
