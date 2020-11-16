import { HTMLPropsFor } from '@pluralsight/ps-design-system-util'
import { css } from 'glamor'
import React, { Children, isValidElement } from 'react'

import stylesheet from '../css'

const styles = {
  layout: () => css(stylesheet['.psds-form-vertical-layout']),
  child: () => css(stylesheet['.psds-form-vertical-layout__child'])
}

const VerticalLayout: React.FC<HTMLPropsFor<'div'>> = ({ style, ...props }) => {
  const children = Children.toArray(props.children).filter(child =>
    isValidElement(child)
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
