import React from 'react'
import PropTypes from 'prop-types'
import css from '../css'
import { css as glamorCSS } from 'glamor'

const styles = {
  rowContainer: ({ clickable, showChildren, themeName }) =>
    glamorCSS(
      themeName === 'dark' &&
        glamorCSS(
          css['.psds-table-row-container-dark'],
          clickable && {
            ':hover': css['.psds-table-row-container-dark-clickable:hover']
          },
          showChildren && css['.psds-table-row-container-dark-clickable--open']
        ),
      themeName === 'light' &&
        glamorCSS(
          css['.psds-table-row-container-light'],
          clickable && {
            ':hover': css['.psds-table-row-container-light-clickable:hover']
          },
          showChildren && css['.psds-table-row-container-light-clickable--open']
        ),
      css['.psds-table-row-container'],
      clickable && css['.psds-table-row-container-clickable'],
      showChildren && css['.psds-table-row-container-clickable--open']
    ),
  row: glamorCSS(css['.psds-table-row']),
  cell: ({ index, themeName }) =>
    glamorCSS(
      css['.psds-table-column'],
      themeName === 'light' && css['.psds-table-column-light']
    ),
  rowNested: ({ themeName }) =>
    glamorCSS(
      css['.psds-table-row-nested'],
      themeName === 'light' && css['.psds-table-row-nested-light']
    ),
  cellNested: ({ themeName }) =>
    glamorCSS(
      themeName === 'dark' && css['.psds-table-row-nested-cell-dark'],
      themeName === 'light' && css['.psds-table-row-nested-cell-light']
    )
}

const Cell = (cell, index, grow, themeName) => {
  const extraProps = {}

  if(grow)
    Object.assign(extraProps, {
      style: {
        flexGrow: grow
      }
    })

  return (
    <div {...styles.cell({ index, themeName })} {...extraProps} key={index}>
      {cell}
    </div>
  )
}

const handleRowClick = (data, onClick) => event => onClick(data)

const RowNested = ({ children, themeName }) => (
  <div {...styles.rowNested({ themeName })}>
    <div {...styles.cellNested({ themeName })}>{children}</div>
  </div>
)

const noop = () => {}

const Row = ({ data, children, onClick }, { themeName, headers, loading }) => {
  const clickEvent = !loading && onClick ? onClick : noop

  return (
    <div
      {...styles.rowContainer({
        clickable: !!onClick,
        showChildren: !!children,
        themeName
      })}
    >
      <div {...styles.row} onClick={handleRowClick(data, clickEvent)}>
        {headers.map((header, index) => Cell(data[header.key] || '', index, header.grow, themeName))}
      </div>
      {children && RowNested({ children, themeName })}
    </div>
  )
}

Row.contextTypes = {
  headers: PropTypes.array,
  loading: PropTypes.string,
  themeName: PropTypes.oneOf(['dark', 'light'])
}

Row.propTypes = {
  data: PropTypes.object,
  children: PropTypes.node,
  onClick: PropTypes.func
}

export default Row
