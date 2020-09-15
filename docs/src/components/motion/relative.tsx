import React from 'react'

import * as styles from './relative.module.css'

import img from './motionSpeedScale.png'
import img2x from './motionSpeedScale@2x.png'

export const Relative = () => (
  <div className={styles.relative}>
    <img
      alt="Use slower animations for larger objects or longer distances."
      srcSet={`${img},
              ${img2x} 1.5x`}
      src={img}
    />
  </div>
)
