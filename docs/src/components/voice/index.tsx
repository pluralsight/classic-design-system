import { Heading } from '@pluralsight/ps-design-system-text'
import cx from 'classnames'
import React, { Children, HTMLAttributes } from 'react'

import * as styles from './index.module.css'

interface CenteredExampleProps extends HTMLAttributes<HTMLDivElement> {}
export const CenteredExample: React.FC<CenteredExampleProps> = props => {
  return <div className={styles.centeredExample} {...props} />
}

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
  children: React.ReactNode
}
export const Quote: React.FC<QuoteProps> = props => {
  const innerText = Children.map(props.children, child => {
    if (typeof child === 'string') return child
  }).join(' ')

  const className = cx({
    [styles.quote]: true,
    [styles.small]: innerText.length > 50
  })

  return <blockquote className={className} {...props} />
}

export const QuoteList: React.FC<HTMLAttributes<HTMLUListElement>> = props => (
  <ul {...props} className={styles.quoteList} />
)
