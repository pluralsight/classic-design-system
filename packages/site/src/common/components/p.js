import core from '@pluralsight/ps-design-system-core'
import * as glamor from 'glamor'
import { P } from '@pluralsight/ps-design-system-text/react'
import React from 'react'

const style = props =>
  glamor.css({
    color: core.colors.gray04
  })

export default props => <P className={style(props)}>{props.children}</P>
