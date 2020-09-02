import cx from 'classnames'
import React, { useState } from 'react'
import { Helmet } from 'react-helmet'

import Theme from '@pluralsight/ps-design-system-theme'

import SideNav from '../side-nav'

import styles from './styles.module.css'

interface Props {
  sideNav: React.ReactNode
}

const Frame: React.FC<Props> = (props) => {
  const { children, sideNav = <SideNav /> } = props

  const [theme] = useState<keyof Theme.names>(Theme.names.light)

  return (
    <Theme name={theme}>
      <div
        className={cx({
          [styles.frame]: true,
          [styles.darkTheme]: theme === Theme.names.dark,
          [styles.lightTheme]: theme === Theme.names.light,
        })}
      >
        <Helmet>
          <link
            rel="stylesheet"
            href="https://cloud.typography.com/6966154/6397212/css/fonts.css"
          />
        </Helmet>

        <aside className={styles.aside}>{sideNav}</aside>

        <main className={styles.main}>{children}</main>
      </div>
    </Theme>
  )
}

export default Frame
