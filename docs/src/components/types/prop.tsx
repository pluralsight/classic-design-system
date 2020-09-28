import React from 'react'
import Badge from '@pluralsight/ps-design-system-badge'
import Table from '@pluralsight/ps-design-system-table'
import * as Text from '@pluralsight/ps-design-system-text'
import Theme, { useTheme } from '@pluralsight/ps-design-system-theme'
import { colorsPink, colorsBlue } from '@pluralsight/ps-design-system-core'

import * as styles from './prop.module.css'

interface PropProps {
  name: string
  type: React.ReactNode
  desc: React.ReactNode
  default?: React.ReactNode
  required?: boolean
}
export const Prop: React.FC<PropProps> = props => {
  const themeName = useTheme()
  return (
    <>
      <Table.Row>
        <Table.Cell>
          <code
            className={styles.nameCode}
            style={
              {
                '--color':
                  themeName === Theme.names.light
                    ? colorsPink[8]
                    : colorsPink[4]
              } as React.CSSProperties
            }
          >
            {props.name}
          </code>

          {props.required ? (
            <span className={styles.required}>
              <Badge appearance={Badge.appearances.subtle}>Required</Badge>
            </span>
          ) : (
            ''
          )}
        </Table.Cell>

        <Table.Cell>
          <code
            className={styles.typeCode}
            style={
              {
                '--color':
                  themeName === Theme.names.light
                    ? colorsBlue[8]
                    : colorsBlue[4]
              } as React.CSSProperties
            }
          >
            {props.type}
          </code>
        </Table.Cell>

        <Table.Cell className={styles.desc}>{props.desc}</Table.Cell>

        <Table.Cell>
          <code
            className={styles.defaultCode}
            style={
              {
                '--color':
                  themeName === Theme.names.light
                    ? colorsBlue[8]
                    : colorsBlue[4]
              } as React.CSSProperties
            }
          >
            {props.default}
          </code>
        </Table.Cell>
      </Table.Row>
    </>
  )
}
