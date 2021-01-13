import React from 'react'

import { Box } from '../box'
import * as styles from './font-weight.module.css'

const weights = [
  {
    label: 'Default (400)',
    weight: 400,
    varName: 'psTypeFontWeightDefault',
    jsVarName: 'type.fontWeightDefault'
  },
  {
    label: 'Strong (600)',
    weight: 600,
    varName: 'psTypeFontWeightStrong',
    jsVarName: 'type.fontWeightStrong'
  },
  {
    label: '900',
    weight: 900,
    varName: 'psTypeFontWeight900',
    jsVarName: 'type.fontWeight900'
  },
  {
    label: '800',
    weight: 800,
    varName: 'psTypeFontWeight800',
    jsVarName: 'type.fontWeight800'
  },
  {
    label: '700',
    weight: 700,
    varName: 'psTypeFontWeight700',
    jsVarName: 'type.fontWeight700'
  },
  {
    label: '600',
    weight: 600,
    varName: 'psTypeFontWeight600',
    jsVarName: 'type.fontWeight600'
  },
  {
    label: '500',
    weight: 500,
    varName: 'psTypeFontWeight500',
    jsVarName: 'type.fontWeight500'
  },
  {
    label: '400',
    weight: 400,
    varName: 'psTypeFontWeight400',
    jsVarName: 'type.fontWeight400'
  },
  {
    label: '300',
    weight: 300,
    varName: 'psTypeFontWeight300',
    jsVarName: 'type.fontWeight300'
  },
  {
    label: '200',
    weight: 200,
    varName: 'psTypeFontWeight200',
    jsVarName: 'type.fontWeight200'
  },
  {
    label: '100',
    weight: 100,
    varName: 'psTypeFontWeight100',
    jsVarName: 'type.fontWeight100'
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
          <div className={styles.weightLabel}>{w.label}</div>
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
