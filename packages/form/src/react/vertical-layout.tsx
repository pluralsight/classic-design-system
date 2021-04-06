import { HTMLPropsFor } from '@pluralsight/ps-design-system-util'
import glamorDefault, * as glamorExports from 'glamor'
import React from 'react'

import stylesheet from '../css/index'

const glamor = glamorDefault || glamorExports

const styles = {
  layout: () => glamor.css(stylesheet['.psds-form-vertical-layout']),
  child: () => glamor.css(stylesheet['.psds-form-vertical-layout__child'])
}

const VerticalLayout: React.FC<HTMLPropsFor<'div'>> = ({ style, ...props }) => {
  const children = React.Children.toArray(props.children).filter(child =>
    React.isValidElement(child)
  )

  return (
    <div {...styles.layout()}>
      {children.map((child, i) => (
        <div key={i} {...styles.child()}>
          {React.cloneElement(child as React.ReactElement, {
            style: { ...style, width: '100%', maxWidth: 'none' }
          })}
        </div>
      ))}
    </div>
  )
}

VerticalLayout.displayName = 'VerticalLayout'

export default VerticalLayout
