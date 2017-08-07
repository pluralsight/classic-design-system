import core from '@pluralsight/ps-design-system-core'
import glamorous from 'glamorous'
import React from 'react'

const P = glamorous.p({
  color: core.colors.bone,
  fontSize: core.type.fontSizeSmall,
  margin: `${core.type.spacingSmall} 0`,
  lineHeight: core.type.lineHeightStandard
})

export default props => <P {...props} className={`${props.className}`} />
