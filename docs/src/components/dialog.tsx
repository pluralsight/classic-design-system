import React from 'react'

import * as styles from './dialog.module.css'

interface ModalGuidelineExampleProps {
  style: Record<string, unknown>
}
export const ModalGuidelineExample: React.FC<ModalGuidelineExampleProps> = props => (
  <div className={styles.example} style={props.style}>
    <ContentGridVisual />
    {props.children}
  </div>
)

const ContentGridVisual = _ => (
  <div className={styles.grid}>
    <div className={`${styles.box} ${styles.top}`} />
    <div className={`${styles.box} ${styles.hero}`} />
    <div className={`${styles.box} ${styles.body}`} />
    <div className={`${styles.box} ${styles.side}`} />
  </div>
)
