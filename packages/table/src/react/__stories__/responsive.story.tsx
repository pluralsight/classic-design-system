import Checkbox from '@pluralsight/ps-design-system-checkbox'
import { Meta, Story } from '@storybook/react/types-6-0'
import React from 'react'

import Table from '../index'

import { generateUser } from './seed'
import { OutlineBox } from './shared'

export default {
  title: 'Components/Table/responsive',
  component: Table,
  decorators: [
    Story => (
      <OutlineBox style={{ width: 500 }}>
        <Story />
      </OutlineBox>
    )
  ]
} as Meta

export const HorizontalScroll: Story = () => {
  const data = React.useMemo(
    () => new Array(5).fill(null).map(() => generateUser()),
    []
  )

  return (
    <Table scrollable>
      <Table.Head>
        <Table.Row>
          <Table.Cell>
            <Checkbox />
          </Table.Cell>
          <Table.Header role="columnheader" scope="col" title="Full name">
            Full name
          </Table.Header>
          <Table.Header role="columnheader" scope="col" title="First name">
            First name
          </Table.Header>
          <Table.Header role="columnheader" scope="col" title="Last name">
            Last name
          </Table.Header>
          <Table.Header role="columnheader" scope="col" title="Email">
            Email
          </Table.Header>
        </Table.Row>
      </Table.Head>

      <Table.Body>
        {data.map((user, i) => (
          <Table.Row key={i}>
            <Table.Header role="columnheader" scope="row">
              <Checkbox />
            </Table.Header>
            <Table.Header role="columnheader" scope="row" title="Full name">
              {user.firstName} {user.lastName}
            </Table.Header>
            <Table.Cell>{user.firstName}</Table.Cell>
            <Table.Cell>{user.lastName}</Table.Cell>
            <Table.Cell>{user.email}</Table.Cell>
          </Table.Row>
        ))}
      </Table.Body>
    </Table>
  )
}

export const StickyRowHeader: Story = () => {
  const data = React.useMemo(
    () => new Array(5).fill(null).map(() => generateUser()),
    []
  )

  return (
    <Table scrollable>
      <Table.Head>
        <Table.Row>
          <Table.Header
            role="columnheader"
            scope="row"
            sticky
            style={{ width: 1 }}
            title="Selection"
          >
            <Checkbox />
          </Table.Header>
          <Table.Header role="columnheader" scope="row">
            Full name
          </Table.Header>
          <Table.Header role="columnheader" scope="row">
            First name
          </Table.Header>
          <Table.Header role="columnheader" scope="row">
            Last name
          </Table.Header>
          <Table.Header role="columnheader" scope="row">
            Email
          </Table.Header>
        </Table.Row>
      </Table.Head>

      <Table.Body>
        {data.map((user, i) => (
          <Table.Row key={i}>
            <Table.Header role="rowheader" scope="row" sticky>
              <Checkbox />
            </Table.Header>
            <Table.Header role="rowheader" scope="row">
              {user.firstName} {user.lastName}
            </Table.Header>
            <Table.Cell>{user.firstName}</Table.Cell>
            <Table.Cell>{user.lastName}</Table.Cell>
            <Table.Cell>{user.email}</Table.Cell>
          </Table.Row>
        ))}
      </Table.Body>
    </Table>
  )
}
