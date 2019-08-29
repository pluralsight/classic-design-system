import Icon from '@pluralsight/ps-design-system-icon/react.js'
import React from 'react'
import { render } from '@testing-library/react'
import { shallow } from 'enzyme'

import Card from '../index.js'

test('click on Card.Title triggered once', () => {
  let callCount = 0
  const onClick = _ => {
    callCount += 1
  }
  const title = shallow(<Card.Title onClick={onClick}>Clicks once</Card.Title>)
  title.simulate('click')
  expect(callCount).toBe(1)
})

describe('#Card.Action', () => {
  it('forwards ref', () => {
    const refToForward = React.createRef()

    const { getByTestId } = render(
      <Card.Action
        data-testid="under-test"
        ref={refToForward}
        title="Some title"
        icon={<Icon id={Icon.ids.more} />}
      ></Card.Action>
    )

    const el = getByTestId('under-test')
    expect(el).toBe(refToForward.current)
  })
})
