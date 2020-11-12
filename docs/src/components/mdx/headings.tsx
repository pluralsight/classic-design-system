import * as Text from '@pluralsight/ps-design-system-text'
import cx from 'classnames'
import React, { HTMLAttributes } from 'react'

import { A } from './links'
import * as styles from './index.module.css'

export const H1: React.FC<HTMLAttributes<HTMLHeadingElement>> = props => {
  const className = cx(styles.h1, props.className)

  return (
    <Text.Heading size={Text.Heading.sizes.xlarge} className={className}>
      <h1 {...props}>{props.children}</h1>
    </Text.Heading>
  )
}

const LinkedHeaderText: React.FC<HTMLAttributes<HTMLAnchorElement>> = props =>
  props.id ? (
    <A href={`#${props.id}`} className={styles.headingLink}>
      {props.children}
    </A>
  ) : (
    props.children
  )

export const H2: React.FC<HTMLAttributes<HTMLHeadingElement>> = props => {
  const className = cx(styles.h2, props.className)

  return (
    <Text.Heading size={Text.Heading.sizes.small} className={className}>
      <h2 {...props}>
        <LinkedHeaderText {...props} />
      </h2>
    </Text.Heading>
  )
}

export const H3: React.FC<HTMLAttributes<HTMLHeadingElement>> = props => {
  const className = cx(styles.h3, props.className)

  return (
    <Text.Heading size={Text.Heading.sizes.xsmall} className={className}>
      <h3 {...props}>
        <LinkedHeaderText {...props} />
      </h3>
    </Text.Heading>
  )
}
