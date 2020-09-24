import { Heading } from '@pluralsight/ps-design-system-text'
import Theme, { useTheme } from '@pluralsight/ps-design-system-theme'
import cx from 'classnames'
import React, { HTMLAttributes } from 'react'

import * as styles from './index.module.css'

interface PrincipleHeaderProps extends HTMLAttributes<HTMLHeadingElement> {
  children: string
}
export const PrincipleHeader: React.FC<PrincipleHeaderProps> = props => {
  return (
    <div className={styles.principalHeader}>
      <Heading size={Heading.sizes.medium}>
        <h3 {...props} />
      </Heading>
      <div className={styles.bar} />
    </div>
  )
}

interface QuoteProps extends HTMLAttributes<HTMLQuoteElement> {
  children: string
}
export const Quote: React.FC<QuoteProps> = props => {
  const theme = useTheme()
  const className = cx({
    [styles.quote]: true,
    [styles.small]: props.children.length > 50,
    [styles.dark]: theme === Theme.names.dark,
    [styles.light]: theme === Theme.names.light
  })

  return <blockquote className={className} {...props} />
}
