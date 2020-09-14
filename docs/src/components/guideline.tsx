import Badge from '@pluralsight/ps-design-system-badge'
import { EqualColumnLayout } from '@pluralsight/ps-design-system-layout'
import * as React from 'react'

import * as styles from './guideline.module.css'

interface GuidelineProps {
  columnCount: 1 | 2 | 3 | 4 | 6
  do: React.ReactNode
  doStyle: object
  dont: React.ReactNode
  dontStyle: object
}
export const Guideline: React.FC<GuidelineProps> = (props) => {
  const isSingleCol = props.columnCount === 1

  const Layout = isSingleCol
    ? (layoutProps) => <Fragment {...layoutProps} />
    : (layoutProps) => {
        return (
          <EqualColumnLayout
            count={numToLayoutCount(props.columnCount)}
            {...layoutProps}
          />
        )
      }

  return (
    <Layout>
      <div
        className={`${styles.box} ${
          isSingleCol ? styles['box--vertical'] : ''
        }`}
        style={props.doStyle}
      >
        {props.do}

        <div className={styles.badgeWrapper}>
          <Badge color={Badge.colors.green} className={styles.badge}>
            Do
          </Badge>
        </div>
      </div>

      <div
        className={`${styles.box} ${
          isSingleCol ? styles['box--vertical'] : ''
        }`}
        style={props.dontStyle}
      >
        {props.dont}

        <div className={styles.badgeWrapper}>
          <Badge color={Badge.colors.red} className={styles.badge}>
            Don't
          </Badge>
        </div>
      </div>
    </Layout>
  )
}
Guideline.defaultProps = {
  columnCount: 2,
}

function numToLayoutCount(num: number) {
  switch (num) {
    case 2:
      return EqualColumnLayout.counts.two
    case 3:
      return EqualColumnLayout.counts.three
    case 4:
      return EqualColumnLayout.counts.four
    case 6:
      return EqualColumnLayout.counts.six
    default:
      return null
  }
}
