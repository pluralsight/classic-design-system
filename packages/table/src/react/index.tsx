import { useCollapsible } from '@pluralsight/ps-design-system-collapsible'
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
import invariant from 'invariant'
import React from 'react'

import stylesheet from '../css/index'
import { alignments, sorts } from '../vars/index'

const styles = {
  container: (
    themeName: ValueOf<typeof themeNames>,
    opts: { scrollable?: boolean }
  ) => {
    const themeClass = `.psds-theme--${themeName}`

    return compose(
      css(stylesheet['.psds-table__container']),
      css(stylesheet[`.psds-table__container${themeClass}`]),
      opts.scrollable && css(stylesheet['.psds-table__container--scrollable'])
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
  header: (
    themeName: ValueOf<typeof themeNames>,
    opts: {
      align: ValueOf<typeof alignments>
      sortable: boolean
      sticky: boolean
    }
  ) => {
    const stickyClasses = compose(
      css(stylesheet['.psds-table__header--sticky']),
      css(stylesheet[`.psds-table__header--sticky.psds-theme--${themeName}`])
    )
    return compose(
      css(stylesheet['.psds-table__header']),
      css(stylesheet[`.psds-table__header--align-${opts.align}`]),
      opts.sortable && css(stylesheet['.psds-table__header--sortable']),
      opts.sticky && stickyClasses
    )
  },
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
  },
  drawer: () => css(stylesheet['.psds-table__drawer']),
  drawerCell: () => css(stylesheet['.psds-table__drawer__cell']),
  drawerInner: () => css(stylesheet['.psds-table__drawer__inner'])
}

interface TableProps extends HTMLPropsFor<'table'> {
  renderContainer?: typeof defaultRenderContainer
  scrollable?: boolean
}
interface TableStatics {
  Body: typeof TableBody
  Cell: typeof TableCell
  Drawer: typeof TableDrawer
  Head: typeof TableHead
  Header: typeof TableHeader
  Row: typeof TableRow
  alignments: typeof alignments
}
type TableComponent = React.ForwardRefExoticComponent<TableProps> & TableStatics

const Table = React.forwardRef<HTMLTableElement, TableProps>((props, ref) => {
  const {
    renderContainer = defaultRenderContainer,
    scrollable = false,
    ...rest
  } = props
  const themeName = useTheme()

  const containerRef = React.useRef<HTMLDivElement>(null)
  const Container = React.useMemo(() => renderContainer, [renderContainer])

  return (
    <Container
      ref={containerRef}
      {...styles.container(themeName, { scrollable })}
      {...(scrollable && { role: 'region', tabIndex: 0 })}
    >
      <table role="grid" ref={ref} {...styles.table(themeName)} {...rest} />
    </Container>
  )
}) as TableComponent

const defaultRenderContainer = React.forwardRef<
  HTMLDivElement,
  HTMLPropsFor<'div'>
>((props, ref) => <div ref={ref} {...props} />)

const TableBody = React.forwardRef<
  HTMLTableSectionElement,
  HTMLPropsFor<'tbody'>
>((props, ref) => {
  return <tbody ref={ref} {...props} />
})
TableBody.displayName = 'Table.Body'

interface TableCellProps extends HTMLPropsFor<'td'> {
  align?: ValueOf<typeof alignments>
}
const TableCell = React.forwardRef<HTMLTableCellElement, TableCellProps>(
  (props, ref) => {
    const { align = alignments.left, ...rest } = props
    return (
      <td role="gridcell" ref={ref} {...styles.cell({ align })} {...rest} />
    )
  }
)
TableCell.displayName = 'Table.Cell'

const TableHead = React.forwardRef<
  HTMLTableSectionElement,
  HTMLPropsFor<'thead'>
>((props, ref) => {
  const themeName = useTheme()

  return <thead ref={ref} {...styles.head(themeName)} {...props} />
})
TableHead.displayName = 'Table.Head'

interface TableHeaderProps extends HTMLPropsFor<'th'> {
  align?: ValueOf<typeof alignments>
  role: 'columnheader' | 'rowheader'
  scope: 'col' | 'row'
  sort?: boolean | ValueOf<typeof sorts>
  sticky?: boolean
  title?: string
}
const TableHeader = React.forwardRef<
  HTMLTableHeaderCellElement,
  TableHeaderProps
>((props, ref) => {
  const {
    align = alignments.left,
    children,
    sort,
    sticky = false,
    title,
    ...rest
  } = props
  const sortable = isDefined(sort)
  const sorted = !isBoolean(sort)
  const themeName = useTheme()

  if (sortable) {
    const msg =
      'Missing title prop in Table.Header. A title is required when the header is sortable.'

    invariant(title, msg)
  }

  const ariaSort = React.useMemo(() => {
    if (!sorted) return 'none'
    return sort === sorts.asc ? 'ascending' : 'descending'
  }, [sort, sorted])

  const ariaLabel = React.useMemo(() => {
    const options = {
      ascending: 'Ascending sort applied',
      descending: 'Descending sort applied',
      none: 'No sort applied'
    }

    return `${title || ''}: ${options[ariaSort]}`
  }, [ariaSort, title])

  const Icon = React.useMemo(() => {
    const options = {
      ascending: SortAscIcon,
      descending: SortDescIcon,
      none: SortIcon
    }

    return options[ariaSort]
  }, [ariaSort])

  return (
    <th
      ref={ref}
      title={title}
      {...styles.header(themeName, { align, sortable, sticky })}
      {...(sortable && {
        'aria-label': ariaLabel,
        'aria-sort': ariaSort,
        tabIndex: 0
      })}
      {...rest}
    >
      <div>
        {children}
        {sortable && <Icon aria-hidden {...styles.sortIcon()} />}
      </div>
    </th>
  )
})
TableHeader.displayName = 'Table.Header'

interface TableRowProps extends HTMLPropsFor<'tr'> {
  expanded?: boolean
  selected?: boolean
}
const TableRow = React.forwardRef<HTMLTableRowElement, TableRowProps>(
  (props, ref) => {
    const { expanded = true, selected = false, ...rest } = props
    const themeName = useTheme()

    return (
      <tr
        role="row"
        ref={ref}
        {...styles.row(themeName, { expanded, selected })}
        {...rest}
      />
    )
  }
)
TableRow.displayName = 'Table.Row'

interface TableDrawerProps extends Omit<HTMLPropsFor<'tr'>, 'ref'> {
  expanded: boolean
  colSpan: number
  indentWithCell?: boolean
}
const TableDrawer = React.forwardRef<HTMLTableRowElement, TableDrawerProps>(
  (props, ref) => {
    const {
      expanded,
      colSpan,
      children,
      indentWithCell = true,
      ...rest
    } = props
    const { 'aria-hidden': ariaHidden, ref: inner } = useCollapsible(expanded)

    const cSpan = indentWithCell ? colSpan - 1 : colSpan

    return (
      <TableRow
        aria-hidden={ariaHidden}
        expanded={expanded}
        ref={ref}
        {...styles.drawer()}
        {...rest}
      >
        {indentWithCell && <TableCell {...styles.drawerCell()} />}

        <TableCell colSpan={cSpan} {...styles.drawerCell()}>
          <div ref={inner} {...styles.drawerInner()}>
            {children}
          </div>
        </TableCell>
      </TableRow>
    )
  }
)
TableDrawer.displayName = 'Table.Drawer'

Table.Body = TableBody
Table.Cell = TableCell
Table.Head = TableHead
Table.Header = TableHeader
Table.Row = TableRow
Table.Drawer = TableDrawer

Table.alignments = alignments

const isBoolean = (val: unknown) => typeof val === 'boolean'
const isDefined = (val: unknown) => typeof val !== 'undefined'

export default Table
