import { themeNames, useTheme } from '../../theme'
import { ValueOf, HTMLPropsFor, RefFor } from '../../util'
import glamorDefault, * as glamorExports from 'glamor'
import React from 'react'

import stylesheet from '../css/index'

const glamor = glamorDefault || glamorExports

const styles = {
  bar: () => glamor.css(stylesheet['.psds-tab__list-item__bar']),
  listItem: (active: boolean, themeName: ValueOf<typeof themeNames>) =>
    glamor.css(
      stylesheet['.psds-tab__list-item'],
      stylesheet[`.psds-tab__list-item.psds-theme--${themeName}`],
      active && stylesheet[`.psds-tab__list-item.psds-tab__list-item--active`],
      active &&
        stylesheet[
          `.psds-tab__list-item.psds-tab__list-item--active.psds-theme--${themeName}`
        ]
    ),
  textInner: () => glamor.css(stylesheet['.psds-tab__list-item__text-inner']),
  textWidth: () => glamor.css(stylesheet['.psds-tab__list-item__text'])
}

export interface BaseListItemProps {
  id: string | number
  active?: boolean
}
export interface ListItemAnchorProps
  extends BaseListItemProps,
    Omit<HTMLPropsFor<'a'>, 'id' | 'onClick'> {
  href: string
  onClick?: (i: number, event: React.MouseEvent<HTMLAnchorElement>) => void
}
export interface ListItemButtonProps
  extends BaseListItemProps,
    Omit<HTMLPropsFor<'button'>, 'id' | 'onClick'> {
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
