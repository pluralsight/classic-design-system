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
        '& a:hover': css['.psds-table__cell a:hover'],
        '& a:active': css['.psds-table__cell a:active'],
        '& a:hover': css[`.psds-table__cell.psds-theme--${themeName} a:hover`],
        '& a:active': css[`.psds-table__cell.psds-theme--${themeName} a:active`]
      }
    ),
  columnHeader: ({ onClick, sort, themeName }) =>
    glamor.css(
      css['.psds-table__column-header'],
      { ':first-of-type': css['.psds-table__column-header:first-of-type'] },
      { ':last-of-type': css['.psds-table__column-header:last-of-type'] },
      onClick && css['.psds-table__column-header--onclick'],
      onClick &&
        css[`.psds-table__column-header--onclick.psds-theme--${themeName}`],
      onClick && {
        ':hover': {
          ...css['.psds-table__column-header--onclick:hover'],
          ...css[
            `.psds-table__column-header--onclick.psds-theme--${themeName}:hover`
          ]
        }
      }
    ),
  columnHeaderText: _ => glamor.css(css['.psds-table__column-header__text']),
  row: ({ _tableHasDrawers }) =>
    glamor.css(
      css['.psds-table__row'],
      {
        ':first-of-type': css['.psds-table__row:first-of-type']
      },
      _tableHasDrawers && css['.psds-table__row--drawers']
    ),
  table: ({ themeName }) =>
    glamor.css(css['.psds-table'], css[`.psds-table.psds-theme--${themeName}`])
}

const SortIconAsc = _ => <Icon id={Icon.ids.sortAsc} />
const SortIconDesc = _ => <Icon id={Icon.ids.sortDesc} />
const SortIconDefault = _ => <Icon id={Icon.ids.sort} />

// TODO: handle style and className on every component
const getSortIcon = props =>
  ({
    [vars.columnHeaderSorts.asc]: <SortIconAsc />,
    [vars.columnHeaderSorts.desc]: <SortIconDesc />
  }[props.sort] || <SortIconDefault />)

const getToggledSort = props =>
  ({
    [vars.columnHeaderSorts.asc]: vars.columnHeaderSorts.desc,
    [vars.columnHeaderSorts.desc]: vars.columnHeaderSorts.asc
  }[props.sort] || vars.columnHeaderSorts.asc)

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
        {...styles.columnHeader(allProps)}
        onClick={this.handleClick}
        style={style}
      >
        <span {...styles.columnHeaderText(allProps)}>{allProps.children}</span>
        {allProps.sort && getSortIcon(allProps)}
      </div>
    )
  }
}
ColumnHeader.propTypes = {
  children: PropTypes.string.isRequired,
  flex: PropTypes.string,
  onClick: PropTypes.func,
  sort: PropTypes.oneOf([true, ...Object.keys(vars.columnHeaderSorts)])
}
ColumnHeader.defaultProps = {}
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
      <div {...styles.cell(allProps)} style={style}>
        {allProps.children}
      </div>
    )
  }
}
Cell.propTypes = {
  emphasis: PropTypes.bool,
  flex: PropTypes.string
}
Cell.defaultProps = {
  emphasis: false
}
Cell.contextTypes = {
  themeName: PropTypes.string
}
Cell.displayName = 'Table.Cell'

class Row extends React.Component {
  render() {
    const { props } = this
    return <div {...styles.row(props)}>{props.children}</div>
  }
}
Row.displayName = 'Table.Row'
Row.propTypes = {
  _tableHasDrawers: PropTypes.bool
}
Row.defaultProps = {
  _tableHasDrawers: false
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
      <div {...styles.table(allProps)}>
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
Table.propTypes = {}
Table.defaultProps = {}
Table.contextTypes = {
  themeName: PropTypes.string
}

Table.Row = Row
Table.Cell = Cell
Table.ColumnHeader = ColumnHeader

Table.cellAligns = vars.cellAligns
Table.columnHeaderSorts = vars.columnHeaderSorts

export const cellAligns = vars.cellAligns
export const columnHeaderSorts = vars.columnHeaderSorts

export default Table
