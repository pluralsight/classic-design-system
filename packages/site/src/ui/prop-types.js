import Badge from '@pluralsight/ps-design-system-badge/react'
import core from '@pluralsight/ps-design-system-core'
import PropTypes from 'prop-types'

import { SectionHeading } from './index'

const requiredColumnIndex = 2

const union = obj => <code>{Object.keys(obj).join(' | ')}</code>

const Table = props => (
  <div>
    <SectionHeading>{props.title || 'PropTypes'}</SectionHeading>
    <table className="table">
      <thead className="head">
        <tr className="headRow">
          <th className="headCell">Name</th>
          <th className="headCell">Value</th>
          <th className="headCell">Default</th>
          <th className="headCell">Description</th>
        </tr>
      </thead>
      <tbody>
        {props.props.map((row, i) => (
          <tr key={i}>
            {row.map(
              (cell, i, rows) =>
                [
                  <td className="cell name" key={i}>
                    <code>{cell}</code>
                    {rows[requiredColumnIndex] ? (
                      <Badge
                        appearance={Badge.appearances.stroke}
                        css={{ marginLeft: core.layout.spacingXXSmall }}
                      >
                        Required
                      </Badge>
                    ) : (
                      ''
                    )}
                  </td>,
                  <td className="cell type" key={i}>
                    {cell}
                  </td>,
                  null,
                  <td className="cell default" key={i}>
                    {cell}
                  </td>,
                  <td className="cell description" key={i}>
                    {cell}
                  </td>
                ][i]
            )}
          </tr>
        ))}
      </tbody>
    </table>
    <style jsx>{`
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
      .default :global(code) {
        white-space: normal;
        color: ${core.colors.blue};
      }
    `}</style>
  </div>
)

Table.propTypes = {
  props: PropTypes.arrayOf(
    PropTypes.array // TODO: try to type each element
  )
}

Table.union = union

export default Table
