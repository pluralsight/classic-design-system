import { layout } from '@pluralsight/ps-design-system-core'
import Avatar from '@pluralsight/ps-design-system-avatar'
import Button from '@pluralsight/ps-design-system-button'
import { MoreIcon } from '@pluralsight/ps-design-system-icon'
import Table from '@pluralsight/ps-design-system-table'
import React from 'react'

const Example: React.FC = (props) => {
  const [users] = React.useState([
    { firstName: 'Lucy', lastName: 'Peck', email: 'lucy.peck@example.com' },
    {
      firstName: 'Jayden',
      lastName: 'Morales',
      email: 'jayden.morales@example.com',
    },
    { firstName: 'Milton', lastName: 'Lane', email: 'milton.lane@example.com' },
  ])

  return (
    <Table>
      <Table.Head>
        <Table.Row>
          <Table.Header role="columnheader" scope="col">
            First name
          </Table.Header>
          <Table.Header role="columnheader" scope="col">
            Last name
          </Table.Header>
          <Table.Header role="columnheader" scope="col">
            Email
          </Table.Header>
          <Table.Header role="columnheader" scope="col"></Table.Header>
        </Table.Row>
      </Table.Head>

      <Table.Body>
        {users.map((user, i) => (
          <Table.Row key={i}>
            <Table.Header role="rowheader" scope="row">
              <FlexContainer>
                <Avatar alt="avatar" name={user.firstName} size="xSmall" />
                <HorzSpacer />
                <span>{user.firstName}</span>
              </FlexContainer>
            </Table.Header>
            <Table.Cell>{user.lastName}</Table.Cell>
            <Table.Cell>{user.email}</Table.Cell>
            <Table.Cell align="right">
              <Button
                icon={<MoreIcon />}
                appearance={Button.appearances.flat}
                size={Button.sizes.small}
              />
            </Table.Cell>
          </Table.Row>
        ))}
      </Table.Body>
    </Table>
  )
}

const FlexContainer: React.FC = (props) => (
  <div style={{ display: 'flex', alignItems: 'center' }} {...props} />
)

const HorzSpacer: React.FC = (props) => (
  <div
    style={{
      display: 'inline-block',
      width: layout.spacingSmall,
    }}
    {...props}
  />
)

export default Example
