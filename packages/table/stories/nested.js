import React, { Component } from 'react'
import Table from '../react'
import Badge from '@pluralsight/ps-design-system-badge/react'
import Button from '@pluralsight/ps-design-system-button/react'
import PropTypes from 'prop-types'
import { omit } from 'ramda'

const innerProps = {
  headers: [
    { key: 'name', label: 'NAME' },
    { key: 'type', label: 'TYPE' },
    { key: 'hours', label: 'HOURS' },
    { key: 'mentored', label: 'MENTORED' },
    { key: 'level', label: 'LEVEL' },
  ],
  rows: [
    {
      name: 'Javascript',
      type: 'Language',
      hours: '12h',
      mentored: 'yes',
      level: <Badge color={Badge.colors.yellow}>Novice</Badge>
    },
    {
      name: 'Python',
      type: 'Language',
      hours: '30h',
      mentored: 'no',
      level: <Badge color={Badge.colors.green}>Proficient</Badge>
    },
    {
      name: 'MongoDB',
      type: 'Database',
      hours: '5h',
      mentored: 'yes',
      level: <Badge color={Badge.colors.blue}>Expert</Badge>
    }
  ]
}

class InnerTable extends Component {
  render() {
    return (
      <Table headers={this.props.headers}>
        {this.props.rows.map((row, index) => (
          <Table.Row key={index} data={row} />
        ))}
      </Table>
    )
  }
}

const props = {
  headers: [
    { key: 'name', label: 'Name' },
    { key: 'language', label: 'Language' },
    { key: 'level', label: 'Level' },
  ],
  rows: [
    {
      name: 'John',
      language: 'Javascript',
      level: 'Expert',
      children: <InnerTable {...innerProps} />
    },
    {
      name: 'Mary',
      language: 'PHP',
      level: 'Novice',
      children: <Badge color={Badge.colors.yellow}>Novice</Badge>
    },
    {
      name: 'Julian',
      language: 'Java',
      level: 'Proficient',
      children: (
        <Button appearance={Button.appearances.primary}>Click me</Button>
      )
    }
  ]
}

class NestedTable extends Component {
  constructor(props) {
    super(props)
    this.state = { showNestedRow: null }
    this.onRowClick = this.onRowClick.bind(this)
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
    return (
      <Table headers={this.props.headers}>
        {this.props.rows.map((row, index) => this.renderRow(row, index))}
      </Table>
    )
  }
}

const NestedTableWrapper = () => <NestedTable {...props} />

NestedTableWrapper.propTypes = {
  headers: PropTypes.array,
  rows: PropTypes.array
}

export default NestedTableWrapper
export { NestedTable, props }
