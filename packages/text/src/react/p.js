import core from '@pluralsight/ps-design-system-core'
import * as glamor from 'glamor'
import React from 'react'

const styles = glamor.css({
  color: core.colors.bone,
  fontSize: core.type.fontSizeSmall,
  margin: `${core.type.spacingSmall} 0`,
  lineHeight: core.type.lineHeightStandard
})

export default props => <p {...props} {...styles}>{props.children}</p>
