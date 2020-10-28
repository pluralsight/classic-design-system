import React from 'react'

import { A } from './mdx/links'
import * as styles from './usage.module.css'

interface UsageProps {
  install: string
  import: string
  packageName: string
  version: string
}
export const Usage: React.FC<UsageProps> = props => {
  return (
    <ul className={styles.usage}>
      <Item label="Version">
        <A
          href={`https://github.com/pluralsight/design-system/blob/master/packages/${props.packageName}/CHANGELOG.md`}
        >
          {props.version || 'CHANGELOG'}
        </A>
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
  return (
    <li className={styles.item}>
      <div className={styles.label}>{props.label}</div>
      <div className={styles.value}>
        <code>{props.children}</code>
      </div>
    </li>
  )
}
