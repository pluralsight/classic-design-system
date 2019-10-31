import Badge from '@pluralsight/ps-design-system-badge/react.js'
import core from '@pluralsight/ps-design-system-core'
import PropTypes from 'prop-types'
import React from 'react'
import Table from '@pluralsight/ps-design-system-table'

import { Heading, SectionHeading } from './index.js'

const BadgeSpacer = () => <span style={{ width: core.layout.spacingXSmall }} />

const union = obj => <code>{Object.keys(obj).join(' | ')}</code>

const row = ([name, value, required, defaultValue, description]) => ({
  name,
  value,
  required,
  defaultValue,
  description
})

const PropTypesRow = props => (
  <Table.Row>
    <Table.Cell>
      <code className="nameCode">{props.row.name}</code>
      {props.row.required ? (
        <React.Fragment>
          <BadgeSpacer />
          <Badge appearance={Badge.appearances.subtle}>Required</Badge>
        </React.Fragment>
      ) : (
        ''
      )}
    </Table.Cell>
    <Table.Cell>
      <div className="maybeCode">{props.row.value}</div>
    </Table.Cell>
    <Table.Cell>
      <div className="maybeCode">{props.row.description}</div>
    </Table.Cell>
    <Table.Cell>
      <div className="maybeCode">{props.row.defaultValue}</div>
    </Table.Cell>
    <style jsx>{`
      .nameCode {
        color: ${core.colors.pink};
      }
      .maybeCode :global(code) {
        white-space: normal;
        color: ${core.colors.blue};
      }
    `}</style>
  </Table.Row>
)
PropTypesRow.propTypes = {
  row: PropTypes.shape({
    description: PropTypes.node,
    defaultValue: PropTypes.node,
    name: PropTypes.node,
    required: PropTypes.bool,
    value: PropTypes.node
  })
}

const ColumnLabels = _ => (
  <Table.Row>
    <Table.ColumnHeader>Name</Table.ColumnHeader>
    <Table.ColumnHeader>Value</Table.ColumnHeader>
    <Table.ColumnHeader>Description</Table.ColumnHeader>
    <Table.ColumnHeader>Default</Table.ColumnHeader>
  </Table.Row>
)

const ComponentHeading = props => (
  <div className="cellHeading">
    <Heading size={Heading.sizes.medium}>
      <h2>{props.children}</h2>
    </Heading>
    <style jsx>{`
      .cellHeading {
        padding-top: ${core.layout.spacingMedium};
      }
    `}</style>
  </div>
)
ComponentHeading.propTypes = {
  children: PropTypes.node
}

const PropTypesTable = props => (
  <div className="proptypes">
    <SectionHeading>{props.title || 'PropTypes'}</SectionHeading>

    <Table className="table">
      {Array.isArray(props.props)
        ? [
            <ColumnLabels key="thead" />,
            ...props.props.map((row, i) => (
              <PropTypesRow {...props} key={`row${i}`} row={row} />
            ))
          ]
        : Object.keys(props.props).map((componentName, i) => [
            <ComponentHeading key={`head${i}`}>
              {componentName} PropTypes
            </ComponentHeading>,
            i === 0 && <ColumnLabels key={`labels${i}`} />,
            props.props[componentName].map((row, j) => (
              <PropTypesRow {...props} key={`row${j}`} row={row} />
            ))
          ])}
    </Table>
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
        margin-top: ${core.layout.spacingLarge};
      }
    `}</style>
  </div>
)

PropTypesTable.propTypes = {
  props: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.object),
    PropTypes.object
  ]),
  title: PropTypes.string
}

PropTypesTable.row = row
PropTypesTable.union = union

export default PropTypesTable
