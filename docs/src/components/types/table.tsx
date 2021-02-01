import DSTable from '@pluralsight/ps-design-system-table'
import React from 'react'

import * as styles from './table.module.css'

export const TableContext = React.createContext(true)
export const Table = ({ defaultColumn = true, ...props }) => {
  return (
    <TableContext.Provider value={defaultColumn}>
      <DSTable className={styles.table} scrollable={false}>
        <DSTable.Head>
          <DSTable.Row>
            <DSTable.Header role="columnheader" scope="col">
              Name
            </DSTable.Header>
            <DSTable.Header role="columnheader" scope="col">
              Type
            </DSTable.Header>
            <DSTable.Header role="columnheader" scope="col">
              Description
            </DSTable.Header>
            {defaultColumn ? (
              <DSTable.Header role="columnheader" scope="col">
                Default
              </DSTable.Header>
            ) : null}
          </DSTable.Row>
        </DSTable.Head>

        <DSTable.Body>{props.children}</DSTable.Body>
      </DSTable>
    </TableContext.Provider>
  )
}
