import { compose, css } from 'glamor'
import PropTypes from 'prop-types'
import React from 'react'

import { drawerDisplayName } from '@pluralsight/ps-design-system-drawer'
import Icon from '@pluralsight/ps-design-system-icon'
import { useTheme } from '@pluralsight/ps-design-system-theme'

import stylesheet from '../css/index.js'
import * as vars from '../vars/index.js'

const drawerDisplayNameRegex = new RegExp(drawerDisplayName)

const styles = {
  cell: ({ align, emphasis, themeName }) => {
    const label = 'psds-table__cell'

    return compose(
      css(stylesheet[`.${label}`]),
      css(stylesheet[`.${label}.psds-theme--${themeName}`]),
      emphasis && css(stylesheet[`.${label}--emphasis`]),
      emphasis &&
        css(stylesheet[`.${label}--emphasis.psds-theme--${themeName}`]),
      align && css(stylesheet[`.${label}--align-${align}`])
    )
  },
  columnHeader: ({ active, align, onClick, sort, themeName }) => {
    const label = 'psds-table__column-header'

    return compose(
      css(stylesheet[`.${label}`]),
      css(stylesheet[`.${label}.psds-theme--${themeName}`]),
      css(stylesheet[`.${label}--align-${align}`]),
      active && css(stylesheet[`.${label}--active`]),
      active && css(stylesheet[`.${label}--active.psds-theme--${themeName}`]),
      onClick && css(stylesheet[`.${label}--onclick`]),
      onClick && css(stylesheet[`.${label}--onclick.psds-theme--${themeName}`])
    )
  },
  columnHeaderIcon: _ => css(stylesheet['.psds-table__column-header__icon']),
  row: ({ _tableHasDrawers, themeName }) => {
    const label = 'psds-table__row'

    return compose(
      css(stylesheet[`.${label}`]),
      css(stylesheet[`.${label}.psds-theme--${themeName}`]),
      _tableHasDrawers && css(stylesheet[`.${label}--drawers`])
    )
  },
  table: ({ inDrawer, themeName }) => {
    const label = 'psds-table'

    return compose(
      css(stylesheet[`.${label}`]),
      inDrawer && css(stylesheet[`.${label}--in-drawer`]),
      css(stylesheet[`.${label}.psds-theme--${themeName}`])
    )
  }
}

const SortIconAsc = _ => (
  <Icon id={Icon.ids.sortAsc} {...styles.columnHeaderIcon()} />
)
const SortIconDesc = _ => (
  <Icon id={Icon.ids.sortDesc} {...styles.columnHeaderIcon()} />
)
const SortIconDefault = _ => (
  <Icon id={Icon.ids.sort} {...styles.columnHeaderIcon()} />
)

const getSortIcon = props =>
  ({
    [vars.sorts.asc]: <SortIconAsc />,
    [vars.sorts.desc]: <SortIconDesc />
  }[props.sort] || <SortIconDefault />)

const getToggledSort = props =>
  ({
    [vars.sorts.asc]: vars.sorts.desc,
    [vars.sorts.desc]: vars.sorts.asc
  }[props.sort] || vars.sorts.asc)

function ColumnHeader(props) {
  const themeName = useTheme()
  const allProps = {
    ...props,
    active: vars.sorts[props.sort] && typeof props.onClick === 'function',
    themeName
  }

  const { onClick } = allProps
  const style = allProps.style || {}

  if (
    (!allProps.styles || (allProps.styles && !allProps.styles.flex)) &&
    allProps.flex
  ) {
    style.flex = allProps.flex
  }

  return React.createElement(
    onClick ? 'button' : 'div',
    {
      role: 'columnheader',
      ...(allProps.className ? { className: allProps.className } : null),
      ...styles.columnHeader(allProps),
      ...(onClick ? { onClick: _ => onClick(getToggledSort(props)) } : null),
      style
    },
    allProps.children,
    allProps.sort && getSortIcon(allProps)
  )
}

ColumnHeader.displayName = 'Table.ColumnHeader'

/* eslint-disable react/no-unused-prop-types */
ColumnHeader.propTypes = {
  align: PropTypes.oneOf(Object.keys(vars.aligns)),
  children: PropTypes.node,
  flex: PropTypes.string,
  onClick: PropTypes.func,
  sort: PropTypes.oneOf([true, ...Object.keys(vars.sorts)])
}
/* eslint-enable react/no-unused-prop-types */

ColumnHeader.defaultProps = {
  align: vars.aligns.left
}

function Cell(props) {
  const themeName = useTheme()
  const allProps = { ...props, themeName }

  const style = allProps.style || {}
  if (
    (!allProps.styles || (allProps.styles && !allProps.styles.flex)) &&
    allProps.flex
  ) {
    style.flex = allProps.flex
  }

  return (
    <div
      role="cell"
      {...styles.cell(allProps)}
      {...(allProps.className ? { className: allProps.className } : null)}
      style={style}
    >
      {allProps.children}
    </div>
  )
}
Cell.propTypes = {
  align: PropTypes.oneOf(Object.keys(vars.aligns)),
  emphasis: PropTypes.bool,
  flex: PropTypes.string
}
Cell.defaultProps = {
  align: vars.aligns.left,
  emphasis: false
}
Cell.displayName = 'Table.Cell'

function Row(props) {
  const themeName = useTheme()
  const allProps = { ...props, themeName }

  return (
    <div
      role="row"
      {...styles.row(allProps)}
      {...(allProps.className ? { className: allProps.className } : null)}
      {...(allProps.style ? { style: allProps.style } : null)}
    >
      {allProps.children}
    </div>
  )
}
Row.displayName = 'Table.Row'
Row.propTypes = {
  _tableHasDrawers: PropTypes.bool
}
Row.defaultProps = {
  _tableHasDrawers: false
}

export default function Table(props) {
  const themeName = useTheme()
  const allProps = { ...props, themeName }

  const _tableHasDrawers = React.Children.map(
    allProps.children || [],
    child =>
      child && child.type && drawerDisplayNameRegex.test(child.type.displayName)
  ).some(bool => bool)

  return (
    <div
      role="table"
      {...styles.table(allProps)}
      {...(allProps.className ? { className: allProps.className } : null)}
      {...(allProps.style ? { style: allProps.style } : null)}
    >
      {React.Children.map(allProps.children || [], child =>
        child && child.type && child.type.displayName === Row.displayName
          ? React.cloneElement(child, { _tableHasDrawers })
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
