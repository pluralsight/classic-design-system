import React from 'react'

import Button from '@pluralsight/ps-design-system-button'
import {
  SocialGithubIcon,
  ExternalLinkIcon,
  ListIcon
} from '@pluralsight/ps-design-system-icon'
import * as styles from './usage.module.css'

interface UsageProps {
  figmaUrl: string
  install: string
  import: string
  packageName: string
  version: string
}
export const Usage: React.FC<UsageProps> = props => {
  return (
    <>
      <ul className={styles.links}>
        <li>
          <Button
            appearance="secondary"
            href={`https://github.com/pluralsight/design-system/blob/master/packages/${props.packageName}`}
            target="_blank"
            size="small"
            icon={<SocialGithubIcon />}
          >
            Source
          </Button>
        </li>
        <li>
          <Button
            appearance="secondary"
            href={`https://github.com/pluralsight/design-system/blob/master/packages/${props.packageName}/CHANGELOG.md`}
            target="_blank"
            size="small"
            icon={<ListIcon />}
          >
            Changelog
          </Button>
        </li>
        <li>
          <Button
            appearance="secondary"
            href={`https://www.npmjs.com/package/@pluralsight/ps-design-system-${props.packageName}`}
            target="_blank"
            size="small"
            icon={<ExternalLinkIcon />}
          >
            NPM
          </Button>
        </li>
        <li>
          <Button
            appearance="secondary"
            href={`https://bundlephobia.com/package/@pluralsight/ps-design-system-${props.packageName}`}
            target="_blank"
            size="small"
            icon={<ExternalLinkIcon />}
          >
            Bundle size
          </Button>
        </li>
        <li>
          <Button
            appearance="secondary"
            href={`${props.figmaUrl}`}
            target="_blank"
            size="small"
            icon={<ExternalLinkIcon />}
          >
            Figma
          </Button>
        </li>
      </ul>
      <ul className={styles.usage}>
        <Item label="Install">{props.install.trim()}</Item>
        <Item label="Import">{props.import.trim()}</Item>
      </ul>
    </>
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
