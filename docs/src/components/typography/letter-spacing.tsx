import React from 'react'

import { Box } from '../box'
import * as styles from './letter-spacing.module.css'

const letterSpacings = [
  {
    label: 'Tighter',
    value: '-0.025em',
    varNameCSS: 'psTypeLetterSpacingTighter',
    varNameJS: 'type.letterSpacingTighter'
  },
  {
    label: 'Tight',
    value: '-0.01em',
    varNameCSS: 'psTypeLetterSpacingTight',
    varNameJS: 'type.letterSpacingTight'
  },
  {
    label: 'None',
    value: '0',
    varNameCSS: 'psTypeLetterSpacingNone',
    varNameJS: 'type.letterSpacingNone'
  },
  {
    label: 'Loose',
    value: '0.01em',
    varNameCSS: 'psTypeLetterSpacingLoose',
    varNameJS: 'type.letterSpacingLoose'
  },
  {
    label: 'Looser',
    value: '0.025em',
    varNameCSS: 'psTypeLetterSpacingLooser',
    varNameJS: 'type.letterSpacingLooser'
  },
  {
    label: 'All Caps',
    value: '0.08em',
    varNameCSS: 'psTypeLetterSpacingAllCaps',
    varNameJS: 'type.letterSpacingAllCaps',
    textTransform: 'uppercase'
  }
]

export const LetterSpacing = () => (
  <Box className={styles.letterSpacing}>
    {letterSpacings.map((w, i) => (
      <div className={styles.letterSpacing} key={i}>
        <div
          style={{ letterSpacing: w.value, textTransform: w.textTransform }}
          className={styles.sentence}
        >
          Antidisestablishmentarianism
        </div>
        <div className={styles.label}>
          {w.label} ({w.value})
        </div>
        <div className={styles.labels}>
          <div>
            CSS: <code className={styles.variable}>{w.varNameCSS}</code>
          </div>
          <div>
            JS: <code className={styles.variable}>{w.varNameJS}</code>
          </div>
        </div>
      </div>
    ))}
  </Box>
)
