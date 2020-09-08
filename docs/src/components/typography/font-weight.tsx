import React from 'react'

import * as styles from './font-weight.module.css'

const weights = [
  { label: 'BOLD', weight: 700, varName: 'psTypeFontWeightBold' },
  { label: 'MEDIUM', weight: 500, varName: '…ypeFontWeightMedium' },
  { label: 'BOOK', weight: 400, varName: 'psTypeFontWeightBook' },
  { label: 'LIGHT', weight: 300, varName: 'psTypeFontWeightLight' },
  { label: 'EXTRA LIGHT', weight: 200, varName: '…ypeFontWeightXLight' },
]

export const FontWeight = () => (
  <div>
    <div className={styles.weights}>
      {weights.map((w, i) => (
        <div className={styles.weight} key={i}>
          <div className={styles.box}>
            <div
              style={{ fontWeight: w.weight }}
              className={styles.weightLetters}
            >
              Aa
            </div>
            <div className={styles.weightLabel}>
              {w.label} ({w.weight})
            </div>
          </div>
          <code className={styles.weightVar}>{w.varName}</code>
        </div>
      ))}
    </div>
  </div>
)
