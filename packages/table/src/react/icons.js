import React from 'react'
import Icon from '@pluralsight/ps-design-system-icon/react'
import css from '../css'
import { css as glamorCSS } from 'glamor'

const styles = {
  sortIcons: glamorCSS(css['.psds-table-sort-icons']),
  sortIcon: ({ direction }) =>
    glamorCSS(
      css['.psds-table-sort-icon'],
      css[`.psds-table__sort-icon-${direction}`]
    ),
  sortActive: ({ themeName }) =>
    glamorCSS(
      css['.psds-table-sort--active'],
      themeName === 'light' && css['.psds-table-sort-light--active']
    )
}

export const SortIconsDefault = () => (
  <span {...styles.sortIcons}>
    <Icon
      id={Icon.ids.caretDown}
      {...styles.sortIcon({ direction: 'down' })}
      size={Icon.sizes.small}
    />
    <Icon
      id={Icon.ids.caretUp}
      {...styles.sortIcon({ direction: 'up' })}
      size={Icon.sizes.small}
    />
  </span>
)

export const SortIconAsc = ({ themeName }) => (
  <Icon
    id={Icon.ids.caretDown}
    {...styles.sortActive({ themeName })}
    size={Icon.sizes.small}
  />
)

export const SortIconDesc = ({ themeName }) => (
  <Icon
    id={Icon.ids.caretUp}
    {...styles.sortActive({ themeName })}
    size={Icon.sizes.small}
  />
)
