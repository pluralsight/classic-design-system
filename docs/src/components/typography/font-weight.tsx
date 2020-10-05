import Theme, { useTheme } from '@pluralsight/ps-design-system-theme'
import cx from 'classnames'
import React from 'react'

import { Box } from '../box'
import * as styles from './font-weight.module.css'

const weights = [
  {
    label: 'BOLD',
    weight: 700,
    varName: 'psTypeFontWeightBold',
    jsVarName: 'type.fontWeightBold'
  },
  {
    label: 'MEDIUM',
    weight: 500,
    varName: 'psTypeFontWeightMedium',
    jsVarName: 'type.fontWeightMedium'
  },
  {
    label: 'BOOK',
    weight: 400,
    varName: 'psTypeFontWeightBook',
    jsVarName: 'type.fontWeightBook'
  },
  {
    label: 'LIGHT',
    weight: 300,
    varName: 'psTypeFontWeightLight',
    jsVarName: 'type.fontWeightLight'
  },
  {
    label: 'EXTRA LIGHT',
    weight: 200,
    varName: 'psTypeFontWeightXLight',
    jsVarName: 'type.fontWeightXLight'
  }
]

export const FontWeight = () => {
  const themeName = useTheme()
  return (
    <Box
      className={cx({
        [styles.dark]: themeName === Theme.names.dark,
        [styles.light]: themeName === Theme.names.light
      })}
    >
      {weights.map((w, i) => (
        <div className={styles.weight} key={i}>
          <div
            style={{ fontWeight: w.weight }}
            className={styles.weightLetters}
          >
            Aa
          </div>
          <div className={styles.weightLabel}>
            {w.label} ({w.weight})
          </div>
          <div className={styles.labels}>
            <div>
              JS: <code>{w.jsVarName}</code>
            </div>
            <div>
              CSS: <code>{w.varName}</code>
            </div>
          </div>
        </div>
      ))}
    </Box>
  )
}
