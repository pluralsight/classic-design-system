import React from 'react'
import css from '../css'
import { css as glamorCSS } from 'glamor'
import CircularProgress from '@pluralsight/ps-design-system-circularprogress/react'
import { SortIconsDefault, SortIconAsc, SortIconDesc } from './icons'

const orderTypes = {
  ASC: SortIconAsc,
  DESC: SortIconDesc,
  DEFAULT: SortIconsDefault
}

const styles = {
  cell: ({ active, sortable, index, themeName, isLoading }) =>
    glamorCSS(
      css['.psds-table-header'],      
      sortable && themeName === 'light' && {':hover': css['.psds-table-header-light:hover']},
      sortable && themeName === 'dark' && {':hover': css['.psds-table-header-dark:hover']},
      sortable && css['.psds-table-sortable-header'],
      (isLoading || active) && css['.psds-table-header--active'],
      themeName === 'light' && css['.psds-table-header-light'],
      (active || isLoading) && themeName === 'light' && css['.psds-table-header-light--active']
    ),
  controls: ({ active, isLoading }) =>
    glamorCSS(
      css['.psds-table-header-controls'],
      (!isLoading && active) && css['.psds-table-header-controls--active'],
    ),
}

const handleCellClick = (isSortable, sortBy, header, orderBy, onSort = () => {}) => {
  if (!isSortable) return

  const isSameHeader = sortBy === header
  let order

  if(isSameHeader) {
    order = orderBy === 'ASC' ? 'DESC' : 'ASC'
  } else {
    order = 'ASC'
  }

  return () => onSort({
    sortBy: header,
    orderBy: order,
  })
}

const noop = () => {}

const Cell = ({
  item,
  onSort,
  sortBy,
  orderBy,
  sortIcon,
  active,
  index,
  loading,
  themeName
}) => {
  const isLoading = loading === item.key
  const extraProps = {
    onClick: !!loading ? noop : handleCellClick(item.sortable, sortBy, item.key, orderBy, onSort)
  }

  if(item.grow)
    Object.assign(extraProps, {
      style: {
        flexGrow: item.grow
      }
    })

  return (
    <div
      {...styles.cell({ active, sortable: item.sortable, index, themeName, isLoading })}
      {...extraProps}>
        {item.label}
        <div {...styles.controls({ active, isLoading })}>
          {isLoading ? (
              <CircularProgress size={CircularProgress.sizes.small} />
          ) : item.sortable ? sortIcon({ themeName }) : null}
        </div>
    </div>
  )
}

const Header = (headers, onSort, sortBy, orderBy, loading, themeName) => {

  return headers.map((header, index) => (
    <Cell
      key={index}
      index={index}
      item={header}
      sortBy={sortBy}
      orderBy={orderBy}
      onSort={onSort}
      active={sortBy === header.key}
      themeName={themeName}
      loading={loading}
      sortIcon={sortBy === header.key ? orderTypes[orderBy] : orderTypes.DEFAULT}
    />
  ))
}

export default Header
