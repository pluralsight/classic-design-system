import React, { Component } from 'react'
import Table from '../react'
import PropTypes from 'prop-types'
import { omit } from 'ramda'
import data from './data'

class CompleteTable extends Component {
  constructor(props) {
    super(props)
    this.state = { sortBy: '', orderBy: 'ASC', showNestedRow: null, loading: null  }
    this.onSort = this.onSort.bind(this)
    this.onRowClick = this.onRowClick.bind(this)
  }

  onSort({ sortBy, orderBy }) {
    this.setState({ loading: sortBy })
    setTimeout(() => {
      this.setState({
        loading: null,
        sortBy,
        orderBy
      })
    }, 1000)
  }

  sortAlphabetically(a, b) {
    if (a < b) return -1
    if (a > b) return 1
    return 0
  }

  sortNumerically(a, b) {
    return a - b
  }

  sortRows() {
    const { sortBy, orderBy } = this.state
    if (!sortBy) return this.props.rows

    const sorted = this.props.rows.sort((a, b) => {
      return ['name', 'age', 'amount', 'city'].includes(sortBy)
        ? this.sortAlphabetically(a[sortBy], b[sortBy])
        : this.sortNumerically(a[sortBy], b[sortBy])
    })

    return orderBy === 'DESC' ? sorted.reverse() : sorted
  }

  onRowClick(data) {
    this.setState({
      showNestedRow: data.name === this.state.showNestedRow ? null : data.name
    })
  }

  renderRow(row, index) {
    const props = {
      key: index,
      data: omit(['children'], row)
    }

    if (row.children) props.onClick = this.onRowClick

    return (
      <Table.Row {...props}>
        {this.state.showNestedRow === row.name ? row.children || null : null}
      </Table.Row>
    )
  }

  render() {
    const { sortBy, orderBy, loading } = this.state
    const rows = this.sortRows(this.props.rows)

    return (
      <Table
        loading={loading}
        headers={this.props.headers}
        orderBy={orderBy}
        sortBy={sortBy}
        onSort={this.onSort}
      >
        {rows.map((row, index) => this.renderRow(row, index))}
      </Table>
    )
  }
}

const CompleteTableWrapper = () => <CompleteTable {...data} />

CompleteTableWrapper.propTypes = {
  headers: PropTypes.object,
  rows: PropTypes.array
}

export default CompleteTableWrapper
