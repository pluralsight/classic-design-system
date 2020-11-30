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
            <Table.Header>Full Name</Table.Header>
            <Table.Header>First name</Table.Header>
            <Table.Header>Last name</Table.Header>
            <Table.Header>Email</Table.Header>
          </Table.Row>
        </Table.Head>

        <Table.Body>
          {data.map((user, i) => (
            <Table.Row key={i}>
              <Table.Cell>
                <Checkbox />
              </Table.Cell>
              <Table.Header>
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
            <Table.Header scope="col" sticky>
              Full Name
            </Table.Header>
            <Table.Header scope="col" sticky>
              First name
            </Table.Header>
            <Table.Header scope="col" sticky>
              Last name
            </Table.Header>
            <Table.Header scope="col" sticky>
              Email
            </Table.Header>
          </Table.Row>
        </Table.Head>

        <Table.Body>
          {data.map((user, i) => (
            <Table.Row key={i}>
              <Table.Header>
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
            <Table.Header scope="row" sticky style={{ width: 1 }}>
              <Checkbox />
            </Table.Header>
            <Table.Header>Full Name</Table.Header>
            <Table.Header>First name</Table.Header>
            <Table.Header>Last name</Table.Header>
            <Table.Header>Email</Table.Header>
          </Table.Row>
        </Table.Head>

        <Table.Body>
          {data.map((user, i) => (
            <Table.Row key={i}>
              <Table.Header scope="row" sticky>
                <Checkbox />
              </Table.Header>
              <Table.Header>
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
            <Table.Header scope="col" sticky style={{ width: 1 }}>
              <Checkbox />
            </Table.Header>
            <Table.Header scope="col" sticky>
              Full Name
            </Table.Header>
            <Table.Header scope="col" sticky>
              First name
            </Table.Header>
            <Table.Header scope="col" sticky>
              Last name
            </Table.Header>
            <Table.Header scope="col" sticky>
              Email
            </Table.Header>
          </Table.Row>
        </Table.Head>

        <Table.Body>
          {data.map((user, i) => (
            <Table.Row key={i}>
              <Table.Header scope="row" sticky>
                <Checkbox />
              </Table.Header>
              <Table.Header>
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
