import PropTypes from 'prop-types'
import React from 'react'

import Badge from '@pluralsight/ps-design-system-badge'
import {
  colorsBlue,
  colorsPink,
  layout
} from '@pluralsight/ps-design-system-core'
import Table from '@pluralsight/ps-design-system-table'

import { Heading, SectionHeading } from './index.js'

export default function PropTypesTable(props) {
  const { props: propsTable, title = 'PropTypes' } = props

  return (
    <>
      <div className="proptypes">
        <SectionHeading>{title}</SectionHeading>

        <Table className="table">
          {Array.isArray(propsTable)
            ? [
                <ColumnLabels key="thead" />,
                ...propsTable.map((row, i) => (
                  <PropTypesTable.Row {...props} key={`row${i}`} row={row} />
                ))
              ]
            : Object.keys(propsTable).map((componentName, i) => [
                <ComponentHeading key={`head${i}`}>
                  {componentName} PropTypes
                </ComponentHeading>,
                i === 0 && <ColumnLabels key={`labels${i}`} />,
                propsTable[componentName].map((row, j) => (
                  <PropTypesTable.Row {...props} key={`row${j}`} row={row} />
                ))
              ])}
        </Table>
      </div>

      <style jsx>{`
        .proptypes {
          max-width: 100%;
          overflow-x: auto;
        }
        .table {
          width: 100%;
          border-spacing: 0;
          border-collapse: collapse;
          text-align: left;
          margin-top: ${layout.spacingLarge};
        }
      `}</style>
    </>
  )
}
PropTypesTable.propTypes = {
  props: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.object),
    PropTypes.object
  ]),
  title: PropTypes.string
}

function Row(props) {
  const { row } = props

  return (
    <>
      <Table.Row>
        <Table.Cell>
          <code className="nameCode">{row.name}</code>

          {props.row.required ? (
            <>
              <BadgeSpacer />
              <Badge appearance={Badge.appearances.subtle}>Required</Badge>
            </>
          ) : (
            ''
          )}
        </Table.Cell>

        <Table.Cell>
          <div className="maybeCode">{row.value}</div>
        </Table.Cell>

        <Table.Cell>
          <div className="maybeCode">{row.description}</div>
        </Table.Cell>

        <Table.Cell>
          <div className="maybeCode">{row.defaultValue}</div>
        </Table.Cell>
      </Table.Row>

      <style jsx>{`
        .nameCode {
          color: ${colorsPink[8]};
        }
        .maybeCode :global(code) {
          white-space: normal;
          color: ${colorsBlue[8]};
        }
      `}</style>
    </>
  )
}

Row.propTypes = {
  row: PropTypes.shape({
    description: PropTypes.node,
    defaultValue: PropTypes.node,
    name: PropTypes.node,
    required: PropTypes.bool,
    value: PropTypes.node
  })
}

PropTypesTable.Row = Row
PropTypesTable.Row.displayName = 'PropTypesTable.Row'

const row = ([name, value, required, defaultValue, description]) => ({
  name,
  value,
  required,
  defaultValue,
  description
})

PropTypesTable.row = row

const union = obj => <code>{Object.keys(obj).join(' | ')}</code>

PropTypesTable.union = union

const BadgeSpacer = () => <span style={{ width: layout.spacingXSmall }} />

function ColumnLabels() {
  return (
    <Table.Row>
      <Table.ColumnHeader>Name</Table.ColumnHeader>
      <Table.ColumnHeader>Value</Table.ColumnHeader>
      <Table.ColumnHeader>Description</Table.ColumnHeader>
      <Table.ColumnHeader>Default</Table.ColumnHeader>
    </Table.Row>
  )
}

function ComponentHeading(props) {
  return (
    <>
      <div className="cellHeading">
        <Heading size={Heading.sizes.medium}>
          <h2 {...props} />
        </Heading>
      </div>

      <style jsx>{`
        .cellHeading {
          padding-top: ${layout.spacingMedium};
        }
      `}</style>
    </>
  )
}
