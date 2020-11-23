import { fireEvent, screen } from '@testing-library/dom'
import userEvent from '@testing-library/user-event'
import { render } from '@testing-library/react'
import React from 'react'

import Dropdown from '..'

it('has an input queryable by label', async () => {
  render(
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
  const input = await screen.findByLabelText('Level')
  expect(input).toHaveValue('w')
})

it('button click opens the menu', async () => {
  render(
    <Dropdown
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
    />
  )
  const button = await screen.findByRole('button', { name: 'Select' })
  userEvent.click(button)

  const menu = await screen.findByRole('listbox')
  expect(menu).toBeInTheDocument()
})

it('space key opens the menu', async () => {
  render(
    <Dropdown
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
    />
  )

  const button = screen.getByRole('button', { name: 'Select' })
  button.focus()
  userEvent.type(button, '{space}')

  const menu = await screen.findByRole('listbox')
  expect(menu).toBeInTheDocument()
})

it.todo('selects by enter')

it('selects by click', async () => {
  render(
    <Dropdown
      placeholder="Select"
      value="w"
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
    />
  )
  const button = screen.getByRole('button', { name: 'Two' })
  userEvent.click(button)

  const item = screen.getByRole('menuitem', { name: /Three/ })
  userEvent.click(item)

  const input = await screen.findByRole('textbox')
  expect(input).toHaveValue('h')
})
