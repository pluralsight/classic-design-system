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

test('renders no tag if size is small', () => {
  const tag = [<div>FakeSVG</div>, <span>Course</span>]
  expect(
    renderer.create(
      <Card
        css={identity}
        image={<div />}
        title="The card title"
        size="small"
        tag={tag}
      />
    )
  ).toMatchSnapshot()
})

test('renders fullOverlay', () => {
  expect(
    renderer.create(
      <Card
        css={identity}
        image={<div />}
        title="The card title"
        fullOverlay={<div>FakePlayBtn</div>}
      />
    )
  ).toMatchSnapshot()
})

test('renders bonusBar', () => {
  expect(
    renderer.create(
      <Card
        css={identity}
        image={<div />}
        title="The card title"
        bonusBar={<div>Anything</div>}
      />
    )
  ).toMatchSnapshot()
})

test('renders custom metadata classes', () => {
  expect(
    renderer.create(
      <Card
        css={identity}
        image={<div />}
        title="The card title"
        metadata1={[<span className="keepme">Custom</span>]}
      />
    )
  ).toMatchSnapshot()
})

test('renders link class on meta only if anchor tag', () => {
  expect(
    renderer.create(
      <Card
        css={identity}
        image={<div />}
        title="The card title"
        metadata1={[<span>No link class</span>, <a>yes link class</a>]}
      />
    )
  ).toMatchSnapshot()
})
