import { Meta } from '@storybook/react/types-6-0'

import faker from 'faker'
import React, { useMemo } from 'react'
import { useTable, useSortBy } from 'react-table'

import Table from '..'

export default {
  title: 'Components/Table/react-table',
  component: Table
} as Meta

faker.seed(666)

const generateData = (rows = 20) =>
  new Array(rows).fill(null).reduce(
    acc => [
      ...acc,
      {
        courses: faker.random.number(30),
        user: generateUser(),
        viewTime: generateViewTime()
      }
    ],
    []
  )

const generateViewTime = () => ({ ms: faker.random.number(1000) })
const generateUser = () => ({
  email: faker.internet.email(),
  firstName: faker.name.firstName(),
  lastName: faker.name.lastName()
})

export const Sorting: React.FC = () => {
  const columns = useMemo(
    () => [
      { Header: 'First Name', accessor: 'user.firstName' },
      { Header: 'Last Name', accessor: 'user.lastName' },
      { Header: 'Courses', accessor: 'courses' },
      { Header: 'View Time', accessor: 'viewTime.ms' }
    ],
    []
  )
  const data = useMemo(() => generateData(), [])

  const plugins = [useSortBy]
  const table = useTable({ columns, data }, ...plugins)

  return (
    <>
      <Table {...table.getTableProps()}>
        <Table.Head>
          {table.headerGroups.map(group => (
            <Table.Row {...group.getHeaderGroupProps()}>
              {group.headers.map(column => {
                const sort = column.isSorted
                  ? column.isSortedDesc
                    ? 'desc'
                    : 'asc'
                  : column.canSort

                return (
                  <Table.Header
                    {...column.getHeaderProps(column.getSortByToggleProps())}
                    sort={sort}
                  >
                    {column.render('Header')}
                  </Table.Header>
                )
              })}
            </Table.Row>
          ))}
        </Table.Head>

        <Table.Body {...table.getTableBodyProps()}>
          {table.rows.map(row => {
            table.prepareRow(row)

            return (
              <Table.Row {...row.getRowProps()}>
                {row.cells.map(cell => (
                  <Table.Cell {...cell.getCellProps()}>
                    {cell.render('Cell')}
                  </Table.Cell>
                ))}
              </Table.Row>
            )
          })}
        </Table.Body>
      </Table>
    </>
  )
}
