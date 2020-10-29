import * as Text from '@pluralsight/ps-design-system-text'
import cx from 'classnames'
import React, { HTMLAttributes } from 'react'

import * as styles from './index.module.css'

export const BlockQuote: React.FC<HTMLAttributes<HTMLQuoteElement>> = props => {
  const className = cx(styles.blockquote, props.className)

  return (
    <blockquote className={className}>
      <Text.P>{props.children}</Text.P>
    </blockquote>
  )
}
