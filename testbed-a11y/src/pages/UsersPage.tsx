import Breadcrumb from '@pluralsight/ps-design-system-breadcrumb'
import Button from '@pluralsight/ps-design-system-button'
import { PageWidthLayout } from '@pluralsight/ps-design-system-layout'
import { Label, Heading, P } from '@pluralsight/ps-design-system-text'
import Tab from '@pluralsight/ps-design-system-tab'
import ScreenReaderOnly from '@pluralsight/ps-design-system-screenreaderonly'
import Table from '@pluralsight/ps-design-system-table'
import { useUniqueId } from '@pluralsight/ps-design-system-util'
import faker from 'faker'
import { MouseEvent, FC, useEffect, useMemo, useState } from 'react'
import { Column, useTable, useSortBy } from 'react-table'

import styles from './UsersPage.module.css'

interface User {
  firstName: string
  lastName: string
}

const FirstSubPage: FC = () => {
  const columns = useMemo<Column<User>[]>(
    () => [
      {
        Header: 'First name',
        accessor: user => user.firstName,
        title: 'First name'
      },
      {
        Header: 'Last name',
        accessor: user => user.lastName,
        title: 'Last name'
      }
    ],
    []
  )
  const data = useMemo<User[]>(
    () =>
      Array(50)
        .fill(null)
        .map(() => ({
          firstName: faker.name.firstName(),
          lastName: faker.name.lastName()
        })),

    []
  )
  const table = useTable({ columns, data }, useSortBy)

  const captionId = useUniqueId()
  const title = 'Employees'
  const initialCaption = `${title}: Not sorted`
  const [caption, setCaption] = useState(initialCaption)

  useEffect(() => {
    const [activeSortRule] = table.state.sortBy

    if (!activeSortRule) {
      setCaption(initialCaption)
      return
    }

    const { id: ruleId, desc } = activeSortRule
    const ruleDir = desc ? 'descending' : 'ascending'

    setCaption(`${title} sorted by ${ruleId}: ${ruleDir} order`)
  }, [table.state.sortBy, initialCaption])

  return (
    <Table {...table.getTableProps()} aria-labelledby={captionId}>
      <caption aria-live="polite" id={captionId}>
        <ScreenReaderOnly>{caption}</ScreenReaderOnly>
      </caption>

      <Table.Head>
        {table.headerGroups.map(group => (
          <Table.Row {...group.getHeaderGroupProps()}>
            {group.headers.map(column => {
              const { canSort, isSorted, isSortedDesc } = column

              const sort = isSorted ? (isSortedDesc ? 'desc' : 'asc') : false
              const title: string = (column as any).title

              const sortByProps = column.getSortByToggleProps()
              const headerProps = column.getHeaderProps(sortByProps)

              return (
                <Table.Header
                  {...headerProps}
                  role="columnheader"
                  scope="col"
                  sort={canSort ? sort : undefined}
                  title={title}
                >
                  {column.render('Header')}
                </Table.Header>
              )
            })}
          </Table.Row>
        ))}
      </Table.Head>

      <Table.Body {...table.getTableBodyProps}>
        {table.rows
          .map(row => {
            table.prepareRow(row)
            return row
          })
          .map(row => (
            <Table.Row {...row.getRowProps()}>
              {row.cells.map(cell => (
                <Table.Cell {...cell.getCellProps()}>
                  {cell.render('Cell')}
                </Table.Cell>
              ))}
            </Table.Row>
          ))}
      </Table.Body>
    </Table>
  )
}

const SecondSubPage: FC = () => {
  return <P>second</P>
}

const SUB_PAGES = [
  { id: 'user_subpage_1', label: 'First', Comp: FirstSubPage },
  { id: 'user_subpage_2', label: 'Second', Comp: SecondSubPage }
]

export const UsersPage: FC = props => {
  const [activeSubPageId, setActiveSubPageId] = useState(SUB_PAGES[0].id)

  const handleTabClick = (
    index: number,
    evt: MouseEvent<HTMLButtonElement>
  ) => {
    evt.preventDefault()
    const nextActiveSubPage = SUB_PAGES[index].id
    setActiveSubPageId(nextActiveSubPage)
  }

  const subPage = SUB_PAGES.find(s => s.id === activeSubPageId)

  return (
    <PageWidthLayout {...props}>
      <Breadcrumb>Label</Breadcrumb>
      <PageHeader />

      <Tab.List>
        {SUB_PAGES.map(sub => (
          <Tab.ListItem
            id={sub.id}
            key={sub.id}
            onClick={handleTabClick}
            {...{ active: sub.id === activeSubPageId }}
          >
            {sub.label}
          </Tab.ListItem>
        ))}
      </Tab.List>

      <br />

      {subPage && (
        <Tab.Panel labelledBy={subPage.id}>
          <subPage.Comp />
        </Tab.Panel>
      )}
    </PageWidthLayout>
  )
}

const PageHeader: FC = () => {
  return (
    <div className={styles.header}>
      <Heading className={styles.headerTitle}>
        <h1>Users</h1>
      </Heading>

      <div className={styles.headerActions}>
        <div>
          <div>
            <Label strong size="medium">
              Label: Status
            </Label>
          </div>

          <div>
            <Label color="secondary" size="small">
              Sublabel: September 20, 2018
            </Label>
          </div>
        </div>

        <Button>Label</Button>
      </div>
    </div>
  )
}
