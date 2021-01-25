import React from 'react'

import { Box } from '../box'
import * as styles from './font-size.module.css'

const sizes = [
  {
    label: 'base',
    size: '16px',
    varNameCSS: 'psTypeFontSizeBase',
    varNameJS: 'type.fontSizeBase'
  },
  {
    label: '900',
    size: '40px',
    varNameCSS: 'psTypeFontSize900',
    varNameJS: 'type.fontSize900'
  },
  {
    label: '800',
    size: '34px',
    varNameCSS: 'psTypeFontSize800',
    varNameJS: 'type.fontSize800'
  },
  {
    label: '700',
    size: '28px',
    varNameCSS: 'psTypeFontSize700',
    varNameJS: 'type.fontSize700'
  },
  {
    label: '600',
    size: '24px',
    varNameCSS: 'psTypeFontSize600',
    varNameJS: 'type.fontSize600'
  },
  {
    label: '500',
    size: '20px',
    varNameCSS: 'psTypeFontSize500',
    varNameJS: 'type.fontSize500'
  },
  {
    label: '400',
    size: '18px',
    varNameCSS: 'psTypeFontSize400',
    varNameJS: 'type.fontSize400'
  },
  {
    label: '300',
    size: '16px',
    varNameCSS: 'psTypeFontSize300',
    varNameJS: 'type.fontSize300'
  },
  {
    label: '200',
    size: '14px',
    varNameCSS: 'psTypeFontSize200',
    varNameJS: 'type.fontSize200'
  },
  {
    label: '100',
    size: '12px',
    varNameCSS: 'psTypeFontSize100',
    varNameJS: 'type.fontSize100'
  }
]

export const FontSize = () => (
  <Box className={styles.sizes}>
    {sizes.map((w, i) => (
      <div className={styles.size} key={i}>
        <div style={{ fontSize: w.size }} className={styles.sizeSentence}>
          The quick brown fox jumps over the lazy dog.
        </div>
        <div className={styles.sizeLabel}>
          {w.label} ({w.size})
        </div>
        <div>
          CSS: <code className={styles.variable}>{w.varNameCSS}</code>
        </div>
        <div>
          JS: <code className={styles.variable}>{w.varNameJS}</code>
        </div>
      </div>
    ))}
  </Box>
)
