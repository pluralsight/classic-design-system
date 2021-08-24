import { ValueOf } from '@pluralsight/ps-design-system-util'
import React from 'react'
import { alignments, sorts } from './dist/esm/vars/index'
interface TableProps
  extends React.DetailedHTMLProps<
    React.TableHTMLAttributes<HTMLTableElement>,
    HTMLTableElement
  > {
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
declare type TableComponent = React.ForwardRefExoticComponent<TableProps> &
  TableStatics
declare const Table: TableComponent
declare const defaultRenderContainer: React.ForwardRefExoticComponent<
  React.HTMLAttributes<HTMLDivElement> & React.RefAttributes<HTMLDivElement>
>
declare const TableBody: React.ForwardRefExoticComponent<
  React.HTMLAttributes<HTMLTableSectionElement> &
    React.RefAttributes<HTMLTableSectionElement>
>
interface TableCellProps extends React.HTMLAttributes<HTMLTableCellElement> {
  align?: ValueOf<typeof alignments>
  colSpan?: number
}
declare const TableCell: React.ForwardRefExoticComponent<
  TableCellProps & React.RefAttributes<HTMLTableCellElement>
>
declare const TableHead: React.ForwardRefExoticComponent<
  React.HTMLAttributes<HTMLTableSectionElement> &
    React.RefAttributes<HTMLTableSectionElement>
>
interface TableHeaderProps
  extends React.HTMLAttributes<HTMLTableHeaderCellElement> {
  align?: ValueOf<typeof alignments>
  role: 'columnheader' | 'rowheader'
  scope: 'col' | 'row'
  sort?: boolean | ValueOf<typeof sorts>
  sticky?: boolean
  title?: string
}
declare const TableHeader: React.ForwardRefExoticComponent<
  TableHeaderProps & React.RefAttributes<HTMLTableHeaderCellElement>
>
interface TableRowProps extends React.HTMLAttributes<HTMLTableRowElement> {
  expanded?: boolean
  selected?: boolean
}
declare const TableRow: React.ForwardRefExoticComponent<
  TableRowProps & React.RefAttributes<HTMLTableRowElement>
>
interface TableDrawerProps
  extends Omit<React.HTMLAttributes<HTMLTableRowElement>, 'ref'> {
  expanded: boolean
  colSpan: number
  indentWithCell?: boolean
}
declare const TableDrawer: React.ForwardRefExoticComponent<
  TableDrawerProps & React.RefAttributes<HTMLTableRowElement>
>
export default Table
