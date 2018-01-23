import { mount, shallow } from 'enzyme'
import React from 'react'

import Card from '../index'

test('click on Card.Title triggered once', () => {
  let callCount = 0
  const onClick = _ => {
    callCount += 1
  }
  const title = shallow(<Card.Title onClick={onClick}>Clicks once</Card.Title>)
  title.simulate('click')
  expect(callCount).toBe(1)
})
