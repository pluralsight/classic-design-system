import React from 'react'

import { Box } from '../box'
import * as styles from './font-size.module.css'

const sizes = [
  { label: 'Gigantic', size: '60px', varName: 'psTypeFontSizeGigantic' },
  { label: 'Jumbo', size: '48px', varName: 'psTypeFontSizeJumbo' },
  { label: 'XX-Large', size: '36px', varName: 'psTypeFontSizeXXLarge' },
  { label: 'X-Large', size: '30px', varName: 'psTypeFontSizeXLarge' },
  { label: 'Large', size: '24px', varName: 'psTypeFontSizeLarge' },
  { label: 'Medium', size: '18px', varName: 'psTypeFontSizeMedium' },
  { label: 'Small', size: '14px', varName: 'psTypeFontSizeSmall' },
  { label: 'X-Small', size: '12px', varName: 'psTypeFontSizeXSmall' }
]

export const FontSize = () => (
  <Box className={styles.sizes}>
    {sizes.map((w, i) => (
      <div className={styles.size} key={i}>
        <div style={{ fontSize: w.size }} className={styles.sizeSentence}>
          The quick brown fox jumps over the lazy dog.
        </div>
        <div className={styles.sizeLabel}>
          {w.size} - {w.label}
        </div>
        <code className={styles.sizeVar}>{w.varName}</code>
      </div>
    ))}
  </Box>
)
