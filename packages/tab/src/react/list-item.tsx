import {
  names as themeNames,
  useTheme
} from '@pluralsight/ps-design-system-theme'
import { ValueOf } from '@pluralsight/ps-design-system-util'
import { css } from 'glamor'
import React from 'react'

import stylesheet from '../css'

const styles = {
  bar: () => css(stylesheet['.psds-tab__list-item__bar']),
  listItem: (active: boolean, themeName: ValueOf<typeof themeNames>) =>
    css(
      stylesheet['.psds-tab__list-item'],
      stylesheet[`.psds-tab__list-item.psds-theme--${themeName}`],
      active && stylesheet[`.psds-tab__list-item.psds-tab__list-item--active`],
      active &&
        stylesheet[
          `.psds-tab__list-item.psds-tab__list-item--active.psds-theme--${themeName}`
        ]
    ),
  textInner: () => css(stylesheet['.psds-tab__list-item__text-inner']),
  textWidth: () => css(stylesheet['.psds-tab__list-item__text'])
}

interface BaseListItemProps {
  id: string | number
  active?: boolean
  onClick?: (i: number, event: React.MouseEvent) => void
}
export type ListItemButtonTagProps = BaseListItemProps &
  Omit<React.ButtonHTMLAttributes<HTMLButtonElement>, 'id' | 'onClick'>
export type ListItemAnchorTagProps = BaseListItemProps &
  Omit<React.AnchorHTMLAttributes<HTMLAnchorElement>, 'id' | 'onClick'>
type ListItemProps = ListItemButtonTagProps | ListItemAnchorTagProps

const ListItem = React.forwardRef<
  HTMLAnchorElement | HTMLButtonElement,
  ListItemProps
>((props, ref) => {
  const { active, children, ...rest } = props
  const themeName = useTheme()
  return React.createElement(
    'href' in props ? 'a' : 'button',
    {
      ...rest,
      ...styles.listItem(active, themeName),
      'aria-selected': active,
      ref,
      role: 'tab',
      tabIndex: -1
    },
    <div {...styles.textWidth()} tabIndex={-1}>
      <div {...styles.textInner()} tabIndex={-1}>
        {children}
      </div>
      <span {...styles.bar()} />
    </div>
  )
})

export default ListItem
