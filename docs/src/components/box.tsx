import cx from 'classnames'
import * as React from 'react'

import * as styles from './box.module.css'

export const Box: React.FC<React.HTMLAttributes<HTMLDivElement>> = props => {
  const { className, ...rest } = props

  return <div className={cx(styles.box, className)} {...rest} />
}
