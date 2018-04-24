import { vars as drawerVars } from '@pluralsight/ps-design-system-drawer'
import * as glamor from 'glamor'
import Icon from '@pluralsight/ps-design-system-icon/react'
import {
  defaultName as themeDefaultName,
  names as themeNames
} from '@pluralsight/ps-design-system-theme/react'
import PropTypes from 'prop-types'
import React from 'react'

import css from '../css'
import * as vars from '../vars'

const styles = {
  cell: ({ align, emphasis, themeName }) =>
    glamor.css(
      css['.psds-table__cell'],
      {
        ':first-of-type': css['.psds-table__cell:first-of-type'],
        ':last-of-type': css['.psds-table__cell:last-of-type']
      },
      emphasis && css['.psds-table__cell--emphasis'],
      emphasis && css[`.psds-table__cell--emphasis.psds-theme--${themeName}`],
      align && css[`.psds-table__cell--align-${align}`],
      {
        '& a': css['.psds-table__cell a'],
        '& a:hover': {
          ...css['.psds-table__cell a:hover'],
          ...css[`.psds-table__cell.psds-theme--${themeName} a:hover`]
        },
        '& a:active': {
          ...css['.psds-table__cell a:active'],
          ...css[`.psds-table__cell.psds-theme--${themeName} a:active`]
        },
        '& a:focus': {
          ...css['.psds-table__cell a:focus'],
          ...css[`.psds-table__cell.psds-theme--${themeName} a:focus`]
        }
      }
    ),
  columnHeader: ({ active, align, onClick, sort, themeName }) =>
    glamor.css(
      css['.psds-table__column-header'],
      css[`.psds-table__column-header--align-${align}`],
      { ':first-of-type': css['.psds-table__column-header:first-of-type'] },
      { ':last-of-type': css['.psds-table__column-header:last-of-type'] },
      active && css['.psds-table__column-header--active'],
      active &&
        css[`.psds-table__column-header--active.psds-theme--${themeName}`],
      onClick && {
        ':hover': {
          ...css['.psds-table__column-header--onclick:hover'],
          ...css[
            `.psds-table__column-header--onclick.psds-theme--${themeName}:hover`
          ]
        }
      }
    ),
  columnHeaderIcon: _ => glamor.css(css['.psds-table__column-header__icon']),
  row: ({ _tableHasDrawers, themeName }) =>
    glamor.css(
      css['.psds-table__row'],
      {
        ':first-of-type': css['.psds-table__row:first-of-type']
      },
      css[`.psds-table__row--${themeName}`],
      _tableHasDrawers && css['.psds-table__row--drawers']
    ),
  table: ({ themeName }) =>
    glamor.css(css['.psds-table'], css[`.psds-table.psds-theme--${themeName}`])
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

class ColumnHeader extends React.Component {
  constructor(props) {
    super(props)
    this.handleClick = this.handleClick.bind(this)
  }
  handleClick() {
    const { props } = this
    if (typeof props.onClick === 'function')
      props.onClick(getToggledSort(props))
  }
  render() {
    const { context, props } = this
    const allProps = {
      ...props,
      active: vars.sorts[props.sort] && typeof props.onClick === 'function',
      themeName: context.themeName || themeDefaultName
    }
    const style = allProps.style || {}
    if (
      (!allProps.styles || (allProps.styles && !allProps.styles.flex)) &&
      allProps.flex
    )
      style.flex = allProps.flex
    // TODO: convert to button
    return (
      <div
        {...(allProps.className ? { className: allProps.className } : null)}
        {...styles.columnHeader(allProps)}
        onClick={this.handleClick}
        style={style}
      >
        {allProps.children}
        {allProps.sort && getSortIcon(allProps)}
      </div>
    )
  }
}
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
ColumnHeader.displayName = 'Table.ColumnHeader'
ColumnHeader.contextTypes = {
  themeName: PropTypes.string
}

class Cell extends React.Component {
  render() {
    const { context, props } = this
    const allProps = {
      ...props,
      themeName: context.themeName || themeDefaultName
    }
    const style = allProps.style || {}
    if (
      (!allProps.styles || (allProps.styles && !allProps.styles.flex)) &&
      allProps.flex
    )
      style.flex = allProps.flex
    return (
      <div
        {...styles.cell(allProps)}
        {...(allProps.className ? { className: allProps.className } : null)}
        style={style}
      >
        {allProps.children}
      </div>
    )
  }
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
Cell.contextTypes = {
  themeName: PropTypes.string
}
Cell.displayName = 'Table.Cell'

class Row extends React.Component {
  render() {
    const { context, props } = this
    const allProps = {
      ...props,
      themeName: context.themeName || themeDefaultName
    }
    return (
      <div
        {...styles.row(allProps)}
        {...(allProps.className ? { className: allProps.className } : null)}
        {...(allProps.style ? { style: allProps.style } : null)}
      >
        {allProps.children}
      </div>
    )
  }
}
Row.displayName = 'Table.Row'
Row.propTypes = {
  _tableHasDrawers: PropTypes.bool
}
Row.defaultProps = {
  _tableHasDrawers: false
}
Row.contextTypes = {
  themeName: PropTypes.string
}

class Table extends React.Component {
  render() {
    const { context, props } = this
    const allProps = {
      ...props,
      themeName: context.themeName || themeDefaultName
    }
    const _tableHasDrawers = React.Children.map(
      allProps.children || [],
      child =>
        child &&
        child.type &&
        child.type.displayName == drawerVars.drawerDisplayName
    ).some(bool => bool)
    return (
      <div
        {...styles.table(allProps)}
        {...(props.className ? { className: props.className } : null)}
        {...(props.style ? { style: props.style } : null)}
      >
        {React.Children.map(
          allProps.children || [],
          child =>
            child && child.type && child.type.displayName === Row.displayName
              ? React.cloneElement(child, { _tableHasDrawers })
              : child
        )}
      </div>
    )
  }
}
Table.displayName = 'Table'
Table.contextTypes = {
  themeName: PropTypes.string
}

Table.Row = Row
Table.Cell = Cell
Table.ColumnHeader = ColumnHeader

Table.aligns = vars.aligns
Table.sorts = vars.sorts

export const aligns = vars.aligns
export const sorts = vars.sorts

export default Table
