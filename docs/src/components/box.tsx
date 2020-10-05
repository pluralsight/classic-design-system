import Theme, { useTheme } from '@pluralsight/ps-design-system-theme'
import cx from 'classnames'
import * as React from 'react'

import * as styles from './box.module.css'

export const Box: React.FC<React.HTMLAttributes<HTMLDivElement>> = props => {
  const { className, ...rest } = props
  const themeName = useTheme()

  return (
    <div
      className={cx(
        {
          [styles.box]: true,
          [styles.dark]: themeName === Theme.names.dark,
          [styles.light]: themeName === Theme.names.light
        },
        className
      )}
      {...rest}
    />
  )
}
