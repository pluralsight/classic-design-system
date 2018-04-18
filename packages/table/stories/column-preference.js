import React from 'react'
import Table from '../react'

const headers = [
  { label: 'NAME', key: 'name' },
  { label: 'CITY', key: 'city' },
  { label: 'LEVEL', key: 'level' },
]

const rows = [
  { city: 'São Paulo', name: 'John Mayer', description: 'lorem ipsum is a placeholder text commonly used to demonstrate the physical source of the lorem ipsum text', level: 'Expert' },
  { city: 'Rio de Janeiro', name: 'Mary McGayver', description: 'the visual form of a document without relying on meaningful the physical source of the lorem ipsum text', level: 'Novice' },
  { city: 'Brasília', name: 'Julian Assange', description: 'replacing the actual content with placeholder text allows designers the physical source of the lorem ipsum text', level: 'Proficient' },
]

const tableA = {
  headers: [
    { label: 'DESCRIPTION', key: 'description', grow: 2 },
  ].concat(headers),
  rows,
}

const tableB = {
  headers: [
    { label: 'DESCRIPTION', key: 'description', grow: 3 },
  ].concat(headers),
  rows,
}

const tableC = {
  headers: [
    { label: 'DESCRIPTION', key: 'description', grow: 4 },
  ].concat(headers),
  rows,
}

export const grow2 = () => (
  <Table headers={tableA.headers}>
    {tableA.rows.map((item, index) => <Table.Row data={item} key={index} />)}
  </Table>
)

export const grow3 = () => (
  <Table headers={tableB.headers}>
    {tableB.rows.map((item, index) => <Table.Row data={item} key={index} />)}
  </Table>
)

export const grow4 = () => (
  <Table headers={tableC.headers}>
    {tableC.rows.map((item, index) => <Table.Row data={item} key={index} />)}
  </Table>
)