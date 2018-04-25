import * as glamor from 'glamor'
import Text from '@pluralsight/ps-design-system-text/react'
import PropTypes from 'prop-types'
import React from 'react'

import { PageHeadingLayout as css } from '../css'

const styles = {
  actions: _ =>
    glamor.css(css['.psds-page-heading-layout__actions'], {
      '& > *': css['.psds-page-head-layout__actions > *'],
      '@media (min-width: 769px)': {
        ...css['@media (min-width: 769px)'][
          '.psds-page-heading-layout__actions'
        ],
        ...{
          '& > *':
            css['@media (min-width: 769px)'][
              '.psds-page-head-layout__actions > *'
            ],
          '& > * + *':
            css['@media (min-width: 769px)'][
              '.psds-page-head-layout__actions > * + *'
            ]
        }
      }
    }),
  heading: _ =>
    glamor.css(css['.psds-page-heading-layout__heading'], {
      '@media (min-width: 769px)':
        css['@media (min-width: 769px)']['.psds-page-heading-layout__heading']
    }),
  layout: _ => glamor.css(css['.psds-page-heading-layout'])
}

const PageHeadingLayout = props => (
  <div {...styles.layout(props)}>
    <div {...styles.heading(props)}>
      <Text.Heading size={Text.Heading.sizes.large}>
        {props.heading}
      </Text.Heading>
      {Array.isArray(props.actions) &&
        props.actions.length > 0 && (
          <div {...styles.actions(props)}>{props.actions}</div>
        )}
    </div>
    {props.children}
  </div>
)

PageHeadingLayout.displayName = 'PageHeadingLayout'

PageHeadingLayout.propTypes = {
  actions: PropTypes.arrayOf(PropTypes.element),
  heading: PropTypes.element.isRequired
}
PageHeadingLayout.defaultProps = {
  actions: []
}

export default PageHeadingLayout
