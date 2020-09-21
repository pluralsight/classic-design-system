import DSTable from '@pluralsight/ps-design-system-table'
import React from 'react'

import * as styles from './table.module.css'

export const Table: React.FC = props => {
  return (
    <DSTable className={styles.table}>
      <DSTable.Row>
        <DSTable.ColumnHeader>Name</DSTable.ColumnHeader>
        <DSTable.ColumnHeader>Type</DSTable.ColumnHeader>
        <DSTable.ColumnHeader>Description</DSTable.ColumnHeader>
        <DSTable.ColumnHeader>Default</DSTable.ColumnHeader>
        <DSTable.ColumnHeader>Signature</DSTable.ColumnHeader>
      </DSTable.Row>
      {props.children}
    </DSTable>
  )
}
