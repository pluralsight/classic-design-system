import React from 'react'
import Table from '../react'

const props = {
  headers: [
    { label: 'NAME', key: 'name' },
    { label: 'LANGUAGE', key: 'language' },
    { label: 'LEVEL', key: 'level' },
  ],
  rows: [
    { name: 'John', language: 'Javascript', level: 'Expert' },
    { name: 'Mary', language: 'PHP', level: 'Novice' },
    { name: 'Julian', language: 'Java', level: 'Proficient' }
  ]
}

const RegularTable = () => (
  <Table headers={props.headers}>
    {props.rows.map((item, index) => <Table.Row data={item} key={index} />)}
  </Table>
)

export default RegularTable

