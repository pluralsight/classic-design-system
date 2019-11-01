import { css } from 'glamor'
import { Heading } from '@pluralsight/ps-design-system-text'
import PropTypes from 'prop-types'
import React from 'react'

import { pageHeadingLayoutCSS as stylesheet } from '../css/index.js'

const styles = {
  actions: _ =>
    css(stylesheet['.psds-page-heading-layout__actions'], {
      '& > *': stylesheet['.psds-page-head-layout__actions > *'],
      '@media (min-width: 769px)': {
        ...stylesheet['@media (min-width: 769px)'][
          '.psds-page-heading-layout__actions'
        ],
        ...{
          '& > *':
            stylesheet['@media (min-width: 769px)'][
              '.psds-page-head-layout__actions > *'
            ],
          '& > * + *':
            stylesheet['@media (min-width: 769px)'][
              '.psds-page-head-layout__actions > * + *'
            ]
        }
      }
    }),
  heading: _ =>
    css(stylesheet['.psds-page-heading-layout__heading'], {
      '@media (min-width: 769px)':
        stylesheet['@media (min-width: 769px)'][
          '.psds-page-heading-layout__heading'
        ]
    }),
  layout: _ => css(stylesheet['.psds-page-heading-layout'])
}

function PageHeadingLayout(props) {
  return (
    <div {...styles.layout(props)}>
      <div {...styles.heading(props)}>
        <Heading size={Heading.sizes.large}>{props.heading}</Heading>
        {Array.isArray(props.actions) && props.actions.length > 0 && (
          <div {...styles.actions(props)}>{props.actions}</div>
        )}
      </div>
      {props.children}
    </div>
  )
}
PageHeadingLayout.displayName = 'PageHeadingLayout'
PageHeadingLayout.propTypes = {
  actions: PropTypes.arrayOf(PropTypes.element),
  children: PropTypes.any,
  heading: PropTypes.element.isRequired
}
PageHeadingLayout.defaultProps = {
  actions: []
}

export default PageHeadingLayout
