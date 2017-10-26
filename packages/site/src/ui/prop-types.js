import Badge from '@pluralsight/ps-design-system-badge/react'
import core from '@pluralsight/ps-design-system-core'
import PropTypes from 'prop-types'

import { SectionHeading } from './index'

const union = obj => <code>{Object.keys(obj).join(' | ')}</code>

const row = ([name, value, required, defaultValue, description]) => ({
  name,
  value,
  required,
  defaultValue,
  description
})

const Table = props => (
  <div className="proptypes">
    <SectionHeading>{props.title || 'PropTypes'}</SectionHeading>
    <table className="table">
      <thead className="head">
        <tr className="headRow">
          <th className="headCell">Name</th>
          <th className="headCell">Value</th>
          <th className="headCell">Description</th>
          <th className="headCell">Default</th>
        </tr>
      </thead>
      <tbody>
        {props.props.map((row, i) => (
          <tr key={i}>
            <td className="cell name">
              <code>{row.name}</code>
              {row.required ? (
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
            <td className="cell type">{row.value}</td>
            <td className="cell description">{row.description}</td>
            <td className="cell default">{row.defaultValue}</td>
          </tr>
        ))}
      </tbody>
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
      .head {
        color: ${core.colors.gray03};
        text-transform: uppercase;
        font-size: ${core.type.fontSizeXSmall};
      }
      .headCell {
        font-weight: ${core.type.fontWeightMedium};
        border-bottom: ${core.layout.spacingXSmall} solid ${core.colors.bone};
        padding-bottom: ${core.layout.spacingSmall};
      }
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
  </div>
)

Table.propTypes = {
  props: PropTypes.arrayOf(PropTypes.object)
}

Table.row = row
Table.union = union

export default Table
