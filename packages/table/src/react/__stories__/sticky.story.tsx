import { Meta, Story } from '@storybook/react/types-6-0'
import React from 'react'

import { StickyContainer } from '../sticky'
import Table from '..'

import { generateUser } from './seed'
import { OutlineBox } from './shared'

export default {
  title: 'Components/Table/sticky',
  component: Table,
  parameters: { center: { disabled: true }, storyshots: { disable: true } }
} as Meta

export const FixedContainer: Story = () => (
  <div style={{ width: 500, height: 500 }}>
    <MockTable scrollable />
    <OutlineBox style={{ height: 200, margin: 20 }}>Blank Area</OutlineBox>
  </div>
)

export const StickyContainerSingle: Story = () => (
  <>
    <MockTable renderContainer={StickyContainer} />

    <OutlineBox style={{ height: 200, margin: 20 }}>Blank Area</OutlineBox>
  </>
)

export const StickyContainerMulti: Story = () => (
  <>
    <MockTable renderContainer={StickyContainer} />

    <OutlineBox style={{ height: 200, margin: 20 }}>Blank Area</OutlineBox>

    <MockTable renderContainer={StickyContainer} />

    <OutlineBox style={{ height: 200, margin: 20 }}>Blank Area</OutlineBox>

    <MockTable renderContainer={StickyContainer} />

    <OutlineBox style={{ height: 200, margin: 20 }}>Blank Area</OutlineBox>
  </>
)

const MockTable: React.FC<React.ComponentProps<typeof Table>> = props => {
  const data = React.useMemo(
    () => new Array(40).fill(null).map(() => generateUser()),
    []
  )

  return (
    <Table {...props}>
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
  )
}
