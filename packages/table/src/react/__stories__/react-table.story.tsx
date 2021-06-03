/* eslint-disable react/jsx-key */
import { Avatar } from '@pluralsight/ps-design-system-avatar'
import { Button } from '@pluralsight/ps-design-system-button'
import * as core from '@pluralsight/ps-design-system-core'
import { Checkbox } from '@pluralsight/ps-design-system-checkbox'
import { EmptyState } from '@pluralsight/ps-design-system-emptystate'
import Dropdown from '@pluralsight/ps-design-system-dropdown'
import {
  CaretDownIcon,
  CaretLeftIcon,
  CaretRightIcon,
  ChatIcon,
  MoveIcon
} from '@pluralsight/ps-design-system-icon'
import {
  PageHeadingLayout,
  PageWidthLayout
} from '@pluralsight/ps-design-system-layout'
import { ScreenReaderOnly } from '@pluralsight/ps-design-system-screenreaderonly'
import * as Text from '@pluralsight/ps-design-system-text'
import { HTMLPropsFor, useUniqueId } from '@pluralsight/ps-design-system-util'

import { SearchInput } from '@pluralsight/ps-design-system-searchinput'
import { Meta, Story } from '@storybook/react/types-6-0'
import React from 'react'
import {
  CellProps,
  Column,
  HeaderProps,
  Hooks,
  TableInstance,
  useExpanded,
  useGlobalFilter,
  usePagination,
  useRowSelect,
  useSortBy,
  useTable
} from 'react-table'

import Table from '../index'

import { generateNestedUserRows, generateUserRows } from './seed'
import { FlexContainer, HorzSpacer } from './shared'

export default {
  title: 'Components/Table/react-table',
  component: Table,
  decorators: [
    Story => (
      <PageWidthLayout>
        <PageHeadingLayout
          heading={
            <Text.Heading size="large">
              <h1>Page title</h1>
            </Text.Heading>
          }
        >
          <Story />
        </PageHeadingLayout>
      </PageWidthLayout>
    )
  ],
  parameters: { center: { disabled: true }, storyshots: { disable: true } }
} as Meta

export const Basic: Story = () => {
  const columns = React.useMemo<Column[]>(
    () => [
      {
        Cell: UserDataCell,
        Header: 'User',
        accessor: ({ user }: any) => `${user.firstName} ${user.lastName}`,
        title: 'User'
      },
      {
        Header: 'Job',
        accessor: ({ user }: any) => user.job.title,
        title: 'Job title'
      }
    ],
    []
  )
  const data = React.useMemo(() => generateUserRows(5), [])
  const table = useTable({ columns, data })

  return (
    <TableLayout>
      <Table {...table.getTableProps()}>
        <Table.Head>
          {table.headerGroups.map(group => (
            <Table.Row {...group.getHeaderGroupProps()}>
              {group.headers.map(column => {
                const title: string = (column as any).title

                return (
                  <Table.Header
                    {...column.getHeaderProps()}
                    role="columnheader"
                    scope="col"
                    title={title}
                  >
                    {column.render('Header')}
                  </Table.Header>
                )
              })}
            </Table.Row>
          ))}
        </Table.Head>
        <Table.Body {...table.getTableBodyProps()}>
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
    </TableLayout>
  )
}

