import Badge from '@pluralsight/ps-design-system-badge'
import Table from '@pluralsight/ps-design-system-table'
import * as Text from '@pluralsight/ps-design-system-text'
import React from 'react'

import * as styles from './prop.module.css'

interface PropProps {
  name: string
  type: React.ReactNode
  desc: React.ReactNode
  default?: React.ReactNode
  required?: boolean
}
export const Prop: React.FC<PropProps> = (props) => {
  return (
    <>
      <Table.Row>
        <Table.Cell>
          <code className={styles.nameCode}>{props.name}</code>

          {props.required ? (
            <span className={styles.required}>
              <Badge appearance={Badge.appearances.subtle}>Required</Badge>
            </span>
          ) : (
            ''
          )}
        </Table.Cell>

        <Table.Cell>
          <Text.Code>{props.type}</Text.Code>
        </Table.Cell>

        <Table.Cell>{props.desc}</Table.Cell>

        <Table.Cell>
          <Text.Code>{props.default}</Text.Code>
        </Table.Cell>
      </Table.Row>
    </>
  )
}
