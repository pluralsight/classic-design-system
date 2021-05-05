import { Avatar } from '../../../avatar'
import { Checkbox } from '../../../checkbox'
import { ScreenReaderOnly } from '../../../screenreaderonly'
import { Meta, Story } from '@storybook/react/types-6-0'
import React from 'react'

import { Table } from '../index'
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
        {data.map((user, i) => (
          <Table.Row key={i}>
            <Table.Header role="rowheader" scope="row">
              {user.firstName}
            </Table.Header>
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
        {data.map((user, i) => (
          <Table.Row key={i}>
            <Table.Header role="rowheader" scope="row">
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
      { id: 'h-first-name', title: 'First name', sort: false },
      { id: 'h-last-name', title: 'Last name', sort: false },
      { id: 'h-email', title: 'Email', sort: false }
    ])

    const [users] = React.useState(data)

    const title = 'Mock table title'
    const initialCaption = `${title}: Not sorted`
    const [caption, setCaption] = React.useState(initialCaption)

    React.useEffect(() => {
      const active = headers.find(h => h.sort)
      if (!active || typeof active.sort !== 'string') {
        setCaption(initialCaption)
        return
      }

      const direction = { asc: 'ascending', desc: 'descending' }[active.sort]
      setCaption(`${title} sorted by ${active.title}: ${direction} order`)
    }, [headers, initialCaption])

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

    const handleSortClick: React.MouseEventHandler = evt => {
      const id = (evt.target as HTMLElement).getAttribute('data-header-id')
      const header = headers.find(h => h.id === id)!

      applyColSort(header)
    }

    const handleSortKeyUp: React.KeyboardEventHandler = evt => {
      const supportedKey = ['Enter', ' '].includes(evt.key)
      if (!supportedKey) return

      const id = (evt.target as HTMLElement).getAttribute('data-header-id')
      const header = headers.find(h => h.id === id)!

      applyColSort(header)
    }

    return (
      <Table aria-labelledby="test-caption-id">
        <caption aria-live="polite" id="test-caption-id">
          <ScreenReaderOnly>{caption}</ScreenReaderOnly>
        </caption>

        <Table.Head>
          <Table.Row>
            {headers.map(header => (
              <Table.Header
                data-header-id={header.id}
                key={header.id}
                onClick={handleSortClick}
                onKeyUp={handleSortKeyUp}
                role="columnheader"
                scope="col"
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
              <Table.Header role="rowheader" scope="row" title="First name">
                {user.firstName}
              </Table.Header>
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
          <Table.Header align="left" role="columnheader" scope="col">
            Align Left
          </Table.Header>
          <Table.Header align="center" role="columnheader" scope="col">
            Align center
          </Table.Header>
          <Table.Header align="right" role="columnheader" scope="col">
            Align right
          </Table.Header>
        </Table.Row>
      </Table.Head>

      <Table.Body>
        {data.map((user, i) => (
          <Table.Row key={i}>
            <Table.Header align="left" role="rowheader" scope="row">
              {user.firstName}
            </Table.Header>
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
          <Table.Header role="columnheader" scope="col">
            <Checkbox indeterminate />
          </Table.Header>
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
