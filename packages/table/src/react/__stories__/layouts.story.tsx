import Checkbox from '@pluralsight/ps-design-system-checkbox'
import { Meta, Story } from '@storybook/react/types-6-0'
import React from 'react'

import Table from '..'

import { generateUser } from './seed'
import { OutlineBox } from './shared'

export default {
  title: 'Components/Table/layouts',
  component: Table
} as Meta

export const HorizontalScroll: Story = () => {
  const data = new Array(5).fill(null).map(() => generateUser())

  return (
    <OutlineBox style={{ width: 500 }}>
      <Table>
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
    </OutlineBox>
  )
}

// NOTE: stick headers only work with a fixed height
export const StickyColumnHeader: Story = () => {
  const data = new Array(20).fill(null).map(() => generateUser())

  return (
    <OutlineBox style={{ height: 500 }}>
      <Table>
        <Table.Head>
          <Table.Row>
            <Table.Header role="columnheader" scope="col" sticky>
              Full name
            </Table.Header>
            <Table.Header role="columnheader" scope="col" sticky>
              First name
            </Table.Header>
            <Table.Header role="columnheader" scope="col" sticky>
              Last name
            </Table.Header>
            <Table.Header role="columnheader" scope="col" sticky>
              Email
            </Table.Header>
          </Table.Row>
        </Table.Head>

        <Table.Body>
          {data.map((user, i) => (
            <Table.Row key={i}>
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
    </OutlineBox>
  )
}

export const StickyRowHeader: Story = () => {
  const data = new Array(5).fill(null).map(() => generateUser())

  return (
    <OutlineBox style={{ width: 500 }}>
      <Table>
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
    </OutlineBox>
  )
}

export const StickyColumnAndRowHeaders: Story = () => {
  const data = new Array(20).fill(null).map(() => generateUser())

  return (
    <OutlineBox style={{ height: 500, width: 500 }}>
      <Table>
        <Table.Head>
          <Table.Row>
            <Table.Header
              role="columnheader"
              scope="col"
              sticky
              style={{ width: 1 }}
              title="Selection"
            >
              <Checkbox />
            </Table.Header>
            <Table.Header role="columnheader" scope="col" sticky>
              Full name
            </Table.Header>
            <Table.Header role="columnheader" scope="col" sticky>
              First name
            </Table.Header>
            <Table.Header role="columnheader" scope="col" sticky>
              Last name
            </Table.Header>
            <Table.Header role="columnheader" scope="col" sticky>
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
              <Table.Header role="rowheader" scope="row" title="Full name">
                {user.firstName} {user.lastName}
              </Table.Header>
              <Table.Cell>{user.firstName}</Table.Cell>
              <Table.Cell>{user.lastName}</Table.Cell>
              <Table.Cell>{user.email}</Table.Cell>
            </Table.Row>
          ))}
        </Table.Body>
      </Table>
    </OutlineBox>
  )
}
