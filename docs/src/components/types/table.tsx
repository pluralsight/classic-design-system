import DSTable from '@pluralsight/ps-design-system-table'
import React from 'react'

import * as styles from './table.module.css'

export const Table: React.FC = props => {
  return (
    <DSTable className={styles.table} scrollable={false}>
      <DSTable.Head>
        <DSTable.Row>
          <DSTable.Header>Name</DSTable.Header>
          <DSTable.Header>Type</DSTable.Header>
          <DSTable.Header>Description</DSTable.Header>
          <DSTable.Header>Default</DSTable.Header>
        </DSTable.Row>
      </DSTable.Head>
      <DSTable.Body>{props.children}</DSTable.Body>
    </DSTable>
  )
}
