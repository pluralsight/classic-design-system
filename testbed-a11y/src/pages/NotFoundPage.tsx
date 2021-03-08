import { FC } from 'react'
import { NotFoundErrorPage } from '@pluralsight/ps-design-system-errors'

import styles from './NotFoundPage.module.css'

export const NotFoundPage: FC = props => {
  return (
    <div className={styles.page} {...props}>
      <NotFoundErrorPage size="large" />
    </div>
  )
}
