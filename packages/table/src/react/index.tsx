import { compose, css } from 'glamor'
import React from 'react'

import { drawerDisplayName } from '@pluralsight/ps-design-system-drawer'
import {
  SortAscIcon,
  SortDescIcon,
  SortIcon
} from '@pluralsight/ps-design-system-icon'
import {
  useTheme,
  names as themeNames
} from '@pluralsight/ps-design-system-theme'
import { ValueOf, HTMLPropsFor } from '@pluralsight/ps-design-system-util'

import stylesheet from '../css'
import * as vars from '../vars'

const drawerDisplayNameRegex = new RegExp(drawerDisplayName)

const styles = {
  cell: (align: ValueOf<typeof aligns>, emphasis: boolean) => {
    const label = 'psds-table__cell'

    return compose(
      css(stylesheet[`.${label}`]),
      emphasis && css(stylesheet[`.${label}--emphasis`]),
      align && css(stylesheet[`.${label}--align-${align}`])
    )
  },
  columnHeader: (props: {
    themeName: ValueOf<typeof themeNames>
    active: boolean
    align: ValueOf<typeof vars.aligns>
    onClick: boolean
  }) => {
    const label = 'psds-table__column-header'

    return compose(
      css(stylesheet[`.${label}`]),
      css(stylesheet[`.${label}.psds-theme--${props.themeName}`]),
      css(stylesheet[`.${label}--align-${props.align}`]),
      props.active && css(stylesheet[`.${label}--active`]),
      props.active &&
        css(stylesheet[`.${label}--active.psds-theme--${props.themeName}`]),
      props.onClick && css(stylesheet[`.${label}--onclick`]),
      props.onClick &&
        css(stylesheet[`.${label}--onclick.psds-theme--${props.themeName}`])
    )
  },
  columnHeaderButton: () =>
    css(stylesheet['.psds-table__column-header__button']),
  columnHeaderButtonInner: (align: ValueOf<typeof vars.aligns>) => {
    const label = 'psds-table__column-header'
    return compose(
      css(stylesheet[`.${label}__button-inner`]),
      css(stylesheet[`.${label}--align-${align}`])
    )
  },
  columnHeaderIcon: () => css(stylesheet['.psds-table__column-header__icon']),
  row: (themeName: ValueOf<typeof themeNames>, _tableHasDrawers: boolean) => {
    const label = 'psds-table__row'

    return compose(
      css(stylesheet[`.${label}`]),
      css(stylesheet[`.${label}.psds-theme--${themeName}`]),
      _tableHasDrawers && css(stylesheet[`.${label}--drawers`])
    )
  },
  table: (themeName: ValueOf<typeof themeNames>, inDrawer?: boolean) => {
    const label = 'psds-table'

    return compose(
      css(stylesheet[`.${label}`]),
      inDrawer && css(stylesheet[`.${label}--in-drawer`]),
      css(stylesheet[`.${label}.psds-theme--${themeName}`])
    )
  }
}

const SortIconAsc = () => <SortAscIcon {...styles.columnHeaderIcon()} />

const SortIconDesc = () => <SortDescIcon {...styles.columnHeaderIcon()} />

const SortIconDefault = () => <SortIcon {...styles.columnHeaderIcon()} />

const getSortIcon = ({
  sort
}: {
  sort: ValueOf<typeof vars.sorts> | boolean
}) =>
  typeof sort === 'boolean' ? (
    <SortIconDefault />
  ) : (
    {
      [vars.sorts.asc]: <SortIconAsc />,
      [vars.sorts.desc]: <SortIconDesc />
    }[sort]
  )

const getToggledSort = ({
  sort
}: {
  sort: ValueOf<typeof vars.sorts> | boolean
}) =>
  typeof sort === 'boolean'
    ? vars.sorts.asc
    : {
        [vars.sorts.asc]: vars.sorts.desc,
        [vars.sorts.desc]: vars.sorts.asc
      }[sort]

