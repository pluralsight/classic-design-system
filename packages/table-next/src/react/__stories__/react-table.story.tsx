/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable @typescript-eslint/restrict-template-expressions */
/* eslint-disable react/jsx-key */
/* eslint-disable react/jsx-handler-names */

import Avatar from '@pluralsight/ps-design-system-avatar'
import Button from '@pluralsight/ps-design-system-button'
import * as core from '@pluralsight/ps-design-system-core'
import Checkbox from '@pluralsight/ps-design-system-checkbox'
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
import * as Text from '@pluralsight/ps-design-system-text'
import { HTMLPropsFor } from '@pluralsight/ps-design-system-util'

import SearchInput from '@pluralsight/ps-design-system-searchinput'
import { Meta, Story } from '@storybook/react/types-6-0'
import React, { useMemo } from 'react'
import {
  CellProps,
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

import Table from '..'

import { generateNestedUserRows } from './seed'
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

export const Advanced: Story = () => {
  const columns = useMemo(
    () => [
      {
        Cell: UserDataCell,
        Header: 'User',
        accessor: ({ user }: any) => `${user.firstName} ${user.lastName}`
      },
      {
        Header: 'Company',
        accessor: 'user.company.name'
      },
      {
        Header: 'Job',
        accessor: 'user.job.title'
      },
      {
        Header: 'Handle',
        accessor: 'user.handle'
      }
    ],
    []
  )

  const data = useMemo(() => generateNestedUserRows(200, 4), [])

  const plugins = [
    useGlobalFilter,
    useSortBy,
    useExpanded,
    usePagination,
    useRowSelect
  ]
  const hooks = [expanderHook, selectionHook]
  const initialState = { pageSize: 50 }
  const table = useTable({ columns, data, initialState }, ...plugins, ...hooks)

  const showBulkActions = useMemo(
    () => Object.keys(table.state.selectedRowIds).length > 0,
    [table.state.selectedRowIds]
  )

  return (
    <TableLayout
      actions={showBulkActions && <BulkActions />}
      filters={
        <SearchFilter
          onChange={(_e, next) => table.setGlobalFilter(next)}
          value={table.state.globalFilter}
        />
      }
      pager={<TablePager table={table} />}
    >
      <Table {...table.getTableProps()}>
        <Table.Head>
          {table.headerGroups.map(group => (
            <Table.Row {...group.getHeaderGroupProps()}>
              {group.headers.map(column => {
                const sortable = column.canSort
                const sort = column.isSorted
                  ? column.isSortedDesc
                    ? 'desc'
                    : 'asc'
                  : column.canSort
                const style = ['_expander', '_selection'].includes(column.id)
                  ? { width: 1 }
                  : {}

                return (
                  <Table.Header
                    {...column.getHeaderProps(column.getSortByToggleProps())}
                    sort={sortable ? sort : undefined}
                    style={style}
                  >
                    {column.render('Header')}
                  </Table.Header>
                )
              })}
            </Table.Row>
          ))}
        </Table.Head>

        <Table.Body {...table.getTableBodyProps()}>
          {table.page.map(row => {
            table.prepareRow(row)

            return (
              <Table.Row selected={row.isSelected} {...row.getRowProps()}>
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
const BulkActions: React.FC = () => {
  return (
    <>
      <Button appearance="secondary" icon={<MoveIcon />}>
        Move to team
      </Button>

      <HorzSpacer />

      <Button appearance="secondary" icon={<ChatIcon />}>
        Send message
      </Button>
    </>
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

interface TablePagerProps {
  perPageOptions?: number[]
  table: TableInstance
}
const TablePager: React.FC<TablePagerProps> = props => {
  const { perPageOptions = [10, 50, 100], table } = props
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
        onChange={(_evt, value) => {
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
