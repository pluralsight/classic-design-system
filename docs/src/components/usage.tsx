import Link from '@pluralsight/ps-design-system-link'
import Theme, { useTheme } from '@pluralsight/ps-design-system-theme'
import cx from 'classnames'
import React from 'react'

import * as styles from './usage.module.css'

interface UsageProps {
  install: string
  import: string
  packageName: string
}
export const Usage: React.FC<UsageProps> = props => {
  return (
    <ul className={styles.usage}>
      <Item label="Version">
        <Link>
          <a
            href={`https://github.com/pluralsight/design-system/blob/master/packages/${props.packageName}/CHANGELOG.md`}
          >
            CHANGELOG
          </a>
        </Link>
      </Item>
      <Item label="Install">{props.install.trim()}</Item>
      <Item label="Import">{props.import.trim()}</Item>
    </ul>
  )
}

interface LabelProps {
  label: string
}
const Item: React.FC<LabelProps> = props => {
  const themeName = useTheme()
  return (
    <li className={styles.item}>
      <div
        className={cx({
          [styles.label]: true,
          [styles.dark]: themeName === Theme.names.dark,
          [styles.light]: themeName === Theme.names.light
        })}
      >
        {props.label}
      </div>
      <div
        className={cx({
          [styles.value]: true,
          [styles.dark]: themeName === Theme.names.dark,
          [styles.light]: themeName === Theme.names.light
        })}
      >
        <code>{props.children}</code>
      </div>
    </li>
  )
}
