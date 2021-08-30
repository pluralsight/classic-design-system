import Avatar from '@pluralsight/ps-design-system-avatar'
import Button from '@pluralsight/ps-design-system-button'
import React from 'react'

import styles from './App.css'

export default function App() {
  return (
    <div>
      <h2 className={styles.header}>Styled with CSS</h2>
      <p>Requires bundling, loader config for css</p>
      <Avatar name="Jake Trent" />
      <h2>Styled with CSS-in-JS</h2>
      <p>No css config required</p>
      <Button>Button that has CSS in JS</Button>
    </div>
  )
}
