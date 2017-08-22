import core from '@pluralsight/ps-design-system-core'
import * as glamor from 'glamor'
import { Heading } from '@pluralsight/ps-design-system-text/react'

const styleSize = ({ size }) =>
  ({
    large: {
      margin: '56px 0 0 0'
    },
    xxLarge: {
      margin: '56px 0'
    }
  }[size])

const style = props =>
  glamor.css(
    {
      color: core.colors.gray06
    },
    styleSize(props)
  )

export default props =>
  <Heading {...props} {...style(props)}>
    {props.children}
  </Heading>
