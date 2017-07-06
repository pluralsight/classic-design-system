import identity from 'identity-obj-proxy'
import React from 'react'
import renderer from 'react-test-renderer'

import { Card } from '../index'

test('renders correctly', () => {
  const tree = renderer.create(<Card css={identity} image={<div />} />)
  expect(tree).toMatchSnapshot()
})
