import identity from 'identity-obj-proxy'
import React from 'react'
import renderer from 'react-test-renderer'

import Button from '../index'

test('renders correctly', () => {
  const tree = renderer.create(<Button css={identity}>Label</Button>)
  expect(tree).toMatchSnapshot()
})
