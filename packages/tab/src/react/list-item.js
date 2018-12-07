import filterReactProps from '@pluralsight/ps-design-system-filter-react-props'
import * as glamor from 'glamor'
import PropTypes from 'prop-types'
import React from 'react'
import { defaultName as themeDefaultName } from '@pluralsight/ps-design-system-theme/react'

import css from '../css'

const styles = {
  bar: _ => glamor.css(css['.psds-tab__list-item__bar']),
  listItem: props =>
    glamor.css(
      css['.psds-tab__list-item'],
      {
        ':focus': css['.psds-tab__list-item:focus'],
        ':first-child': css['.psds-tab__list-item:first-child'],

        // TextWidth
        ':hover div':
          css[
            `.psds-tab__list-item.psds-theme--${
              props.themeName
            }:hover .psds-tab__list-item__text`
          ],
        ':focus div':
          css[
            `.psds-tab__list-item.psds-theme--${
              props.themeName
            }:focus .psds-tab__list-item__text`
          ],
        ':active div':
          css[
            `.psds-tab__list-item.psds-theme--${
              props.themeName
            }:active .psds-tab__list-item__text`
          ],
        // Bar
        ':hover span':
          css[`.psds-tab__list-item:hover .psds-tab__list-item__bar`],
        ':focus span':
          css[`.psds-tab__list-item:focus .psds-tab__list-item__bar`],
        ':active span': props.active
          ? css[
              `.psds-tab__list-item.psds-tab__list-item--active:active .psds-tab__list-item__bar`
            ]
          : css[`.psds-tab__list-item:active .psds-tab__list-item__bar`]
      },
      css[`.psds-tab__list-item.psds-theme--${props.themeName}`],
      props.active && {
        // TextWidth
        ':hover div':
          css[
            `.psds-tab__list-item.psds-tab__list-item--active.psds-theme--${
              props.themeName
            }:hover .psds-tab__list-item__text`
          ],
        ':focus div':
          css[
            `.psds-tab__list-item.psds-tab__list-item--active.psds-theme--${
              props.themeName
            }:focus .psds-tab__list-item__text`
          ],
        '& div':
          css[
            `.psds-tab__list-item.psds-tab__list-item--active.psds-theme--${
              props.themeName
            } .psds-tab__list-item__text`
          ],
        // Bar
        ':hover span':
          css[
            `.psds-tab__list-item.psds-tab__list-item--active:hover .psds-tab__list-item__bar`
          ],
        ':focus span':
          css[
            `.psds-tab__list-item.psds-tab__list-item--active:focus .psds-tab__list-item__bar`
          ],
        '& span':
          css[
            `.psds-tab__list-item.psds-tab__list-item--active .psds-tab__list-item__bar`
          ]
      }
    ),
  textWidth: _ => glamor.css(css['.psds-tab__list-item__text'])
}

const ListItem = props => {
  return <button {...filterReactProps(props)} {...styles.listItem(props)} />
}

const ListItemComponent = (props, context) => {
  const listItemProps = {
    role: 'tab',
    'aria-selected': props.active,
    onClick: props.onClick,
    active: props.active,
    id: props.id,
    innerRef: props.innerRef,
    tabIndex: '-1',
    themeName: context.themeName || themeDefaultName,
    ...(props.style ? { style: props.style } : null),
    ...(props.className ? { className: props.className } : null)
  }
  return (
    <ListItem {...listItemProps}>
      <div {...styles.textWidth(props)}>
        {props.children}
        <span {...styles.bar(props)} />
      </div>
    </ListItem>
  )
}

ListItemComponent.propTypes = {
  active: PropTypes.bool,
  id: PropTypes.oneOfType([PropTypes.string, PropTypes.number]).isRequired,
  onClick: PropTypes.func
}
ListItemComponent.defaultProps = {
  active: false
}
ListItemComponent.contextTypes = {
  themeName: PropTypes.string
}

export default ListItemComponent
