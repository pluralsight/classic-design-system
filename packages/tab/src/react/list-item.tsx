import {
  names as themeNames,
  useTheme
} from '@pluralsight/ps-design-system-theme'
import { PropsOf, RefFor, ValueOf } from '@pluralsight/ps-design-system-util'
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

export interface BaseListItemProps {
  id: string | number
  active?: boolean
}
// TODO: get working then try without helpers
export interface ListItemAnchorProps
  extends BaseListItemProps,
    Omit<PropsOf<'a'>, 'id' | 'onClick'> {
  href: string
  onClick?: (i: number, event: React.MouseEvent<HTMLAnchorElement>) => void
}
export interface ListItemButtonProps
  extends BaseListItemProps,
    Omit<PropsOf<'button'>, 'id' | 'onClick'> {
  href?: undefined
  onClick?: (i: number, event: React.MouseEvent<HTMLButtonElement>) => void
}
type ListItemElement = HTMLButtonElement | HTMLAnchorElement
type ListItemProps = ListItemAnchorProps | ListItemButtonProps
type ListItemComponent = React.ForwardRefExoticComponent<ListItemProps> & {
  (props: ListItemAnchorProps, ref?: RefFor<'a'>): JSX.Element
  (props: ListItemButtonProps, ref?: RefFor<'button'>): JSX.Element
}

const ListItem = React.forwardRef<ListItemElement, ListItemProps>(
  (props, ref) => {
    const { active, children, ...rest } = props
    const themeName = useTheme()
    return React.createElement(
      'href' in props ? 'a' : 'button',
      {
        ...rest,
        ...styles.listItem(active || false, themeName),
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
  }
) as ListItemComponent

export default ListItem
