import Icon from '@pluralsight/ps-design-system-icon/react'
import React from 'react'
import styleable from 'react-styleable'

import { Code, Example, Heading, Link, P } from '../../common/components'
import css from './common-set.module.css'

export default styleable(css)(props => {
  return (
    <div>
      <Heading size="large">
        <h2>Common icon set</h2>
      </Heading>
      <P>
        Current icon set.{' '}
        <Link href="https://github.com/pluralsight/design-system/issues)">
          Submit new icons through Github
        </Link>.
      </P>
      <div className={props.css.icons}>
        {Object.keys(Icon.ids).map((id, i) =>
          <div className={props.css.icon} key={i}>
            <Icon id={id} size="medium" />
            <div className={props.css.iconLabel}>{id}</div>
          </div>
        )}
      </div>
    </div>
  )
})
