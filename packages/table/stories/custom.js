import React from 'react'
import Table from '../react'
import Button from '@pluralsight/ps-design-system-button/react'
import Badge from '@pluralsight/ps-design-system-badge/react'
import Icon from '@pluralsight/ps-design-system-icon/react'
import Switch from '@pluralsight/ps-design-system-switch/react'

const props = {
  headers: [
    { key: 'badge', label: 'BADGE' },
    { key: 'switch', label: 'SWITCH' },
    { key: 'button', label: 'BUTTON' }
  ],
  rows: [
    {
      badge: <Badge color={Badge.colors.green}>Badge</Badge>,
      switch: <Switch checked color={Switch.colors.green} />,
      button: <Button appearance={Button.appearances.stroke}>Button</Button>
    },
    {
      badge: <Badge color={Badge.colors.blue}>Badge</Badge>,
      switch: <Switch checked color={Switch.colors.orange} />,
      button: <Button appearance={Button.appearances.primary}>Click me</Button>
    }
  ]
}

const Custom = () => (
  <Table headers={props.headers}>
    {props.rows.map((item, index) => <Table.Row data={item} key={index} />)}
  </Table>
)

export default Custom
