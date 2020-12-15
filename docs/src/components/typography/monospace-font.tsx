import cx from 'classnames'
import React from 'react'

import { Box } from '../box'
import * as styles from './monospace-font.module.css'

export const MonospaceGlyphs = () => (
  <Box className={cx(styles.box, styles.glyphs)}>
    <div>A B C D E F G H I J K L M N O P Q R S T U V W X Y Z</div>
    <div>a b c d e f g h i j k l m n o p q r s t u v w x y z</div>
    <div>0 1 2 3 4 5 6 7 8 9</div>
    <div>{`‘ ? ’ “ ! ” ( % ) [ # ] { @ } / & \\ < - + ÷ × = >`}</div>
    <div>® © $ € £ ¥ ¢ : ; , . *</div>
  </Box>
)

export const MonospaceFontWeight = () => (
  <Box className={cx(styles.box, styles.fontWeight)}>
    <div className={styles.fontLetter}>Aa</div>
    <div className={styles.fontLabel}>MEDIUM (400)</div>
  </Box>
)
