import Avatar from '@pluralsight/ps-design-system-avatar'
import Checkbox from '@pluralsight/ps-design-system-checkbox'
import { Meta, Story } from '@storybook/react/types-6-0'
import React from 'react'

import Table from '..'

import { generateUser } from './seed'
import { FlexContainer, HorzSpacer } from './shared'

export default {
  title: 'Components/Table',
  component: Table
} as Meta

export const Basic: Story = () => {
  const data = new Array(5).fill(null).map(() => generateUser())

  return (
    <Table>
      <Table.Head>
        <Table.Row>
          <Table.Header>First name</Table.Header>
          <Table.Header>Last name</Table.Header>
          <Table.Header>Email</Table.Header>
        </Table.Row>
      </Table.Head>

      <Table.Body>
        {data.map((user, i) => (
          <Table.Row key={i}>
            <Table.Header>{user.firstName}</Table.Header>
            <Table.Cell>{user.lastName}</Table.Cell>
            <Table.Cell>{user.email}</Table.Cell>
          </Table.Row>
        ))}
      </Table.Body>
    </Table>
  )
}

export const MixedContent: Story = () => {
  const data = new Array(5).fill(null).map(() => generateUser())

  return (
    <Table>
      <Table.Head>
        <Table.Row>
          <Table.Header>First name</Table.Header>
          <Table.Header>Last name</Table.Header>
          <Table.Header>Email</Table.Header>
        </Table.Row>
      </Table.Head>

      <Table.Body>
        {data.map((user, i) => (
          <Table.Row key={i}>
            <Table.Header>
              <FlexContainer>
                <Avatar alt="avatar" name={`${user.firstName}`} size="xSmall" />
                <HorzSpacer />
                <span>{user.firstName}</span>
              </FlexContainer>
            </Table.Header>
            <Table.Cell>{user.lastName}</Table.Cell>
            <Table.Cell>{user.email}</Table.Cell>
          </Table.Row>
        ))}
      </Table.Body>
    </Table>
  )
}

export const Sorting: Story = () => {
  type SortOptions = boolean | 'asc' | 'desc'
  type SortHeader = {
    id: string
    title: string
    sort: SortOptions
  }

  const data = new Array(1).fill(null).map(() => generateUser())

  const SortingStory: React.FC = () => {
    const [headers, setHeaders] = React.useState<SortHeader[]>([
      { id: 'first-name', title: 'First name', sort: false },
      { id: 'last-name', title: 'Last name', sort: false },
      { id: 'email', title: 'Email', sort: false }
    ])

    const [users] = React.useState(data)

    const applyColSort = (header: SortHeader) => {
      const prevSort: SortOptions = header.sort
      let nextSort: SortOptions

      if (typeof prevSort === 'boolean') nextSort = 'desc'
      else if (prevSort === 'desc') nextSort = 'asc'
      else if (prevSort === 'asc') nextSort = false

      const nextHeaders = headers.map(h => ({
        ...h,
        sort: h.id === header.id ? nextSort : false
      }))

      setHeaders(nextHeaders)
    }

    return (
      <Table>
        <Table.Head>
          <Table.Row>
            {headers.map(header => (
              <Table.Header
                key={header.id}
                onClick={() => applyColSort(header)}
                sort={header.sort}
                title={header.title}
              >
                {header.title}
              </Table.Header>
            ))}
          </Table.Row>
        </Table.Head>

        <Table.Body>
          {users.map((user, i) => (
            <Table.Row key={i}>
              <Table.Header title="First name">{user.firstName}</Table.Header>
              <Table.Cell>{user.lastName}</Table.Cell>
              <Table.Cell>{user.email}</Table.Cell>
            </Table.Row>
          ))}
        </Table.Body>
      </Table>
    )
  }

  return <SortingStory />
}

export const Alignment: Story = () => {
  const data = new Array(5).fill(null).map(() => generateUser())

  return (
    <Table>
      <Table.Head>
        <Table.Row>
          <Table.Header align="left">Align Left</Table.Header>
          <Table.Header align="center">Align center</Table.Header>
          <Table.Header align="right">Align right</Table.Header>
        </Table.Row>
      </Table.Head>

      <Table.Body>
        {data.map((user, i) => (
          <Table.Row key={i}>
            <Table.Header align="left">{user.firstName}</Table.Header>
            <Table.Cell align="center">{user.lastName}</Table.Cell>
            <Table.Cell align="right">{user.email}</Table.Cell>
          </Table.Row>
        ))}
      </Table.Body>
    </Table>
  )
}

export const RowSelection: Story = () => {
  const data = new Array(10).fill(null).map(() => generateUser())

  return (
    <Table>
      <Table.Head>
        <Table.Row>
          <Table.Header>
            <Checkbox indeterminate />
          </Table.Header>
          <Table.Header>First name</Table.Header>
          <Table.Header>Last name</Table.Header>
          <Table.Header>Email</Table.Header>
        </Table.Row>
      </Table.Head>

      <Table.Body>
        {data.map((user, i) => {
          const selected = i % 3 === 1

          return (
            <Table.Row key={i} selected={selected}>
              <Table.Cell>
                <Checkbox checked={selected} />
              </Table.Cell>
              <Table.Cell>{user.firstName}</Table.Cell>
              <Table.Cell>{user.lastName}</Table.Cell>
              <Table.Cell>{user.email}</Table.Cell>
            </Table.Row>
          )
        })}
      </Table.Body>
    </Table>
  )
}
