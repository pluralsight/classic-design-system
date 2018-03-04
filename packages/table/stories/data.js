import React from 'react'
import Table from '../react'
import Badge from '@pluralsight/ps-design-system-badge/react'

const innerTable = () => (
  <Table headers={innerData.headers}>
    {innerData.rows.map((row, index) => <Table.Row key={index} data={row} />)}
  </Table>
)

const innerData = {
  headers: [
    { key: 'name', label: 'NAME' },
    { key: 'type', label: 'TYPE' },
    { key: 'hours', label: 'HOURS' },
    { key: 'mentored', label: 'MENTORED' },
    { key: 'level', label: 'LEVEL' }
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

const data = {
  headers: [
    { key: 'name', label: 'NAME', sortable: true },
    { key: 'age', label: 'AGE', sortable: true },
    { key: 'amount', label: 'AMOUNT', sortable: true },
    { key: 'city', label: 'CITY', sortable: true },
    { key: 'badge', label: 'BADGE' }
  ],
  rows: [
    {
      name: 'John',
      age: 19,
      amount: 100,
      city: 'Seoul',
      badge: <Badge color={Badge.colors.gray}>Nice</Badge>,
      children: innerTable()
    },
    {
      name: 'Bob',
      age: 22,
      amount: 200,
      city: 'Los Angeles',
      badge: <Badge color={Badge.colors.green}>Cool</Badge>,
      children: <p>Inner content of Bob, from Los Angeles, age 22</p>
    },
    {
      name: 'Maria',
      age: 26,
      amount: 300,
      city: 'Paris',
      badge: <Badge color={Badge.colors.yellow}>Awesome</Badge>,
      children: <p>Inner content of Maria, from Paris, age 26</p>
    },
    {
      name: 'Zack',
      age: 22,
      amount: 400,
      city: 'Amsterdam',
      badge: <Badge color={Badge.colors.red}>Good</Badge>,
      children: <p>Inner content of Zack, from Amsterdam, age 22</p>
    },
    {
      name: 'Anne',
      age: 50,
      amount: 700,
      city: 'Salvador',
      badge: <Badge color={Badge.colors.blue}>Okay</Badge>,
      children: <p>Inner content of Anne, from Salvador, age 50</p>
    },
    {
      name: 'Louis',
      age: 32,
      amount: 1000,
      city: 'Auckland',
      badge: <Badge color={Badge.colors.gray}>Stunning</Badge>,
      children: <p>Inner content of Louis, from Auckland, age 32</p>
    },
    {
      name: 'Nick',
      age: 40,
      amount: 150,
      city: 'Johannesburg',
      badge: <Badge color={Badge.colors.green}>Great</Badge>,
      children: <p>Inner content of Nick, from Johannesburg, age 40</p>
    }
  ]
}

export default data
