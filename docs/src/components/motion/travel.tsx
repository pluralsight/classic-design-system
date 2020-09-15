import React from 'react'

import * as styles from './travel.module.css'

export const Travel = () => (
  <div className={styles.travel}>
    <div className={styles.lines}>
      <div className={styles.line} />
      <div className={styles.line} />
      <div className={styles.line} />
      <div className={styles.line} />
      <div className={styles.line} />
      <div className={styles.line} />
      <div className={styles.line} />
    </div>
    <div className={styles.pills}>
      <div className={`${styles.pill} ${styles.pill1}`} />
      <div className={styles.pill2Container}>
        <div className={`${styles.pill} ${styles.pill2}`} />
      </div>
      <div className={styles.pill3Container}>
        <div className={`${styles.pill} ${styles.pill3}`} />
      </div>
    </div>
  </div>
)
