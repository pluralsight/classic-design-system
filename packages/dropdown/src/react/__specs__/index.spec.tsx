import { render } from '@testing-library/react'
import React from 'react'

import Dropdown from '..'

it('has an input queryable by label', async () => {
  const { findByLabelText } = render(
    <Dropdown
      label="Level"
      placeholder="Select"
      menu={[
        <Dropdown.Item key="1" value="o">
          One
        </Dropdown.Item>,
        <Dropdown.Item key="2" value="w">
          Two
        </Dropdown.Item>,
        <Dropdown.Item key="3" value="h">
          Three
        </Dropdown.Item>
      ]}
      value="w"
    />
  )
  const input = await findByLabelText('Level')
  expect(input).toHaveValue('w')
})
