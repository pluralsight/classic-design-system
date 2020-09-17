import React from 'react'

import * as styles from './monospace-font.module.css'

export const MonospaceGlyphs = () => (
  <div className={`${styles.box} ${styles.glyphs}`}>
    <div>A B C D E F G H I J K L M N O P Q R S T U V W X Y Z</div>
    <div>a b c d e f g h i j k l m n o p q r s t u v w x y z</div>
    <div>0 1 2 3 4 5 6 7 8 9</div>
    <div>{`‘ ? ’ “ ! ” ( % ) [ # ] { @ } / & \\ < - + ÷ × = >`}</div>
    <div>® © $ € £ ¥ ¢ : ; , . *</div>
  </div>
)

export const MonospaceFontWeight = () => (
  <div className={`${styles.box} ${styles.fontWeight}`}>
    <div className={styles.fontLetter}>Aa</div>
    <div className={styles.fontLabel}>MEDIUM (500)</div>
  </div>
)
