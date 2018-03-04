import React, { Component } from 'react'
import Table from '../react'
import PropTypes from 'prop-types'

const props = {
  headers: [
    { key: 'name', label: 'NAME', sortable: true },
    { key: 'age', label: 'AGE', sortable: true },
    { key: 'amount', label: 'AMOUNT', sortable: true },
    { key: 'city', label: 'CITY', sortable: true },
  ],
  rows: [
    { name: 'John', age: 19, amount: 100, city: 'Seoul' },
    { name: 'Bob', age: 15, amount: 200, city: 'Los Angeles' },
    { name: 'Maria', age: 26, amount: 300, city: 'Paris' },
    { name: 'Zack', age: 22, amount: 400, city: 'Amsterdam' },
    { name: 'Anne', age: 50, amount: 700, city: 'Salvador' },
    { name: 'Louis', age: 32, amount: 1000, city: 'Auckland' },
    { name: 'Nick', age: 40, amount: 150, city: 'Johannesburg' }
  ]
}

class SortableTable extends Component {
  constructor(props) {
    super(props)
    this.state = { sortBy: '', orderBy: 'ASC', loading: null }
    this.onSort = this.onSort.bind(this)
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
      return ['name', 'city'].includes(sortBy)
        ? this.sortAlphabetically(a[sortBy], b[sortBy])
        : this.sortNumerically(a[sortBy], b[sortBy])
    })

    return orderBy === 'DESC' ? sorted.reverse() : sorted
  }

  renderRow(row, index) {
    return <Table.Row key={index} data={row} />
  }

  render() {
    const { sortBy, orderBy, loading } = this.state
    const { headers, rows } = this.props

    return (
      <Table
        loading={loading}
        headers={headers}
        sortBy={sortBy}
        orderBy={orderBy}
        onSort={this.onSort}>
        {this.sortRows(rows).map((row, index) => this.renderRow(row, index))}
      </Table>
    )
  }
}

SortableTable.propTypes = {
  headers: PropTypes.array,
  rows: PropTypes.array
}

const SortableTableWrapper = () => <SortableTable {...props} />

export default SortableTableWrapper
