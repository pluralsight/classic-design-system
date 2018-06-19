import * as glamor from 'glamor'
import PropTypes from 'prop-types'
import React from 'react'
import { defaultName as themeDefaultName } from '@pluralsight/ps-design-system-theme/react'

import css from '../css'
import * as vars from '../vars'

const styles = {
  layout: _ => glamor.css(css['.psds-form-vertical-layout']),
  child: _ =>
    glamor.css(css['.psds-form-vertical-layout__child'], {
      ':last-child': css['.psds-form-vertical-layout__child:last-child']
    })
}

const VerticalLayout = (props, context) => (
  <div {...styles.layout(props)}>
    {React.Children.map(props.children, (child, i) => (
      <div {...styles.child(props)}>
        {React.cloneElement(child, {
          style: { ...child.props.style, width: '100%' }
        })}
      </div>
    ))}
  </div>
)
VerticalLayout.displayName = 'VerticalLayout'

export default VerticalLayout
