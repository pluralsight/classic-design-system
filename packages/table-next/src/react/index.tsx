import {
  SortAscIcon,
  SortDescIcon,
  SortIcon
} from '@pluralsight/ps-design-system-icon'
import {
  names as themeNames,
  useTheme
} from '@pluralsight/ps-design-system-theme'
import { HTMLPropsFor, ValueOf } from '@pluralsight/ps-design-system-util'
import { compose, css } from 'glamor'
import React, { forwardRef } from 'react'

import stylesheet from '../css'
import { alignments, sorts } from '../vars'

const styles = {
  container: (
    themeName: ValueOf<typeof themeNames>,
    opts: { scrollable?: boolean }
  ) => {
    const themeClass = `.psds-theme--${themeName}`

    return compose(
      css(stylesheet['.psds-table__container']),
      css(stylesheet[`.psds-table__container${themeClass}`]),
      opts.scrollable &&
        compose(
          css(stylesheet['.psds-table__container--scrollable']),
          css(stylesheet[`.psds-table__container--scrollable${themeClass}`])
        )
    )
  },
  table: (themeName: ValueOf<typeof themeNames>) =>
    compose(
      css(stylesheet['.psds-table']),
      css(stylesheet[`.psds-table.psds-theme--${themeName}`])
    ),
  cell: (opts: { align: ValueOf<typeof alignments> }) =>
    compose(
      css(stylesheet['.psds-table__cell']),
      css(stylesheet[`.psds-table__cell--align-${opts.align}`])
    ),
  head: (themeName: ValueOf<typeof themeNames>) =>
    compose(
      css(stylesheet['.psds-table__head']),
      css(stylesheet[`.psds-table__head.psds-theme--${themeName}`])
    ),
  header: (opts: {
    align: ValueOf<typeof alignments>
    sortable: boolean
    sticky: boolean
  }) =>
    compose(
      css(stylesheet['.psds-table__header']),
      css(stylesheet[`.psds-table__header--align-${opts.align}`]),
      opts.sortable && css(stylesheet['.psds-table__header--sortable']),
      opts.sticky && css(stylesheet['.psds-table__header--sticky'])
    ),
  sortIcon: () => css(stylesheet['.psds-table__header__sort-icon']),
  row: (
    themeName: ValueOf<typeof themeNames>,
    opts: { expanded: boolean; selected: boolean }
  ) => {
    const collapsed = !opts.expanded
    const themeClass = `.psds-theme--${themeName}`

    return compose(
      css(stylesheet[`.psds-table__row${themeClass}`]),
      collapsed && css(stylesheet['.psds-table__row--collapsed']),
      opts.selected &&
        css(stylesheet[`.psds-table__row--selected${themeClass}`])
    )
  }
}

interface TableProps extends HTMLPropsFor<'table'> {
  renderContainer?: (props: unknown) => React.ReactElement
  scrollable?: boolean
}
interface TableStatics {
  Body: typeof TableBody
  Cell: typeof TableCell
  Head: typeof TableHead
  Header: typeof TableHeader
  Row: typeof TableRow
}
type TableComponent = React.ForwardRefExoticComponent<TableProps> & TableStatics

const Table = forwardRef<HTMLTableElement, TableProps>((props, ref) => {
  const {
    renderContainer: Container = defaultRenderContainer,
    scrollable = true,
    ...rest
  } = props
  const themeName = useTheme()

  return (
    <Container
      {...styles.container(themeName, { scrollable })}
      {...(scrollable && { role: 'region', tabIndex: 0 })}
    >
      <table ref={ref} role="table" {...styles.table(themeName)} {...rest} />
    </Container>
  )
}) as TableComponent

const defaultRenderContainer: React.FC = props => <div {...props} />

const TableBody = forwardRef<HTMLTableSectionElement, HTMLPropsFor<'tbody'>>(
  (props, ref) => {
    return <tbody ref={ref} {...props} />
  }
)
TableBody.displayName = 'Table.Body'

interface TableCellProps extends HTMLPropsFor<'td'> {
  align?: ValueOf<typeof alignments>
}
const TableCell = forwardRef<HTMLTableCellElement, TableCellProps>(
  (props, ref) => {
    const { align = alignments.left, ...rest } = props
    return <td ref={ref} {...styles.cell({ align })} {...rest} />
  }
)
TableCell.displayName = 'Table.Cell'

const TableHead = forwardRef<HTMLTableSectionElement, HTMLPropsFor<'thead'>>(
  (props, ref) => {
    const themeName = useTheme()

    return <thead ref={ref} {...styles.head(themeName)} {...props} />
  }
)
TableHead.displayName = 'Table.Head'

interface TableHeaderProps extends HTMLPropsFor<'th'> {
  align?: ValueOf<typeof alignments>
  sort?: boolean | ValueOf<typeof sorts>
  sticky?: boolean
}
const TableHeader = forwardRef<HTMLTableHeaderCellElement, TableHeaderProps>(
  (props, ref) => {
    const {
      align = alignments.left,
      children,
      sort,
      sticky = false,
      ...rest
    } = props
    const sortable = isDefined(sort)
    const sorted = !isBoolean(sort)

    let Icon = SortIcon
    if (sorted) Icon = sort === sorts.desc ? SortDescIcon : SortAscIcon

    return (
      <th ref={ref} {...styles.header({ align, sortable, sticky })} {...rest}>
        {children}
        {sortable && <Icon {...styles.sortIcon()} />}
      </th>
    )
  }
)
TableHeader.displayName = 'Table.Header'

interface TableRowProps extends HTMLPropsFor<'tr'> {
  expanded?: boolean
  selected?: boolean
}
const TableRow = forwardRef<HTMLTableRowElement, TableRowProps>(
  (props, ref) => {
    const { expanded = true, selected = false, ...rest } = props
    const themeName = useTheme()

    return (
      <tr
        ref={ref}
        {...styles.row(themeName, { expanded, selected })}
        {...rest}
      />
    )
  }
)
TableRow.displayName = 'Table.Row'

Table.Body = TableBody
Table.Cell = TableCell
Table.Head = TableHead
Table.Header = TableHeader
Table.Row = TableRow

const isBoolean = (val: unknown) => typeof val === 'boolean'
const isDefined = (val: unknown) => typeof val !== 'undefined'

export default Table
