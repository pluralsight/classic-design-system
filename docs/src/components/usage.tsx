import React from 'react'

import Button from '@pluralsight/ps-design-system-button'
import Icon, {
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
            icon={
              <Icon>
                <svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path
                    fillRule="evenodd"
                    clipRule="evenodd"
                    d="M4.25 5.5C4.25 3.15279 6.15279 1.25 8.5 1.25H15.5C17.8472 1.25 19.75 3.15279 19.75 5.5C19.75 6.95165 19.0222 8.23331 17.9116 9C19.0222 9.7667 19.75 11.0484 19.75 12.5C19.75 14.8472 17.8472 16.75 15.5 16.75C14.4512 16.75 13.4912 16.3701 12.75 15.7405V19.5C12.75 21.8472 10.8472 23.75 8.5 23.75C6.15279 23.75 4.25 21.8472 4.25 19.5C4.25 18.0484 4.97779 16.7667 6.0884 16C4.97779 15.2333 4.25 13.9516 4.25 12.5C4.25 11.0484 4.97779 9.7667 6.0884 9C4.97779 8.2333 4.25 6.95164 4.25 5.5ZM8.5 15.25H11.25V9.75H8.5C6.98122 9.75 5.75 10.9812 5.75 12.5C5.75 14.0188 6.98122 15.25 8.5 15.25ZM11.25 16.75H8.5C6.98122 16.75 5.75 17.9812 5.75 19.5C5.75 21.0188 6.98122 22.25 8.5 22.25C10.0188 22.25 11.25 21.0188 11.25 19.5V16.75ZM18.25 5.5C18.25 7.01878 17.0188 8.25 15.5 8.25H12.75V2.75H15.5C17.0188 2.75 18.25 3.98122 18.25 5.5ZM15.5 9.75C13.9812 9.75 12.75 10.9812 12.75 12.5C12.75 14.0188 13.9812 15.25 15.5 15.25C17.0188 15.25 18.25 14.0188 18.25 12.5C18.25 10.9812 17.0188 9.75 15.5 9.75ZM8.5 8.25H11.25V2.75H8.5C6.98122 2.75 5.75 3.98122 5.75 5.5C5.75 7.01878 6.98122 8.25 8.5 8.25Z"
                  />
                </svg>
              </Icon>
            }
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
