import React from 'react'

import { Box } from '../box'
import * as styles from './font-weight.module.css'

const weights = [
  {
    label: 'BLACK',
    weight: 900,
    varName: 'psTypeFontWeightBlack',
    jsVarName: 'type.fontWeightBlack'
  },
  {
    label: 'EXTRABOLD',
    weight: 800,
    varName: 'psTypeFontWeightXBold',
    jsVarName: 'type.fontWeightXBold'
  },
  {
    label: 'BOLD',
    weight: 700,
    varName: 'psTypeFontWeightBold',
    jsVarName: 'type.fontWeightBold'
  },
  {
    label: 'DEMIBOLD',
    weight: 600,
    varName: 'psTypeFontWeightDemiBold',
    jsVarName: 'type.fontWeightDemiBold'
  },
  {
    label: 'MEDIUM',
    weight: 500,
    varName: 'psTypeFontWeightMedium',
    jsVarName: 'type.fontWeightMedium'
  },
  {
    label: 'REGULAR',
    weight: 400,
    varName: 'psTypeFontWeightRegular',
    jsVarName: 'type.fontWeightRegular'
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
  },
  {
    label: 'THIN',
    weight: 100,
    varName: 'psTypeFontWeightThin',
    jsVarName: 'type.fontWeightThin'
  }
]

export const FontWeight = () => {
  return (
    <Box>
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
