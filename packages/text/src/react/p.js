import classNames from 'classnames'
import core from '@pluralsight/ps-design-system-core'
import * as glamor from 'glamor'
import React from 'react'

const formatClassname = props =>
  classNames({
    [glamor.css({
      color: core.colors.bone,
      fontSize: core.type.fontSizeSmall,
      margin: `${core.type.spacingSmall} 0`,
      lineHeight: core.type.lineHeightStandard
    })]: true,
    [props.className]: props.className
  })

export default props => <p {...props} className={formatClassname(props)} />
