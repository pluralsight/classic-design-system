import { Meta, Story } from '@storybook/react/types-6-0'
import React from 'react'

import { Table } from '../index'
import { generateUser } from './seed'
import { ExpandButton, OutlineBox } from './shared'

export default {
  title: 'Components/Table/drawer',
  component: Table
} as Meta

export const LeftIndented: Story = () => {
  const data = React.useMemo(
    () => new Array(5).fill(null).map(() => generateUser()),
    []
  )
  const initialState = [data[1].handle]
  const [expandedHandles, setExpandedHandles] = React.useState(initialState)

  const expand = (user: { handle: string }) => {
    const next = expandedHandles.concat(user.handle)
    setExpandedHandles(next)
  }
  const collapse = (user: { handle: string }) => {
    const next = expandedHandles.filter(str => str !== user.handle)
    setExpandedHandles(next)
  }

  return (
    <Table>
      <Table.Head>
        <Table.Row>
          <Table.Cell />
          <Table.Header role="columnheader" scope="col">
            First name
          </Table.Header>
          <Table.Header role="columnheader" scope="col">
            Last name
          </Table.Header>
          <Table.Header role="columnheader" scope="col">
            Email
          </Table.Header>
        </Table.Row>
      </Table.Head>

      <Table.Body>
        {data.map((user, i) => {
          const expanded = expandedHandles.includes(user.handle)
          const toggle = expanded ? collapse : expand

          return (
            <React.Fragment key={i}>
              <Table.Row>
                <Table.Cell>
                  <ExpandButton
                    expanded={expanded}
                    onClick={() => toggle(user)}
                  />
                </Table.Cell>
                <Table.Cell>{user.firstName}</Table.Cell>
                <Table.Cell>{user.lastName}</Table.Cell>
                <Table.Cell>{user.email}</Table.Cell>
              </Table.Row>

              <Table.Drawer expanded={expanded} colSpan={4}>
                <OutlineBox style={{ height: 100, margin: 2 }}>
                  Drawer Content
                </OutlineBox>
              </Table.Drawer>
            </React.Fragment>
          )
        })}
      </Table.Body>
    </Table>
  )
}

export const RightNotIndented: Story = () => {
  const data = React.useMemo(
    () => new Array(5).fill(null).map(() => generateUser()),
    []
  )
  const initialState = [data[1].handle]
  const [expandedHandles, setExpandedHandles] = React.useState(initialState)

  const expand = (user: { handle: string }) => {
    const next = expandedHandles.concat(user.handle)
    setExpandedHandles(next)
  }
  const collapse = (user: { handle: string }) => {
    const next = expandedHandles.filter(str => str !== user.handle)
    setExpandedHandles(next)
  }

  return (
    <Table>
      <Table.Head>
        <Table.Row>
          <Table.Header role="columnheader" scope="col">
            First name
          </Table.Header>
          <Table.Header role="columnheader" scope="col">
            Last name
          </Table.Header>
          <Table.Header role="columnheader" scope="col">
            Email
          </Table.Header>
          <Table.Cell />
        </Table.Row>
      </Table.Head>

      <Table.Body>
        {data.map((user, i) => {
          const expanded = expandedHandles.includes(user.handle)
          const toggle = expanded ? collapse : expand

          return (
            <React.Fragment key={i}>
              <Table.Row>
                <Table.Cell>{user.firstName}</Table.Cell>
                <Table.Cell>{user.lastName}</Table.Cell>
                <Table.Cell>{user.email}</Table.Cell>
                <Table.Cell>
                  <ExpandButton
                    expanded={expanded}
                    onClick={() => toggle(user)}
                  />
                </Table.Cell>
              </Table.Row>

              <Table.Drawer
                expanded={expanded}
                colSpan={4}
                indentWithCell={false}
              >
                <OutlineBox style={{ height: 100, margin: 2 }}>
                  Drawer Content
                </OutlineBox>
              </Table.Drawer>
            </React.Fragment>
          )
        })}
      </Table.Body>
    </Table>
  )
}
