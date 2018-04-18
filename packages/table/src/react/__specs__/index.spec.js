import React from 'react'
import { shallow } from 'enzyme'
import Table from '../'

test('click on row should call onClick prop', () => {
  let clicked = false
  const onClick = _ => (clicked = true)

  const wrapper = shallow(
    <Table headers={[{ key: 'name', label: 'Name'}]}>
      <Table.Row onClick={onClick} data={{ name: 'John' }}>
        <p>nested content</p>
      </Table.Row>
    </Table>
  )

  wrapper
    .find(Table.Row)
    .first()
    .simulate('click')
  expect(clicked).toBe(true)
})