interface ColumnHeaderProps extends HTMLPropsFor<'div'> {
  align?: ValueOf<typeof vars.aligns>
  flex?: string
  onClick?: (evt: React.MouseEvent, sort?: ValueOf<typeof vars.sorts>) => void
  sort?: ValueOf<typeof vars.sorts> | boolean
}

const ColumnHeader: React.FC<ColumnHeaderProps> = ({
  onClick,
  sort,
  flex,
  align = vars.aligns.left,
  ...props
}) => {
  const themeName = useTheme()

  const active =
    typeof sort !== 'boolean' &&
    typeof sort !== 'undefined' &&
    vars.sorts[sort] &&
    typeof onClick === 'function'

  const style = props.style || {}
  if (flex && !style.flex) style.flex = flex

  const handleClick = onClick
    ? (evt: React.MouseEvent) =>
        onClick(evt, sort ? getToggledSort({ sort }) : undefined)
    : undefined
  const children = onClick ? (
    <button {...styles.columnHeaderButton()} onClick={handleClick}>
      <div {...styles.columnHeaderButtonInner(align)}>
        {props.children}
        {sort && getSortIcon({ sort })}
      </div>
    </button>
  ) : (
    <>
      {props.children}
      {sort && getSortIcon({ sort })}
    </>
  )
  return (
    <div
      role="columnheader"
      {...styles.columnHeader({
        themeName,
        active,
        align,
        onClick: Boolean(onClick)
      })}
      {...props}
      style={style}
      {...(sort && {
        'aria-sort':
          sort === vars.sorts.desc
            ? 'descending'
            : sort === vars.sorts.asc
            ? 'ascending'
            : 'none'
      })}
    >
      {children}
    </div>
  )
}

ColumnHeader.displayName = 'Table.ColumnHeader'

interface CellProps extends HTMLPropsFor<'div'> {
  align?: ValueOf<typeof vars.aligns>
  emphasis?: boolean
  flex?: string
}

const Cell: React.FC<CellProps> = ({
  flex,
  emphasis = false,
  align = vars.aligns.left,
  ...props
}) => {
  const style = props.style || {}
  if (flex && !style.flex) style.flex = flex

  return (
    <div
      role="cell"
      {...styles.cell(align, emphasis)}
      {...props}
      style={style}
    />
  )
}

Cell.displayName = 'Table.Cell'

interface RowProps extends HTMLPropsFor<'div'> {
  _tableHasDrawers?: boolean
}

const Row: React.FC<RowProps> = ({ _tableHasDrawers = false, ...props }) => {
  const themeName = useTheme()

  return (
    <div role="row" {...styles.row(themeName, _tableHasDrawers)} {...props} />
  )
}
Row.displayName = 'Table.Row'

interface TableStatics {
  Row: typeof Row
  Cell: typeof Cell
  ColumnHeader: typeof ColumnHeader
  aligns: typeof vars.aligns
  sorts: typeof vars.sorts
}

export interface TableProps extends HTMLPropsFor<'div'> {
  inDrawer?: boolean
}

const Table: React.FC<TableProps> & TableStatics = ({
  children = [],
  inDrawer,
  ...props
}) => {
  const themeName = useTheme()

  const _tableHasDrawers: boolean = React.Children.map(
    children as JSX.Element[],
    child =>
      child && child.type && drawerDisplayNameRegex.test(child.type.displayName)
  ).some(bool => bool)

  return (
    <div role="table" {...styles.table(themeName, inDrawer)} {...props}>
      {React.Children.map(children as JSX.Element[], (child: JSX.Element) =>
        child && child.type && child.type.displayName === Row.displayName
          ? React.cloneElement((child as unknown) as React.ReactElement, {
              _tableHasDrawers
            })
          : child
      )}
    </div>
  )
}

Table.Row = Row
Table.Cell = Cell
Table.ColumnHeader = ColumnHeader

Table.aligns = vars.aligns
Table.sorts = vars.sorts

export const aligns = vars.aligns
export const sorts = vars.sorts

export default Table