export const Sorting: Story = () => {
  const columns = React.useMemo<Column[]>(
    () => [
      {
        Cell: UserDataCell,
        Header: 'User',
        accessor: ({ user }: any) => `${user.firstName} ${user.lastName}`,
        title: 'User'
      },
      {
        Header: 'Job',
        accessor: ({ user }: any) => user.job.title,
        title: 'Job title'
      }
    ],
    []
  )
  const data = React.useMemo(() => generateUserRows(5), [])
  const table = useTable({ columns, data }, useSortBy)

  const captionId = useUniqueId()
  const title = 'Employees'
  const initialCaption = `${title}: Not sorted`
  const [caption, setCaption] = React.useState(initialCaption)

  React.useEffect(() => {
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
      <Table.Body {...table.getTableBodyProps()}>
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

export const Filtering: Story = () => {
  const columns = React.useMemo<Column[]>(
    () => [
      {
        Cell: UserDataCell,
        Header: 'User',
        accessor: ({ user }: any) => `${user.firstName} ${user.lastName}`,
        title: 'User'
      },
      {
        Header: 'Job',
        accessor: ({ user }: any) => user.job.title,
        title: 'Job title'
      }
    ],
    []
  )
  const data = React.useMemo(() => generateUserRows(5), [])
  const table = useTable({ columns, data }, useGlobalFilter)

  return (
    <TableLayout
      filters={
        <SearchFilter
          onChange={(_e, next) => table.setGlobalFilter(next)}
          value={table.state.globalFilter}
        />
      }
    >
      <Table {...table.getTableProps()}>
        <Table.Head>
          {table.headerGroups.map(group => (
            <Table.Row {...group.getHeaderGroupProps()}>
              {group.headers.map(column => {
                const title: string = (column as any).title

                return (
                  <Table.Header
                    {...column.getHeaderProps()}
                    role="columnheader"
                    scope="col"
                    title={title}
                  >
                    {column.render('Header')}
                  </Table.Header>
                )
              })}
            </Table.Row>
          ))}
        </Table.Head>
        <Table.Body {...table.getTableBodyProps()}>
          {table.rows.length <= 0 && (
            <Table.Row>
              <Table.Cell colSpan={columns.length}>
                <EmptyState
                  heading={
                    <EmptyState.Heading>
                      No results match term: {table.state.globalFilter}
                    </EmptyState.Heading>
                  }
                  caption={
                    <EmptyState.Caption>
                      Hedwig Daily Prophet treacle tart full-moon Ollivanders
                      You-Know-Who cursed. Fawkes maze raw-steak Voldemort
                      Goblin Wars snitch Forbidden forest grindylows wool socks.
                    </EmptyState.Caption>
                  }
                  illustration={
                    <EmptyState.Illustration
                      name={EmptyState.Illustration.names.magnify}
                    />
                  }
                  actions={
                    <EmptyState.Actions
                      onClick={() => table.setGlobalFilter('')}
                    >
                      <Button appearance={Button.appearances.stroke}>
                        Reset search filter
                      </Button>
                    </EmptyState.Actions>
                  }
                />
              </Table.Cell>
            </Table.Row>
          )}

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
    </TableLayout>
  )
}

export const Pagination: Story = () => {
  const initialState = { pageSize: 2 }
  const columns = React.useMemo<Column[]>(
    () => [
      {
        Cell: UserDataCell,
        Header: 'User',
        accessor: ({ user }: any) => `${user.firstName} ${user.lastName}`,
        title: 'User'
      },
      {
        Header: 'Job',
        accessor: ({ user }: any) => user.job.title,
        title: 'Job title'
      }
    ],
    []
  )
  const data = React.useMemo(() => generateUserRows(25), [])
  const table = useTable({ columns, data, initialState }, usePagination)

  return (
    <TableLayout pager={<Paginator table={table} />}>
      <Table {...table.getTableProps()}>
        <Table.Head>
          {table.headerGroups.map(group => (
            <Table.Row {...group.getHeaderGroupProps()}>
              {group.headers.map(column => {
                const title: string = (column as any).title

                return (
                  <Table.Header
                    {...column.getHeaderProps()}
                    role="columnheader"
                    scope="col"
                    title={title}
                  >
                    {column.render('Header')}
                  </Table.Header>
                )
              })}
            </Table.Row>
          ))}
        </Table.Head>
        <Table.Body {...table.getTableBodyProps()}>
          {table.page
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
    </TableLayout>
  )
}

export const RowExpansion: Story = () => {
  const columns = React.useMemo<Column[]>(
    () => [
      {
        Cell: UserDataCell,
        Header: 'User',
        accessor: ({ user }: any) => `${user.firstName} ${user.lastName}`,
        title: 'User'
      },
      {
        Header: 'Job',
        accessor: ({ user }: any) => user.job.title,
        title: 'Job title'
      }
    ],
    []
  )
  const data = React.useMemo(() => generateNestedUserRows(5, 3), [])
  const table = useTable({ columns, data }, useExpanded, expanderHook)

  return (
    <TableLayout>
      <Table {...table.getTableProps()}>
        <Table.Head>
          {table.headerGroups.map(group => (
            <Table.Row {...group.getHeaderGroupProps()}>
              {group.headers.map(column => {
                const title: string = (column as any).title
                const style = {
                  width: column.id === '_expander' ? 1 : undefined
                }

                return (
                  <Table.Header
                    {...column.getHeaderProps()}
                    role="columnheader"
                    style={style}
                    scope="col"
                    title={title}
                  >
                    {column.render('Header')}
                  </Table.Header>
                )
              })}
            </Table.Row>
          ))}
        </Table.Head>
        <Table.Body {...table.getTableBodyProps()}>
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
    </TableLayout>
  )
}
export const RowSelection: Story = () => {
  const columns = React.useMemo<Column[]>(
    () => [
      {
        Cell: UserDataCell,
        Header: 'User',
        accessor: ({ user }: any) => `${user.firstName} ${user.lastName}`,
        title: 'User'
      },
      {
        Header: 'Job',
        accessor: ({ user }: any) => user.job.title,
        title: 'Job title'
      }
    ],
    []
  )
  const data = React.useMemo(() => generateUserRows(5), [])
  const table = useTable({ columns, data }, useRowSelect, selectionHook)

  const actionsDisabled = React.useMemo(
    () => Object.keys(table.state.selectedRowIds).length <= 0,
    [table.state.selectedRowIds]
  )

  return (
    <TableLayout
      actions={
        <>
          <Button
            appearance="secondary"
            disabled={actionsDisabled}
            icon={<MoveIcon />}
          >
            Move to team
          </Button>

          <HorzSpacer />

          <Button
            appearance="secondary"
            disabled={actionsDisabled}
            icon={<ChatIcon />}
          >
            Send message
          </Button>
        </>
      }
    >
      <Table {...table.getTableProps()}>
        <Table.Head>
          {table.headerGroups.map(group => (
            <Table.Row {...group.getHeaderGroupProps()}>
              {group.headers.map(column => {
                const title: string = (column as any).title
                const style = {
                  width: column.id === '_selection' ? 1 : undefined
                }

                return (
                  <Table.Header
                    {...column.getHeaderProps()}
                    role="columnheader"
                    scope="col"
                    style={style}
                    title={title}
                  >
                    {column.render('Header')}
                  </Table.Header>
                )
              })}
            </Table.Row>
          ))}
        </Table.Head>
        <Table.Body {...table.getTableBodyProps()}>
          {table.rows
            .map(row => {
              table.prepareRow(row)
              return row
            })
            .map(row => (
              <Table.Row selected={row.isSelected} {...row.getRowProps()}>
                {row.cells.map(cell => (
                  <Table.Cell {...cell.getCellProps()}>
                    {cell.render('Cell')}
                  </Table.Cell>
                ))}
              </Table.Row>
            ))}
        </Table.Body>
      </Table>
    </TableLayout>
  )
}

interface TableLayoutProps {
  actions?: React.ReactNode
  children: React.ReactElement<typeof Table>
  filters?: React.ReactNode
  pager?: React.ReactNode
}
const TableLayout: React.FC<TableLayoutProps> = props => {
  const { actions, children, filters, pager } = props

  return (
    <div>
      <header
        style={{ display: 'flex', marginBottom: core.layout.spacingMedium }}
      >
        {actions && <div style={{ marginRight: 'auto' }}>{actions}</div>}
        {filters && <div style={{ marginLeft: 'auto' }}>{filters}</div>}
      </header>

      <div>{children}</div>

      {pager && <div>{pager}</div>}
    </div>
  )
}

interface SearchFilterProps {
  value: any
  onChange: (evt: unknown, value: any) => void
}
const SearchFilter: React.FC<SearchFilterProps> = props => {
  const { value, onChange } = props

  const onSearchBlur: React.FocusEventHandler<HTMLInputElement> = evt => {
    onChange(evt, evt.target.value)
  }
  const onSearchChange: React.ChangeEventHandler<HTMLInputElement> = evt => {
    onChange(evt, evt.target.value)
  }

  return (
    <SearchInput
      onBlur={onSearchBlur}
      onChange={onSearchChange}
      placeholder="Filter"
      style={{ flex: 1 }}
      value={value}
    />
  )
}

interface PaginatorProps {
  perPageOptions?: number[]
  table: TableInstance
}
const Paginator: React.FC<PaginatorProps> = props => {
  const { perPageOptions = [2, 5, 10], table } = props
  const { pageIndex, pageSize } = table.state

  const handlePrevPage = () => table.previousPage()
  const handleNextPage = () => table.nextPage()

  const cursorStart = pageIndex * pageSize + 1
  const cursorEnd = cursorStart + pageSize
  const total = table.pageCount * pageSize

  return (
    <div style={{ display: 'flex', marginBottom: core.layout.spacingMedium }}>
      <Button
        appearance="secondary"
        disabled={!table.canPreviousPage}
        icon={<CaretLeftIcon />}
        onClick={handlePrevPage}
        title="Previous page"
      />
      <HorzSpacer />
      <Button
        appearance="secondary"
        disabled={!table.canNextPage}
        icon={<CaretRightIcon />}
        onClick={handleNextPage}
        title="Next page"
      />

      <HorzSpacer />

      <Text.P>
        {cursorStart.toLocaleString()}-{cursorEnd.toLocaleString()} of{' '}
        {total.toLocaleString()}
      </Text.P>

      <HorzSpacer />

      <Dropdown
        appearance="subtle"
        onChange={(
          _evt: React.MouseEvent | React.KeyboardEvent,
          value: string | number | undefined
        ) => {
          table.setPageSize(Number(value))
        }}
        menu={
          <>
            {perPageOptions.map(option => (
              <Dropdown.Item key={option} value={option}>
                {String(option) + ' rows'}
              </Dropdown.Item>
            ))}
          </>
        }
        value={pageSize}
      />
    </div>
  )
}

const UserDataCell: React.FC<CellProps<any>> = props => {
  const { cell } = props
  const { user } = cell.row.original

  return (
    <FlexContainer>
      <Avatar
        alt="avatar"
        name={user.firstName}
        size="xSmall"
        style={{ flexShrink: 0 }}
      />
      <HorzSpacer />
      <span>{String(cell.value)}</span>
    </FlexContainer>
  )
}

const expanderHook = (hooks: Hooks<any>) => {
  hooks.visibleColumns.push(columns => [
    {
      Cell: ExpanderCell,
      Header: ExpanderHeader,
      disableGroupBy: true,
      id: '_expander'
    },
    ...columns
  ])
}

const ExpanderCell: React.FC<CellProps<any>> = props => {
  const { row } = props
  if (!row.canExpand) return null

  const style = {
    paddingLeft: `calc(${core.layout.spacingLarge} * ${row.depth})`
  }

  const icon = row.isExpanded ? <CaretDownIcon /> : <CaretRightIcon />

  return (
    <span {...row.getToggleRowExpandedProps({ style })}>
      <Button
        appearance="flat"
        icon={icon}
        size="xSmall"
        title="Expand/Collapse additional content"
      />
    </span>
  )
}

const ExpanderHeader: React.FC<HeaderProps<any>> = props => {
  const { getToggleAllRowsExpandedProps, isAllRowsExpanded } = props
  const icon = isAllRowsExpanded ? <CaretDownIcon /> : <CaretRightIcon />
  return (
    <span {...getToggleAllRowsExpandedProps()}>
      <Button
        appearance="flat"
        icon={icon}
        size="xSmall"
        title="Expand/Collapse additional content"
        {...getToggleAllRowsExpandedProps()}
      />
    </span>
  )
}

const selectionHook = (hooks: Hooks<any>) => {
  hooks.visibleColumns.push(columns => [
    {
      Cell: SelectionCell,
      Header: SelectionHeader,
      disableGroupBy: true,
      id: '_selection'
    },
    ...columns
  ])
}

const SelectionCell: React.FC<CellProps<any>> = props => {
  const { row } = props
  return <TableCheckbox {...row.getToggleRowSelectedProps()} />
}

const SelectionHeader: React.FC<HeaderProps<any>> = props => {
  const { getToggleAllRowsSelectedProps } = props
  const style = { width: 1 }
  return <TableCheckbox {...getToggleAllRowsSelectedProps({ style })} />
}

interface TableCheckboxProps extends Omit<HTMLPropsFor<'input'>, 'ref'> {
  indeterminate?: boolean
}
const TableCheckbox: React.FC<TableCheckboxProps> = props => {
  const { onChange, ...rest } = props
  return <Checkbox onCheck={onChange} {...rest} />
}
