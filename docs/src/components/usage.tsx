import Link from '@pluralsight/ps-design-system-link'
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
      <Item label="Install">{props.install}</Item>
      <Item label="Import">{props.import}</Item>
    </ul>
  )
}

interface LabelProps {
  label: string
}
const Item: React.FC<LabelProps> = props => {
  return (
    <li className={styles.item}>
      <div className={styles.label}>{props.label}</div>
      <div className={styles.value}>
        <code>{props.children}</code>
      </div>
    </li>
  )
}
