import Theme, { useTheme } from '@pluralsight/ps-design-system-theme'
import cx from 'classnames'
import React from 'react'

import * as styles from './intro.module.css'

export const Intro: React.FC = props => {
  const themeName = useTheme()
  return (
    <div
      className={cx({
        [styles.intro]: true,
        [styles.dark]: themeName === Theme.names.dark,
        [styles.light]: themeName === Theme.names.light
      })}
      {...props}
    />
  )
}
