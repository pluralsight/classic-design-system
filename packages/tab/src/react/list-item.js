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

const ListItem = (props, context) => {
  const tagName = props.href ? 'a' : 'button'
  return React.createElement(
    tagName,
    filterReactProps(
      {
        ...props,
        role: 'tab',

        'aria-selected': props.active,
        innerRef: props.innerRef,
        tabIndex: '-1',
        ...styles.listItem({
          ...props,

          themeName: context.themeName || themeDefaultName
        })
      },
      { tagName }
    ),

    <div {...styles.textWidth(props)}>
      {props.children}
      <span {...styles.bar(props)} />
    </div>
  )
}
ListItem.propTypes = {
  active: PropTypes.bool,
  href: PropTypes.string,
  id: PropTypes.oneOfType([PropTypes.string, PropTypes.number]).isRequired,
  onClick: PropTypes.func
}
ListItem.defaultProps = {
  active: false
}
ListItem.contextTypes = {
  themeName: PropTypes.string
}

export default ListItem
