import PropTypes from 'prop-types'
import React from 'react'
import Row from './row'
import Header from './header'
import css from '../css'
import { css as glamorCSS } from 'glamor'

const styles = {
  table: ({ themeName }) =>
    glamorCSS(
      css['.psds-table'],
      themeName === 'dark' && css['.psds-table-dark-theme']
    ),
  line: ({ themeName }) =>
    glamorCSS(
      css['.psds-table-line'],
      themeName === 'light' && css['.psds-table-line-light'],
    )
}

const defaultTheme = 'dark'

class Table extends React.Component {
  getChildContext() {
    const { loading, headers } = this.props
    const { themeName } = this.context

    return {
      loading,
      headers,
      themeName: themeName || defaultTheme,
    }
  }
  
  render() {
    const {
      headers,
      children,
      onSort,
      sortBy,
      orderBy,
      loading,
      className,
    } = this.props
    const { themeName = defaultTheme } = this.context

    return (
      <div className={className || null} {...styles.table({ themeName })}>
        <div {...styles.line({ themeName })}>
          {Header(headers, onSort, sortBy, orderBy, loading, themeName)}
        </div>
        {children}
      </div>
    )
  }
}

Table.defaultProps = {
  loading: null,
  children: null,
  orderBy: 'ASC',
  headers: [],
}

Table.propTypes = {
  className: PropTypes.string,
  headers: PropTypes.array,
  children: PropTypes.node,
  sortBy: PropTypes.string,
  loading: PropTypes.string,
  orderBy: PropTypes.oneOf(['ASC', 'DESC']),
  onSort: PropTypes.func,
}

Table.contextTypes = {
  themeName: PropTypes.oneOf(['dark', 'light']),
  headers: PropTypes.array,
  loading: PropTypes.string,
}

Table.childContextTypes = {
  headers: PropTypes.array,
  loading: PropTypes.string,
  themeName: PropTypes.string,
}

Table.Row = Row

export default Table
