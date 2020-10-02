import Theme, { useTheme } from '@pluralsight/ps-design-system-theme'
import cx from 'classnames'
import React from 'react'

import { Box } from '../box'
import * as styles from './line-height.module.css'

const heights = [
  {
    bgClassName: styles.textBgHuge,
    className: styles.textHuge,
    label: '40px - Huge',
    text: 'Lorem ipsum dolor sit amet, consectetur',
    varName: 'psTypeLineHeightHuge'
  },
  {
    bgClassName: styles.textBgExtra,
    className: styles.textExtra,
    label: '32px - Extra',
    text: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit,',
    varName: 'psTypeLineHeightExtra'
  },
  {
    bgClassName: styles.textBgStandard,
    className: styles.textStandard,
    label: '24px - Standard',
    text:
      'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore',
    varName: 'psTypeLineHeightStandard'
  },
  {
    bgClassName: styles.textBgTight,
    className: styles.textTight,
    label: '20px - Tight',
    text:
      'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis',
    varName: 'psTypeLineHeightTight'
  }
]

export const LineHeight = () => {
  const themeName = useTheme()
  return (
    <Box
      className={cx({
        [styles.lineHeights]: true,
        [styles.dark]: themeName === Theme.names.dark,
        [styles.light]: themeName === Theme.names.light
      })}
    >
      {heights.map((height, i) => (
        <div className={styles.lineHeight} key={i}>
          <div className={`${styles.text} ${height.className}`}>
            <div className={`${styles.textBg} ${height.bgClassName}`} />
            <div className={styles.textInner}>{height.text}</div>
          </div>
          <div className={styles.label}>{height.label}</div>
          <code className={styles.varName}>{height.varName}</code>
        </div>
      ))}
    </Box>
  )
}
