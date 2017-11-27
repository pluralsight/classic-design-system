import Badge from '@pluralsight/ps-design-system-badge/react'
import core from '@pluralsight/ps-design-system-core'
import PropTypes from 'prop-types'

import { Heading, SectionHeading } from './index'

const union = obj => <code>{Object.keys(obj).join(' | ')}</code>

const row = ([name, value, required, defaultValue, description]) => ({
  name,
  value,
  required,
  defaultValue,
  description
})

const Row = props => (
  <tr>
    <td className="cell name">
      <code>{props.row.name}</code>
      {props.row.required ? (
        <Badge
          appearance={Badge.appearances.stroke}
          css={{ marginLeft: core.layout.spacingXXSmall }}
        >
          Required
        </Badge>
      ) : (
        ''
      )}
    </td>
    <td className="cell type">{props.row.value}</td>
    <td className="cell description">{props.row.description}</td>
    <td className="cell default">{props.row.defaultValue}</td>
    <style jsx>{`
      .cell {
        padding: ${core.layout.spacingSmall} ${core.layout.spacingXXSmall}
          ${core.layout.spacingSmall} 0;
        border-bottom: 1px solid ${core.colors.gray01};
      }
      .name :global(code) {
        color: ${core.colors.pink};
      }
      .type :global(code),
      .default :global(code),
      .description :global(code) {
        white-space: normal;
        color: ${core.colors.blue};
      }
    `}</style>
  </tr>
)

const ColumnLabels = _ => (
  <tr className="headRow">
    <th className="headCell">Name</th>
    <th className="headCell">Value</th>
    <th className="headCell">Description</th>
    <th className="headCell">Default</th>
    <style jsx>{`
      .headRow {
        color: ${core.colors.gray03};
        text-transform: uppercase;
        font-size: ${core.type.fontSizeXSmall};
      }
      .headCell {
        font-weight: ${core.type.fontWeightMedium};
        border-bottom: ${core.layout.spacingXSmall} solid ${core.colors.bone};
        padding-bottom: ${core.layout.spacingSmall};
      }
    `}</style>
  </tr>
)

const Divider = _ => (
  <tr>
    <td colSpan="4" />
    <style jsx>{`
      border-bottom: ${core.layout.spacingXSmall} solid ${core.colors.bone};
    `}</style>
  </tr>
)

const ComponentHeading = props => (
  <tr>
    <td className="cellHeading" colSpan="4">
      <Heading size={Heading.sizes.medium}>
        <h2>{props.children}</h2>
      </Heading>
    </td>
    <style jsx>{`
      .cellHeading {
        padding-top: ${core.layout.spacingMedium};
      }
    `}</style>
  </tr>
)

const Table = props => (
  <div className="proptypes">
    <SectionHeading>{props.title || 'PropTypes'}</SectionHeading>
    <table className="table">
      {Array.isArray(props.props) ? (
        [
          <thead key="thead">
            <ColumnLabels />
          </thead>,
          <tbody key="tbody">
            {props.props.map((row, i) => (
              <Row {...props} key={`row${i}`} row={row} />
            ))}
          </tbody>
        ]
      ) : (
        <tbody>
          {Object.keys(props.props).map((componentName, i) => [
            <ComponentHeading key={`head${i}`}>
              {componentName} PropTypes
            </ComponentHeading>,
            i > 0 && <Divider key={`divider${i}`} />,
            i === 0 && <ColumnLabels key={`labels${i}`} />,
            props.props[componentName].map((row, j) => (
              <Row {...props} key={`row${j}`} row={row} />
            ))
          ])}
        </tbody>
      )}
    </table>
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

Table.propTypes = {
  props: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.object),
    PropTypes.object
  ])
}

Table.row = row
Table.union = union

export default Table
