import { motion } from '@pluralsight/ps-design-system-core'
import React from 'react'

import * as styles from './speeds.module.css'

const capitalize = (str: string) => str.charAt(0).toUpperCase() + str.slice(1)

const speeds = Object.keys(motion)
  .filter(key => /^speed/.test(key))
  .map(key => ({ jsVarName: key, time: motion[key] }))
  .reverse()
  .map((speed, i) => ({
    ...speed,
    varName: 'psMotion' + capitalize(speed.jsVarName),
    title: ['Extra Slow', 'Slow', 'Normal', 'Fast', 'Extra Fast'][i],
    icon: ['🐌', '🐢', '🐐', '🐇', '🐆'][i]
  }))

export const Speeds = () => (
  <div className={styles.speeds}>
    {speeds.map((speed, i) => (
      <div className={styles.speed} key={i}>
        <div className={styles.icon}>{speed.icon}</div>
        <div className={styles.labels}>
          <div className={styles.title}>{speed.title}</div>
          <div className={styles.time}>{speed.time}</div>
        </div>
        <div className={styles.vars}>
          <div>
            JS: <code>motion.{speed.jsVarName}</code>
          </div>
          <div>
            CSS: <code>{speed.varName}</code>
          </div>
        </div>
      </div>
    ))}
  </div>
)
