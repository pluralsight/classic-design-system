import core from '@pluralsight/ps-design-system-core'
import PropTypes from 'prop-types'

import { SectionHeading } from './index'

const union = obj => <code>{Object.keys(obj).join('|')}</code>

const Table = props => (
  <div>
    <SectionHeading>PropTypes</SectionHeading>
    <table className="table">
      <thead className="head">
        <tr className="headRow">
          <th className="headCell">Name</th>
          <th className="headCell">Type</th>
          <th className="headCell">Required</th>
          <th className="headCell">Default</th>
          <th className="headCell">Description</th>
        </tr>
      </thead>
      <tbody>
        {props.props.map(row => (
          <tr>
            {row.map(
              (cell, i) =>
                [
                  <td className="cell name">
                    <code>{cell}</code>
                  </td>,
                  <td className="cell type">{cell}</td>,
                  <td className="cell required">{cell}</td>,
                  <td className="cell default">{cell}</td>,
                  <td className="cell description">{cell}</td>
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
        padding: ${core.layout.spacingSmall} 0;
        border-bottom: 1px solid ${core.colors.gray01};
      }
      .name :global(code) {
        color: ${core.colors.pink};
      }
      .type :global(code),
      .default :global(code) {
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
