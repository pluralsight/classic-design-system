import React from 'react'

import { Box } from '../box'
import * as styles from './font-family.module.css'

export const FontFamily = () => (
  <Box className={styles.family}>
    <div>ABCDEFGHIJKLMNOPQRSTUVWXYZ</div>
    <div>abcdefghijklmnopqrstuvwxyz</div>
    <div>0123456789</div>
    <div>{`‘?’“!”(%)[#]{@}/&\<-+÷×=>`}</div>
    <div>®©$€£¥¢:;,.*•</div>
  </Box>
)
