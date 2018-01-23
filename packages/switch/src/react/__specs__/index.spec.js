import { shallow } from 'enzyme'
import React from 'react'

import Switch from '../index'

test('onClick calls handler', () => {
  let callCount = 0
  const onClick = _ => {
    callCount += 1
  }
  const s = shallow(<Switch onClick={onClick}>Clicks once</Switch>)
  s.simulate('click')
  expect(callCount).toBe(1)
})

test('click not called when disabled', () => {
  let callCount = 0
  const onClick = _ => {
    callCount += 1
  }
  const s = shallow(
    <Switch onClick={onClick} disabled>
      Clicks once
    </Switch>
  )
  s.simulate('click')
  expect(callCount).toBe(0)
})
