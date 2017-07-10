import identity from 'identity-obj-proxy'
import React from 'react'
import renderer from 'react-test-renderer'

import { Card } from '../index'

test('renders required props', () => {
  const tree = renderer.create(
    <Card css={identity} image={<div />} title="The card title" />
  )
  expect(tree).toMatchSnapshot()
})

test('renders tag', () => {
  const tag = [<div>FakeSVG</div>, <span>Course</span>]
  expect(
    renderer.create(
      <Card css={identity} image={<div />} title="The card title" tag={tag} />
    )
  ).toMatchSnapshot()
})
