import * as core from '@pluralsight/ps-design-system-core'
import { storiesOf } from '@storybook/react'
import React from 'react'

import List from '../list'

const PaddingDecorator = (storyFn: () => React.ReactNode) => (
  <div style={{ padding: core.layout.spacingXLarge }}>{storyFn()}</div>
)

const list = storiesOf('List', module).addDecorator(PaddingDecorator)

Object.keys(List.sizes).forEach(typeProp =>
  list.add(`size: ${typeProp}`, () => (
    <List type={List.types.bulleted} size={typeProp as keyof typeof List.sizes}>
      <List.Item>one</List.Item>
      <List.Item>two</List.Item>
      <List.Item>three</List.Item>
      <List.Item>four</List.Item>
      <List.Item>five</List.Item>
    </List>
  ))
)
Object.keys(List.types).forEach(typeProp =>
  list.add(`type: ${typeProp}`, () => (
    <List type={typeProp as keyof typeof List.types}>
      <List.Item>one</List.Item>
      <List.Item>two</List.Item>
      <List.Item>three</List.Item>
      <List.Item>four</List.Item>
      <List.Item>five</List.Item>
    </List>
  ))
)
