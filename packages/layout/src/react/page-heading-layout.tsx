import glamorDefault, * as glamorExports from 'glamor'
import { Heading } from '@pluralsight/ps-design-system-text'
import React from 'react'

import { pageHeadingLayoutCSS as stylesheet } from '../css/index'

const glamor = glamorDefault || glamorExports

const styles = {
  actions: () => {
    const label = 'psds-page-heading-layout__actions'

    return glamor.compose(
      glamor.css(stylesheet[`.${label}`]),

      glamor.media(
        '(min-width: 769px)',
        glamor.css(stylesheet['@media (min-width: 769px)'][`.${label}`])
      )
    )
  },
  heading: () => {
    const label = 'psds-page-heading-layout__heading'

    return glamor.compose(
      glamor.css(stylesheet[`.${label}`]),

      glamor.media(
        '(min-width: 769px)',
        glamor.css(stylesheet['@media (min-width: 769px)'][`.${label}`])
      )
    )
  },
  layout: () => glamor.css(stylesheet['.psds-page-heading-layout'])
}

interface PageHeadingLayoutProps extends React.HTMLAttributes<HTMLDivElement> {
  actions?: React.ReactNode[]
  heading: React.ReactNode
}
const PageHeadingLayout: React.FC<PageHeadingLayoutProps> = props => {
  const { actions = [], heading, ...rest } = props
  return (
    <div {...styles.layout()} {...rest}>
      <div {...styles.heading()}>
        <Heading size={Heading.sizes.large}>{heading}</Heading>
        {Array.isArray(actions) && actions.length > 0 && (
          <div {...styles.actions()}>{actions}</div>
        )}
      </div>
      {props.children}
    </div>
  )
}

export default PageHeadingLayout
