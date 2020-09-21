import Badge from '@pluralsight/ps-design-system-badge'
import { EqualColumnLayout } from '@pluralsight/ps-design-system-layout'
import Theme, { useTheme } from '@pluralsight/ps-design-system-theme'
import cx from 'classnames'
import React, { Fragment } from 'react'

import * as styles from './guidelines.module.css'

interface GuidelineProps {
  columnCount: 1 | 2 | 3 | 4 | 6
  do: React.ReactNode
  doStyle: Record<string, unknown>
  dont: React.ReactNode
  dontStyle: Record<string, unknown>
}
export const Guidelines: React.FC<GuidelineProps> = props => {
  const themeName = useTheme()
  const isSingleCol = props.columnCount === 1

  const Layout = isSingleCol
    ? layoutProps => <Fragment {...layoutProps} />
    : layoutProps => {
        return (
          <EqualColumnLayout
            count={numToLayoutCount(props.columnCount)}
            {...layoutProps}
          />
        )
      }

  const boxClassName = cx({
    [styles.box]: true,
    [styles.dark]: themeName === Theme.names.dark,
    [styles.light]: themeName === Theme.names.light,
    [styles.vertical]: isSingleCol
  })

  return (
    <Layout className={styles.guidelines}>
      <div className={boxClassName} style={props.doStyle}>
        {props.do}

        <div className={styles.badgeWrapper}>
          <Badge color={Badge.colors.green} className={styles.badge}>
            Do
          </Badge>
        </div>
      </div>

      <div className={boxClassName} style={props.dontStyle}>
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

Guidelines.defaultProps = {
  columnCount: 2
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
