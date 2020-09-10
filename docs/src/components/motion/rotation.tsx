import React from 'react'

import * as styles from './rotation.module.css'

export const Rotation = () => (
  <div className={styles.rotation}>
    <div className={`${styles.box} ${styles.boxLarge}`} />
    <div className={`${styles.box} ${styles.boxSmall}`} />
  </div>
)
