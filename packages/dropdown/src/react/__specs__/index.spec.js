import '@testing-library/jest-dom'
import ActionMenu from '@pluralsight/ps-design-system-actionmenu/react.js'
import React from 'react'
import { render } from '@testing-library/react'

import Dropdown from '../index.js'

it('selects initial display label with value', () => {
  const { getAllByText } = render(
    <Dropdown
      value="two"
      menu={
        <ActionMenu>
          <ActionMenu.Item value="one">One Item</ActionMenu.Item>
          <ActionMenu.Item value="two">Two Item</ActionMenu.Item>
          <ActionMenu.Item value="three">Three Item</ActionMenu.Item>
        </ActionMenu>
      }
    />
  )

  const labels = getAllByText('Two Item')
  const displayLabel = labels.find(n => !n.hasAttribute('aria-hidden'))

  expect(displayLabel).toBeInTheDocument()
})
