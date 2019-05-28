/* eslint-disable react/prop-types */

import * as glamor from 'glamor'
import PropTypes from 'prop-types'
import React from 'react'

import * as drawerVars from '@pluralsight/ps-design-system-drawer/vars'
import Icon from '@pluralsight/ps-design-system-icon/react'
import { withTheme } from '@pluralsight/ps-design-system-theme/react'

import css from '../css'
import * as vars from '../vars'

const drawerDisplayNameRegex = new RegExp(drawerVars.drawerDisplayName)

const styles = {
  cell: ({ align, emphasis, themeName }) =>
    glamor.css(
      css['.psds-table__cell'],
      emphasis && css['.psds-table__cell--emphasis'],
      emphasis && css[`.psds-table__cell--emphasis.psds-theme--${themeName}`],
      align && css[`.psds-table__cell--align-${align}`]
    ),
  columnHeader: ({ active, align, onClick, sort, themeName }) =>
    glamor.css(
      css['.psds-table__column-header'],
      css[`.psds-table__column-header.psds-theme--${themeName}`],
      css[`.psds-table__column-header--align-${align}`],
      active && css['.psds-table__column-header--active'],
      active &&
        css[`.psds-table__column-header--active.psds-theme--${themeName}`],
      onClick && css['.psds-table__column-header--onclick']
    ),
  columnHeaderIcon: _ => glamor.css(css['.psds-table__column-header__icon']),
  row: ({ _tableHasDrawers, themeName }) =>
    glamor.css(
      css['.psds-table__row'],
      css[`.psds-table__row--${themeName}`],
      _tableHasDrawers && css['.psds-table__row--drawers']
    ),
  table: ({ inDrawer, themeName }) =>
    glamor.css(
      css['.psds-table'],
      inDrawer && css['.psds-table--in-drawer'],
      css[`.psds-table.psds-theme--${themeName}`]
    )
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

class _ColumnHeader extends React.Component {
  constructor(props) {
    super(props)
    this.handleClick = this.handleClick.bind(this)
  }

  handleClick() {
    const { onClick } = this.props
    if (typeof onClick === 'function') onClick(getToggledSort(this.props))
  }

  render() {
    const { props } = this

    const allProps = {
      ...props,
      active: vars.sorts[props.sort] && typeof props.onClick === 'function'
    }
    const style = allProps.style || {}

    if (
      (!allProps.styles || (allProps.styles && !allProps.styles.flex)) &&
      allProps.flex
    ) {
      style.flex = allProps.flex
    }

    return React.createElement(
      props.onClick ? 'button' : 'div',
      {
        role: 'columnheader',
        ...(allProps.className ? { className: allProps.className } : null),
        ...styles.columnHeader(allProps),
        ...(props.onClick
          ? { onClick: _ => props.onClick(getToggledSort(props)) }
          : null),
        style
      },
      allProps.children,
      allProps.sort && getSortIcon(allProps)
    )
  }
}

const ColumnHeader = withTheme(_ColumnHeader)
ColumnHeader.displayName = 'Table.ColumnHeader'

ColumnHeader.propTypes = {
  align: PropTypes.oneOf(Object.keys(vars.aligns)),
  children: PropTypes.string.isRequired,
  flex: PropTypes.string,
  onClick: PropTypes.func,
  sort: PropTypes.oneOf([true, ...Object.keys(vars.sorts)])
}

ColumnHeader.defaultProps = {
  align: vars.aligns.left
}

class _Cell extends React.Component {
  render() {
    const { props } = this
    const style = props.style || {}
    if ((!props.styles || (props.styles && !props.styles.flex)) && props.flex)
      style.flex = props.flex
    return (
      <div
        role="cell"
        {...styles.cell(props)}
        {...(props.className ? { className: props.className } : null)}
        style={style}
      >
        {props.children}
      </div>
    )
  }
}
const Cell = withTheme(_Cell)
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

class _Row extends React.Component {
  render() {
    const { props } = this
    return (
      <div
        role="row"
        {...styles.row(props)}
        {...(props.className ? { className: props.className } : null)}
        {...(props.style ? { style: props.style } : null)}
      >
        {props.children}
      </div>
    )
  }
}
const Row = withTheme(_Row)
Row.displayName = 'Table.Row'
Row.propTypes = {
  _tableHasDrawers: PropTypes.bool
}
Row.defaultProps = {
  _tableHasDrawers: false
}

class Table extends React.Component {
  render() {
    const { props } = this

    const _tableHasDrawers = React.Children.map(
      props.children || [],
      child =>
        child &&
        child.type &&
        drawerDisplayNameRegex.test(child.type.displayName)
    ).some(bool => bool)

    return (
      <div
        role="table"
        {...styles.table(props)}
        {...(props.className ? { className: props.className } : null)}
        {...(props.style ? { style: props.style } : null)}
      >
        {React.Children.map(props.children || [], child =>
          child && child.type && child.type.displayName === Row.displayName
            ? React.cloneElement(child, { _tableHasDrawers })
            : child
        )}
      </div>
    )
  }
}
Table.displayName = 'Table'
Table.propTypes = {
  inDrawer: PropTypes.bool
}
Table.defaultProps = {
  inDrawer: false
}

Table.Row = Row
Table.Cell = Cell
Table.ColumnHeader = ColumnHeader

Table.aligns = vars.aligns
Table.sorts = vars.sorts

export const aligns = vars.aligns
export const sorts = vars.sorts

export default withTheme(Table)
