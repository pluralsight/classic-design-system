import { mount, shallow } from 'enzyme'
import React from 'react'

import Breadcrumb from '../index'

test('click on button triggered once', () => {
  let callCount = 0
  const onClick = _ => {
    callCount += 1
  }
  const breadcrumb = shallow(
    <Breadcrumb onClick={onClick}>Clicks once</Breadcrumb>
  )
  breadcrumb.childAt(0).simulate('click')
  expect(callCount).toBe(1)
})

test('click on disabled button with href does not trigger onClick', () => {
  let callCount = 0
  const onClick = _ => {
    callCount += 1
  }
  const breadcrumb = mount(
    <Breadcrumb disabled onClick={onClick} href="https://foo.com">
      Can't Be Clicked
    </Breadcrumb>
  )
  breadcrumb.childAt(0).simulate('click')

  expect(callCount).toBe(0)
})

test('passes ref to button', () => {
  const ref = React.createRef(0)

  mount(<Breadcrumb ref={ref} />)

  expect(ref.current).not.toBeUndefined()
})
