import { compose, css } from 'glamor'
import PropTypes from 'prop-types'
import React, { Children } from 'react'

import { drawerDisplayName } from '@pluralsight/ps-design-system-drawer'
import filterReactProps from '@pluralsight/ps-design-system-filter-react-props'
import Icon from '@pluralsight/ps-design-system-icon'
import { useTheme } from '@pluralsight/ps-design-system-theme'

import stylesheet from '../css/index.js'
import * as vars from '../vars/index.js'

const drawerDisplayNameRegex = new RegExp(drawerDisplayName)

const styles = {
  cell: (themeName, { align, emphasis }) => {
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
  columnHeader: (themeName, props, { active }) => {
    const { align, onClick } = props
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
  row: (themeName, { _tableHasDrawers }) => {
    const label = 'psds-table__row'

    return compose(
      css(stylesheet[`.${label}`]),
      css(stylesheet[`.${label}.psds-theme--${themeName}`]),
      _tableHasDrawers && css(stylesheet[`.${label}--drawers`])
    )
  },
  table: (themeName, { inDrawer }) => {
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
  const Tag = props.onClick ? 'button' : 'div'

  const active = vars.sorts[props.sort] && typeof props.onClick === 'function'

  const style = props.style || {}
  if (props.flex && !style.flex) style.flex = props.flex

  const handleClick = props.onClick
    ? () => props.onClick(getToggledSort(props))
    : undefined

  return (
    <Tag
      role="columnheader"
      {...styles.columnHeader(themeName, props, { active })}
      {...filterReactProps(props, { tagName: Tag })}
      onClick={handleClick}
      style={style}
    >
      {props.children}
      {props.sort && getSortIcon(props)}
    </Tag>
  )
}

ColumnHeader.displayName = 'Table.ColumnHeader'

ColumnHeader.propTypes = {
  align: PropTypes.oneOf(Object.keys(vars.aligns)),
  children: PropTypes.node,
  flex: PropTypes.string,
  onClick: PropTypes.func,
  sort: PropTypes.oneOf([true, ...Object.keys(vars.sorts)]),
  style: PropTypes.object
}

ColumnHeader.defaultProps = {
  align: vars.aligns.left
}

function Cell(props) {
  const themeName = useTheme()

  const style = props.style || {}
  if (props.flex && !style.flex) style.flex = props.flex

  return (
    <div
      role="cell"
      {...styles.cell(themeName, props)}
      {...filterReactProps(props)}
      style={style}
    />
  )
}

Cell.displayName = 'Table.Cell'

Cell.propTypes = {
  align: PropTypes.oneOf(Object.keys(vars.aligns)),
  emphasis: PropTypes.bool,
  flex: PropTypes.string,
  style: PropTypes.object
}

Cell.defaultProps = {
  align: vars.aligns.left,
  emphasis: false
}

function Row(props) {
  const themeName = useTheme()

  return (
    <div
      role="row"
      {...styles.row(themeName, props)}
      {...filterReactProps(props)}
    />
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
  const { children = [] } = props
  const themeName = useTheme()

  const isDrawer = comp =>
    comp && comp.type && drawerDisplayNameRegex.test(comp.type.displayName)

  const isRow = comp =>
    comp && comp.type && comp.type.displayName === Row.displayName

  const _tableHasDrawers = Children.map(children, isDrawer).some(bool => bool)

  return (
    <div
      role="table"
      {...styles.table(themeName, props)}
      {...filterReactProps(props)}
    >
      {Children.map(children, child =>
        isRow ? React.cloneElement(child, { _tableHasDrawers }) : child
      )}
    </div>
  )
}

Table.propTypes = {
  children: PropTypes.node
}

Table.Row = Row
Table.Cell = Cell
Table.ColumnHeader = ColumnHeader

Table.aligns = vars.aligns
Table.sorts = vars.sorts

export const aligns = vars.aligns
export const sorts = vars.sorts
