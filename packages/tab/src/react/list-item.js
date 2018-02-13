import core from '@pluralsight/ps-design-system-core'
import * as glamor from 'glamor'
import glamorous from 'glamorous'
import PropTypes from 'prop-types'
import React from 'react'
import {
  defaultName as themeDefaultName,
  names as themeNames
} from '@pluralsight/ps-design-system-theme/react'

import css from '../css'

const TextWidth = glamorous.div(css['.psds-tab__list-item__text'])

const Bar = glamorous.span(css['.psds-tab__list-item__bar'])

const ListItem = glamorous.button(
  {
    ...css['.psds-tab__list-item'],
    ':focus': css['.psds-tab__list-item:focus'],
    ':first-child': css['.psds-tab__list-item:first-child']
  },
  props => ({
    // TextWidth
    ':hover div':
      css[
        `.psds-tab__list-item.psds-theme-${
          props.themeName
        }:hover .psds-tab__list-item__text`
      ],
    ':focus div':
      css[
        `.psds-tab__list-item.psds-theme-${
          props.themeName
        }:focus .psds-tab__list-item__text`
      ],
    ':active div':
      css[
        `.psds-tab__list-item.psds-theme-${
          props.themeName
        }:active .psds-tab__list-item__text`
      ],
    // Bar
    ':hover span': css[`.psds-tab__list-item:hover .psds-tab__list-item__bar`],
    ':focus span': css[`.psds-tab__list-item:focus .psds-tab__list-item__bar`],
    ':active span': props.active
      ? css[
          `.psds-tab__list-item.psds-tab__list-item--active:active .psds-tab__list-item__bar`
        ]
      : css[`.psds-tab__list-item:active .psds-tab__list-item__bar`]
  }),
  ({ themeName }) => css[`.psds-tab__list-item.psds-theme--${themeName}`],
  props =>
    props.active
      ? {
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
      : null
)

const ListItemComponent = (props, context) => (
  <ListItem
    role="tab"
    aria-selected={props.active}
    onClick={props.onClick}
    active={props.active}
    innerRef={props.innerRef}
    tabIndex="-1"
    themeName={context.themeName || themeDefaultName}
  >
    <TextWidth>
      {props.children}
      <Bar />
    </TextWidth>
  </ListItem>
)

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
